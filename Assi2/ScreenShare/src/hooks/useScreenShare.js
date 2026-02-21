import { useCallback, useEffect, useRef, useState } from "react";

const INITIAL_METADATA = {
  displaySurface: "unknown",
  resolution: "unknown",
};

export default function useScreenShare() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [metadata, setMetadata] = useState(INITIAL_METADATA);
  const [isSupported, setIsSupported] = useState(true);
  const [hasStopped, setHasStopped] = useState(false);

  const streamRef = useRef(null);
  const trackRef = useRef(null);

  const clearVideoElement = useCallback((videoElement) => {
    if (!videoElement) {
      return;
    }
    videoElement.srcObject = null;
  }, []);

  const cleanup = useCallback(
    (videoElement) => {
      if (trackRef.current) {
        trackRef.current.onended = null;
      }

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      streamRef.current = null;
      trackRef.current = null;
      clearVideoElement(videoElement);
    },
    [clearVideoElement],
  );

  const handleStreamStopped = useCallback(
    (videoElement) => {
      cleanup(videoElement);
      setStatus("stopped");
      setHasStopped(true);
    },
    [cleanup],
  );

  const startScreenShare = useCallback(
    async (videoElement) => {
      setErrorMessage("");
      setHasStopped(false);
      setMetadata(INITIAL_METADATA);

      const supported =
        typeof navigator !== "undefined" &&
        !!navigator.mediaDevices &&
        typeof navigator.mediaDevices.getDisplayMedia === "function";

      if (!supported) {
        setIsSupported(false);
        setStatus("unsupported");
        setErrorMessage(
          "Screen sharing is not supported in this browser. Please use Chrome or Edge on desktop.",
        );
        return;
      }

      setIsSupported(true);
      cleanup(videoElement);
      setStatus("requesting");

      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: { frameRate: { ideal: 30 } },
          audio: false,
        });

        const [videoTrack] = stream.getVideoTracks();
        if (!videoTrack) {
          throw new Error("No video track returned");
        }

        const settings = videoTrack.getSettings();
        const width = settings.width ?? null;
        const height = settings.height ?? null;

        streamRef.current = stream;
        trackRef.current = videoTrack;

        videoTrack.onended = () => {
          handleStreamStopped(videoElement);
        };

        if (videoElement) {
          videoElement.srcObject = stream;
          await videoElement.play().catch(() => {});
        }

        setMetadata({
          displaySurface: settings.displaySurface || "unknown",
          resolution: width && height ? `${width} x ${height}` : "unknown",
        });

        setStatus("granted");
      } catch (error) {
        const errorName = error?.name || "UnknownError";

        if (
          errorName === "NotAllowedError" ||
          errorName === "PermissionDeniedError"
        ) {
          setStatus("denied");
          setErrorMessage("Permission denied by browser settings or policy.");
        } else if (errorName === "AbortError") {
          setStatus("cancelled");
          setErrorMessage(
            "Screen picker was closed before selecting a source.",
          );
        } else {
          setStatus("unknown");
          setErrorMessage(
            error?.message || "An unknown error occurred while sharing screen.",
          );
        }

        cleanup(videoElement);
      }
    },
    [cleanup, handleStreamStopped],
  );

  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  return {
    status,
    errorMessage,
    metadata,
    isSupported,
    hasStopped,
    startScreenShare,
    stopScreenShare: handleStreamStopped,
    cleanup,
  };
}

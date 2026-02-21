import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Homepage() {
  const [checkingSupport, setCheckingSupport] = useState(false);
  const [unsupportedMessage, setUnsupportedMessage] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    setCheckingSupport(true);
    setUnsupportedMessage("");

    const supported =
      typeof navigator !== "undefined" &&
      !!navigator.mediaDevices &&
      typeof navigator.mediaDevices.getDisplayMedia === "function";

    if (!supported) {
      setUnsupportedMessage(
        "Screen sharing is not supported in this browser. Please use Chrome or Edge on desktop.",
      );
      setCheckingSupport(false);
      return;
    }

    setCheckingSupport(false);
    navigate("/screen-test");
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-4 py-10">
      <div className="w-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Screen Share Test App
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Validate browser screen-sharing permissions and lifecycle behavior.
        </p>

        <div className="mt-6">
          <Button onClick={handleStart} disabled={checkingSupport}>
            {checkingSupport ? "Checking support..." : "Start Screen Test"}
          </Button>
        </div>

        {unsupportedMessage ? (
          <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
            {unsupportedMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}

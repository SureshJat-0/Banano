import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useScreenShare from '../hooks/useScreenShare'
import Button from './Button'

const STATUS_LABELS = {
  idle: 'Ready to request screen-sharing permission.',
  requesting: 'Requesting permission...',
  granted: 'Permission granted and stream active.',
  cancelled: 'User cancelled screen picker.',
  denied: 'Permission denied.',
  unknown: 'Unknown error occurred.',
  unsupported: 'Browser unsupported for screen sharing.',
  stopped: 'Screen sharing stopped.',
}

function InfoRow({ label, value }) {
  return (
    <div className='flex flex-col gap-1 rounded-md border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between'>
      <span className='text-sm font-medium text-slate-700'>{label}</span>
      <span className='text-sm text-slate-900'>{value}</span>
    </div>
  )
}

export default function ScreenTest() {
  const videoRef = useRef(null)

  const {
    status,
    errorMessage,
    metadata,
    isSupported,
    hasStopped,
    startScreenShare,
  } = useScreenShare()

  const isRequesting = status === 'requesting'
  const isStreaming = status === 'granted'
  const showRetry = hasStopped || ['cancelled', 'denied', 'unknown', 'unsupported'].includes(status)

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-4xl px-4 py-8 sm:py-10'>
      <div className='w-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <h1 className='text-2xl font-semibold text-slate-900 sm:text-3xl'>Screen Test</h1>
          <Link
            to='/'
            className='rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700'
          >
            Back to Home
          </Link>
        </div>

        <p className='mt-3 text-sm text-slate-600'>{STATUS_LABELS[status]}</p>

        {errorMessage ? (
          <p className='mt-4 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-900'>
            {errorMessage}
          </p>
        ) : null}

        {!isSupported ? (
          <p className='mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900'>
            Screen sharing is unsupported in this browser.
          </p>
        ) : null}

        <div className='mt-5 flex flex-wrap gap-3'>
          <Button onClick={() => startScreenShare(videoRef.current)} disabled={isRequesting}>
            {isRequesting ? 'Opening picker...' : 'Start Screen Share'}
          </Button>

          {showRetry ? (
            <Button
              onClick={() => startScreenShare(videoRef.current)}
              disabled={isRequesting}
              className='bg-slate-700'
            >
              Retry Screen Test
            </Button>
          ) : null}
        </div>

        <div className='mt-6 overflow-hidden rounded-lg border border-slate-200 bg-black'>
          <video
            ref={videoRef}
            className='aspect-video w-full'
            autoPlay
            muted
            playsInline
          />
        </div>

        <div className='mt-4 space-y-3'>
          <InfoRow label='Screen stream active' value={isStreaming ? 'Yes' : 'No'} />
          <InfoRow label='Display type' value={metadata.displaySurface} />
          <InfoRow label='Resolution' value={metadata.resolution} />
        </div>

        {hasStopped ? (
          <div className='mt-5 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800'>
            Screen sharing stopped.
          </div>
        ) : null}
      </div>
    </div>
  )
}

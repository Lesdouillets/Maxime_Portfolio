interface DeviceMockupProps {
  imageSrc?: string
  videoSrc?: string
  label?: string
  className?: string
}

export function DeviceMockup({ imageSrc, videoSrc, label, className = '' }: DeviceMockupProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="relative w-[200px] h-[420px] rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden flex-shrink-0">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
          {videoSrc ? (
            <video src={videoSrc} autoPlay muted loop playsInline className="w-full h-full object-cover" />
          ) : imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageSrc} alt={label ?? ''} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-elevated to-base" />
          )}
        </div>
      </div>
      {label && <p className="text-sm font-medium text-accent-primary tracking-wide">{label}</p>}
    </div>
  )
}

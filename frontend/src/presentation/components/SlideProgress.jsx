import { motion } from 'framer-motion'

export default function SlideProgress({ current, total, onNavigate, currentIndex }) {
  const pct = (current / total) * 100

  return (
    <div
      className="pointer-events-none absolute bottom-[max(1rem,env(safe-area-inset-bottom,0px))] left-0 right-0 z-30 flex select-none justify-center px-3 sm:px-4 md:bottom-8 md:right-9 md:left-auto md:justify-end"
    >
      <div
        className="pointer-events-auto flex items-center gap-3 rounded-full border border-[#1B2A6B]/10 bg-[#EAEAE5]/80 px-3 py-2 shadow-sm backdrop-blur-md sm:gap-4 sm:px-4 sm:py-2.5 md:bg-[#EAEAE5]/90"
      >
        {/* Slide counter — hidden on very small screens */}
        <div className="hidden sm:flex items-baseline gap-1">
          <span className="font-black text-[#1B2A6B] tabular-nums" style={{ fontSize: 13 }}>
            {String(current).padStart(2, '0')}
          </span>
          <span className="text-[#1B2A6B]/25 mx-px" style={{ fontSize: 10 }}>/</span>
          <span className="text-[#1B2A6B]/30 tabular-nums" style={{ fontSize: 10 }}>
            {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Progress bar — hidden on mobile */}
        <div
          className="relative hidden overflow-hidden rounded-full sm:block"
          style={{ width: 60, height: 2.5, background: 'rgba(27,42,107,0.10)' }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: '#1B2A6B' }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Dot navigation */}
        <div className="flex items-center gap-[6px]">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              aria-label={`Slide ${i + 1}`}
              className="flex items-center justify-center transition-transform active:scale-125"
              style={{ width: 16, height: 16 }}
            >
              <motion.span
                className="block rounded-full"
                animate={{
                  width: i === currentIndex ? 8 : 5,
                  height: i === currentIndex ? 8 : 5,
                  background: i === currentIndex ? '#1B2A6B' : 'rgba(27,42,107,0.22)',
                }}
                transition={{ duration: 0.25 }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

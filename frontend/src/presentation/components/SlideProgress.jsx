import { motion } from 'framer-motion'

export default function SlideProgress({ current, total, onNavigate, currentIndex }) {
  const pct = (current / total) * 100

  return (
    <div className="absolute bottom-8 right-9 z-30 flex items-center gap-5 select-none">

      {/* Slide counter */}
      <div className="flex items-baseline gap-1">
        <span
          className="font-black text-[#1B2A6B] tabular-nums"
          style={{ fontSize: 15 }}
        >
          {String(current).padStart(2, '0')}
        </span>
        <span className="text-[#1B2A6B]/25 mx-px" style={{ fontSize: 11 }}>/</span>
        <span className="text-[#1B2A6B]/30 tabular-nums" style={{ fontSize: 11 }}>
          {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{ width: 80, height: 2.5, background: 'rgba(27,42,107,0.10)' }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: '#1B2A6B' }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Dot navigation */}
      <div className="flex gap-[7px] items-center">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            aria-label={`Slide ${i + 1}`}
            className="flex items-center justify-center transition-transform hover:scale-125"
            style={{ width: 14, height: 14 }}
          >
            <motion.span
              className="rounded-full block"
              animate={{
                width:  i === currentIndex ? 8 : 5,
                height: i === currentIndex ? 8 : 5,
                background: i === currentIndex ? '#1B2A6B' : 'rgba(27,42,107,0.20)',
              }}
              transition={{ duration: 0.25 }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

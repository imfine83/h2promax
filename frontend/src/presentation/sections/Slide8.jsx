import { motion } from 'framer-motion'
import { SplitImageSlide } from './ImageSlide'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.78, delay: d, ease: [0.16, 1, 0.3, 1] },
})

function StatusRow({ active }) {
  return (
    <div className="flex items-center gap-4 py-3 px-4 rounded-xl"
      style={{ background: active ? 'rgba(34,167,86,0.08)' : 'rgba(27,42,107,0.04)' }}>
      {/* ON/OFF pill */}
      <div className={`px-3 py-1 rounded-lg text-xs font-bold shrink-0 ${
        active
          ? 'bg-[#22A756]/20 text-[#22A756]'
          : 'bg-[#1B2A6B]/8 text-[#1B2A6B]/30'
      }`} style={{ background: active ? 'rgba(34,167,86,0.18)' : 'rgba(27,42,107,0.07)' }}>
        {active ? 'ENGINE ON' : 'ENGINE OFF'}
      </div>

      {/* Connecting dots */}
      <div className="flex-1 flex items-center gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex-1 h-0.5 rounded-full"
            style={{ background: active ? '#22A756' : 'rgba(27,42,107,0.12)' }}/>
        ))}
      </div>

      {/* H₂ indicator */}
      <div className={`shrink-0 px-3 py-1.5 rounded-lg border-2 text-center ${
        active ? 'border-[#1B2A6B]' : 'border-[#1B2A6B]/15'
      }`}>
        <div className={`font-black text-sm leading-none ${active ? 'text-[#1B2A6B]' : 'text-[#1B2A6B]/20'}`}>
          H<sub className="text-[10px]">₂</sub>
        </div>
        <div className={`font-bold text-[9px] mt-0.5 ${active ? 'text-[#22A756]' : 'text-[#1B2A6B]/20'}`}>
          {active ? 'ACTIVE' : 'IDLE'}
        </div>
      </div>

      {/* No tank icon — only on active row */}
      {active ? (
        <div className="shrink-0 relative" style={{ width: 28, height: 34 }}>
          <svg viewBox="0 0 28 34" fill="none" style={{ width: 28, height: 34 }}>
            <rect x="2" y="5" width="24" height="27" rx="4" stroke="#9CA3AF" strokeWidth="1.5"/>
            <rect x="9" y="1" width="10" height="7" rx="2" stroke="#9CA3AF" strokeWidth="1.5"/>
            <line x1="1" y1="1" x2="27" y2="33" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
            <line x1="27" y1="1" x2="1" y2="33" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      ) : (
        <div style={{ width: 28 }}/>
      )}
    </div>
  )
}

export default function Slide8() {
  return (
    <SplitImageSlide src="/slides/slide_08.png" imageSide="left" bg="#E8E8E2">
      <motion.p {...up(0.05)}
        className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.24em] mb-5"
        style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
      >
        Safety
      </motion.p>

      <motion.h2 {...up(0.12)}
        className="font-black text-[#1B2A6B] leading-[1.1] mb-7"
        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
      >
        Is it safe? Absolutely.<br />Safety is confirmed and<br />engineered into the design.
      </motion.h2>

      <motion.p {...up(0.28)}
        className="text-[#1B2A6B]/55 leading-relaxed mb-8"
        style={{ fontSize: 'clamp(0.9rem, 1.15vw, 1.05rem)', maxWidth: '420px' }}
      >
        The HNO gas is generated on-demand only when the engine is running.
        It is immediately consumed and is{' '}
        <strong className="text-[#1B2A6B]/80 font-semibold">never stored</strong> in the system.
        There is no pressurized tank.
      </motion.p>

      <motion.div {...up(0.42)} className="flex flex-col gap-3">
        <StatusRow active={true} />
        <StatusRow active={false} />
      </motion.div>
    </SplitImageSlide>
  )
}

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'

function useCounter(target, delay = 600, duration = 1600) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let raf
    const start = performance.now() + delay
    const tick = (now) => {
      const elapsed = Math.max(0, now - start)
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, delay, duration])
  return val
}

const statValues = [
  {
    value: 65,
    color: '#22A756',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" style={{ width: 48, height: 48 }}>
        <path d="M10 13 L10 40 Q10 46 16 46 L26 46 Q32 46 32 40 L32 13 Q32 7 26 7 L16 7 Q10 7 10 13Z"
          stroke="#1B2A6B" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <rect x="16" y="14" width="10" height="9" rx="2" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.08)"/>
        <path d="M32 17 L39 17 L39 25 Q39 30 34 30" stroke="#1B2A6B" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="34" cy="31" r="3.5" stroke="#1B2A6B" strokeWidth="2" fill="none"/>
        <path d="M21 41 L21 49 M16.5 45.5 L21 50 L25.5 45.5" stroke="#22A756" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: 30,
    color: '#1B2A6B',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" style={{ width: 48, height: 48 }}>
        <rect x="5" y="19" width="34" height="22" rx="4" stroke="#1B2A6B" strokeWidth="2.5" fill="none"/>
        <rect x="13" y="11" width="6" height="12" rx="2" stroke="#1B2A6B" strokeWidth="2"/>
        <rect x="25" y="11" width="6" height="12" rx="2" stroke="#1B2A6B" strokeWidth="2"/>
        <rect x="39" y="25" width="7" height="6" rx="2" stroke="#1B2A6B" strokeWidth="2"/>
        <rect x="-1" y="25" width="7" height="6" rx="2" stroke="#1B2A6B" strokeWidth="2"/>
        <line x1="44" y1="5" x2="44" y2="16" stroke="#22A756" strokeWidth="2.8" strokeLinecap="round"/>
        <line x1="38.5" y1="10.5" x2="49.5" y2="10.5" stroke="#22A756" strokeWidth="2.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: 90,
    color: '#22A756',
    icon: (
      <svg viewBox="0 0 52 52" fill="none" style={{ width: 48, height: 48 }}>
        <path d="M26 6 Q30 14 36 18 Q44 24 44 32 Q44 44 26 46 Q8 44 8 32 Q8 24 16 18 Q22 14 26 6Z"
          stroke="#1B2A6B" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <path d="M17 30 L23 36 L35 22" stroke="#22A756" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function StatCard({ value, color, icon, prefix, label, delay }) {
  const num = useCounter(value, delay * 1000 + 350, 1800)
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center px-1"
      style={{ flex: '1 1 0', minWidth: 0 }}
    >
      <div className="mb-3 scale-[0.78] origin-top md:mb-6 md:scale-100">{icon}</div>
      <div className="w-full h-px mb-3 md:mb-6" style={{ background: 'rgba(27,42,107,0.12)' }}/>
      <p className="text-[#1B2A6B]/45 font-semibold uppercase tracking-widest mb-1 text-[8px] md:text-[11px]">
        {prefix}
      </p>
      <p
        className="font-black leading-none mb-1.5 tabular-nums max-md:text-[clamp(1.55rem,9vw,2.35rem)] md:mb-4 md:text-[clamp(2.2rem,6vw,5.5rem)]"
        style={{ color }}
      >
        {num}<span className="text-[65%]">%</span>
      </p>
      <p className="text-[#1B2A6B]/60 font-medium leading-snug whitespace-pre-line text-[11px] leading-tight md:text-sm md:leading-snug">
        {label}
      </p>
    </motion.div>
  )
}

export default function Slide5() {
  const { t } = useLanguage()
  const s = t.slides.slide5

  return (
    <SlideWrapper>
      <div
        className="w-full h-full flex flex-col items-center justify-center relative z-10 px-4 sm:px-5 md:px-8 pt-[clamp(1.25rem,4vh,4rem)] pb-28 md:pb-[clamp(2rem,6%,4rem)]"
      >

        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-[#1B2A6B] text-center leading-snug mb-6 max-md:px-1 max-md:text-[clamp(1rem,4.2vw,1.2rem)] md:mb-14 md:leading-tight md:text-[clamp(1.3rem,3.2vw,3rem)]"
        >
          {s.headline}
        </motion.h2>

        <div className="flex flex-col gap-7 sm:flex-row sm:gap-6 md:gap-8 w-full items-stretch max-w-[min(100%,20rem)] mx-auto sm:max-w-[960px]">
          {statValues.map((sv, i) => (
            <StatCard
              key={i}
              value={sv.value}
              color={sv.color}
              icon={sv.icon}
              prefix={s.prefix}
              label={s.stats[i].label}
              delay={0.14 + i * 0.14}
            />
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}

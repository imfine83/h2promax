import { motion } from 'framer-motion'
import { SplitImageSlide } from './ImageSlide'
import { useLanguage } from '../../contexts/LanguageContext'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.78, delay: d, ease: [0.16, 1, 0.3, 1] },
})

function StatusRow({ active, engineOn, engineOff, activeLabel, idleLabel }) {
  return (
    <div className="flex items-center gap-2 py-2.5 px-3 rounded-xl max-md:min-w-0 md:gap-4 md:py-3 md:px-4"
      style={{ background: active ? 'rgba(34,167,86,0.08)' : 'rgba(27,42,107,0.04)' }}>
      {/* ON/OFF pill */}
      <div className={`px-3 py-1 rounded-lg text-xs font-bold shrink-0`}
        style={{ background: active ? 'rgba(34,167,86,0.18)' : 'rgba(27,42,107,0.07)',
          color: active ? '#22A756' : 'rgba(27,42,107,0.3)' }}>
        {active ? engineOn : engineOff}
      </div>

      {/* Connecting dots */}
      <div className="flex-1 flex items-center gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex-1 h-0.5 rounded-full"
            style={{ background: active ? '#22A756' : 'rgba(27,42,107,0.12)' }}/>
        ))}
      </div>

      {/* H₂ indicator */}
      <div className={`shrink-0 px-3 py-1.5 rounded-lg border-2 text-center`}
        style={{ borderColor: active ? '#1B2A6B' : 'rgba(27,42,107,0.15)' }}>
        <div className="font-black text-sm leading-none"
          style={{ color: active ? '#1B2A6B' : 'rgba(27,42,107,0.2)' }}>
          H<sub className="text-[10px]">₂</sub>
        </div>
        <div className="font-bold text-[9px] mt-0.5"
          style={{ color: active ? '#22A756' : 'rgba(27,42,107,0.2)' }}>
          {active ? activeLabel : idleLabel}
        </div>
      </div>

      {/* No tank icon */}
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
  const { t } = useLanguage()
  const s = t.slides.slide8

  return (
    <SplitImageSlide src="/slides/slide_08.png" imageSide="left" bg="#E8E8E2" mobileBgHeightPct={86}>
      <motion.p {...up(0.05)}
        className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.24em] mb-5"
        style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
      >
        {s.eyebrow}
      </motion.p>

      <motion.h2 {...up(0.12)}
        className="font-black text-[#1B2A6B] leading-[1.1] mb-6 md:mb-7"
        style={{ fontSize: 'clamp(1.05rem, calc(2.5vmin + 2vw), 2.8rem)' }}
      >
        {s.headline}
      </motion.h2>

      <motion.p {...up(0.28)}
        className="text-[#1B2A6B]/55 leading-relaxed mb-6 md:mb-8"
        style={{ maxWidth: '420px', fontSize: 'clamp(0.78rem, calc(1.1vmin + 0.95vw), 1.05rem)' }}
      >
        {s.body}{' '}
        <strong className="text-[#1B2A6B]/80 font-semibold">{s.bodyBold}</strong>{' '}
        {s.body2}
      </motion.p>

      <motion.div {...up(0.42)} className="flex flex-col gap-3 max-md:w-full max-md:overflow-x-auto max-md:pb-1">
        <StatusRow
          active={true}
          engineOn={s.engineOn}
          engineOff={s.engineOff}
          activeLabel={s.active}
          idleLabel={s.idle}
        />
        <StatusRow
          active={false}
          engineOn={s.engineOn}
          engineOff={s.engineOff}
          activeLabel={s.active}
          idleLabel={s.idle}
        />
      </motion.div>
    </SplitImageSlide>
  )
}

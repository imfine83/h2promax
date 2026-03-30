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
    <div
      className="flex max-lg:gap-1.5 max-lg:rounded-lg max-lg:px-2 max-lg:py-2 max-md:min-w-0 items-center gap-2 rounded-xl px-3 py-2.5 md:gap-4 md:px-4 md:py-3"
      style={{ background: active ? 'rgba(34,167,86,0.08)' : 'rgba(27,42,107,0.04)' }}
    >
      {/* ON/OFF pill */}
      <div
        className="shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-bold max-lg:px-2 max-lg:py-0.5 md:px-3 md:py-1 md:text-xs"
        style={{
          background: active ? 'rgba(34,167,86,0.18)' : 'rgba(27,42,107,0.07)',
          color: active ? '#22A756' : 'rgba(27,42,107,0.3)',
        }}
      >
        {active ? engineOn : engineOff}
      </div>

      {/* Connecting dots — на узком экране короче цепочка */}
      <div className="flex flex-1 items-center gap-0.5 max-lg:min-w-0 md:gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-0.5 flex-1 rounded-full max-lg:flex-1 ${i >= 6 ? 'max-lg:hidden' : ''}`}
            style={{ background: active ? '#22A756' : 'rgba(27,42,107,0.12)' }}
          />
        ))}
      </div>

      {/* H₂ indicator */}
      <div
        className="shrink-0 rounded-lg border-2 px-2 py-1 text-center max-lg:px-2 max-lg:py-1 md:px-3 md:py-1.5"
        style={{ borderColor: active ? '#1B2A6B' : 'rgba(27,42,107,0.15)' }}
      >
        <div
          className="text-xs font-black leading-none max-lg:text-[11px] md:text-sm"
          style={{ color: active ? '#1B2A6B' : 'rgba(27,42,107,0.2)' }}
        >
          H<sub className="text-[9px] max-lg:text-[8px]">₂</sub>
        </div>
        <div
          className="mt-0.5 text-[8px] font-bold max-lg:leading-tight md:text-[9px]"
          style={{ color: active ? '#22A756' : 'rgba(27,42,107,0.2)' }}
        >
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
    <SplitImageSlide
      src="/slides/slide_08.png"
      imageSide="left"
      bg="#E8E8E2"
      phoneStackedHeader={
        <>
          <motion.p
            {...up(0.05)}
            className="mb-2 text-[#1B2A6B]/45 font-bold uppercase tracking-[0.2em]"
            style={{ fontSize: 'clamp(0.58rem, 2.8vw, 0.72rem)' }}
          >
            {s.eyebrow}
          </motion.p>
          <motion.h2
            {...up(0.12)}
            className="max-w-[min(92vw,22rem)] font-black leading-[1.12] text-[#1B2A6B]"
            style={{ fontSize: 'clamp(0.95rem, 4vw, 1.32rem)' }}
          >
            {s.headline}
          </motion.h2>
        </>
      }
    >
      <motion.p {...up(0.05)}
        className="mb-3 text-[#1B2A6B]/45 font-bold uppercase tracking-[0.24em] max-lg:mb-2 max-lg:tracking-[0.18em] max-md:hidden md:mb-5"
        style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
      >
        {s.eyebrow}
      </motion.p>

      <motion.h2 {...up(0.12)}
        className="mb-4 font-black leading-[1.1] text-[#1B2A6B] max-lg:mb-3 max-lg:leading-[1.12] max-lg:[font-size:clamp(0.88rem,3.4vw,1.22rem)] max-md:hidden md:mb-7 lg:[font-size:clamp(1.05rem,calc(2.5vmin+2vw),2.8rem)]"
      >
        {s.headline}
      </motion.h2>

      <motion.p {...up(0.28)}
        className="mb-4 max-w-[420px] text-[#1B2A6B]/55 max-lg:mb-3 max-lg:leading-snug max-lg:[font-size:clamp(0.76rem,2.8vw,0.9rem)] md:mb-8 md:leading-relaxed md:[font-size:clamp(0.78rem,calc(1.1vmin+0.95vw),1.05rem)]"
      >
        {s.body}{' '}
        <strong className="font-semibold text-[#1B2A6B]/80">{s.bodyBold}</strong>{' '}
        {s.body2}
      </motion.p>

      <motion.div {...up(0.42)} className="flex max-md:w-full max-md:overflow-x-auto max-md:pb-1 flex-col gap-2 max-lg:gap-2 md:gap-3">
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

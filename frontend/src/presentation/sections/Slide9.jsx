import { motion } from 'framer-motion'
import { SplitImageSlide } from './ImageSlide'
import { useLanguage } from '../../contexts/LanguageContext'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.78, delay: d, ease: [0.16, 1, 0.3, 1] },
})

export default function Slide9() {
  const { t } = useLanguage()
  const s = t.slides.slide9

  return (
    <SplitImageSlide src="/slides/slide_09.png" imageSide="right" bg="#EAEAE4" mobileBgHeightPct={86}>
      <motion.p {...up(0.0)}
        className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.24em] mb-5"
        style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
      >
        {s.eyebrow}
      </motion.p>

      <motion.h2 {...up(0.08)}
        className="font-black text-[#1B2A6B] leading-[1.1] mb-6 md:mb-7"
        style={{ fontSize: 'clamp(1.05rem, calc(2.5vmin + 2vw), 2.8rem)' }}
      >
        {s.headline}
      </motion.h2>

      <motion.p {...up(0.26)}
        className="text-[#1B2A6B]/55 leading-relaxed mb-6 md:mb-8"
        style={{ maxWidth: '420px', fontSize: 'clamp(0.8rem, calc(1.15vmin + 1vw), 1.1rem)' }}
      >
        {s.body}
      </motion.p>

      {/* Highlight badge */}
      <motion.div {...up(0.44)}
        className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
        style={{ background: 'rgba(34,167,86,0.10)', border: '1px solid rgba(34,167,86,0.25)' }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="8" stroke="#22A756" strokeWidth="1.8"/>
          <polyline points="5,9 8,12 13,5.5" stroke="#22A756" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[#22A756] font-semibold"
          style={{ fontSize: 'clamp(0.82rem, 1vw, 0.9rem)' }}>
          {s.badge}
        </span>
      </motion.div>
    </SplitImageSlide>
  )
}

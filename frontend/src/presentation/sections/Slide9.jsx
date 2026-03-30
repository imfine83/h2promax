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
    <SplitImageSlide src="/slides/slide_09.png" imageSide="right" bg="#EAEAE4">
      <motion.p {...up(0.0)}
        className="mb-3 text-[#1B2A6B]/45 font-bold uppercase tracking-[0.24em] max-lg:mb-2 max-lg:tracking-[0.18em] md:mb-5"
        style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
      >
        {s.eyebrow}
      </motion.p>

      <motion.h2 {...up(0.08)}
        className="mb-4 font-black leading-[1.1] text-[#1B2A6B] max-lg:mb-3 max-lg:leading-[1.12] max-lg:[font-size:clamp(0.88rem,3.4vw,1.22rem)] md:mb-7 lg:[font-size:clamp(1.05rem,calc(2.5vmin+2vw),2.8rem)]"
      >
        {s.headline}
      </motion.h2>

      <motion.p {...up(0.26)}
        className="mb-4 max-w-[420px] text-[#1B2A6B]/55 max-lg:mb-3 max-lg:leading-snug max-lg:[font-size:clamp(0.78rem,2.9vw,0.92rem)] md:mb-8 md:leading-relaxed md:[font-size:clamp(0.8rem,calc(1.15vmin+1vw),1.1rem)]"
      >
        {s.body}
      </motion.p>

      {/* Highlight badge */}
      <motion.div {...up(0.44)}
        className="inline-flex max-lg:gap-2 max-lg:rounded-lg max-lg:px-3 max-lg:py-2 items-center gap-3 rounded-xl px-5 py-3"
        style={{ background: 'rgba(34,167,86,0.10)', border: '1px solid rgba(34,167,86,0.25)' }}
      >
        <svg className="max-lg:h-4 max-lg:w-4 shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="8" stroke="#22A756" strokeWidth="1.8"/>
          <polyline points="5,9 8,12 13,5.5" stroke="#22A756" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="max-lg:text-[0.78rem] max-lg:leading-snug font-semibold leading-snug text-[#22A756] md:text-[clamp(0.82rem,1vw,0.9rem)]">
          {s.badge}
        </span>
      </motion.div>
    </SplitImageSlide>
  )
}

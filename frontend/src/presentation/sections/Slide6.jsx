import { motion } from 'framer-motion'
import { SplitImageSlide } from './ImageSlide'
import { useLanguage } from '../../contexts/LanguageContext'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.78, delay: d, ease: [0.16, 1, 0.3, 1] },
})

export default function Slide6() {
  const { t } = useLanguage()
  const s = t.slides.slide6

  return (
    <SplitImageSlide src="/slides/slide_06.png" imageSide="right" bg="#EAE9E3">
      <motion.p {...up(0.0)}
        className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.24em] mb-5"
        style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
      >
        {s.eyebrow}
      </motion.p>

      <motion.h2 {...up(0.08)}
        className="font-black text-[#1B2A6B] leading-[1.1] mb-9"
        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
      >
        {s.headline}
      </motion.h2>

      <div className="space-y-6">
        {s.bullets.map((b, i) => (
          <motion.div key={b.title} {...up(0.2 + i * 0.14)} className="flex gap-4">
            <span className="shrink-0 mt-0.5 w-5 h-5 rounded-md flex items-center justify-center"
              style={{ background: 'rgba(34,167,86,0.15)', minWidth: 20 }}>
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                <polyline points="1,4.5 4,7.5 10,1" stroke="#22A756" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div>
              <p className="font-bold text-[#1B2A6B] mb-1"
                style={{ fontSize: 'clamp(0.88rem, 1.1vw, 1rem)' }}>
                {b.title}:
              </p>
              <p className="text-[#1B2A6B]/55 leading-relaxed"
                style={{ fontSize: 'clamp(0.84rem, 1.05vw, 0.96rem)' }}>
                {b.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SplitImageSlide>
  )
}

import { motion } from 'framer-motion'
import { SplitImageSlide } from './ImageSlide'
import { useLanguage } from '../../contexts/LanguageContext'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.82, delay: d, ease: [0.16, 1, 0.3, 1] },
})

export default function Slide2() {
  const { t } = useLanguage()
  const s = t.slides.slide2
  const imageSrc = s.image || '/slides/slide_02.png'

  return (
    <SplitImageSlide
      src={imageSrc}
      imageSide="right"
      bg="#ECEAE3"
      mobileLgBgHeightPct={50}
      mobileLgPosRightPct={98}
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
            {...up(0.14)}
            className="max-w-[min(92vw,22rem)] font-black leading-[1.12] text-[#1B2A6B]"
            style={{ fontSize: 'clamp(0.95rem, 4.2vw, 1.35rem)' }}
          >
            {s.headline}
          </motion.h2>
        </>
      }
    >
      <motion.p {...up(0.05)}
        className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.24em] mb-5 max-md:hidden"
        style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
      >
        {s.eyebrow}
      </motion.p>

      <motion.h2 {...up(0.14)}
        className="font-black text-[#1B2A6B] leading-[1.1] mb-6 max-md:hidden md:mb-7"
        style={{ fontSize: 'clamp(1.1rem, calc(2.5vmin + 2.2vw), 3.2rem)' }}
      >
        {s.headline}
      </motion.h2>

      <motion.p {...up(0.32)}
        className="text-[#1B2A6B]/55 leading-relaxed mb-5"
        style={{ maxWidth: '420px', fontSize: 'clamp(0.8rem, calc(1.2vmin + 1vw), 1.1rem)' }}
      >
        {s.body}{' '}
        <strong className="text-[#1B2A6B]/80 font-semibold">50%</strong>{' '}
        {s.body2}
      </motion.p>

      <motion.p {...up(0.48)}
        className="font-semibold text-[#1B2A6B]/75 leading-snug"
        style={{ fontSize: 'clamp(0.8rem, calc(1.1vmin + 0.95vw), 1.1rem)' }}
      >
        {s.tagline}
      </motion.p>
    </SplitImageSlide>
  )
}

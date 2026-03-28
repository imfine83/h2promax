import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'
import { NAVY, GREEN, slideSurfaceStyle, cardPaper } from '../slideVisual'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const accent = [NAVY, GREEN, NAVY, GREEN]

export default function Slide4() {
  const { t } = useLanguage()
  const s = t.slides.slide4

  return (
    <SlideWrapper bg="#E8E8E2">
      <div className="absolute inset-0" style={slideSurfaceStyle} />

      {/* Ghost engine from original artwork — только атмосфера, без текста */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/slides/slide_04.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center 58%',
          opacity: 0.07,
        }}
      />

      <div
        className="relative z-10 w-full h-full flex flex-col overflow-y-auto"
        style={{ padding: 'clamp(1.5rem, 4%, 3rem) clamp(1.5rem, 5%, 4rem)' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-center leading-tight mb-6 md:mb-10"
          style={{ color: NAVY, fontSize: 'clamp(1.15rem, 2.6vw, 2.35rem)' }}
        >
          {s.title}
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 content-start"
        >
          {s.steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={item}
              className="flex flex-col p-5 md:p-6"
              style={cardPaper}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ background: accent[i] }}
                >
                  {step.num}
                </span>
                <div style={{ width: 28, height: 2, borderRadius: 1, background: `${accent[i]}44` }} />
              </div>
              <h3
                className="font-black leading-tight mb-2"
                style={{ color: NAVY, fontSize: 'clamp(0.85rem, 1.15vw, 1.05rem)' }}
              >
                {step.title}
              </h3>
              <p
                className="leading-relaxed flex-1"
                style={{ color: 'rgba(27,42,107,0.62)', fontSize: 'clamp(0.72rem, 0.95vw, 0.88rem)' }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

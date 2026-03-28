import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const up = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

const STEP_COLORS = ['#1B2A6B', '#22A756', '#1B2A6B', '#22A756']

export default function Slide4() {
  const { t } = useLanguage()
  const s = t.slides.slide4

  return (
    <SlideWrapper>
      {/* Engine diagram as faded background */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: 'url(/slides/slide_04.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center 55%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.18,
        }}
      />

      <div className="w-full h-full flex flex-col relative z-10"
        style={{ padding: 'clamp(1.5rem, 4%, 3.5rem) clamp(2rem, 6%, 6rem)' }}>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-[#1B2A6B] text-center mb-auto"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2.8rem)' }}
        >
          {s.title}
        </motion.h2>

        {/* Steps row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-auto"
        >
          {s.steps.map((step, i) => (
            <motion.div
              key={i}
              variants={up}
              className="flex flex-col rounded-2xl p-4 md:p-5"
              style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(8px)', border: '1px solid rgba(27,42,107,0.10)' }}
            >
              {/* Step number + title */}
              <div className="flex items-center gap-2.5 mb-2">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-xs shrink-0"
                  style={{ background: STEP_COLORS[i] }}
                >
                  {step.num}
                </span>
                <span className="font-black text-[#1B2A6B] text-sm md:text-base leading-tight">
                  {step.title}
                </span>
              </div>
              <p className="text-[#1B2A6B]/55 leading-snug text-xs md:text-sm">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

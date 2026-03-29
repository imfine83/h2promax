import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}
const line = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

export default function Slide1() {
  const { t } = useLanguage()
  const s = t.slides.slide1

  return (
    <SlideWrapper>
      {/* H₂ ELEMENT logo top-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-6 right-6 md:top-8 md:right-10 flex items-baseline select-none z-20"
      >
        <span className="font-black text-[#1B2A6B] text-[18px] md:text-[22px] leading-none tracking-tight">H</span>
        <sub className="font-bold text-[#1B2A6B] text-[11px] md:text-[13px] -ml-px leading-none">2</sub>
        <span className="font-bold text-[#1B2A6B] text-[15px] md:text-[19px] tracking-[0.22em] ml-1.5">ELEMENT</span>
      </motion.div>

      {/* Ghost "65%" — huge background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-black text-[#1B2A6B]"
          style={{ fontSize: 'clamp(8rem, 32vw, 30rem)', opacity: 0.042, lineHeight: 1 }}
        >
          65%
        </span>
      </div>

      {/* Center content */}
      <div className="w-full h-full flex flex-col items-center justify-center px-5 sm:px-6 md:px-8 text-center relative z-10 pt-14 pb-28 md:pt-0 md:pb-0">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.p
            variants={line}
            className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.2em] mb-5 md:mb-8 text-[10px] md:text-[11px]"
          >
            {s.eyebrow}
          </motion.p>

          {/* Hero headline */}
          <motion.h1
            variants={line}
            className="font-black text-[#1B2A6B] leading-[1.05] mb-0"
            style={{ fontSize: 'clamp(2rem, 7vw, 7rem)' }}
          >
            {s.headline1}{' '}
            <span className="text-[#22A756]">65%</span>
            {' '}{s.headline2}
          </motion.h1>
          <motion.h1
            variants={line}
            className="font-black text-[#1B2A6B] leading-[1.05] mb-6 md:mb-10"
            style={{ fontSize: 'clamp(2rem, 7vw, 7rem)' }}
          >
            {s.headline3}
          </motion.h1>

          {/* Divider */}
          <motion.div variants={line} className="flex items-center gap-3 mb-6 md:mb-10">
            <div className="h-[3px] rounded-full bg-[#22A756] w-10 md:w-20" />
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#22A756]" />
            <div className="h-[3px] rounded-full bg-[#22A756] w-10 md:w-20" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={line}
            className="text-[#1B2A6B]/55 leading-relaxed text-sm md:text-base"
            style={{ maxWidth: '520px' }}
          >
            {s.subtitle}
          </motion.p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

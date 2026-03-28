import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}
const line = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

export default function Slide1() {
  return (
    <SlideWrapper>
      {/* H₂ ELEMENT logo top-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-8 right-10 flex items-baseline select-none z-20"
      >
        <span className="font-black text-[#1B2A6B] text-[22px] leading-none tracking-tight">H</span>
        <sub className="font-bold text-[#1B2A6B] text-[13px] -ml-px leading-none">2</sub>
        <span className="font-bold text-[#1B2A6B] text-[19px] tracking-[0.22em] ml-1.5">ELEMENT</span>
      </motion.div>

      {/* Ghost "65%" — huge background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-black text-[#1B2A6B]"
          style={{ fontSize: 'clamp(14rem, 32vw, 30rem)', opacity: 0.042, lineHeight: 1 }}
        >
          65%
        </span>
      </div>

      {/* Center content */}
      <div className="w-full h-full flex flex-col items-center justify-center px-8 text-center relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.p
            variants={line}
            className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.28em] mb-8"
            style={{ fontSize: 'clamp(0.65rem, 0.85vw, 0.78rem)' }}
          >
            Hydrogen Fuel Savings System
          </motion.p>

          {/* Hero headline */}
          <motion.h1
            variants={line}
            className="font-black text-[#1B2A6B] leading-[1.05] mb-0"
            style={{ fontSize: 'clamp(3.2rem, 7vw, 7rem)' }}
          >
            Save up to{' '}
            <span className="text-[#22A756]">65%</span>
            {' '}of your
          </motion.h1>
          <motion.h1
            variants={line}
            className="font-black text-[#1B2A6B] leading-[1.05] mb-10"
            style={{ fontSize: 'clamp(3.2rem, 7vw, 7rem)' }}
          >
            fuel costs.
          </motion.h1>

          {/* Divider */}
          <motion.div variants={line} className="flex items-center gap-3 mb-10">
            <div className="h-[3px] rounded-full bg-[#22A756]" style={{ width: 'clamp(3rem, 5vw, 5rem)' }} />
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#22A756]" />
            <div className="h-[3px] rounded-full bg-[#22A756]" style={{ width: 'clamp(3rem, 5vw, 5rem)' }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={line}
            className="text-[#1B2A6B]/55 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.4vw, 1.25rem)', maxWidth: '580px' }}
          >
            How to unlock hidden power and efficiency in your engine<br />
            with an H2 ELEMENT hydrogen generator.
          </motion.p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

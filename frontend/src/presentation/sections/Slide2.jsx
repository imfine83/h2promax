import { motion } from 'framer-motion'
import { SplitImageSlide } from './ImageSlide'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.82, delay: d, ease: [0.16, 1, 0.3, 1] },
})

export default function Slide2() {
  return (
    <SplitImageSlide src="/slides/slide_02.png" imageSide="right" bg="#ECEAE3">
      <motion.p {...up(0.05)}
        className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.24em] mb-5"
        style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
      >
        The Problem
      </motion.p>

      <motion.h2 {...up(0.14)}
        className="font-black text-[#1B2A6B] leading-[1.1] mb-7"
        style={{ fontSize: 'clamp(2rem, 3.4vw, 3.2rem)' }}
      >
        Your engine is wasting<br />fuel with every<br />combustion cycle.
      </motion.h2>

      <motion.p {...up(0.32)}
        className="text-[#1B2A6B]/55 leading-relaxed mb-5"
        style={{ fontSize: 'clamp(0.92rem, 1.2vw, 1.1rem)', maxWidth: '420px' }}
      >
        Fuel prices are rising, but the real issue is inside your engine.
        Most internal combustion engines lose up to{' '}
        <strong className="text-[#1B2A6B]/80 font-semibold">50% of fuel</strong> due to
        incomplete combustion of the fuel-air mixture.
      </motion.p>

      <motion.p {...up(0.48)}
        className="font-semibold text-[#1B2A6B]/75 leading-snug"
        style={{ fontSize: 'clamp(0.92rem, 1.2vw, 1.1rem)' }}
      >
        You are paying for fuel that never gets used.
      </motion.p>
    </SplitImageSlide>
  )
}

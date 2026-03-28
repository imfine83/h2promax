import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.04 } },
}
const up = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

export default function Slide3() {
  return (
    <SlideWrapper>
      <div className="w-full h-full flex flex-col items-center justify-center px-5 md:px-8 text-center relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.p
            variants={up}
            className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.22em] mb-4 md:mb-7 text-[10px] md:text-[11px]"
          >
            The Solution
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={up}
            className="font-black text-[#1B2A6B] leading-[1.1] mb-6 md:mb-12"
            style={{ fontSize: 'clamp(1.5rem, 4.5vw, 4.2rem)', maxWidth: '800px' }}
          >
            The solution is unlocking the power of complete combustion.
          </motion.h2>

          {/* Visual — catalysis concept */}
          <motion.div
            variants={up}
            className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-12 scale-75 md:scale-100 origin-center"
          >
            {/* Fuel molecule — incomplete */}
            <div className="flex flex-col items-center gap-3">
              <svg viewBox="0 0 88 88" fill="none" style={{ width: 88, height: 88 }}>
                <circle cx="44" cy="44" r="34" stroke="rgba(27,42,107,0.22)" strokeWidth="2.5"
                  fill="rgba(27,42,107,0.05)" strokeDasharray="6 4"/>
                <circle cx="44" cy="44" r="18" fill="rgba(27,42,107,0.07)"/>
                <circle cx="44" cy="18" r="7" fill="rgba(27,42,107,0.14)"/>
                <circle cx="66" cy="56" r="6" fill="rgba(27,42,107,0.14)"/>
                <circle cx="22" cy="57" r="6" fill="rgba(27,42,107,0.14)"/>
                <text x="44" y="48" fontSize="9" fontWeight="700" fill="rgba(27,42,107,0.5)"
                  textAnchor="middle" fontFamily="Inter, sans-serif">C₈H₁₈</text>
              </svg>
              <span className="text-[#1B2A6B]/35 text-xs font-semibold uppercase tracking-wider">Fuel</span>
            </div>

            {/* Arrow with H₂ */}
            <div className="flex flex-col items-center gap-2">
              <span className="font-black text-[#22A756]" style={{ fontSize: 16 }}>H₂</span>
              <svg viewBox="0 0 72 18" fill="none" style={{ width: 72, height: 18 }}>
                <defs>
                  <linearGradient id="ag" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#22A756" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#22A756"/>
                  </linearGradient>
                </defs>
                <line x1="2" y1="9" x2="58" y2="9" stroke="url(#ag)" strokeWidth="2.5" strokeLinecap="round"/>
                <polyline points="50,3 62,9 50,15" fill="none" stroke="#22A756" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#22A756]/55 text-xs font-medium">catalyst</span>
            </div>

            {/* Complete combustion — burst */}
            <div className="flex flex-col items-center gap-3">
              <svg viewBox="0 0 88 88" fill="none" style={{ width: 88, height: 88 }}>
                <circle cx="44" cy="44" r="34" fill="rgba(34,167,86,0.08)"/>
                <circle cx="44" cy="44" r="22" fill="rgba(34,167,86,0.15)"/>
                <circle cx="44" cy="44" r="13" fill="rgba(34,167,86,0.28)"/>
                {/* Rays */}
                {[0,45,90,135,180,225,270,315].map(a => {
                  const rad = a * Math.PI / 180
                  return (
                    <line key={a}
                      x1={44 + 16 * Math.cos(rad)} y1={44 + 16 * Math.sin(rad)}
                      x2={44 + 30 * Math.cos(rad)} y2={44 + 30 * Math.sin(rad)}
                      stroke="#22A756" strokeWidth="2.5" strokeLinecap="round"/>
                  )
                })}
                <text x="44" y="48" fontSize="9" fontWeight="800" fill="#22A756"
                  textAnchor="middle" fontFamily="Inter, sans-serif">H₂O</text>
              </svg>
              <span className="text-[#22A756]/60 text-xs font-semibold uppercase tracking-wider">Clean</span>
            </div>
          </motion.div>

          {/* Body text */}
          <motion.p
            variants={up}
            className="text-[#1B2A6B]/55 leading-relaxed text-sm md:text-base"
            style={{ maxWidth: '640px' }}
          >
            Hydrogen is one of the most rapidly flammable gases. It ignites instantly
            and burns <strong className="text-[#1B2A6B]/80 font-semibold">8–10× faster</strong> than conventional fuel,
            acting as a catalyst to ensure the entire fuel-air mixture combusts fully and efficiently.
          </motion.p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

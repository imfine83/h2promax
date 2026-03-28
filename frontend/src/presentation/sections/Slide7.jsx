import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}
const up = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const ENGINE_ICONS = [
  /* Gasoline — flame */
  <svg key="g" viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
    <path d="M24 6 Q28 16 34 20 Q40 26 40 34 Q40 44 24 46 Q8 44 8 34 Q8 26 14 20 Q20 16 24 6Z"
      stroke="#1B2A6B" strokeWidth="2.2" fill="rgba(27,42,107,0.07)" strokeLinejoin="round"/>
    <path d="M19 30 Q18 36 22 40" stroke="#22A756" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>,
  /* Diesel — droplet */
  <svg key="d" viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
    <ellipse cx="24" cy="28" rx="12" ry="14" stroke="#1B2A6B" strokeWidth="2.2" fill="rgba(27,42,107,0.07)"/>
    <path d="M24 8 Q24 20 24 22" stroke="#1B2A6B" strokeWidth="2.2" strokeLinecap="round"/>
    <text x="24" y="33" fontSize="9" fontWeight="700" fill="rgba(27,42,107,0.55)"
      textAnchor="middle" fontFamily="Inter,sans-serif">D</text>
  </svg>,
  /* Gas — cylinder */
  <svg key="gas" viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
    <rect x="10" y="12" width="22" height="30" rx="6" stroke="#1B2A6B" strokeWidth="2.2" fill="rgba(27,42,107,0.07)"/>
    <rect x="16" y="8" width="10" height="7" rx="3" stroke="#1B2A6B" strokeWidth="2"/>
    <path d="M32 20 L38 20 L38 28 Q38 34 33 34" stroke="#22A756" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>,
  /* Methane — CH4 molecule */
  <svg key="m" viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
    <circle cx="24" cy="24" r="8" stroke="#1B2A6B" strokeWidth="2.2" fill="rgba(27,42,107,0.1)"/>
    <circle cx="10" cy="14" r="5" stroke="#1B2A6B" strokeWidth="1.8" fill="rgba(27,42,107,0.06)"/>
    <circle cx="38" cy="14" r="5" stroke="#1B2A6B" strokeWidth="1.8" fill="rgba(27,42,107,0.06)"/>
    <circle cx="10" cy="34" r="5" stroke="#1B2A6B" strokeWidth="1.8" fill="rgba(27,42,107,0.06)"/>
    <circle cx="38" cy="34" r="5" stroke="#1B2A6B" strokeWidth="1.8" fill="rgba(27,42,107,0.06)"/>
    <line x1="16" y1="18" x2="19" y2="21" stroke="#1B2A6B" strokeWidth="1.5"/>
    <line x1="32" y1="18" x2="29" y2="21" stroke="#1B2A6B" strokeWidth="1.5"/>
    <line x1="16" y1="30" x2="19" y2="27" stroke="#1B2A6B" strokeWidth="1.5"/>
    <line x1="32" y1="30" x2="29" y2="27" stroke="#1B2A6B" strokeWidth="1.5"/>
    <text x="24" y="28" fontSize="8" fontWeight="800" fill="rgba(27,42,107,0.6)"
      textAnchor="middle" fontFamily="Inter,sans-serif">CH₄</text>
  </svg>,
]

const VEHICLE_ICONS = [
  /* Car */
  <svg key="car" viewBox="0 0 64 40" fill="none" style={{ width: 56, height: 35 }}>
    <rect x="6" y="16" width="52" height="20" rx="5" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
    <path d="M14 16 L20 6 L44 6 L50 16" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.1)" strokeLinejoin="round"/>
    <circle cx="18" cy="36" r="5" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.1)"/>
    <circle cx="46" cy="36" r="5" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.1)"/>
  </svg>,
  /* Truck */
  <svg key="truck" viewBox="0 0 72 44" fill="none" style={{ width: 64, height: 39 }}>
    <rect x="4" y="10" width="42" height="28" rx="4" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
    <path d="M46 18 L54 18 L64 26 L64 38 L46 38Z" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.1)" strokeLinejoin="round"/>
    <circle cx="16" cy="38" r="5" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.1)"/>
    <circle cx="34" cy="38" r="5" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.1)"/>
    <circle cx="57" cy="38" r="5" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.1)"/>
  </svg>,
  /* Tractor */
  <svg key="tractor" viewBox="0 0 60 44" fill="none" style={{ width: 52, height: 38 }}>
    <rect x="22" y="12" width="28" height="22" rx="4" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
    <path d="M30 12 L36 4 L44 4 L50 12" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.08)" strokeLinejoin="round"/>
    <circle cx="12" cy="32" r="10" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.08)"/>
    <circle cx="12" cy="32" r="4" stroke="#1B2A6B" strokeWidth="1.5" fill="none"/>
    <circle cx="42" cy="34" r="7" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.08)"/>
    <circle cx="42" cy="34" r="3" stroke="#1B2A6B" strokeWidth="1.5" fill="none"/>
    <line x1="22" y1="34" x2="20" y2="34" stroke="#1B2A6B" strokeWidth="2"/>
  </svg>,
  /* Excavator */
  <svg key="exc" viewBox="0 0 64 48" fill="none" style={{ width: 56, height: 42 }}>
    <rect x="4" y="28" width="40" height="14" rx="3" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
    <rect x="12" y="16" width="22" height="16" rx="3" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.09)"/>
    <path d="M34 20 L50 12 L58 20 L50 24" stroke="#1B2A6B" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <path d="M50 24 L56 34 L48 38" stroke="#1B2A6B" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <circle cx="10" cy="42" r="4" stroke="#1B2A6B" strokeWidth="1.8" fill="rgba(27,42,107,0.1)"/>
    <circle cx="24" cy="42" r="4" stroke="#1B2A6B" strokeWidth="1.8" fill="rgba(27,42,107,0.1)"/>
    <circle cx="38" cy="42" r="4" stroke="#1B2A6B" strokeWidth="1.8" fill="rgba(27,42,107,0.1)"/>
  </svg>,
]

export default function Slide7() {
  const { t } = useLanguage()
  const s = t.slides.slide7

  return (
    <SlideWrapper>
      <div className="w-full h-full flex flex-col relative z-10 overflow-y-auto"
        style={{ padding: 'clamp(1.5rem, 4%, 3.5rem) clamp(2rem, 6%, 6rem)' }}>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-[#1B2A6B] text-center mb-6 md:mb-10"
          style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2.6rem)' }}
        >
          {s.title}
        </motion.h2>

        {/* Two columns: Engine types | Vehicle types */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1">

          {/* Engine types */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex-1"
          >
            <motion.p variants={up}
              className="font-black text-[#1B2A6B] mb-4 md:mb-6 text-sm md:text-base tracking-wide">
              {s.engineTypesTitle}
            </motion.p>
            <div className="grid grid-cols-4 gap-3">
              {s.engines.map((name, i) => (
                <motion.div key={i} variants={up} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(27,42,107,0.06)', border: '1px solid rgba(27,42,107,0.1)' }}>
                    {ENGINE_ICONS[i]}
                  </div>
                  <span className="text-[#1B2A6B]/65 text-xs font-semibold leading-tight whitespace-pre-line">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px self-stretch" style={{ background: 'rgba(27,42,107,0.1)' }}/>

          {/* Vehicle types */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex-1"
          >
            <motion.p variants={up}
              className="font-black text-[#1B2A6B] mb-4 md:mb-6 text-sm md:text-base tracking-wide">
              {s.vehicleTypesTitle}
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {s.vehicles.map((name, i) => (
                <motion.div key={i} variants={up} className="flex flex-col items-center gap-2 text-center p-3 rounded-2xl"
                  style={{ background: 'rgba(27,42,107,0.04)', border: '1px solid rgba(27,42,107,0.08)' }}>
                  <div className="flex items-center justify-center" style={{ height: 44 }}>
                    {VEHICLE_ICONS[i]}
                  </div>
                  <span className="text-[#1B2A6B]/65 text-xs font-semibold leading-tight">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          className="mt-6 md:mt-8 rounded-2xl px-5 py-3 text-center"
          style={{ background: 'rgba(27,42,107,0.05)', border: '1px solid rgba(27,42,107,0.09)' }}
        >
          <p className="text-[#1B2A6B]/60 text-xs md:text-sm font-medium leading-snug">
            {s.footer}
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

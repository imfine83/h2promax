import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}
const up = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

const STEP_ACCENT = ['#1B2A6B', '#22A756', '#1B2A6B', '#22A756']

/* Small inline SVG icons for each step */
const STEP_ICONS = [
  /* Electrolysis — water drop + electricity */
  <svg key="e" viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
    <path d="M16 4 Q10 14 10 20 Q10 28 16 28 Q22 28 22 20 Q22 14 16 4Z"
      stroke="#1B2A6B" strokeWidth="1.8" fill="rgba(27,42,107,0.08)" strokeLinejoin="round"/>
    <path d="M13 16 L16 11 L16 18 L19 13" stroke="#22A756" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  /* Injection — arrow into cylinder */
  <svg key="i" viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
    <rect x="6" y="10" width="14" height="18" rx="3" stroke="#22A756" strokeWidth="1.8" fill="rgba(34,167,86,0.08)"/>
    <path d="M20 16 L28 16" stroke="#22A756" strokeWidth="1.8" strokeLinecap="round"/>
    <polyline points="24,12 28,16 24,20" stroke="#22A756" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  /* Catalysis — burst / reaction */
  <svg key="c" viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
    <circle cx="16" cy="16" r="6" fill="rgba(27,42,107,0.12)"/>
    {[0,45,90,135,180,225,270,315].map(a => {
      const r = a * Math.PI / 180
      return <line key={a} x1={16+7*Math.cos(r)} y1={16+7*Math.sin(r)} x2={16+11*Math.cos(r)} y2={16+11*Math.sin(r)}
        stroke="#1B2A6B" strokeWidth="1.8" strokeLinecap="round"/>
    })}
  </svg>,
  /* Result — flame / efficiency */
  <svg key="r" viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
    <path d="M16 4 Q20 10 22 14 Q26 18 26 22 Q26 30 16 30 Q6 30 6 22 Q6 18 10 14 Q12 10 16 4Z"
      stroke="#22A756" strokeWidth="1.8" fill="rgba(34,167,86,0.1)" strokeLinejoin="round"/>
    <polyline points="12,23 15,27 20,19" stroke="#22A756" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
]

export default function Slide4() {
  const { t } = useLanguage()
  const s = t.slides.slide4

  return (
    <SlideWrapper>
      {/* Decorative engine image — barely visible, purely decorative */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: 'url(/slides/slide_04.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.04,
        }}
      />

      <div className="w-full h-full flex flex-col relative z-10"
        style={{ padding: 'clamp(1.8rem, 4%, 3.5rem) clamp(2rem, 7%, 7rem)' }}>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-[#1B2A6B] text-center mb-8 md:mb-12"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2.8rem)' }}
        >
          {s.title}
        </motion.h2>

        {/* Flow connector + 4 step cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 items-stretch"
        >
          {s.steps.map((step, i) => (
            <motion.div
              key={i}
              variants={up}
              className="flex flex-col rounded-2xl p-4 md:p-5 relative"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: `1.5px solid ${STEP_ACCENT[i]}22`,
                boxShadow: '0 2px 16px rgba(27,42,107,0.06)',
              }}
            >
              {/* Step number badge */}
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ background: STEP_ACCENT[i] }}
                >
                  {step.num}
                </span>
                <div style={{ color: STEP_ACCENT[i] }}>
                  {STEP_ICONS[i]}
                </div>
              </div>

              {/* Title */}
              <p className="font-black text-[#1B2A6B] mb-2 text-sm md:text-base leading-tight">
                {step.title}
              </p>

              {/* Divider */}
              <div className="w-8 h-[2px] rounded-full mb-2"
                style={{ background: STEP_ACCENT[i] + '55' }} />

              {/* Description */}
              <p className="text-[#1B2A6B]/55 leading-snug text-xs md:text-[13px] flex-1">
                {step.body}
              </p>

              {/* Arrow to next (desktop only) */}
              {i < 3 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <polyline points="3,2 10,7 3,12" stroke="rgba(27,42,107,0.25)"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

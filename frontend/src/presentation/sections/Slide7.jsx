import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'
import { NAVY, GREEN, slideSurfaceStyle, cardPaper, sectionRule } from '../slideVisual'

const ENGINE_ICONS = [
  <svg key="g" viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-11 md:h-11">
    <path d="M24 6 Q28 16 34 20 Q40 26 40 34 Q40 44 24 46 Q8 44 8 34 Q8 26 14 20 Q20 16 24 6Z"
      stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.06)" strokeLinejoin="round"/>
    <path d="M19 30 Q18 36 22 40" stroke={GREEN} strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>,
  <svg key="d" viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-11 md:h-11">
    <ellipse cx="24" cy="28" rx="12" ry="14" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
    <path d="M24 8 Q24 20 24 22" stroke={NAVY} strokeWidth="2" strokeLinecap="round"/>
  </svg>,
  <svg key="gas" viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-11 md:h-11">
    <rect x="10" y="12" width="22" height="30" rx="6" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
    <rect x="16" y="8" width="10" height="7" rx="3" stroke={NAVY} strokeWidth="2"/>
    <path d="M32 20 L38 20 L38 28 Q38 34 33 34" stroke={GREEN} strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>,
  <svg key="m" viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-11 md:h-11">
    <circle cx="24" cy="24" r="8" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.08)"/>
    <circle cx="10" cy="14" r="5" stroke={NAVY} strokeWidth="1.6" fill="rgba(27,42,107,0.05)"/>
    <circle cx="38" cy="14" r="5" stroke={NAVY} strokeWidth="1.6" fill="rgba(27,42,107,0.05)"/>
    <circle cx="10" cy="34" r="5" stroke={NAVY} strokeWidth="1.6" fill="rgba(27,42,107,0.05)"/>
    <circle cx="38" cy="34" r="5" stroke={NAVY} strokeWidth="1.6" fill="rgba(27,42,107,0.05)"/>
    <text x="24" y="28" fontSize="8" fontWeight="800" fill={NAVY} textAnchor="middle" fontFamily="Inter,sans-serif">CH₄</text>
  </svg>,
]

const VEHICLE_ICONS = [
  <svg key="car" viewBox="0 0 64 40" fill="none" className="w-14 h-9">
    <rect x="6" y="16" width="52" height="20" rx="5" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.05)"/>
    <path d="M14 16 L20 6 L44 6 L50 16" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.08)" strokeLinejoin="round"/>
    <circle cx="18" cy="36" r="5" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
    <circle cx="46" cy="36" r="5" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
  </svg>,
  <svg key="truck" viewBox="0 0 72 44" fill="none" className="w-16 h-10">
    <rect x="4" y="10" width="42" height="28" rx="4" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.05)"/>
    <path d="M46 18 L54 18 L64 26 L64 38 L46 38Z" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.08)" strokeLinejoin="round"/>
    <circle cx="16" cy="38" r="5" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
    <circle cx="34" cy="38" r="5" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
    <circle cx="57" cy="38" r="5" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
  </svg>,
  <svg key="tractor" viewBox="0 0 60 44" fill="none" className="w-14 h-10">
    <rect x="22" y="12" width="28" height="22" rx="4" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.05)"/>
    <path d="M30 12 L36 4 L44 4 L50 12" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.08)" strokeLinejoin="round"/>
    <circle cx="12" cy="32" r="10" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
    <circle cx="42" cy="34" r="7" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.06)"/>
  </svg>,
  <svg key="exc" viewBox="0 0 64 48" fill="none" className="w-14 h-10">
    <rect x="4" y="28" width="40" height="14" rx="3" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.05)"/>
    <rect x="12" y="16" width="22" height="16" rx="3" stroke={NAVY} strokeWidth="2" fill="rgba(27,42,107,0.08)"/>
    <path d="M34 20 L50 12 L58 20 L50 24" stroke={NAVY} strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <circle cx="10" cy="42" r="4" stroke={NAVY} strokeWidth="1.8" fill="rgba(27,42,107,0.06)"/>
    <circle cx="24" cy="42" r="4" stroke={NAVY} strokeWidth="1.8" fill="rgba(27,42,107,0.06)"/>
    <circle cx="38" cy="42" r="4" stroke={NAVY} strokeWidth="1.8" fill="rgba(27,42,107,0.06)"/>
  </svg>,
]

export default function Slide7() {
  const { t } = useLanguage()
  const s = t.slides.slide7

  return (
    <SlideWrapper bg="#EDECE7">
      <div className="absolute inset-0" style={slideSurfaceStyle} />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'url(/slides/slide_07.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div
        className="relative z-10 w-full h-full flex flex-col overflow-y-auto"
        style={{ padding: 'clamp(1.5rem, 4%, 3rem) clamp(1.5rem, 5%, 4rem)' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="font-black text-center leading-tight mb-8 md:mb-10"
          style={{ color: NAVY, fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
        >
          {s.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 flex-1">
          {/* Engine types */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col"
            style={cardPaper}
          >
            <div style={sectionRule} />
            <h3
              className="font-black mb-6"
              style={{ color: NAVY, fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)' }}
            >
              {s.engineTypesTitle}
            </h3>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {s.engines.map((name, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <div
                    className="rounded-2xl flex items-center justify-center p-2 md:p-3 w-full aspect-square max-w-[88px] mx-auto"
                    style={{ background: 'rgba(27,42,107,0.05)', border: '1px solid rgba(27,42,107,0.08)' }}
                  >
                    {ENGINE_ICONS[i]}
                  </div>
                  <span
                    className="font-semibold leading-tight whitespace-pre-line"
                    style={{ color: 'rgba(27,42,107,0.65)', fontSize: 'clamp(0.6rem, 0.85vw, 0.75rem)' }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vehicle types */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="flex flex-col"
            style={cardPaper}
          >
            <div style={sectionRule} />
            <h3
              className="font-black mb-6"
              style={{ color: NAVY, fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)' }}
            >
              {s.vehicleTypesTitle}
            </h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {s.vehicles.map((name, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl"
                  style={{ background: 'rgba(27,42,107,0.04)', border: '1px solid rgba(27,42,107,0.07)' }}
                >
                  {VEHICLE_ICONS[i]}
                  <span
                    className="font-semibold text-center leading-tight"
                    style={{ color: 'rgba(27,42,107,0.65)', fontSize: 'clamp(0.6rem, 0.85vw, 0.75rem)' }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="mt-6 md:mt-8 rounded-2xl px-5 py-4 text-center"
          style={{
            background: 'rgba(255,248,230,0.75)',
            border: '1px solid rgba(200,170,80,0.35)',
            boxShadow: '0 2px 16px rgba(27,42,107,0.05)',
          }}
        >
          <p
            className="font-medium leading-relaxed"
            style={{ color: 'rgba(27,42,107,0.72)', fontSize: 'clamp(0.72rem, 0.95vw, 0.88rem)' }}
          >
            {s.footer}
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

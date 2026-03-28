import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'
import { NAVY, GREEN, slideSurfaceStyle, cardPaper } from '../slideVisual'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] },
})

export default function Slide11() {
  const { t } = useLanguage()
  const s = t.slides.slide11

  return (
    <SlideWrapper bg="#EAEAE6">
      <div className="absolute inset-0" style={slideSurfaceStyle} />

      {/* Силуэты автопарка — как на оригинальном слайде, очень тихо */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/slides/slide_11.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 55%',
          opacity: 0.09,
        }}
      />

      <div
        className="relative z-10 w-full h-full flex flex-col overflow-y-auto"
        style={{ padding: 'clamp(1.5rem, 3.5%, 2.75rem) clamp(1.5rem, 5%, 4.5rem)' }}
      >
        <motion.h2 {...up(0.05)}
          className="font-black leading-[1.12] mb-5 md:mb-6"
          style={{ color: NAVY, fontSize: 'clamp(1.15rem, 2.5vw, 2.25rem)', maxWidth: 'min(560px, 92%)' }}
        >
          {s.title}
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-5 flex-1 min-h-0">
          {/* Chart block */}
          <motion.div {...up(0.15)} className="flex-1 relative min-h-[200px]">
            <svg viewBox="0 0 520 210" fill="none" className="w-full h-full max-h-[220px]">
              {[42, 82, 122, 162, 202].map(y => (
                <line key={y} x1="56" y1={y} x2="480" y2={y}
                  stroke="rgba(27,42,107,0.06)" strokeWidth="1" strokeDasharray="5 5"/>
              ))}
              <line x1="56" y1="16" x2="56" y2="198" stroke="rgba(27,42,107,0.18)" strokeWidth="1.5"/>
              <line x1="56" y1="198" x2="480" y2="198" stroke="rgba(27,42,107,0.18)" strokeWidth="1.5"/>

              {[['$3k', 24], ['$2k', 80], ['$1k', 136], ['0', 194]].map(([lbl, y]) => (
                <text key={lbl} x="48" y={y + 4} textAnchor="end" fontSize="9"
                  fill="rgba(27,42,107,0.38)" fontFamily="Inter,sans-serif">{lbl}</text>
              ))}

              <text x="12" y="110" textAnchor="middle" fontSize="9"
                fill="rgba(27,42,107,0.38)" fontFamily="Inter,sans-serif"
                transform="rotate(-90 12 110)">{s.axisY}</text>

              <text x="268" y="208" textAnchor="middle" fontSize="9"
                fill="rgba(27,42,107,0.38)" fontFamily="Inter,sans-serif">{s.time}</text>

              <path d="M72 26 Q195 72 435 178 L435 24 Q195 118 72 192 Z"
                fill="rgba(34,167,86,0.08)"/>

              <path d="M72 26 Q195 72 435 178" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M72 192 Q195 118 435 24" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <polygon points="435,24 425,18 429,28" fill={GREEN}/>

              <circle cx="253" cy="100" r="5" fill={GREEN}/>
              <circle cx="253" cy="100" r="10" fill="rgba(34,167,86,0.14)"/>
            </svg>

            {/* Подписи к линиям — HTML, чтобы любой язык переносился нормально */}
            <div
              className="absolute top-0 right-0 md:right-2 flex flex-col gap-2 items-end max-w-[45%]"
              style={{ pointerEvents: 'none' }}
            >
              <span
                className="font-bold leading-tight text-right px-2 py-1 rounded-md"
                style={{ background: 'rgba(34,167,86,0.14)', color: GREEN, fontSize: 'clamp(0.55rem, 0.8vw, 0.68rem)' }}
              >
                {s.savings}
              </span>
              <span
                className="font-bold leading-tight text-right px-2 py-1 rounded-md"
                style={{ background: 'rgba(27,42,107,0.08)', color: NAVY, fontSize: 'clamp(0.55rem, 0.8vw, 0.68rem)' }}
              >
                {s.costs}
              </span>
            </div>

            <div
              className="absolute left-[48%] top-[42%] -translate-x-1/2 font-bold text-center px-2"
              style={{ color: 'rgba(34,167,86,0.85)', fontSize: 'clamp(0.6rem, 0.9vw, 0.78rem)' }}
            >
              {s.roi}
            </div>
          </motion.div>

          {/* Info card */}
          <motion.div {...up(0.35)} className="lg:w-[260px] shrink-0 flex lg:items-stretch">
            <div className="w-full flex flex-col justify-center p-5" style={cardPaper}>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(34,167,86,0.14)' }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8" stroke={GREEN} strokeWidth="1.6"/>
                  <polyline points="5,9 8,12 12.5,5.5" stroke={GREEN} strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p
                className="leading-relaxed"
                style={{ color: 'rgba(27,42,107,0.65)', fontSize: 'clamp(0.68rem, 0.9vw, 0.8rem)' }}
              >
                {s.box}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p {...up(0.28)}
          className="leading-relaxed mt-4 md:mt-5"
          style={{
            color: 'rgba(27,42,107,0.58)',
            fontSize: 'clamp(0.72rem, 0.95vw, 0.84rem)',
            maxWidth: 'min(640px, 100%)',
          }}
        >
          {s.body}
        </motion.p>
      </div>
    </SlideWrapper>
  )
}

import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] },
})

export default function Slide11() {
  const { t } = useLanguage()
  const s = t.slides.slide11

  return (
    <SlideWrapper bg="#EAEAE6">
      <div className="w-full h-full flex flex-col relative z-10"
        style={{ padding: 'clamp(1.8rem, 4%, 4rem) clamp(2rem, 7%, 7rem)' }}>

        {/* Title */}
        <motion.h2 {...up(0.05)}
          className="font-black text-[#1B2A6B] leading-[1.1] mb-6 md:mb-8"
          style={{ fontSize: 'clamp(1.6rem, 3.2vw, 3rem)', maxWidth: '640px' }}
        >
          {s.title}
        </motion.h2>

        {/* Chart + side info */}
        <div className="flex flex-col md:flex-row gap-6 flex-1 min-h-0">

          {/* Chart */}
          <motion.div {...up(0.2)} className="flex-1 flex flex-col">
            <svg viewBox="0 0 500 220" fill="none" style={{ width: '100%', flex: 1 }}>
              {/* Grid background */}
              {[55, 95, 135, 175].map(y => (
                <line key={y} x1="52" y1={y} x2="470" y2={y}
                  stroke="rgba(27,42,107,0.07)" strokeWidth="1" strokeDasharray="5 5"/>
              ))}

              {/* Y axis */}
              <line x1="52" y1="18" x2="52" y2="195" stroke="rgba(27,42,107,0.2)" strokeWidth="1.5"/>
              {/* X axis */}
              <line x1="52" y1="195" x2="470" y2="195" stroke="rgba(27,42,107,0.2)" strokeWidth="1.5"/>

              {/* Y-axis label */}
              <text x="14" y="110" fontSize="10" fill="rgba(27,42,107,0.4)" fontFamily="Inter,sans-serif"
                transform="rotate(-90,14,110)" textAnchor="middle">Cost / Savings</text>

              {/* Y values */}
              {[['$3k',20],['$2k',75],['$1k',130],['0',185]].map(([label, y]) => (
                <text key={label} x="46" y={y+4} fontSize="9" fill="rgba(27,42,107,0.35)"
                  fontFamily="Inter,sans-serif" textAnchor="end">{label}</text>
              ))}

              {/* X-axis time label */}
              <text x="261" y="212" fontSize="10" fill="rgba(27,42,107,0.4)"
                fontFamily="Inter,sans-serif" textAnchor="middle">{s.time}</text>

              {/* Shaded ROI area */}
              <path d="M68 22 L452 172 L452 170 Q240 80 68 175 Z"
                fill="rgba(34,167,86,0.10)"/>

              {/* Fleet Fuel Costs — decreasing (navy) */}
              <path d="M68 28 Q200 80 452 172"
                stroke="#1B2A6B" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

              {/* Cumulative Savings — increasing (green) */}
              <path d="M68 175 Q200 110 452 22"
                stroke="#22A756" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

              {/* Crossover dot */}
              <circle cx="260" cy="98" r="5" fill="#22A756"/>
              <circle cx="260" cy="98" r="9" fill="rgba(34,167,86,0.2)"/>

              {/* Labels */}
              <rect x="320" y="13" width="145" height="18" rx="4" fill="rgba(34,167,86,0.12)"/>
              <text x="328" y="26" fontSize="9.5" fill="#22A756" fontFamily="Inter,sans-serif"
                fontWeight="700">{s.savings}</text>

              <rect x="320" y="165" width="130" height="18" rx="4" fill="rgba(27,42,107,0.08)"/>
              <text x="328" y="178" fontSize="9.5" fill="#1B2A6B" fontFamily="Inter,sans-serif"
                fontWeight="700">{s.costs}</text>

              {/* ROI label in the middle */}
              <text x="310" y="100" fontSize="11" fill="rgba(34,167,86,0.75)"
                fontFamily="Inter,sans-serif" fontWeight="700">{s.roi}</text>
            </svg>
          </motion.div>

          {/* Right side info */}
          <motion.div {...up(0.45)} className="md:w-56 shrink-0 flex flex-col gap-4 justify-end pb-2">
            <div className="rounded-2xl p-4"
              style={{ background: 'rgba(27,42,107,0.06)', border: '1.5px solid rgba(27,42,107,0.12)' }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-3"
                style={{ background: 'rgba(34,167,86,0.15)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#22A756" strokeWidth="1.6"/>
                  <polyline points="4.5,8 7,11 11.5,5" stroke="#22A756" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#1B2A6B]/65 leading-relaxed text-xs">
                {s.box}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Body text */}
        <motion.p {...up(0.35)}
          className="text-[#1B2A6B]/55 leading-relaxed text-xs md:text-sm mt-4"
          style={{ maxWidth: '580px' }}
        >
          {s.body}
        </motion.p>
      </div>
    </SlideWrapper>
  )
}

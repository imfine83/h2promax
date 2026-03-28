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
      {/* Chart image as faded background */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: 'url(/slides/slide_11.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />

      <div className="w-full h-full flex flex-col md:flex-row relative z-10"
        style={{ padding: 'clamp(2rem, 5%, 4.5rem) clamp(2rem, 6%, 6rem)' }}>

        {/* Left — title + body + simple chart */}
        <div className="flex flex-col flex-1 md:pr-8">
          <motion.h2 {...up(0.05)}
            className="font-black text-[#1B2A6B] leading-[1.1] mb-6 md:mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 3rem)', maxWidth: '620px' }}
          >
            {s.title}
          </motion.h2>

          {/* SVG Chart */}
          <motion.div {...up(0.2)} className="flex-1 flex items-center mb-4 md:mb-8">
            <svg viewBox="0 0 420 180" fill="none" style={{ width: '100%', maxWidth: 420 }}>
              {/* Axes */}
              <line x1="40" y1="10" x2="40" y2="155" stroke="rgba(27,42,107,0.2)" strokeWidth="1.5"/>
              <line x1="40" y1="155" x2="400" y2="155" stroke="rgba(27,42,107,0.2)" strokeWidth="1.5"/>

              {/* Y-axis label */}
              <text x="12" y="90" fontSize="9" fill="rgba(27,42,107,0.4)" fontFamily="Inter,sans-serif"
                transform="rotate(-90,12,90)" textAnchor="middle">{s.savings.split(' ')[0]}</text>

              {/* X-axis label */}
              <text x="220" y="172" fontSize="9" fill="rgba(27,42,107,0.4)" fontFamily="Inter,sans-serif"
                textAnchor="middle">{s.time}</text>

              {/* Fleet Fuel Costs — decreasing line (navy) */}
              <path d="M55 30 Q180 70 390 130"
                stroke="#1B2A6B" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <text x="392" y="134" fontSize="8.5" fill="#1B2A6B" fontFamily="Inter,sans-serif"
                textAnchor="start" fontWeight="600">{s.costs.split(' ').slice(0,2).join(' ')}</text>

              {/* Cumulative Savings — increasing line (green) */}
              <path d="M55 148 Q180 100 390 22"
                stroke="#22A756" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              {/* Shaded area between lines */}
              <path d="M55 148 Q180 100 390 22 L390 130 Q180 70 55 30 Z"
                fill="rgba(34,167,86,0.10)"/>
              <text x="392" y="26" fontSize="8.5" fill="#22A756" fontFamily="Inter,sans-serif"
                textAnchor="start" fontWeight="600">{s.savings.split(' ').slice(0,1).join(' ')}</text>

              {/* ROI label inside shaded zone */}
              <text x="240" y="92" fontSize="9" fill="rgba(34,167,86,0.7)" fontFamily="Inter,sans-serif"
                textAnchor="middle" fontWeight="700">{s.roi}</text>

              {/* Crossover dot */}
              <circle cx="222" cy="80" r="5" fill="#22A756"/>

              {/* Grid lines */}
              {[40, 75, 110, 145].map(y => (
                <line key={y} x1="40" y1={y} x2="400" y2={y}
                  stroke="rgba(27,42,107,0.06)" strokeWidth="1" strokeDasharray="4 4"/>
              ))}
            </svg>
          </motion.div>

          <motion.p {...up(0.35)}
            className="text-[#1B2A6B]/55 leading-relaxed text-xs md:text-sm"
            style={{ maxWidth: '520px' }}
          >
            {s.body}
          </motion.p>
        </div>

        {/* Right — info box */}
        <motion.div {...up(0.5)}
          className="mt-6 md:mt-0 md:w-64 shrink-0 flex items-end"
        >
          <div className="w-full rounded-2xl p-5"
            style={{ background: 'rgba(27,42,107,0.07)', border: '1.5px solid rgba(27,42,107,0.14)' }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-4"
              style={{ background: 'rgba(34,167,86,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="8" stroke="#22A756" strokeWidth="1.8"/>
                <polyline points="5,9 8,12 13,5.5" stroke="#22A756" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[#1B2A6B]/65 leading-relaxed text-xs md:text-sm">
              {s.box}
            </p>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] },
})

export default function Slide11() {
  const { t } = useLanguage()
  const s = t.slides.slide11

  return (
    <SlideWrapper bg="#EAEAE6">
      {/* Fleet vehicles — decorative background from original image */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: 'url(/slides/slide_11.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
          opacity: 0.08,
        }}
      />

      {/* Main layout */}
      <div className="absolute inset-0 flex flex-col"
        style={{ padding: 'clamp(1.5rem, 3.5%, 3rem) clamp(2rem, 5%, 5rem)' }}>

        {/* ─── Title ─── */}
        <motion.h2 {...up(0.05)}
          className="font-black text-[#1B2A6B] leading-[1.1] mb-5"
          style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2.5rem)', maxWidth: '55%' }}
        >
          {s.title}
        </motion.h2>

        {/* ─── Chart + side card ─── */}
        <div className="flex gap-5 flex-1 min-h-0">

          {/* SVG Chart */}
          <motion.div {...up(0.18)} className="flex-1 flex flex-col">
            <svg viewBox="0 0 540 230" fill="none" style={{ width: '100%', height: '100%', maxHeight: 230 }}>
              {/* ── Background grid ── */}
              {[45, 85, 125, 165, 205].map(y => (
                <line key={y} x1="58" y1={y} x2="510" y2={y}
                  stroke="rgba(27,42,107,0.07)" strokeWidth="1" strokeDasharray="6 4"/>
              ))}

              {/* ── Axes ── */}
              <line x1="58" y1="18" x2="58" y2="213" stroke="rgba(27,42,107,0.18)" strokeWidth="1.5"/>
              <line x1="58" y1="213" x2="510" y2="213" stroke="rgba(27,42,107,0.18)" strokeWidth="1.5"/>

              {/* Y-axis tick labels */}
              {[['$3k', 28], ['$2k', 85], ['$1k', 148], ['0', 210]].map(([lbl, y]) => (
                <text key={lbl} x="50" y={y + 4} textAnchor="end" fontSize="9"
                  fill="rgba(27,42,107,0.4)" fontFamily="Inter,sans-serif">{lbl}</text>
              ))}

              {/* Y-axis rotated label */}
              <text x="14" y="120" textAnchor="middle" fontSize="9"
                fill="rgba(27,42,107,0.4)" fontFamily="Inter,sans-serif"
                transform="rotate(-90 14 120)">Cost / Savings</text>

              {/* X-axis label */}
              <text x="284" y="228" textAnchor="middle" fontSize="9"
                fill="rgba(27,42,107,0.4)" fontFamily="Inter,sans-serif">{s.time}</text>

              {/* ── Shaded ROI area ── */}
              <path d="M75 30 Q200 75 450 183 L450 28 Q200 120 75 207 Z"
                fill="rgba(34,167,86,0.09)"/>

              {/* ── Fleet Fuel Costs line (navy, going DOWN) ── */}
              <path d="M75 30 Q200 75 450 183"
                stroke="#1B2A6B" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

              {/* ── Cumulative Savings line (green, going UP) ── */}
              <path d="M75 207 Q200 120 450 28"
                stroke="#22A756" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

              {/* Arrow tip for savings line */}
              <polygon points="450,28 440,22 444,32"
                fill="#22A756"/>

              {/* Crossover highlight */}
              <circle cx="262" cy="107" r="5" fill="#22A756"/>
              <circle cx="262" cy="107" r="10" fill="rgba(34,167,86,0.15)"/>

              {/* ── Line labels ── */}
              {/* Cumulative Savings */}
              <rect x="456" y="18" width="50" height="22" rx="4" fill="rgba(34,167,86,0.12)"/>
              <text x="460" y="27" fontSize="7.5" fill="#22A756" fontFamily="Inter,sans-serif" fontWeight="700">{s.savings.split(' ')[0]}</text>
              <text x="460" y="37" fontSize="7.5" fill="#22A756" fontFamily="Inter,sans-serif" fontWeight="700">{s.savings.split(' ').slice(1).join(' ')}</text>

              {/* Fleet Fuel Costs */}
              <rect x="456" y="173" width="50" height="22" rx="4" fill="rgba(27,42,107,0.08)"/>
              <text x="460" y="182" fontSize="7.5" fill="#1B2A6B" fontFamily="Inter,sans-serif" fontWeight="700">{s.costs.split(' ').slice(0,2).join(' ')}</text>
              <text x="460" y="192" fontSize="7.5" fill="#1B2A6B" fontFamily="Inter,sans-serif" fontWeight="700">{s.costs.split(' ').slice(2).join(' ')}</text>

              {/* Growing ROI */}
              <text x="310" y="118" fontSize="10" fill="rgba(34,167,86,0.8)"
                fontFamily="Inter,sans-serif" fontWeight="700">{s.roi}</text>
            </svg>
          </motion.div>

          {/* ─── Right info card ─── */}
          <motion.div {...up(0.45)} className="hidden md:flex flex-col justify-end" style={{ width: '22%', minWidth: 170 }}>
            <div className="rounded-2xl p-4 h-full flex flex-col justify-center"
              style={{ background: 'rgba(27,42,107,0.06)', border: '1.5px solid rgba(27,42,107,0.14)' }}>
              {/* Icon */}
              <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: 'rgba(34,167,86,0.15)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#22A756" strokeWidth="1.6"/>
                  <polyline points="4.5,8 7,11 11.5,5" stroke="#22A756" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#1B2A6B]/65 leading-relaxed" style={{ fontSize: 'clamp(0.6rem, 0.85vw, 0.74rem)' }}>
                {s.box}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ─── Body text ─── */}
        <motion.p {...up(0.35)}
          className="text-[#1B2A6B]/55 leading-relaxed mt-4"
          style={{ fontSize: 'clamp(0.62rem, 0.88vw, 0.76rem)', maxWidth: '68%' }}
        >
          {s.body}
        </motion.p>

      </div>
    </SlideWrapper>
  )
}

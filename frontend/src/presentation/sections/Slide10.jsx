import { motion } from 'framer-motion'
import SlideWrapper from './SlideWrapper'
import { useLanguage } from '../../contexts/LanguageContext'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] },
})

function Column({ title, icon, items, startDelay, accent = false }) {
  return (
    <div className="flex-1 flex flex-col">
      <motion.div {...up(startDelay)} className="flex items-center gap-4 mb-7">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: accent ? 'rgba(34,167,86,0.12)' : 'rgba(27,42,107,0.07)' }}>
          {icon}
        </div>
        <h3 className="font-black text-[#1B2A6B]" style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.5rem)' }}>
          {title}
        </h3>
      </motion.div>

      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <motion.div key={i} {...up(startDelay + 0.08 + i * 0.07)} className="flex gap-3.5 items-start">
            <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
              style={{ background: accent ? 'rgba(34,167,86,0.15)' : 'rgba(27,42,107,0.07)', minWidth: 20 }}>
              {accent ? (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <polyline points="1,4 3.5,7 9,1" stroke="#22A756" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'rgba(27,42,107,0.35)' }}/>
              )}
            </span>
            <p className="text-[#1B2A6B]/60 leading-relaxed"
              style={{ fontSize: 'clamp(0.88rem, 1.1vw, 1rem)' }}>
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Slide10() {
  const { t } = useLanguage()
  const s = t.slides.slide10

  return (
    <SlideWrapper>
      <div
        className="w-full h-full flex flex-col relative z-10 overflow-y-auto px-4 sm:px-6 md:px-8 pt-[clamp(1.25rem,4vh,4rem)] pb-28 md:pb-[clamp(1.5rem,5%,4rem)]"
      >

        <motion.h2 {...up(0.0)}
          className="font-black text-[#1B2A6B] text-center mb-6 md:mb-12"
          style={{ fontSize: 'clamp(1.3rem, 3.4vw, 3.2rem)' }}
        >
          {s.headline}
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 flex-1 items-start">
          <Column
            title={s.installTitle}
            accent={true}
            startDelay={0.08}
            items={s.installItems}
            icon={
              <svg viewBox="0 0 28 28" fill="none" style={{ width: 24, height: 24 }}>
                <path d="M20 3 Q26 3 26 9 Q26 15 20 18 L8 28 Q5 31 2 28 Q-1 25 2 22 L14 12 Q16 5 20 3Z"
                  stroke="#22A756" strokeWidth="2" fill="rgba(34,167,86,0.12)" strokeLinejoin="round"/>
                <circle cx="3.5" cy="27.5" r="2.5" stroke="#22A756" strokeWidth="1.5" fill="none"/>
              </svg>
            }
          />

          {/* Divider */}
          <div className="hidden md:block w-px self-stretch" style={{ background: 'rgba(27,42,107,0.1)' }}/>

          <Column
            title={s.maintainTitle}
            accent={false}
            startDelay={0.14}
            items={s.maintainItems}
            icon={
              <svg viewBox="0 0 24 34" fill="none" style={{ width: 22, height: 30 }}>
                <path d="M12 4 Q5 14 5 22 Q5 31 12 32 Q19 31 19 22 Q19 14 12 4Z"
                  stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.07)" strokeLinejoin="round"/>
                <path d="M8.5 19 Q7.5 23 10 27" stroke="rgba(27,42,107,0.22)" strokeWidth="1.8"
                  strokeLinecap="round" fill="none"/>
              </svg>
            }
          />
        </div>
      </div>
    </SlideWrapper>
  )
}

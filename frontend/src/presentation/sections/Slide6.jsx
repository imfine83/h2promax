import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const bg = '#EAE9E3'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.78, delay: d, ease: [0.16, 1, 0.3, 1] },
})

const textCol =
  'relative z-10 flex min-h-0 min-w-0 w-full flex-col justify-center overflow-y-auto text-left ' +
  'max-md:flex-shrink-0 max-md:max-h-[46vh] max-md:pl-12 max-md:pr-4 ' +
  '[&_h2]:text-balance max-md:pt-[max(4rem,calc(env(safe-area-inset-top,0px)+2.5rem))] max-md:pb-3 ' +
  'md:max-h-none md:w-auto md:flex-[0_0_44%] md:overflow-y-visible md:pb-10 md:pl-6 md:pr-5 md:pt-12 ' +
  'lg:px-10 lg:py-10 xl:px-[clamp(2.5rem,5.5%,6rem)] xl:py-[clamp(2rem,5%,5rem)]'

export default function Slide6() {
  const { t } = useLanguage()
  const s = t.slides.slide6
  const beforeLabel = t.slides.slide6before
  const afterLabel = t.slides.slide6after

  return (
    <div
      className="relative flex h-full min-h-0 w-full flex-1 flex-col items-stretch overflow-hidden md:flex-row"
      style={{ background: bg }}
    >
      <div
        className="pointer-events-none absolute"
        style={{
          top: -160,
          left: -160,
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,158,168,0.22) 0%, transparent 65%)',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: -180,
          right: -180,
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,158,168,0.18) 0%, transparent 65%)',
        }}
      />

      <div className={textCol}>
        <motion.p {...up(0.0)}
          className="text-[#1B2A6B]/45 mb-4 font-bold uppercase tracking-[0.24em] md:mb-5"
          style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
        >
          {s.eyebrow}
        </motion.p>

        <motion.h2 {...up(0.08)}
          className="mb-6 font-black leading-tight text-[#1B2A6B] md:mb-9 md:leading-[1.1]"
          style={{ fontSize: 'clamp(1.05rem, calc(2.8vw + 0.2rem), 2.8rem)' }}
        >
          {s.headline}
        </motion.h2>

        <div className="space-y-4 md:space-y-6">
          {s.bullets.map((b, i) => (
            <motion.div key={b.title} {...up(0.2 + i * 0.14)} className="flex gap-3 md:gap-4">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                style={{ background: 'rgba(34,167,86,0.15)', minWidth: 20 }}
              >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <polyline
                    points="1,4.5 4,7.5 10,1"
                    stroke="#22A756"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="mb-0.5 font-bold text-[#1B2A6B] md:mb-1" style={{ fontSize: 'clamp(0.78rem, calc(1vw + 0.2rem), 1rem)' }}>
                  {b.title}:
                </p>
                <p className="leading-relaxed text-[#1B2A6B]/55" style={{ fontSize: 'clamp(0.72rem, calc(0.95vw + 0.15rem), 0.96rem)' }}>
                  {b.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative min-h-0 min-w-0 w-full flex-1 overflow-hidden max-md:min-h-[38vh] max-md:pb-24 md:pb-0">
        <div
          className="absolute inset-0 bg-no-repeat max-md:bg-contain max-md:bg-center md:bg-[length:auto_112%] md:bg-right"
          style={{ backgroundImage: 'url(/slides/slide_06.png)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 max-md:opacity-20 md:opacity-100"
          style={{ background: `linear-gradient(to right, ${bg} 0%, rgba(234,233,227,0.6) 18%, transparent 46%)` }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0"
          style={{ height: 88, background: `linear-gradient(to bottom, transparent, ${bg})` }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute right-3 top-3 z-20 flex gap-1.5 max-md:right-4 max-md:top-3 md:right-8 md:top-6 md:gap-2"
        >
          <span
            className="rounded-lg px-2 py-1 text-[10px] font-bold md:px-3 md:py-1.5 md:text-xs"
            style={{ background: 'rgba(27,42,107,0.14)', color: '#1B2A6B', backdropFilter: 'blur(4px)' }}
          >
            {beforeLabel}
          </span>
          <span
            className="rounded-lg bg-[#1B2A6B] px-2 py-1 text-[10px] font-bold text-white md:px-3 md:py-1.5 md:text-xs"
          >
            {afterLabel}
          </span>
        </motion.div>
      </div>
    </div>
  )
}

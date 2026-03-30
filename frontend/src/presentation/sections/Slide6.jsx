import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const bg = '#EAE9E3'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.78, delay: d, ease: [0.16, 1, 0.3, 1] },
})

const textCol =
  'relative z-10 flex min-h-0 min-w-0 flex-[0_0_44%] flex-col overflow-y-auto text-left ' +
  'max-md:justify-start max-md:pl-12 max-md:pr-2 max-md:pt-2 md:justify-center ' +
  '[&_h2]:text-balance md:pt-[max(3.75rem,calc(env(safe-area-inset-top,0px)+2.25rem))] ' +
  'pb-28 md:overflow-y-visible md:pb-10 md:pl-6 md:pr-5 md:pt-12 ' +
  'lg:px-10 lg:py-10 xl:px-[clamp(2.5rem,5.5%,6rem)] xl:py-[clamp(2rem,5%,5rem)]'

export default function Slide6() {
  const { t } = useLanguage()
  const s = t.slides.slide6
  const beforeLabel = t.slides.slide6before
  const afterLabel = t.slides.slide6after

  return (
    <div
      className="relative flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden lg:flex-row"
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

      {/* Телефон: eyebrow + заголовок по центру сверху */}
      <div className="relative z-20 flex w-full shrink-0 flex-col items-center px-3 pb-1 pt-[max(3.25rem,calc(env(safe-area-inset-top,0px)+2.25rem))] text-center md:hidden">
        <motion.p
          {...up(0.0)}
          className="mb-1.5 text-[#1B2A6B]/45 font-bold uppercase tracking-[0.2em]"
          style={{ fontSize: 'clamp(0.58rem, 2.8vw, 0.72rem)' }}
        >
          {s.eyebrow}
        </motion.p>
        <motion.h2
          {...up(0.08)}
          className="max-w-[min(92vw,22rem)] font-black leading-[1.12] text-[#1B2A6B]"
          style={{ fontSize: 'clamp(0.95rem, 4vw, 1.28rem)' }}
        >
          {s.headline}
        </motion.h2>
      </div>

      <div className="flex min-h-0 min-w-0 flex-1 flex-row items-stretch overflow-hidden">
      <div className={textCol}>
        <motion.p {...up(0.0)}
          className="text-[#1B2A6B]/45 mb-3 font-bold uppercase tracking-[0.24em] max-lg:tracking-[0.18em] max-md:hidden md:mb-5"
          style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
        >
          {s.eyebrow}
        </motion.p>

        <motion.h2 {...up(0.08)}
          className="mb-4 max-lg:mb-3 max-lg:leading-[1.15] font-black leading-tight text-[#1B2A6B] max-lg:[font-size:clamp(0.88rem,3.6vw,1.28rem)] max-md:hidden lg:mb-9 lg:leading-[1.1] lg:[font-size:clamp(1.05rem,calc(2.8vw+0.2rem),2.8rem)]"
        >
          {s.headline}
        </motion.h2>

        <div className="mt-0 space-y-2 max-md:space-y-1.5 max-lg:space-y-2 md:mt-0 md:space-y-6">
          {s.bullets.map((b, i) => (
            <motion.div key={b.title} {...up(0.2 + i * 0.14)} className="flex gap-2 md:gap-4">
              <span
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md md:h-5 md:w-5"
                style={{ background: 'rgba(34,167,86,0.15)', minWidth: 16 }}
              >
                <svg className="md:scale-100 scale-90" width="11" height="9" viewBox="0 0 11 9" fill="none">
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
                <p className="mb-0 max-lg:mb-px max-lg:text-[0.8rem] max-lg:leading-snug font-bold text-[#1B2A6B] md:mb-1 md:text-[clamp(0.78rem,calc(1vw+0.2rem),1rem)]">
                  {b.title}:
                </p>
                <p className="max-lg:text-[0.78rem] max-lg:leading-snug leading-relaxed text-[#1B2A6B]/55 md:text-[clamp(0.72rem,calc(0.95vw+0.15rem),0.96rem)]">
                  {b.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden shadow-[inset_0_0_0_1px_rgba(27,42,107,0.04)] max-lg:rounded-r-2xl lg:rounded-l-xl">
        <div
          className="absolute inset-0 bg-no-repeat max-lg:bg-[length:auto_60%] max-lg:[background-position:86%_center] lg:bg-right lg:bg-[length:auto_112%]"
          style={{ backgroundImage: 'url(/slides/slide_06.png)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 max-lg:opacity-40 lg:opacity-100"
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
          className="absolute right-8 top-6 z-20 flex gap-2"
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
    </div>
  )
}

import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const bg = '#EAE9E3'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.78, delay: d, ease: [0.16, 1, 0.3, 1] },
})

export default function Slide6() {
  const { t } = useLanguage()
  const s = t.slides.slide6
  const beforeLabel = t.slides.slide6before
  const afterLabel  = t.slides.slide6after

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col md:flex-row" style={{ background: bg }}>
      {/* Decorative ambient circles */}
      <div className="absolute pointer-events-none"
        style={{ top: -160, left: -160, width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,158,168,0.22) 0%, transparent 65%)' }} />
      <div className="absolute pointer-events-none"
        style={{ bottom: -180, right: -180, width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,158,168,0.18) 0%, transparent 65%)' }} />

      {/* ── Mobile: image top, text below ── */}
      <div
        className="md:hidden w-full flex-[0_0_auto] relative overflow-hidden flex items-center justify-center"
        style={{
          minHeight: 'min(36vh, 240px)',
          maxHeight: 'min(44vh, 300px)',
          backgroundColor: bg,
        }}
      >
        {/* Image */}
        <div
          className="absolute inset-3 sm:inset-4"
          style={{
            backgroundImage: 'url(/slides/slide_06.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Mask the original Before/After text from image */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent 50%, ${bg})` }} />
        {/* HTML Before/After labels */}
        <div className="absolute top-3 right-3 flex gap-1 z-10">
          <span className="text-[10px] font-bold px-2 py-1 rounded"
            style={{ background: 'rgba(27,42,107,0.12)', color: '#1B2A6B' }}>
            {beforeLabel}
          </span>
          <span className="text-[10px] font-bold px-2 py-1 rounded"
            style={{ background: '#1B2A6B', color: '#fff' }}>
            {afterLabel}
          </span>
        </div>
      </div>

      <div className="md:hidden flex-1 min-h-0 relative z-10 flex flex-col justify-start overflow-y-auto px-5 sm:px-6 pt-2 pb-28 w-full max-w-lg mx-auto">
        <p className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.24em] mb-4 text-[10px]">{s.eyebrow}</p>
        <h2 className="font-black text-[#1B2A6B] leading-[1.1] mb-5 text-2xl">{s.headline}</h2>
        <div className="space-y-4">
          {s.bullets.map((b) => (
            <div key={b.title} className="flex gap-3">
              <span className="shrink-0 mt-0.5 w-5 h-5 rounded-md flex items-center justify-center"
                style={{ background: 'rgba(34,167,86,0.15)', minWidth: 20 }}>
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <polyline points="1,4.5 4,7.5 10,1" stroke="#22A756" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <p className="font-bold text-[#1B2A6B] mb-0.5 text-sm">{b.title}:</p>
                <p className="text-[#1B2A6B]/55 leading-relaxed text-xs">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop: side by side ── */}
      {/* Text panel */}
      <div className="hidden md:flex relative z-10 flex-col justify-center"
        style={{ flex: '0 0 44%', padding: 'clamp(2rem, 5%, 5rem) clamp(2.5rem, 5.5%, 6rem)' }}>
        <motion.p {...up(0.0)}
          className="text-[#1B2A6B]/45 font-bold uppercase tracking-[0.24em] mb-5"
          style={{ fontSize: 'clamp(0.62rem, 0.8vw, 0.74rem)' }}
        >
          {s.eyebrow}
        </motion.p>

        <motion.h2 {...up(0.08)}
          className="font-black text-[#1B2A6B] leading-[1.1] mb-9"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
        >
          {s.headline}
        </motion.h2>

        <div className="space-y-6">
          {s.bullets.map((b, i) => (
            <motion.div key={b.title} {...up(0.2 + i * 0.14)} className="flex gap-4">
              <span className="shrink-0 mt-0.5 w-5 h-5 rounded-md flex items-center justify-center"
                style={{ background: 'rgba(34,167,86,0.15)', minWidth: 20 }}>
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <polyline points="1,4.5 4,7.5 10,1" stroke="#22A756" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <p className="font-bold text-[#1B2A6B] mb-1"
                  style={{ fontSize: 'clamp(0.88rem, 1.1vw, 1rem)' }}>
                  {b.title}:
                </p>
                <p className="text-[#1B2A6B]/55 leading-relaxed"
                  style={{ fontSize: 'clamp(0.84rem, 1.05vw, 0.96rem)' }}>
                  {b.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image panel with Before/After HTML overlay */}
      <div className="hidden md:block relative flex-1 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0"
          style={{ backgroundImage: 'url(/slides/slide_06.png)', backgroundSize: 'auto 112%',
            backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }} />
        {/* Gradient blend */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${bg} 0%, rgba(234,233,227,0.6) 18%, transparent 46%)` }} />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: 88, background: `linear-gradient(to bottom, transparent, ${bg})` }} />

        {/* Before / After HTML labels — positioned over the image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-6 right-8 flex gap-2 z-20"
        >
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-lg"
            style={{ background: 'rgba(27,42,107,0.14)', color: '#1B2A6B', backdropFilter: 'blur(4px)' }}
          >
            {beforeLabel}
          </span>
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-lg"
            style={{ background: '#1B2A6B', color: '#fff' }}
          >
            {afterLabel}
          </span>
        </motion.div>
      </div>
    </div>
  )
}

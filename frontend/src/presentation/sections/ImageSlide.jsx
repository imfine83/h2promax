import { motion } from 'framer-motion'

export function FullImageSlide({ src, alt, bg = '#EAEAE5' }) {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: bg }}>
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
        style={{ objectFit: 'contain', objectPosition: 'center' }}
        draggable={false}
        initial={{ scale: 1.03 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 12, ease: 'linear' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 100, background: `linear-gradient(to bottom, transparent, ${bg})` }}
      />
    </div>
  )
}

export function SplitImageSlide({ src, imageSide = 'right', bg = '#EAEAE5', children }) {
  const imgOnRight = imageSide === 'right'

  return (
    <div className="w-full h-full min-h-0 flex-1 relative overflow-hidden flex flex-col md:flex-row" style={{ background: bg }}>
      {/* Decorative ambient circles */}
      <div className="absolute pointer-events-none"
        style={{ top: -160, left: -160, width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,158,168,0.22) 0%, transparent 65%)' }} />
      <div className="absolute pointer-events-none"
        style={{ bottom: -180, right: -180, width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,158,168,0.18) 0%, transparent 65%)' }} />

      {/*
        Mobile: как на ПК по смыслу — сначала текст, снизу иллюстрация (не рядом с тем же
        абзацем в одном экране = нет «двойного» чтения). Верх PNG притемняем градиентом,
        если на макете дублируется заголовок.
      */}
      <div className="md:hidden flex flex-col flex-1 min-h-0 h-full w-full relative z-10">
        <div className="flex-1 min-h-0 overflow-y-auto pl-14 pr-14 sm:pl-16 sm:pr-16 pt-4 pb-3 w-full max-w-lg mx-auto">
          {children}
        </div>
        <div
          className="relative flex-shrink-0 w-full mt-auto border-t border-[rgba(27,42,107,0.06)]"
          style={{
            height: 'clamp(11rem, 32vh, 15.5rem)',
            minHeight: 168,
            backgroundColor: bg,
            paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))',
          }}
        >
          <div
            className="absolute left-2 right-2 top-2 bottom-1"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'contain',
              backgroundPosition: imgOnRight ? 'right bottom' : 'left bottom',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute inset-x-0 top-0 pointer-events-none z-[1]"
            style={{
              height: '42%',
              background: `linear-gradient(to bottom, ${bg} 0%, ${bg} 35%, transparent 100%)`,
            }}
          />
        </div>
      </div>

      {/* Desktop: side by side */}
      {imgOnRight ? (
        <>
          <div className="hidden md:flex relative z-10 flex-col justify-center"
            style={{ flex: '0 0 44%', padding: 'clamp(2rem, 5%, 5rem) clamp(2.5rem, 5.5%, 6rem)' }}>
            {children}
          </div>
          <div className="hidden md:block relative flex-1 overflow-hidden"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'auto 112%',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
            }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: `linear-gradient(to right, ${bg} 0%, rgba(234,234,229,0.7) 18%, transparent 48%)` }} />
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{ height: 88, background: `linear-gradient(to bottom, transparent, ${bg})` }} />
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:block relative flex-1 overflow-hidden"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'auto 112%',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
            }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: `linear-gradient(to left, ${bg} 0%, rgba(234,234,229,0.7) 18%, transparent 48%)` }} />
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{ height: 88, background: `linear-gradient(to bottom, transparent, ${bg})` }} />
          </div>
          <div className="hidden md:flex relative z-10 flex-col justify-center"
            style={{ flex: '0 0 44%', padding: 'clamp(2rem, 5%, 5rem) clamp(2.5rem, 5.5%, 6rem)' }}>
            {children}
          </div>
        </>
      )}
    </div>
  )
}

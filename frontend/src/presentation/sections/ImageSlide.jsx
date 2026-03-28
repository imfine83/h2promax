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
    <div className="w-full h-full relative overflow-hidden flex flex-col md:flex-row" style={{ background: bg }}>
      {/* Decorative ambient circles */}
      <div className="absolute pointer-events-none"
        style={{ top: -160, left: -160, width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,158,168,0.22) 0%, transparent 65%)' }} />
      <div className="absolute pointer-events-none"
        style={{ bottom: -180, right: -180, width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,158,168,0.18) 0%, transparent 65%)' }} />

      {/* Mobile: image on top, text below */}
      <div className="md:hidden w-full flex-shrink-0 relative overflow-hidden" style={{ height: '42%' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent 50%, ${bg})` }} />
      </div>

      <div className="md:hidden flex-1 relative z-10 flex flex-col justify-start overflow-y-auto px-6 pt-3 pb-16">
        {children}
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

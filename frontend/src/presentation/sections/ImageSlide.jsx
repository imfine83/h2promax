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

/**
 * Ряд как на ПК: текст 44% + картинка 56%; фон иллюстрации на всех ширинах — auto 112% + right/left (как десктоп).
 */
export function SplitImageSlide({ src, imageSide = 'right', bg = '#EAEAE5', children }) {
  const imgOnRight = imageSide === 'right'

  const textColMobilePad = imgOnRight ? 'max-md:pl-12 max-md:pr-2' : 'max-md:pl-2 max-md:pr-12'

  const textCol =
    'relative z-10 flex min-h-0 min-w-0 flex-[0_0_44%] flex-col justify-center overflow-y-auto text-left ' +
    textColMobilePad +
    ' [&_h2]:text-balance max-md:pt-[max(3.75rem,calc(env(safe-area-inset-top,0px)+2.25rem))] ' +
    'pb-28 md:overflow-y-visible md:pb-10 md:pl-6 md:pr-5 md:pt-12 ' +
    'lg:px-10 lg:py-10 xl:px-[clamp(2.5rem,5.5%,6rem)] xl:py-[clamp(2rem,5%,5rem)]'

  const imageBgLayer =
    'absolute inset-0 bg-[length:auto_112%] bg-no-repeat ' + (imgOnRight ? 'bg-right' : 'bg-left')

  const imageCol = (
    <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
      <div className={imageBgLayer} style={{ backgroundImage: `url(${src})` }} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: imgOnRight
            ? `linear-gradient(to right, ${bg} 0%, rgba(234,234,229,0.7) 18%, transparent 48%)`
            : `linear-gradient(to left, ${bg} 0%, rgba(234,234,229,0.7) 18%, transparent 48%)`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{ height: 88, background: `linear-gradient(to bottom, transparent, ${bg})` }}
      />
    </div>
  )

  return (
    <div
      className="relative flex h-full min-h-0 w-full flex-1 flex-row items-stretch overflow-hidden"
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

      {imgOnRight ? (
        <>
          <div className={textCol}>{children}</div>
          {imageCol}
        </>
      ) : (
        <>
          {imageCol}
          <div className={textCol}>{children}</div>
        </>
      )}
    </div>
  )
}

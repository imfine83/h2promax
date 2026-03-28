/**
 * FullImageSlide  — fullscreen image with Ken Burns effect (slides 4, 7, 11)
 * SplitImageSlide — PDF image on one side + HTML text on the other (slides 2, 6, 8, 9)
 */
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
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 12, ease: 'linear' }}
      />
      {/* Bottom vignette — hides watermark, adds depth */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 100, background: `linear-gradient(to bottom, transparent, ${bg})` }}
      />
    </div>
  )
}

/**
 * imageSide: 'right' → image is on the right half of the screen (default)
 *            'left'  → image is on the left half of the screen
 *
 * The image is shown anchored to the imageSide, revealing the correct half
 * of the PDF slide (e.g. illustration on right → right portion of image).
 */
export function SplitImageSlide({ src, imageSide = 'right', bg = '#EAEAE5', children }) {
  const imgOnRight = imageSide === 'right'

  const TextPanel = () => (
    <div
      className="relative z-10 flex flex-col justify-center"
      style={{ flex: '0 0 44%', padding: 'clamp(2rem, 5%, 5rem) clamp(2.5rem, 5.5%, 6rem)' }}
    >
      {children}
    </div>
  )

  const ImagePanel = () => (
    <div
      className="relative flex-1 overflow-hidden"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'auto 112%',
        backgroundPosition: `${imgOnRight ? 'right' : 'left'} center`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient — blends image into text side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: imgOnRight
            ? `linear-gradient(to right, ${bg} 0%, rgba(234,234,229,0.7) 18%, transparent 48%)`
            : `linear-gradient(to left,  ${bg} 0%, rgba(234,234,229,0.7) 18%, transparent 48%)`,
        }}
      />
      {/* Bottom fade — covers any residual watermark */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 88, background: `linear-gradient(to bottom, transparent, ${bg})` }}
      />
    </div>
  )

  return (
    <div className="w-full h-full relative overflow-hidden flex" style={{ background: bg }}>
      {/* Decorative ambient circles */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -160, left: -160, width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,158,168,0.22) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -180, right: -180, width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,158,168,0.18) 0%, transparent 65%)',
        }}
      />

      {imgOnRight ? (
        <>
          <TextPanel />
          <ImagePanel />
        </>
      ) : (
        <>
          <ImagePanel />
          <TextPanel />
        </>
      )}
    </div>
  )
}

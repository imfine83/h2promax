/**
 * Рамка под слайды 4 / 7 / 11: соотношение сторон как у PNG (1912×1067),
 * чтобы проценты top/left совпадали с макетом и не было сдвига от 16:9.
 */
export const SLIDE_IMG = { w: 1912, h: 1067 }

export default function SlideImageFrame({ bg, src, children }) {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: bg }}>
      <div
        className="relative"
        style={{
          aspectRatio: `${SLIDE_IMG.w} / ${SLIDE_IMG.h}`,
          width: `min(100%, calc(100vh * ${SLIDE_IMG.w} / ${SLIDE_IMG.h}))`,
          maxHeight: '100%',
        }}
      >
        <img
          src={src}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full select-none pointer-events-none"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
        {children}
      </div>
    </div>
  )
}

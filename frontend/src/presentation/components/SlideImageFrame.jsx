/**
 * Рамка под слайды 4 / 7 / 11: соотношение сторон как у PNG (1912×1067),
 * чтобы проценты top/left совпадали с макетом и не было сдвига от 16:9.
 */
export const SLIDE_IMG = { w: 1912, h: 1067 }

export default function SlideImageFrame({ bg, src, children }) {
  return (
    <div
      className="w-full h-full min-h-0 flex-1 flex items-center justify-center box-border
        px-0
        pt-[max(3.25rem,env(safe-area-inset-top,0px))]
        pb-[max(5.75rem,env(safe-area-inset-bottom,0px))]
        md:py-0"
      style={{ background: bg }}
    >
      <div
        className={
          'relative mx-auto max-w-full aspect-[1912/1067] ' +
          'max-md:h-[min(calc(100dvh-9rem),calc(100vw*1067/1912))] max-md:w-auto ' +
          'md:h-auto md:max-h-full md:w-[min(100%,calc(100vh*1912/1067))]'
        }
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

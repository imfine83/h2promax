/**
 * Рамка под слайды 4 / 7 / 11: соотношение сторон как у PNG (1912×1067),
 * чтобы проценты top/left совпадали с макетом и не было сдвига от 16:9.
 *
 * phoneStackedHeader — на max-md: полоса сверху по центру (как SplitImageSlide + слайд 8);
 * картинка в flex-1 по центру с теми же горизонтальными отступами, что у сплит-слайдов.
 */
export const SLIDE_IMG = { w: 1912, h: 1067 }

export default function SlideImageFrame({ bg, src, children, phoneStackedHeader = null }) {
  const hasPhoneHeader = phoneStackedHeader != null

  return (
    <div
      className={
        'box-border flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden md:flex-row ' +
        'md:items-center md:justify-center px-0 ' +
        (hasPhoneHeader
          ? 'pt-0 pb-[max(5.75rem,env(safe-area-inset-bottom,0px))] md:py-0'
          : 'pt-[max(3.25rem,env(safe-area-inset-top,0px))] pb-[max(5.75rem,env(safe-area-inset-bottom,0px))] md:py-0')
      }
      style={{ background: bg }}
    >
      {hasPhoneHeader ? (
        <div className="relative z-20 flex w-full shrink-0 flex-col items-center px-3 pb-2 pt-[max(3.25rem,calc(env(safe-area-inset-top,0px)+2.25rem))] text-center md:hidden">
          {phoneStackedHeader}
        </div>
      ) : null}

      <div className="flex min-h-0 w-full flex-1 items-center justify-center px-3 max-md:pb-1 md:px-0 md:pb-0">
        <div
          className={
            'relative mx-auto aspect-[1912/1067] max-w-full ' +
            'max-md:h-[min(calc(100dvh-9rem),calc(100vw*1067/1912))] max-md:w-auto ' +
            'md:h-auto md:max-h-full md:w-[min(100%,calc(100vh*1912/1067))]'
          }
        >
          <img
            src={src}
            alt=""
            draggable={false}
            className="pointer-events-none absolute inset-0 h-full w-full select-none"
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
          {children}
        </div>
      </div>
    </div>
  )
}

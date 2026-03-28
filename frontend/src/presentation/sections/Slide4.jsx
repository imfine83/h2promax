import { useLanguage } from '../../contexts/LanguageContext'

/** Фон слайда = цвет полей PNG — заплатки полностью скрывают английский текст, схема двигателя остаётся видимой */
const BG = '#EBEBE7'
const NAVY = '#1B2A6B'
const BODY = 'rgba(27,42,107,0.72)'

export default function Slide4() {
  const { t } = useLanguage()
  const s = t.slides.slide4

  const patch = (style) => ({
    position: 'absolute',
    backgroundColor: BG,
    boxSizing: 'border-box',
    ...style,
  })

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: BG }}>
      <div
        className="relative w-full h-full"
        style={{ maxWidth: 'min(100%, calc(100vh * 16 / 9))', aspectRatio: '16/9' }}
      >
        <img
          src="/slides/slide_04.png"
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full select-none pointer-events-none"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />

        {/* Заголовок — непрозрачная подложка, только перевод */}
        <div style={patch({ top: '1.2%', left: '5%', right: '5%', padding: '6px 12px', textAlign: 'center', zIndex: 2 })}>
          <span
            className="font-black block leading-tight"
            style={{ color: NAVY, fontSize: 'clamp(0.8rem, 1.85vw, 1.65rem)' }}
          >
            {s.title}
          </span>
        </div>

        <div style={patch({ top: '54%', left: '0.5%', width: '29%', padding: '6px 8px', zIndex: 2 })}>
          <div className="font-black mb-1" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 0.95vw, 0.82rem)' }}>
            1. {s.steps[0].title}
          </div>
          <div style={{ color: BODY, fontSize: 'clamp(0.48rem, 0.72vw, 0.64rem)', lineHeight: 1.45 }}>
            {s.steps[0].body}
          </div>
        </div>

        <div style={patch({ top: '12%', left: '51%', width: '29%', padding: '6px 8px', zIndex: 2 })}>
          <div className="font-black mb-1" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 0.95vw, 0.82rem)' }}>
            2. {s.steps[1].title}
          </div>
          <div style={{ color: BODY, fontSize: 'clamp(0.48rem, 0.72vw, 0.64rem)', lineHeight: 1.45 }}>
            {s.steps[1].body}
          </div>
        </div>

        <div style={patch({ top: '56%', left: '51%', width: '29%', padding: '6px 8px', zIndex: 2 })}>
          <div className="font-black mb-1" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 0.95vw, 0.82rem)' }}>
            3. {s.steps[2].title}
          </div>
          <div style={{ color: BODY, fontSize: 'clamp(0.48rem, 0.72vw, 0.64rem)', lineHeight: 1.45 }}>
            {s.steps[2].body}
          </div>
        </div>

        <div style={patch({ top: '41%', left: '80%', right: '0.5%', padding: '6px 8px', zIndex: 2 })}>
          <div className="font-black mb-1" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 0.95vw, 0.82rem)' }}>
            4. {s.steps[3].title}
          </div>
          <div style={{ color: BODY, fontSize: 'clamp(0.48rem, 0.72vw, 0.64rem)', lineHeight: 1.45 }}>
            {s.steps[3].body}
          </div>
        </div>
      </div>
    </div>
  )
}

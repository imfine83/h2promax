import { useLanguage } from '../../contexts/LanguageContext'
import SlideImageFrame from '../components/SlideImageFrame'

const BG = '#EBEBE7'
const NAVY = '#1B2A6B'
const BODY = 'rgba(27,42,107,0.78)'

export default function Slide4() {
  const { t } = useLanguage()
  const s = t.slides.slide4

  const patch = (style) => ({
    position: 'absolute',
    backgroundColor: BG,
    boxSizing: 'border-box',
    zIndex: 2,
    ...style,
  })

  return (
    <SlideImageFrame bg={BG} src="/slides/slide_04.png">
      {/* Заголовок по центру верха */}
      <div style={patch({ top: '0.8%', left: '4%', right: '4%', padding: '8px 14px', textAlign: 'center' })}>
        <span
          className="font-black block leading-tight"
          style={{ color: NAVY, fontSize: 'clamp(0.78rem, 1.9vw, 1.55rem)', lineHeight: 1.15 }}
        >
          {s.title}
        </span>
      </div>

      {/* 1 — снизу слева у генератора */}
      <div style={patch({ top: '50%', left: '0%', width: '32.5%', padding: '8px 10px 10px 8px' })}>
        <div className="font-black mb-1" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          1. {s.steps[0].title}
        </div>
        <div style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.4 }}>
          {s.steps[0].body}
        </div>
      </div>

      {/* 2 — сверху справа у впуска */}
      <div style={patch({ top: '6.5%', left: '47.5%', width: '32.5%', padding: '8px 10px' })}>
        <div className="font-black mb-1" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          2. {s.steps[1].title}
        </div>
        <div style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.4 }}>
          {s.steps[1].body}
        </div>
      </div>

      {/* 3 — снизу по центру у цилиндра */}
      <div style={patch({ top: '51%', left: '47.5%', width: '32.5%', padding: '8px 10px' })}>
        <div className="font-black mb-1" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          3. {s.steps[2].title}
        </div>
        <div style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.4 }}>
          {s.steps[2].body}
        </div>
      </div>

      {/* 4 — справа у выпуска */}
      <div style={patch({ top: '33%', left: '75.5%', right: '0.5%', padding: '8px 8px 8px 10px' })}>
        <div className="font-black mb-1" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          4. {s.steps[3].title}
        </div>
        <div style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.4 }}>
          {s.steps[3].body}
        </div>
      </div>
    </SlideImageFrame>
  )
}

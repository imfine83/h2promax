import { useLanguage } from '../../contexts/LanguageContext'
import SlideImageFrame from '../components/SlideImageFrame'

const BG = '#EAEAE6'
const NAVY = '#1B2A6B'
const GREEN = '#22A756'
const BODY = 'rgba(27,42,107,0.82)'

export default function Slide11() {
  const { t } = useLanguage()
  const s = t.slides.slide11

  const patch = (style) => ({
    position: 'absolute',
    backgroundColor: BG,
    boxSizing: 'border-box',
    zIndex: 2,
    ...style,
  })

  return (
    <SlideImageFrame bg={BG} src="/slides/slide_11.png">
      {/* Заголовок — зона слева вверху над графиком */}
      <div style={patch({ top: '3%', left: '3%', width: '47%', padding: '8px 12px 10px' })}>
        <span className="font-black block leading-[1.12]" style={{ color: NAVY, fontSize: 'clamp(0.72rem, 1.75vw, 1.48rem)' }}>
          {s.title}
        </span>
      </div>

      {/* Cumulative savings — у конца зелёной линии */}
      <div style={patch({ top: '5%', left: '71%', width: '27%', padding: '5px 8px', textAlign: 'right' })}>
        <span className="font-bold block leading-tight" style={{ color: GREEN, fontSize: 'clamp(0.48rem, 0.95vw, 0.68rem)' }}>
          {s.savings}
        </span>
      </div>

      {/* Growing ROI — в заливке между линиями */}
      <div style={patch({ top: '40%', left: '54%', width: '22%', padding: '4px 6px', textAlign: 'center' })}>
        <span className="font-bold block" style={{ color: NAVY, fontSize: 'clamp(0.5rem, 1vw, 0.72rem)' }}>
          {s.roi}
        </span>
      </div>

      {/* Fleet fuel costs */}
      <div style={patch({ top: '68%', left: '71%', width: '27%', padding: '5px 8px', textAlign: 'right' })}>
        <span className="font-bold block leading-tight" style={{ color: NAVY, fontSize: 'clamp(0.48rem, 0.95vw, 0.68rem)' }}>
          {s.costs}
        </span>
      </div>

      {/* Подписи Time по оси X */}
      <div style={patch({ top: '81%', left: '24%', width: '14%', padding: '3px 4px', textAlign: 'center' })}>
        <span style={{ color: BODY, fontSize: 'clamp(0.45rem, 0.85vw, 0.58rem)', fontWeight: 600 }}>{s.time}</span>
      </div>
      <div style={patch({ top: '81%', left: '58%', width: '14%', padding: '3px 4px', textAlign: 'center' })}>
        <span style={{ color: BODY, fontSize: 'clamp(0.45rem, 0.85vw, 0.58rem)', fontWeight: 600 }}>{s.time}</span>
      </div>

      {/* Вертикальная подпись оси Y */}
      <div
        style={patch({
          top: '26%',
          left: '0%',
          width: '7%',
          height: '38%',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <span
          style={{
            color: BODY,
            fontSize: 'clamp(0.42rem, 0.8vw, 0.55rem)',
            fontWeight: 600,
            transform: 'rotate(-90deg)',
            whiteSpace: 'nowrap',
          }}
        >
          {s.axisY}
        </span>
      </div>

      {/* Основной абзац слева внизу */}
      <div style={patch({ top: '64%', left: '1.5%', width: '48%', padding: '8px 12px' })}>
        <span className="block leading-relaxed" style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.74rem)', lineHeight: 1.45 }}>
          {s.body}
        </span>
      </div>

      {/* Правая карточка */}
      <div
        style={patch({
          top: '61%',
          left: '50.5%',
          width: '47.5%',
          padding: '10px 14px',
          border: '1px solid rgba(27,42,107,0.24)',
          borderRadius: 10,
        })}
      >
        <span className="block leading-relaxed" style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.74rem)', lineHeight: 1.45 }}>
          {s.box}
        </span>
      </div>
    </SlideImageFrame>
  )
}

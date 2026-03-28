import { useLanguage } from '../../contexts/LanguageContext'
import SlideImageFrame from '../components/SlideImageFrame'

const BG = '#EDECE7'
const NAVY = '#1B2A6B'
const LABEL = 'rgba(27,42,107,0.78)'

export default function Slide7() {
  const { t } = useLanguage()
  const s = t.slides.slide7

  const patch = (style) => ({
    position: 'absolute',
    backgroundColor: BG,
    boxSizing: 'border-box',
    zIndex: 2,
    ...style,
  })

  const labelSize = { fontSize: 'clamp(0.5rem, 1vw, 0.74rem)' }

  return (
    <SlideImageFrame bg={BG} src="/slides/slide_07.png">
      <div style={patch({ top: '1%', left: '4%', right: '4%', padding: '8px 12px', textAlign: 'center' })}>
        <span className="font-black block leading-tight" style={{ color: NAVY, fontSize: 'clamp(0.75rem, 1.85vw, 1.5rem)', lineHeight: 1.18 }}>
          {s.title}
        </span>
      </div>

      <div style={patch({ top: '18.5%', left: '4.5%', width: '42%', padding: '6px 10px' })}>
        <span className="font-bold" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.1vw, 0.92rem)' }}>
          {s.engineTypesTitle}
        </span>
      </div>

      {/* Подписи под иконками двигателей — одна линия */}
      <div style={patch({ top: '55.5%', left: '4%', width: '11%', padding: '4px 2px', textAlign: 'center' })}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.engines[0]}</span>
      </div>
      <div style={patch({ top: '55.5%', left: '15.5%', width: '11%', padding: '4px 2px', textAlign: 'center' })}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.engines[1]}</span>
      </div>
      <div style={patch({ top: '55.5%', left: '26.5%', width: '10%', padding: '4px 2px', textAlign: 'center' })}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.engines[2]}</span>
      </div>
      <div style={patch({ top: '52%', left: '36%', width: '15%', padding: '4px 2px', textAlign: 'center' })}>
        <span className="block font-semibold leading-tight whitespace-pre-line" style={{ ...labelSize, color: LABEL }}>{s.engines[3]}</span>
      </div>

      <div style={patch({ top: '18.5%', left: '48.5%', width: '48%', padding: '6px 10px' })}>
        <span className="font-bold" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.1vw, 0.92rem)' }}>
          {s.vehicleTypesTitle}
        </span>
      </div>

      {/* Верхний ряд машин */}
      <div style={patch({ top: '64%', left: '49%', width: '21%', padding: '4px 4px', textAlign: 'center' })}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.vehicles[0]}</span>
      </div>
      <div style={patch({ top: '64%', left: '71%', width: '23%', padding: '4px 4px', textAlign: 'center' })}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.vehicles[1]}</span>
      </div>
      {/* Нижний ряд */}
      <div style={patch({ top: '83%', left: '49%', width: '21%', padding: '4px 4px', textAlign: 'center' })}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.vehicles[2]}</span>
      </div>
      <div style={patch({ top: '83%', left: '71%', width: '23%', padding: '4px 4px', textAlign: 'center' })}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.vehicles[3]}</span>
      </div>

      {/* Нижняя плашка с текстом */}
      <div style={patch({ top: '77%', left: '12%', right: '12%', padding: '10px 16px', textAlign: 'center' })}>
        <span className="block font-medium leading-snug" style={{ color: NAVY, fontSize: 'clamp(0.52rem, 1vw, 0.76rem)', lineHeight: 1.45 }}>
          {s.footer}
        </span>
      </div>
    </SlideImageFrame>
  )
}

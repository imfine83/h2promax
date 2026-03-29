import { useLanguage } from '../../contexts/LanguageContext'
import SlideImageFrame from '../components/SlideImageFrame'
import { patchPanel, patchBand, patchChip } from '../slidePatch'

const BG = '#EDECE7'
const NAVY = '#1B2A6B'
const LABEL = 'rgba(27,42,107,0.78)'

export default function Slide7() {
  const { t } = useLanguage()
  const s = t.slides.slide7
  const src = s.image || '/slides/slide_07.png'

  const labelSize = { fontSize: 'clamp(0.5rem, 1vw, 0.74rem)' }

  if (s.hideOverlays) {
    return <SlideImageFrame bg={BG} src={src} />
  }

  return (
    <SlideImageFrame bg={BG} src={src}>
      <div style={{ ...patchPanel(BG), top: '0.8%', left: '3.5%', right: '3.5%', padding: '12px 18px', textAlign: 'center' }}>
        <span className="font-black block leading-tight" style={{ color: NAVY, fontSize: 'clamp(0.75rem, 1.85vw, 1.5rem)', lineHeight: 1.18 }}>
          {s.title}
        </span>
      </div>

      <div style={{ ...patchBand(BG), top: '18%', left: '4.2%', width: '42%', padding: '8px 14px' }}>
        <span className="font-bold" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.1vw, 0.92rem)' }}>
          {s.engineTypesTitle}
        </span>
      </div>

      <div style={{ ...patchChip(BG), top: '55%', left: '3.8%', width: '11.5%', padding: '6px 8px', textAlign: 'center' }}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.engines[0]}</span>
      </div>
      <div style={{ ...patchChip(BG), top: '55%', left: '15.2%', width: '11.5%', padding: '6px 8px', textAlign: 'center' }}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.engines[1]}</span>
      </div>
      <div style={{ ...patchChip(BG), top: '55%', left: '26.2%', width: '10.5%', padding: '6px 8px', textAlign: 'center' }}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.engines[2]}</span>
      </div>
      <div style={{ ...patchChip(BG), top: '51.5%', left: '35.5%', width: '15.5%', padding: '6px 8px', textAlign: 'center' }}>
        <span className="block font-semibold leading-tight whitespace-pre-line" style={{ ...labelSize, color: LABEL }}>{s.engines[3]}</span>
      </div>

      <div style={{ ...patchBand(BG), top: '18%', left: '48.2%', width: '48%', padding: '8px 14px' }}>
        <span className="font-bold" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.1vw, 0.92rem)' }}>
          {s.vehicleTypesTitle}
        </span>
      </div>

      <div style={{ ...patchChip(BG), top: '63.5%', left: '48.8%', width: '21.5%', padding: '6px 8px', textAlign: 'center' }}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.vehicles[0]}</span>
      </div>
      <div style={{ ...patchChip(BG), top: '63.5%', left: '70.5%', width: '23.5%', padding: '6px 8px', textAlign: 'center' }}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.vehicles[1]}</span>
      </div>
      <div style={{ ...patchChip(BG), top: '82.5%', left: '48.8%', width: '21.5%', padding: '6px 8px', textAlign: 'center' }}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.vehicles[2]}</span>
      </div>
      <div style={{ ...patchChip(BG), top: '82.5%', left: '70.5%', width: '23.5%', padding: '6px 8px', textAlign: 'center' }}>
        <span className="block font-semibold leading-tight" style={{ ...labelSize, color: LABEL }}>{s.vehicles[3]}</span>
      </div>

      <div style={{ ...patchPanel(BG), top: '76.5%', left: '11%', right: '11%', padding: '14px 22px', textAlign: 'center' }}>
        <span className="block font-medium leading-snug" style={{ color: NAVY, fontSize: 'clamp(0.52rem, 1vw, 0.76rem)', lineHeight: 1.45 }}>
          {s.footer}
        </span>
      </div>
    </SlideImageFrame>
  )
}

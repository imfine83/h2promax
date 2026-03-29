import { useLanguage } from '../../contexts/LanguageContext'
import SlideImageFrame from '../components/SlideImageFrame'
import { patchPanel, patchChip } from '../slidePatch'

const BG = '#EAEAE6'
const NAVY = '#1B2A6B'
const GREEN = '#22A756'
const BODY = 'rgba(27,42,107,0.82)'

export default function Slide11() {
  const { t } = useLanguage()
  const s = t.slides.slide11
  const src = s.image || '/slides/slide_11.png'

  if (s.hideOverlays) {
    return <SlideImageFrame bg={BG} src={src} />
  }

  return (
    <SlideImageFrame bg={BG} src={src}>
      <div style={{ ...patchPanel(BG), top: '2.6%', left: '2.6%', width: '47.5%', padding: '12px 16px 14px' }}>
        <span className="font-black block leading-[1.12]" style={{ color: NAVY, fontSize: 'clamp(0.72rem, 1.75vw, 1.48rem)' }}>
          {s.title}
        </span>
      </div>

      <div style={{ ...patchChip(BG), top: '4.5%', left: '70.5%', width: '28%', padding: '8px 12px', textAlign: 'right' }}>
        <span className="font-bold block leading-tight" style={{ color: GREEN, fontSize: 'clamp(0.48rem, 0.95vw, 0.68rem)' }}>
          {s.savings}
        </span>
      </div>

      <div style={{ ...patchChip(BG), top: '39%', left: '53.5%', width: '23%', padding: '8px 10px', textAlign: 'center' }}>
        <span className="font-bold block" style={{ color: NAVY, fontSize: 'clamp(0.5rem, 1vw, 0.72rem)' }}>
          {s.roi}
        </span>
      </div>

      <div style={{ ...patchChip(BG), top: '67%', left: '70.5%', width: '28%', padding: '8px 12px', textAlign: 'right' }}>
        <span className="font-bold block leading-tight" style={{ color: NAVY, fontSize: 'clamp(0.48rem, 0.95vw, 0.68rem)' }}>
          {s.costs}
        </span>
      </div>

      <div style={{ ...patchChip(BG), top: '80%', left: '23.5%', width: '14.5%', padding: '6px 8px', textAlign: 'center' }}>
        <span style={{ color: BODY, fontSize: 'clamp(0.45rem, 0.85vw, 0.58rem)', fontWeight: 600 }}>{s.time}</span>
      </div>
      <div style={{ ...patchChip(BG), top: '80%', left: '57.5%', width: '14.5%', padding: '6px 8px', textAlign: 'center' }}>
        <span style={{ color: BODY, fontSize: 'clamp(0.45rem, 0.85vw, 0.58rem)', fontWeight: 600 }}>{s.time}</span>
      </div>

      <div
        style={{
          ...patchChip(BG),
          top: '25%',
          left: '0.3%',
          width: '7.5%',
          height: '40%',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
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

      <div style={{ ...patchPanel(BG), top: '63%', left: '1.2%', width: '48.5%', padding: '12px 16px' }}>
        <span className="block leading-relaxed" style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.74rem)', lineHeight: 1.45 }}>
          {s.body}
        </span>
      </div>

      <div style={{ ...patchPanel(BG), top: '60%', left: '50%', width: '48%', padding: '14px 18px' }}>
        <span className="block leading-relaxed" style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.74rem)', lineHeight: 1.45 }}>
          {s.box}
        </span>
      </div>
    </SlideImageFrame>
  )
}

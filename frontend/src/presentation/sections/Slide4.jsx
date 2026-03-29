import { useLanguage } from '../../contexts/LanguageContext'
import SlideImageFrame from '../components/SlideImageFrame'
import { patchPanel } from '../slidePatch'

const BG = '#EBEBE7'
const NAVY = '#1B2A6B'
const BODY = 'rgba(27,42,107,0.78)'

export default function Slide4() {
  const { t } = useLanguage()
  const s = t.slides.slide4

  const base = patchPanel(BG)
  const patch = (extra) => ({ ...base, ...extra })

  return (
    <SlideImageFrame bg={BG} src="/slides/slide_04.png">
      <div style={patch({ top: '0.6%', left: '3.5%', right: '3.5%', padding: '12px 18px', textAlign: 'center' })}>
        <span
          className="font-black block leading-tight"
          style={{ color: NAVY, fontSize: 'clamp(0.78rem, 1.9vw, 1.55rem)', lineHeight: 1.15 }}
        >
          {s.title}
        </span>
      </div>

      <div style={patch({ top: '49.5%', left: '0.4%', width: '32.8%', padding: '12px 14px 14px 12px' })}>
        <div className="font-black mb-1.5" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          1. {s.steps[0].title}
        </div>
        <div style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.45 }}>
          {s.steps[0].body}
        </div>
      </div>

      <div style={patch({ top: '6%', left: '47.2%', width: '32.8%', padding: '12px 14px' })}>
        <div className="font-black mb-1.5" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          2. {s.steps[1].title}
        </div>
        <div style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.45 }}>
          {s.steps[1].body}
        </div>
      </div>

      <div style={patch({ top: '50.5%', left: '47.2%', width: '32.8%', padding: '12px 14px' })}>
        <div className="font-black mb-1.5" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          3. {s.steps[2].title}
        </div>
        <div style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.45 }}>
          {s.steps[2].body}
        </div>
      </div>

      <div style={patch({ top: '32.2%', left: '75%', right: '0.4%', padding: '12px 12px 12px 14px' })}>
        <div className="font-black mb-1.5" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          4. {s.steps[3].title}
        </div>
        <div style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.45 }}>
          {s.steps[3].body}
        </div>
      </div>
    </SlideImageFrame>
  )
}

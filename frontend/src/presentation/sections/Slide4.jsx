import { useLanguage } from '../../contexts/LanguageContext'
import SlideImageFrame from '../components/SlideImageFrame'
import { patchPanel, patchPanelMask } from '../slidePatch'

const BG = '#EBEBE7'
/** Чуть плотнее фона слайда — лучше перекрывает английский текст на PNG */
const PATCH = '#E4E4E0'
const NAVY = '#1B2A6B'
const BODY = 'rgba(27,42,107,0.9)'

export default function Slide4() {
  const { t } = useLanguage()
  const s = t.slides.slide4
  const src = s.image || '/slides/slide_04.png'

  const titleBase = patchPanel(BG)
  const stepBase = patchPanelMask(PATCH)
  const patchTitle = (extra) => ({ ...titleBase, ...extra })
  const patch = (extra) => ({ ...stepBase, ...extra })

  if (s.hideOverlays) {
    return <SlideImageFrame bg={BG} src={src} />
  }

  return (
    <SlideImageFrame bg={BG} src={src}>
      <div style={patchTitle({ top: '0.6%', left: '3.5%', right: '3.5%', padding: '12px 18px', textAlign: 'center' })}>
        <span
          className="font-black block leading-tight"
          style={{ color: NAVY, fontSize: 'clamp(0.78rem, 1.9vw, 1.55rem)', lineHeight: 1.15 }}
        >
          {s.title}
        </span>
      </div>

      <div
        style={patch({
          top: '44.5%',
          left: '0.25%',
          width: '35.5%',
          height: '32%',
          padding: '12px 14px 20px 12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        })}
      >
        <div className="font-black mb-1.5 shrink-0" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          1. {s.steps[0].title}
        </div>
        <div className="min-h-0 overflow-hidden" style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.45 }}>
          {s.steps[0].body}
        </div>
      </div>

      <div
        style={patch({
          top: '25%',
          left: '40%',
          width: '38.5%',
          height: '29%',
          padding: '12px 14px 14px 14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        })}
      >
        <div className="font-black mb-1.5 shrink-0" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          2. {s.steps[1].title}
        </div>
        <div className="min-h-0 overflow-hidden" style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.45 }}>
          {s.steps[1].body}
        </div>
      </div>

      <div
        style={patch({
          top: '50.5%',
          left: '32%',
          width: '39.5%',
          height: '32%',
          padding: '12px 16px 18px 14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        })}
      >
        <div className="font-black mb-1.5 shrink-0" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          3. {s.steps[2].title}
        </div>
        <div className="min-h-0 overflow-hidden" style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.45 }}>
          {s.steps[2].body}
        </div>
      </div>

      <div
        style={patch({
          top: '26%',
          left: '69.5%',
          right: '0.35%',
          height: '30%',
          padding: '12px 12px 14px 14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        })}
      >
        <div className="font-black mb-1.5 shrink-0" style={{ color: NAVY, fontSize: 'clamp(0.58rem, 1.15vw, 0.9rem)' }}>
          4. {s.steps[3].title}
        </div>
        <div className="min-h-0 overflow-hidden" style={{ color: BODY, fontSize: 'clamp(0.52rem, 1vw, 0.78rem)', lineHeight: 1.45 }}>
          {s.steps[3].body}
        </div>
      </div>
    </SlideImageFrame>
  )
}

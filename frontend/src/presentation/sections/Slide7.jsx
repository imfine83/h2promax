import { useLanguage } from '../../contexts/LanguageContext'

const BG = '#EDECE7'
const NAVY = '#1B2A6B'
const LABEL = 'rgba(27,42,107,0.72)'

export default function Slide7() {
  const { t } = useLanguage()
  const s = t.slides.slide7

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
          src="/slides/slide_07.png"
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full select-none pointer-events-none"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />

        <div style={patch({ top: '1.2%', left: '3%', right: '3%', padding: '5px 10px', textAlign: 'center', zIndex: 2 })}>
          <span className="font-black block leading-tight" style={{ color: NAVY, fontSize: 'clamp(0.72rem, 1.65vw, 1.45rem)' }}>
            {s.title}
          </span>
        </div>

        <div style={patch({ top: '22%', left: '4%', width: '38%', padding: '3px 8px', zIndex: 2 })}>
          <span className="font-bold" style={{ color: NAVY, fontSize: 'clamp(0.55rem, 0.95vw, 0.88rem)' }}>
            {s.engineTypesTitle}
          </span>
        </div>

        <div style={patch({ top: '56%', left: '3%', width: '11%', padding: '3px 4px', textAlign: 'center', zIndex: 2 })}>
          <span className="block font-semibold leading-tight" style={{ color: LABEL, fontSize: 'clamp(0.45rem, 0.72vw, 0.66rem)' }}>
            {s.engines[0]}
          </span>
        </div>
        <div style={patch({ top: '56%', left: '15.5%', width: '11%', padding: '3px 4px', textAlign: 'center', zIndex: 2 })}>
          <span className="block font-semibold leading-tight" style={{ color: LABEL, fontSize: 'clamp(0.45rem, 0.72vw, 0.66rem)' }}>
            {s.engines[1]}
          </span>
        </div>
        <div style={patch({ top: '56%', left: '26%', width: '9%', padding: '3px 4px', textAlign: 'center', zIndex: 2 })}>
          <span className="block font-semibold leading-tight" style={{ color: LABEL, fontSize: 'clamp(0.45rem, 0.72vw, 0.66rem)' }}>
            {s.engines[2]}
          </span>
        </div>
        <div style={patch({ top: '52%', left: '35.5%', width: '13%', padding: '3px 4px', textAlign: 'center', zIndex: 2 })}>
          <span className="block font-semibold leading-tight whitespace-pre-line" style={{ color: LABEL, fontSize: 'clamp(0.45rem, 0.72vw, 0.66rem)' }}>
            {s.engines[3]}
          </span>
        </div>

        <div style={patch({ top: '22%', left: '50%', width: '46%', padding: '3px 8px', zIndex: 2 })}>
          <span className="font-bold" style={{ color: NAVY, fontSize: 'clamp(0.55rem, 0.95vw, 0.88rem)' }}>
            {s.vehicleTypesTitle}
          </span>
        </div>

        <div style={patch({ top: '66%', left: '50%', width: '20%', padding: '3px 4px', textAlign: 'center', zIndex: 2 })}>
          <span className="block font-semibold leading-tight" style={{ color: LABEL, fontSize: 'clamp(0.45rem, 0.72vw, 0.66rem)' }}>
            {s.vehicles[0]}
          </span>
        </div>
        <div style={patch({ top: '66%', left: '70%', width: '24%', padding: '3px 4px', textAlign: 'center', zIndex: 2 })}>
          <span className="block font-semibold leading-tight" style={{ color: LABEL, fontSize: 'clamp(0.45rem, 0.72vw, 0.66rem)' }}>
            {s.vehicles[1]}
          </span>
        </div>
        <div style={patch({ top: '85%', left: '50%', width: '20%', padding: '3px 4px', textAlign: 'center', zIndex: 2 })}>
          <span className="block font-semibold leading-tight" style={{ color: LABEL, fontSize: 'clamp(0.45rem, 0.72vw, 0.66rem)' }}>
            {s.vehicles[2]}
          </span>
        </div>
        <div style={patch({ top: '85%', left: '70%', width: '24%', padding: '3px 4px', textAlign: 'center', zIndex: 2 })}>
          <span className="block font-semibold leading-tight" style={{ color: LABEL, fontSize: 'clamp(0.45rem, 0.72vw, 0.66rem)' }}>
            {s.vehicles[3]}
          </span>
        </div>

        <div style={patch({ top: '79.5%', left: '15%', right: '15%', padding: '6px 12px', textAlign: 'center', zIndex: 2 })}>
          <span className="block font-medium leading-snug" style={{ color: NAVY, fontSize: 'clamp(0.48rem, 0.78vw, 0.7rem)' }}>
            {s.footer}
          </span>
        </div>
      </div>
    </div>
  )
}

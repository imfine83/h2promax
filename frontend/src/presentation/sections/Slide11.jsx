import { useLanguage } from '../../contexts/LanguageContext'

const BG = '#EAEAE6'
const NAVY = '#1B2A6B'
const GREEN = '#22A756'
const BODY = 'rgba(27,42,107,0.75)'

export default function Slide11() {
  const { t } = useLanguage()
  const s = t.slides.slide11

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
        {/* Весь оригинал: грузовики, график, оси — как в макете */}
        <img
          src="/slides/slide_11.png"
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full select-none pointer-events-none"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />

        {/* Только текстовые зоны — непрозрачные заплатки + перевод */}
        <div style={patch({ top: '3.5%', left: '4%', width: '48%', padding: '6px 10px', zIndex: 2 })}>
          <span className="font-black block leading-tight" style={{ color: NAVY, fontSize: 'clamp(0.75rem, 1.75vw, 1.55rem)' }}>
            {s.title}
          </span>
        </div>

        <div style={patch({ top: '2.5%', left: '70%', width: '26%', padding: '3px 6px', zIndex: 2 })}>
          <span className="font-bold block" style={{ color: GREEN, fontSize: 'clamp(0.42rem, 0.68vw, 0.58rem)' }}>
            {s.savings}
          </span>
        </div>

        <div style={patch({ top: '41%', left: '58%', width: '20%', padding: '3px 5px', zIndex: 2 })}>
          <span className="font-bold block text-center" style={{ color: GREEN, fontSize: 'clamp(0.45rem, 0.72vw, 0.62rem)' }}>
            {s.roi}
          </span>
        </div>

        <div style={patch({ top: '67%', left: '72%', width: '23%', padding: '3px 5px', zIndex: 2 })}>
          <span className="font-bold block" style={{ color: NAVY, fontSize: 'clamp(0.42rem, 0.68vw, 0.58rem)' }}>
            {s.costs}
          </span>
        </div>

        <div style={patch({ top: '84%', left: '28%', width: '12%', padding: '2px 4px', textAlign: 'center', zIndex: 2 })}>
          <span style={{ color: BODY, fontSize: 'clamp(0.38rem, 0.62vw, 0.52rem)', fontWeight: 600 }}>{s.time}</span>
        </div>
        <div style={patch({ top: '84%', left: '62%', width: '12%', padding: '2px 4px', textAlign: 'center', zIndex: 2 })}>
          <span style={{ color: BODY, fontSize: 'clamp(0.38rem, 0.62vw, 0.52rem)', fontWeight: 600 }}>{s.time}</span>
        </div>

        {/* Ось Y подпись (Cost / Savings) — слева у графика */}
        <div
          style={patch({
            top: '38%',
            left: '0.5%',
            width: '8%',
            padding: '4px 2px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <span
            style={{
              color: BODY,
              fontSize: 'clamp(0.35rem, 0.55vw, 0.48rem)',
              fontWeight: 600,
              transform: 'rotate(-90deg)',
              whiteSpace: 'nowrap',
            }}
          >
            {s.axisY}
          </span>
        </div>

        <div style={patch({ top: '65%', left: '2%', width: '46%', padding: '6px 9px', zIndex: 2 })}>
          <span className="block leading-relaxed" style={{ color: BODY, fontSize: 'clamp(0.48rem, 0.72vw, 0.64rem)' }}>
            {s.body}
          </span>
        </div>

        <div
          style={patch({
            top: '61%',
            left: '51%',
            width: '45%',
            padding: '8px 11px',
            zIndex: 2,
            border: '1px solid rgba(27,42,107,0.22)',
            borderRadius: 8,
          })}
        >
          <span className="block leading-relaxed" style={{ color: BODY, fontSize: 'clamp(0.48rem, 0.72vw, 0.64rem)' }}>
            {s.box}
          </span>
        </div>
      </div>
    </div>
  )
}

import { useLanguage } from '../../contexts/LanguageContext'

const BG = '#EDECE7'
const NAVY = '#1B2A6B'
const BODY = 'rgba(55,65,110,0.68)'

export default function Slide7() {
  const { t } = useLanguage()
  const s = t.slides.slide7

  const p = (extra) => ({
    position: 'absolute',
    background: BG,
    ...extra,
  })

  const heading = { fontFamily: 'Inter,sans-serif', fontWeight: 700, color: NAVY, lineHeight: 1.2 }
  const label   = { fontFamily: 'Inter,sans-serif', fontWeight: 400, color: BODY, lineHeight: 1.3, textAlign: 'center' }
  const title   = { fontFamily: 'Inter,sans-serif', fontWeight: 900, color: NAVY, lineHeight: 1.2 }
  const footer  = { fontFamily: 'Inter,sans-serif', fontWeight: 400, color: NAVY, lineHeight: 1.45, textAlign: 'center' }

  return (
    <div style={{ width: '100%', height: '100%', background: BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: 'calc(100vh * 16 / 9)', maxHeight: '100%', aspectRatio: '16/9' }}>

        {/* Original image — unchanged */}
        <img src="/slides/slide_07.png" alt="" draggable={false}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'fill', pointerEvents: 'none', userSelect: 'none' }} />

        {/* ─── Title ─── */}
        <div style={p({ top: '1.5%', left: '4%', right: '4%', padding: '4px 8px', textAlign: 'center' })}>
          <span style={{ ...title, fontSize: 'clamp(0.75rem, 1.8vw, 1.5rem)' }}>{s.title}</span>
        </div>

        {/* ─── "Supported Engine Types" heading ─── */}
        <div style={p({ top: '23%', left: '5%', width: '36%', padding: '2px 6px' })}>
          <span style={{ ...heading, fontSize: 'clamp(0.6rem, 1.1vw, 0.95rem)' }}>{s.engineTypesTitle}</span>
        </div>

        {/* ─── Engine labels (below icons) ─── */}
        <div style={p({ top: '57%', left: '4%', width: '10%', padding: '2px 4px' })}>
          <span style={{ ...label, fontSize: 'clamp(0.5rem, 0.82vw, 0.7rem)', display: 'block' }}>{s.engines[0]}</span>
        </div>
        <div style={p({ top: '57%', left: '16.5%', width: '10%', padding: '2px 4px' })}>
          <span style={{ ...label, fontSize: 'clamp(0.5rem, 0.82vw, 0.7rem)', display: 'block' }}>{s.engines[1]}</span>
        </div>
        <div style={p({ top: '57%', left: '27%', width: '8%', padding: '2px 4px' })}>
          <span style={{ ...label, fontSize: 'clamp(0.5rem, 0.82vw, 0.7rem)', display: 'block' }}>{s.engines[2]}</span>
        </div>
        <div style={p({ top: '53%', left: '36.5%', width: '12%', padding: '2px 4px' })}>
          <span style={{ ...label, fontSize: 'clamp(0.5rem, 0.82vw, 0.7rem)', display: 'block', whiteSpace: 'pre-line' }}>{s.engines[3]}</span>
        </div>

        {/* ─── "Supported Vehicle Types" heading ─── */}
        <div style={p({ top: '23%', left: '51%', width: '44%', padding: '2px 6px' })}>
          <span style={{ ...heading, fontSize: 'clamp(0.6rem, 1.1vw, 0.95rem)' }}>{s.vehicleTypesTitle}</span>
        </div>

        {/* ─── Vehicle labels ─── */}
        <div style={p({ top: '67%', left: '51%', width: '19%', padding: '2px 4px', textAlign: 'center' })}>
          <span style={{ ...label, fontSize: 'clamp(0.5rem, 0.82vw, 0.7rem)', display: 'block' }}>{s.vehicles[0]}</span>
        </div>
        <div style={p({ top: '67%', left: '71%', width: '23%', padding: '2px 4px', textAlign: 'center' })}>
          <span style={{ ...label, fontSize: 'clamp(0.5rem, 0.82vw, 0.7rem)', display: 'block' }}>{s.vehicles[1]}</span>
        </div>
        <div style={p({ top: '86%', left: '51%', width: '19%', padding: '2px 4px', textAlign: 'center' })}>
          <span style={{ ...label, fontSize: 'clamp(0.5rem, 0.82vw, 0.7rem)', display: 'block' }}>{s.vehicles[2]}</span>
        </div>
        <div style={p({ top: '86%', left: '71%', width: '23%', padding: '2px 4px', textAlign: 'center' })}>
          <span style={{ ...label, fontSize: 'clamp(0.5rem, 0.82vw, 0.7rem)', display: 'block' }}>{s.vehicles[3]}</span>
        </div>

        {/* ─── Footer box text ─── */}
        <div style={p({ top: '81%', left: '17%', right: '17%', padding: '4px 8px' })}>
          <span style={{ ...footer, fontSize: 'clamp(0.5rem, 0.85vw, 0.72rem)' }}>{s.footer}</span>
        </div>

      </div>
    </div>
  )
}

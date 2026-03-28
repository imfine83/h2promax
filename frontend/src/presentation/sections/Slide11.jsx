import { useLanguage } from '../../contexts/LanguageContext'

const BG = '#EAEAE6'
const NAVY = '#1B2A6B'
const GREEN = '#22A756'
const BODY = 'rgba(40,50,100,0.68)'

export default function Slide11() {
  const { t } = useLanguage()
  const s = t.slides.slide11

  const p = (extra) => ({
    position: 'absolute',
    background: BG,
    ...extra,
  })

  const title  = { fontFamily: 'Inter,sans-serif', fontWeight: 900, color: NAVY, lineHeight: 1.15 }
  const body   = { fontFamily: 'Inter,sans-serif', fontWeight: 400, color: BODY, lineHeight: 1.5 }
  const chartG = { fontFamily: 'Inter,sans-serif', fontWeight: 700, color: GREEN, lineHeight: 1.2 }
  const chartN = { fontFamily: 'Inter,sans-serif', fontWeight: 700, color: NAVY, lineHeight: 1.2 }
  const axis   = { fontFamily: 'Inter,sans-serif', fontWeight: 400, color: BODY, lineHeight: 1.2 }

  return (
    <div style={{ width: '100%', height: '100%', background: BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: 'calc(100vh * 16 / 9)', maxHeight: '100%', aspectRatio: '16/9' }}>

        {/* Original image — unchanged */}
        <img src="/slides/slide_11.png" alt="" draggable={false}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'fill', pointerEvents: 'none', userSelect: 'none' }} />

        {/* ─── Title (top-left) ─── */}
        <div style={p({ top: '4%', left: '5%', width: '47%', padding: '5px 8px' })}>
          <span style={{ ...title, fontSize: 'clamp(0.75rem, 1.9vw, 1.6rem)' }}>{s.title}</span>
        </div>

        {/* ─── Chart label: Cumulative Savings (top-right) ─── */}
        <div style={p({ top: '4%', left: '73%', width: '23%', padding: '2px 5px' })}>
          <span style={{ ...chartG, fontSize: 'clamp(0.45rem, 0.75vw, 0.62rem)' }}>{s.savings}</span>
        </div>

        {/* ─── Chart label: Growing ROI (middle) ─── */}
        <div style={p({ top: '43%', left: '60%', width: '18%', padding: '2px 4px' })}>
          <span style={{ ...chartG, fontSize: 'clamp(0.45rem, 0.75vw, 0.62rem)' }}>{s.roi}</span>
        </div>

        {/* ─── Chart label: Fleet Fuel Costs (lower-right) ─── */}
        <div style={p({ top: '68%', left: '74%', width: '21%', padding: '2px 4px' })}>
          <span style={{ ...chartN, fontSize: 'clamp(0.45rem, 0.75vw, 0.62rem)' }}>{s.costs}</span>
        </div>

        {/* ─── X-axis "Time" labels ─── */}
        <div style={p({ top: '87%', left: '27%', width: '12%', padding: '1px 4px', textAlign: 'center' })}>
          <span style={{ ...axis, fontSize: 'clamp(0.4rem, 0.68vw, 0.58rem)' }}>{s.time}</span>
        </div>
        <div style={p({ top: '87%', left: '63%', width: '12%', padding: '1px 4px', textAlign: 'center' })}>
          <span style={{ ...axis, fontSize: 'clamp(0.4rem, 0.68vw, 0.58rem)' }}>{s.time}</span>
        </div>

        {/* ─── Body text (bottom-left) ─── */}
        <div style={p({ top: '66%', left: '3%', width: '47%', padding: '5px 8px' })}>
          <span style={{ ...body, fontSize: 'clamp(0.48rem, 0.78vw, 0.66rem)' }}>{s.body}</span>
        </div>

        {/* ─── Info box (bottom-right) — with border matching original ─── */}
        <div style={p({ top: '62%', left: '52%', width: '44%', padding: '6px 10px', border: '1px solid rgba(27,42,107,0.2)', borderRadius: 6 })}>
          <span style={{ ...body, fontSize: 'clamp(0.48rem, 0.78vw, 0.66rem)' }}>{s.box}</span>
        </div>

      </div>
    </div>
  )
}

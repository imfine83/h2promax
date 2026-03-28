import { useLanguage } from '../../contexts/LanguageContext'

const BG = '#EAEAE6'

export default function Slide11() {
  const { t } = useLanguage()
  const s = t.slides.slide11

  const patch = {
    position: 'absolute',
    background: BG,
    borderRadius: 4,
  }

  const titleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 900,
    color: '#1B2A6B',
    fontSize: 'clamp(1rem, 2.4vw, 1.9rem)',
    lineHeight: 1.15,
  }

  const bodyStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    color: 'rgba(27,42,107,0.65)',
    fontSize: 'clamp(0.55rem, 0.85vw, 0.75rem)',
    lineHeight: 1.5,
  }

  const chartLabelStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: 'clamp(0.5rem, 0.75vw, 0.65rem)',
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: BG }}>

      {/* Original image — full opacity */}
      <img
        src="/slides/slide_11.png"
        alt=""
        draggable={false}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', userSelect: 'none' }}
      />

      {/* ── Title patch (top-left) ── */}
      <div style={{ ...patch, top: '4%', left: '5%', width: '47%', padding: '8px 10px' }}>
        <p style={titleStyle}>{s.title}</p>
      </div>

      {/* ── "Cumulative Savings" label (top-right of chart) ── */}
      <div style={{ ...patch, top: '3%', left: '71%', width: '24%', padding: '2px 5px' }}>
        <p style={{ ...chartLabelStyle, color: '#22A756' }}>{s.savings}</p>
      </div>

      {/* ── "Growing ROI" label (middle of chart) ── */}
      <div style={{ ...patch, top: '43%', left: '60%', width: '18%', padding: '2px 4px' }}>
        <p style={{ ...chartLabelStyle, color: '#22A756' }}>{s.roi}</p>
      </div>

      {/* ── "Fleet Fuel Costs" label (bottom-right of chart) ── */}
      <div style={{ ...patch, top: '69%', left: '71%', width: '22%', padding: '2px 4px' }}>
        <p style={{ ...chartLabelStyle, color: '#1B2A6B' }}>{s.costs}</p>
      </div>

      {/* ── X-axis "Time" labels ── */}
      <div style={{ ...patch, top: '87%', left: '30%', width: '10%', padding: '1px 4px', textAlign: 'center' }}>
        <p style={{ ...chartLabelStyle, color: 'rgba(27,42,107,0.5)' }}>{s.time}</p>
      </div>
      <div style={{ ...patch, top: '87%', left: '63%', width: '10%', padding: '1px 4px', textAlign: 'center' }}>
        <p style={{ ...chartLabelStyle, color: 'rgba(27,42,107,0.5)' }}>{s.time}</p>
      </div>

      {/* ── Body text patch (bottom-left) ── */}
      <div style={{ ...patch, top: '66%', left: '3%', width: '47%', padding: '7px 9px' }}>
        <p style={bodyStyle}>{s.body}</p>
      </div>

      {/* ── Info box patch (bottom-right) ── */}
      <div style={{
        ...patch,
        top: '63%', left: '52%', width: '44%',
        padding: '8px 10px',
        border: '1px solid rgba(27,42,107,0.15)',
        borderRadius: 6,
      }}>
        <p style={bodyStyle}>{s.box}</p>
      </div>
    </div>
  )
}

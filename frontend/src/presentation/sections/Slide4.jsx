import { useLanguage } from '../../contexts/LanguageContext'

const BG = '#EBEBE7'

export default function Slide4() {
  const { t } = useLanguage()
  const s = t.slides.slide4

  const patch = {
    position: 'absolute',
    background: BG,
    borderRadius: 4,
  }

  const label = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 900,
    color: '#1B2A6B',
    fontSize: 'clamp(0.65rem, 1.15vw, 0.92rem)',
    marginBottom: 3,
  }

  const body = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    color: 'rgba(27,42,107,0.65)',
    fontSize: 'clamp(0.55rem, 0.85vw, 0.72rem)',
    lineHeight: 1.45,
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: BG }}>

      {/* Original image — full opacity, no changes */}
      <img
        src="/slides/slide_04.png"
        alt=""
        draggable={false}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', userSelect: 'none' }}
      />

      {/* ── Title patch ── */}
      <div style={{ ...patch, top: '2%', left: '7%', right: '7%', padding: '6px 12px', textAlign: 'center' }}>
        <p style={{ ...label, fontSize: 'clamp(0.9rem, 2.2vw, 1.8rem)', textAlign: 'center', marginBottom: 0 }}>
          {s.title}
        </p>
      </div>

      {/* ── Step 1: Electrolysis — bottom left ── */}
      <div style={{ ...patch, top: '57%', left: '1%', width: '29%', padding: '6px 8px' }}>
        <p style={label}>1. {s.steps[0].title}</p>
        <p style={body}>{s.steps[0].body}</p>
      </div>

      {/* ── Step 2: Injection — top right ── */}
      <div style={{ ...patch, top: '13%', left: '52%', width: '29%', padding: '6px 8px' }}>
        <p style={label}>2. {s.steps[1].title}</p>
        <p style={body}>{s.steps[1].body}</p>
      </div>

      {/* ── Step 3: Catalysis — bottom center-right ── */}
      <div style={{ ...patch, top: '57%', left: '52%', width: '29%', padding: '6px 8px' }}>
        <p style={label}>3. {s.steps[2].title}</p>
        <p style={body}>{s.steps[2].body}</p>
      </div>

      {/* ── Step 4: Result — far right ── */}
      <div style={{ ...patch, top: '43%', left: '81%', right: '1%', padding: '6px 8px' }}>
        <p style={label}>4. {s.steps[3].title}</p>
        <p style={body}>{s.steps[3].body}</p>
      </div>
    </div>
  )
}

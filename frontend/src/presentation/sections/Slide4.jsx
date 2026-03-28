import { useLanguage } from '../../contexts/LanguageContext'

const BG = '#EBEBE7'
const NAVY = '#1B2A6B'
const BODY = 'rgba(55,65,110,0.68)'

const t0 = { fontFamily: 'Inter,sans-serif', fontWeight: 900, color: NAVY, lineHeight: 1.2 }
const t1 = { fontFamily: 'Inter,sans-serif', fontWeight: 400, color: BODY,  lineHeight: 1.45 }

export default function Slide4() {
  const { t } = useLanguage()
  const s = t.slides.slide4

  const p = (extra) => ({
    position: 'absolute',
    background: BG,
    ...extra,
  })

  return (
    <div style={{ width: '100%', height: '100%', background: BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: 'calc(100vh * 16 / 9)', maxHeight: '100%', aspectRatio: '16/9' }}>

        {/* Original image — unchanged */}
        <img src="/slides/slide_04.png" alt="" draggable={false}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'fill', pointerEvents: 'none', userSelect: 'none' }} />

        {/* ─── Title ─── */}
        <div style={p({ top: '1.5%', left: '6%', right: '6%', padding: '4px 10px', textAlign: 'center' })}>
          <span style={{ ...t0, fontSize: 'clamp(0.85rem, 2vw, 1.7rem)' }}>{s.title}</span>
        </div>

        {/* ─── Step 1: Electrolysis — bottom left ─── */}
        <div style={p({ top: '55%', left: '1%', width: '28%', padding: '4px 7px' })}>
          <div style={{ ...t0, fontSize: 'clamp(0.6rem, 1vw, 0.88rem)', marginBottom: 3 }}>1. {s.steps[0].title}</div>
          <div style={{ ...t1, fontSize: 'clamp(0.5rem, 0.78vw, 0.68rem)' }}>{s.steps[0].body}</div>
        </div>

        {/* ─── Step 2: Injection — top right ─── */}
        <div style={p({ top: '13%', left: '52%', width: '28%', padding: '4px 7px' })}>
          <div style={{ ...t0, fontSize: 'clamp(0.6rem, 1vw, 0.88rem)', marginBottom: 3 }}>2. {s.steps[1].title}</div>
          <div style={{ ...t1, fontSize: 'clamp(0.5rem, 0.78vw, 0.68rem)' }}>{s.steps[1].body}</div>
        </div>

        {/* ─── Step 3: Catalysis — center right ─── */}
        <div style={p({ top: '57%', left: '52%', width: '28%', padding: '4px 7px' })}>
          <div style={{ ...t0, fontSize: 'clamp(0.6rem, 1vw, 0.88rem)', marginBottom: 3 }}>3. {s.steps[2].title}</div>
          <div style={{ ...t1, fontSize: 'clamp(0.5rem, 0.78vw, 0.68rem)' }}>{s.steps[2].body}</div>
        </div>

        {/* ─── Step 4: Result — far right ─── */}
        <div style={p({ top: '42%', left: '81%', right: '0.5%', padding: '4px 7px' })}>
          <div style={{ ...t0, fontSize: 'clamp(0.6rem, 1vw, 0.88rem)', marginBottom: 3 }}>4. {s.steps[3].title}</div>
          <div style={{ ...t1, fontSize: 'clamp(0.5rem, 0.78vw, 0.68rem)' }}>{s.steps[3].body}</div>
        </div>
      </div>
    </div>
  )
}

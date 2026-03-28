import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

export default function CTASection({ onNavigate }) {
  const [choice, setChoice]   = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm]       = useState({ name: '', contact: '' })
  const [sent, setSent]       = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setShowForm(false) }, 4000)
    setForm({ name: '', contact: '' })
  }

  return (
    <div
      className="w-full h-full relative overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(140deg, #080F2E 0%, #0D1B4B 45%, #081428 100%)',
      }}
    >
      {/* Ambient glows */}
      <div className="absolute pointer-events-none"
        style={{ top: '-20%', right: '-10%', width: 640, height: 640, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,167,86,0.12) 0%, transparent 60%)' }}/>
      <div className="absolute pointer-events-none"
        style={{ bottom: '-30%', left: '-15%', width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27,42,107,0.5) 0%, transparent 60%)' }}/>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}/>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-xl mx-auto px-8 text-center"
      >
        {/* Eyebrow */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-7">
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }}/>
          <span className="text-[#22A756] text-xs font-bold uppercase tracking-[0.25em]">H₂ ELEMENT</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }}/>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={item}
          className="font-black text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
        >
          Ready to cut your<br />fuel costs?
        </motion.h1>

        <motion.p variants={item}
          className="mb-10 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}
        >
          Get a free savings calculation — our specialist will reach out within 24 hours.
        </motion.p>

        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div key="choice"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}
            >
              {/* Choice cards */}
              <div className="flex gap-4 justify-center mb-8">
                {[
                  { id: 'personal', emoji: '🚗', label: 'For Myself', sub: 'Personal vehicle' },
                  { id: 'business', emoji: '🚛', label: 'For Business', sub: 'Fleet, legal entity' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setChoice(opt.id)}
                    className="flex-1 max-w-[180px] p-5 rounded-2xl text-left transition-all duration-300"
                    style={{
                      background: choice === opt.id ? 'rgba(34,167,86,0.12)' : 'rgba(255,255,255,0.05)',
                      border: choice === opt.id ? '1.5px solid rgba(34,167,86,0.55)' : '1.5px solid rgba(255,255,255,0.1)',
                      boxShadow: choice === opt.id ? '0 0 32px rgba(34,167,86,0.18)' : 'none',
                    }}
                  >
                    <div className="text-2xl mb-2">{opt.emoji}</div>
                    <div className="font-bold text-white text-sm">{opt.label}</div>
                    <div className="text-white/35 text-xs mt-0.5">{opt.sub}</div>
                    {choice === opt.id && (
                      <div className="mt-3 w-4 h-4 rounded-full bg-[#22A756] flex items-center justify-center">
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <polyline points="1,3 3,5 7,1" stroke="white" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* CTA button */}
              <button
                onClick={() => choice && setShowForm(true)}
                disabled={!choice}
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl font-bold text-base transition-all duration-300"
                style={{
                  background: choice ? '#22A756' : 'rgba(255,255,255,0.08)',
                  color: choice ? 'white' : 'rgba(255,255,255,0.25)',
                  boxShadow: choice ? '0 8px 36px rgba(34,167,86,0.45)' : 'none',
                  transform: choice ? 'translateY(0)' : 'none',
                  cursor: choice ? 'pointer' : 'not-allowed',
                }}
              >
                Leave a Request
                {choice && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="2" y1="8" x2="14" y2="8"/>
                    <polyline points="8,2 14,8 8,14"/>
                  </svg>
                )}
              </button>

              <p className="text-white/18 text-xs mt-4">No obligation · Free · Your data is protected</p>
            </motion.div>
          ) : (
            <motion.div key="form"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}
            >
              {sent ? (
                <div className="flex flex-col items-center gap-4 py-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                       style={{ background: 'rgba(34,167,86,0.15)', border: '2px solid rgba(34,167,86,0.5)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                         stroke="#22A756" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p className="text-white font-bold text-xl">Request sent!</p>
                  <p className="text-white/40 text-sm">We'll reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-3 max-w-sm mx-auto">
                  {/* Selected type chip */}
                  <div className="flex items-center justify-center gap-2 mb-5">
                    <span className="text-[#22A756] text-sm font-semibold">
                      {choice === 'personal' ? '🚗 For Myself' : '🚛 For Business'}
                    </span>
                    <button type="button" onClick={() => setShowForm(false)}
                            className="text-white/25 hover:text-white/50 text-xs transition-colors">
                      change
                    </button>
                  </div>

                  {[
                    { key: 'name',    placeholder: 'Your name' },
                    { key: 'contact', placeholder: 'Phone or Email' },
                  ].map((f) => (
                    <input
                      key={f.key}
                      type="text"
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      required
                      className="w-full rounded-xl px-5 py-3.5 text-white text-sm border transition-colors outline-none"
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        '::placeholder': { color: 'rgba(255,255,255,0.25)' },
                      }}
                    />
                  ))}

                  <button type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-white text-sm tracking-wide transition-all"
                    style={{ background: '#22A756', boxShadow: '0 8px 24px rgba(34,167,86,0.4)' }}
                  >
                    Send Request
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back hint */}
        <motion.button variants={item}
          onClick={() => onNavigate && onNavigate(0)}
          className="mt-10 text-xs transition-colors"
          style={{ color: 'rgba(255,255,255,0.15)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.15)' }}
        >
          ↑ Back to start
        </motion.button>
      </motion.div>
    </div>
  )
}

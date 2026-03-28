import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const panelVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.35, ease: [0.4, 0, 1, 1] } },
}

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function MenuOverlay({ onClose }) {
  const [activeTab, setActiveTab] = useState('about')
  const [formData, setFormData] = useState({ name: '', contact: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setFormData({ name: '', contact: '' })
  }

  const sections = [
    { id: 'about',    label: 'О нас' },
    { id: 'dealer',   label: 'Стать дилером' },
    { id: 'contacts', label: 'Контакты' },
  ]

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute inset-0 z-50 flex"
      onClick={onClose}
    >
      {/* Dark backdrop */}
      <div className="flex-1 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-md bg-[#0F1D4E] h-full flex flex-col menu-scroll overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <div className="flex items-center gap-1">
            <span className="font-black text-white text-lg tracking-tight">
              H<sub className="text-xs">2</sub>
            </span>
            <span className="font-bold text-white text-lg tracking-widest ml-1">ELEMENT</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Nav tabs */}
        <div className="flex border-b border-white/10">
          {sections.map((s, i) => (
            <motion.button
              key={s.id}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              onClick={() => setActiveTab(s.id)}
              className={`flex-1 py-4 text-sm font-semibold tracking-wide transition-colors ${
                activeTab === s.id
                  ? 'text-white border-b-2 border-[#4EB86B]'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {s.label}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 px-8 py-8">
          <AnimatePresence mode="wait">
            {activeTab === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div className="w-12 h-1 bg-[#4EB86B] rounded-full" />
                <h2 className="text-2xl font-bold text-white leading-snug">
                  Технология будущего — уже сегодня
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  H2 ELEMENT — компания, специализирующаяся на разработке и производстве водородных генераторов для двигателей внутреннего сгорания.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Наши системы устанавливаются на любой тип транспортного средства — от легковых автомобилей до спецтехники — и позволяют сократить расход топлива до 65% без вмешательства в конструкцию двигателя.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Мы работаем с частными лицами, юридическими лицами и государственными структурами по всему миру.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: 'до 65%', desc: 'экономия топлива' },
                    { label: 'до 30%', desc: 'рост мощности' },
                    { label: 'до 100%', desc: 'снижение выбросов' },
                    { label: '60–90 мин', desc: 'время установки' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-4">
                      <div className="text-[#4EB86B] font-black text-xl">{stat.label}</div>
                      <div className="text-white/50 text-xs mt-1">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'dealer' && (
              <motion.div
                key="dealer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center h-full min-h-[300px] text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">В разработке</h3>
                <p className="text-white/40 text-sm max-w-xs">
                  Программа для дилеров скоро откроется. Оставьте заявку в разделе «Контакты» — мы свяжемся с вами.
                </p>
              </motion.div>
            )}

            {activeTab === 'contacts' && (
              <motion.div
                key="contacts"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="w-12 h-1 bg-[#4EB86B] rounded-full" />
                <h2 className="text-2xl font-bold text-white">Напишите нам</h2>
                <p className="text-white/50 text-sm">
                  Оставьте контакт — наш специалист свяжется с вами в течение 24 часов.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1.5 block">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      required
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#4EB86B] transition-colors"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1.5 block">
                      Телефон или Email
                    </label>
                    <input
                      type="text"
                      placeholder="+7 (900) 000-00-00"
                      value={formData.contact}
                      onChange={(e) => setFormData(p => ({ ...p, contact: e.target.value }))}
                      required
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#4EB86B] transition-colors"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4EB86B] hover:bg-[#3DA85A] text-white font-bold py-3.5 rounded-xl text-sm tracking-wide transition-colors mt-2"
                  >
                    {sent ? '✓ Заявка отправлена!' : 'Отправить заявку'}
                  </button>
                </form>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/30 text-xs">Телефон:</p>
                  <a href="tel:+79019409188" className="text-[#4EB86B] font-semibold text-sm hover:underline">
                    +7 (901) 940-91-88
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

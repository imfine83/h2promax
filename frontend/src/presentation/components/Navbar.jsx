import { motion } from 'framer-motion'

export default function Navbar({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5"
    >
      {/* Logo */}
      <div className="flex items-center gap-1">
        <span className="font-black text-[#1B2A6B] text-xl tracking-tight">
          H<sub className="text-sm">2</sub>
        </span>
        <span className="font-bold text-[#1B2A6B] text-xl tracking-widest ml-1">ELEMENT</span>
      </div>

      {/* Burger button */}
      <button
        onClick={onOpen}
        className="flex flex-col gap-1.5 w-10 h-10 items-center justify-center rounded-full bg-[#1B2A6B]/10 hover:bg-[#1B2A6B]/20 transition-colors"
        aria-label="Open menu"
      >
        <span className="w-5 h-0.5 bg-[#1B2A6B] rounded-full" />
        <span className="w-5 h-0.5 bg-[#1B2A6B] rounded-full" />
        <span className="w-3 h-0.5 bg-[#1B2A6B] rounded-full self-start ml-1" />
      </button>
    </motion.div>
  )
}

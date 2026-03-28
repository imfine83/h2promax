import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Slide1  from './sections/Slide1';
import Slide2  from './sections/Slide2';
import Slide3  from './sections/Slide3';
import Slide4  from './sections/Slide4';
import Slide5  from './sections/Slide5';
import Slide6  from './sections/Slide6';
import Slide7  from './sections/Slide7';
import Slide8  from './sections/Slide8';
import Slide9  from './sections/Slide9';
import Slide10 from './sections/Slide10';
import Slide11 from './sections/Slide11';
import CTASection from './sections/CTASection';

import SlideProgress from './components/SlideProgress';
import Navbar        from './components/Navbar';
import MenuOverlay   from './components/MenuOverlay';

const SLIDES = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11,
  CTASection,
];

const PRESENTATION_COUNT = 11;
const TOTAL = SLIDES.length;
const DEBOUNCE_MS = 950;

const pageVariants = {
  enter: (dir) => ({
    y: dir > 0 ? '7%' : '-7%',
    opacity: 0,
    scale: 1.04,
    filter: 'blur(16px)',
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      y:      { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
      opacity:{ duration: 0.55, ease: 'easeOut' },
      scale:  { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
      filter: { duration: 0.65, ease: 'easeOut' },
    },
  },
  exit: (dir) => ({
    y: dir > 0 ? '-4%' : '4%',
    opacity: 0,
    scale: 0.96,
    filter: 'blur(10px)',
    transition: { duration: 0.55, ease: [0.7, 0, 0.84, 0] },
  }),
};

export default function PresentationApp({ onClose }) {
  const [current, setCurrent]   = useState(0);
  const [direction, setDir]     = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const isAnimating = useRef(false);
  const lastTime    = useRef(0);
  const touchStartY = useRef(0);

  const isPresentation = current < PRESENTATION_COUNT;
  const showMenu       = current >= PRESENTATION_COUNT;

  const navigate = useCallback((next) => {
    if (next < 0 || next >= TOTAL) return;
    if (isAnimating.current) return;
    setDir(next > current ? 1 : -1);
    setCurrent(next);
    isAnimating.current = true;
    setTimeout(() => { isAnimating.current = false; }, 1050);
  }, [current]);

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastTime.current < DEBOUNCE_MS) return;
      if (isAnimating.current) return;
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 5) return;
      lastTime.current = now;
      navigate(delta > 0 ? current + 1 : current - 1);
    };

    const onTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
    const onTouchEnd   = (e) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      const now = Date.now();
      if (now - lastTime.current < DEBOUNCE_MS) return;
      lastTime.current = now;
      navigate(diff > 0 ? current + 1 : current - 1);
    };

    const onKey = (e) => {
      const now = Date.now();
      if (['ArrowDown', 'PageDown', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
        if (now - lastTime.current < DEBOUNCE_MS) return;
        lastTime.current = now;
        navigate(current + 1);
      }
      if (['ArrowUp', 'PageUp', 'ArrowLeft'].includes(e.key)) {
        e.preventDefault();
        if (now - lastTime.current < DEBOUNCE_MS) return;
        lastTime.current = now;
        navigate(current - 1);
      }
      if (e.key === 'Escape' && onClose) onClose();
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKey);
    };
  }, [current, navigate, onClose]);

  const SlideComponent = SLIDES[current];

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#EAEAE5]">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-5 left-5 z-50 flex items-center gap-2 px-4 py-2 bg-[#1B2A6B]/10 hover:bg-[#1B2A6B]/20 text-[#1B2A6B] text-xs font-bold tracking-widest transition-all rounded-sm"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          ← BACK
        </button>
      )}

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <SlideComponent onNavigate={navigate} currentIndex={current} />
        </motion.div>
      </AnimatePresence>

      {isPresentation && (
        <SlideProgress
          current={current + 1}
          total={PRESENTATION_COUNT}
          onNavigate={navigate}
          currentIndex={current}
        />
      )}

      {showMenu && <Navbar onOpen={() => setMenuOpen(true)} />}

      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

/**
 * Единый вид заплаток поверх PNG — ровные карточки, не «лужицы».
 */

const NAVY_12 = 'rgba(27, 42, 107, 0.12)'
const NAVY_08 = 'rgba(27, 42, 107, 0.08)'

/** Крупные блоки: заголовок, абзацы, шаги */
export function patchPanel(bg) {
  return {
    position: 'absolute',
    zIndex: 2,
    boxSizing: 'border-box',
    backgroundColor: bg,
    borderRadius: 14,
    border: `1px solid ${NAVY_12}`,
    boxShadow: `0 4px 20px ${NAVY_08}, inset 0 1px 0 rgba(255, 255, 255, 0.65)`,
    overflow: 'hidden',
  }
}

/**
 * Плашки поверх PNG со встроенным текстом: плотный фон без «стекла»,
 * чтобы старые надписи не просвечивали.
 */
export function patchPanelMask(bg) {
  return {
    position: 'absolute',
    zIndex: 2,
    boxSizing: 'border-box',
    backgroundColor: bg,
    borderRadius: 12,
    border: '1px solid rgba(27, 42, 107, 0.22)',
    boxShadow: '0 2px 14px rgba(0, 0, 0, 0.07)',
    overflow: 'hidden',
  }
}

/** Средние: подзаголовки секций */
export function patchBand(bg) {
  return {
    position: 'absolute',
    zIndex: 2,
    boxSizing: 'border-box',
    backgroundColor: bg,
    borderRadius: 10,
    border: `1px solid ${NAVY_12}`,
    boxShadow: `0 2px 12px ${NAVY_08}, inset 0 1px 0 rgba(255, 255, 255, 0.55)`,
    overflow: 'hidden',
  }
}

/** Мелкие: подписи у осей, короткие лейблы */
export function patchChip(bg) {
  return {
    position: 'absolute',
    zIndex: 2,
    boxSizing: 'border-box',
    backgroundColor: bg,
    borderRadius: 8,
    border: `1px solid rgba(27, 42, 107, 0.1)`,
    boxShadow: `0 2px 8px ${NAVY_08}, inset 0 1px 0 rgba(255, 255, 255, 0.5)`,
    overflow: 'hidden',
  }
}

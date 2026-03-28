/** Shared look for slides 4, 7, 11 — brushed metal / paper, navy + green (reference: Safety slide) */
export const NAVY = '#1B2A6B'
export const GREEN = '#22A756'

export const slideSurfaceStyle = {
  backgroundColor: '#E8E8E2',
  backgroundImage: `
    linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 42%, rgba(0,0,0,0.03) 100%),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 3px,
      rgba(27,42,107,0.018) 3px,
      rgba(27,42,107,0.018) 4px
    )
  `,
}

export const cardPaper = {
  background: 'rgba(255,255,255,0.88)',
  border: '1px solid rgba(27,42,107,0.1)',
  boxShadow: '0 4px 24px rgba(27,42,107,0.06)',
  borderRadius: 16,
}

export const sectionRule = {
  width: 36,
  height: 3,
  borderRadius: 2,
  background: GREEN,
  marginBottom: 12,
}

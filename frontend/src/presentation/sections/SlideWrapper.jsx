export const SLIDE_BG = '#E9E9E4'

export default function SlideWrapper({ children, className = '', bg = SLIDE_BG }) {
  return (
    <div
      className={`w-full h-full relative overflow-hidden ${className}`}
      style={{ background: bg }}
    >
      {/* Decorative corner ellipses — match PDF design language */}
      <div className="absolute pointer-events-none"
        style={{ top: -140, left: -140, width: 420, height: 420, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(160,162,170,0.32) 0%, transparent 65%)' }}/>
      <div className="absolute pointer-events-none"
        style={{ bottom: -160, right: -160, width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(160,162,170,0.25) 0%, transparent 65%)' }}/>
      {children}
    </div>
  )
}

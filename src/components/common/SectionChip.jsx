const SectionChip = ({ children, className = '' }) => {
  return (
    <div className={`section-chip ${className}`}>
      <span className="text-primary-pink3 font-bold">✦</span>
      {children}
    </div>
  )
}

export default SectionChip

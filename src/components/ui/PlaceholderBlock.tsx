type PlaceholderBlockProps = {
  label: string
  className?: string
}

export function PlaceholderBlock({ label, className = '' }: PlaceholderBlockProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-md border border-dashed border-line text-sm text-ink-soft ${className}`}
    >
      {label}
    </div>
  )
}

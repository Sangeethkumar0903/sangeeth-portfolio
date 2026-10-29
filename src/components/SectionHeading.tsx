import { useRef } from 'react'

export function SectionHeading({ index, eyebrow, title, copy, align = 'left' }: { index: string; eyebrow: string; title: React.ReactNode; copy?: string; align?: 'left' | 'split' }) {
  const ref = useRef<HTMLDivElement>(null)
  return <div className={`section-heading ${align === 'split' ? 'is-split' : ''}`} ref={ref}><div><p className="eyebrow"><span>{index}</span>{eyebrow}</p><h2 className="reveal-title">{title}</h2></div>{copy && <p className="section-copy">{copy}</p>}</div>
}


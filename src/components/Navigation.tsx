import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'

export function Navigation({ minimal = false }: { minimal?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a className="brand" href={minimal ? '/' : '#top'} aria-label={`${profile.displayName}, home`}><span className="brand-mark">SK<i /></span><span>{profile.displayName}</span></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {minimal ? <><a href="/#work">Selected work</a><a href="/#contact">Contact</a></> : <><a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#contact">Contact</a></>}
          <span className="availability"><i /> Open to opportunities</span>
        </nav>
      </div>
    </header>
  )
}


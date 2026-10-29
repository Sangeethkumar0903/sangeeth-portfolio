import { useEffect, useRef } from 'react'
import { ArrowDown, GitBranch } from 'lucide-react'
import { gsap } from 'gsap'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { profile } from '../data/portfolio'

function SignalOrb() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 80, damping: 18 })
  const springY = useSpring(y, { stiffness: 80, damping: 18 })
  return (
    <motion.div className="signal-orb" style={{ x: springX, y: springY }} onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); x.set((event.clientX - rect.left - rect.width / 2) * .08); y.set((event.clientY - rect.top - rect.height / 2) * .08) }} onPointerLeave={() => { x.set(0); y.set(0) }} aria-hidden="true">
      <div className="orb-core"><i /><i /><i /></div>
      <div className="orb-ring ring-a"><span>BUILD</span></div><div className="orb-ring ring-b"><span>THINK</span></div>
      <div className="orb-chip chip-a">AI · 01</div><div className="orb-chip chip-b">SYSTEM · ONLINE</div><div className="orb-chip chip-c">FULL STACK</div>
    </motion.div>
  )
}

export function Hero() {
  const root = useRef<HTMLElement>(null)
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })
      timeline.from('.hero-word', { yPercent: 115, rotate: 3, duration: 1.15, stagger: .09 })
        .from('.hero-support > *', { y: 25, opacity: 0, duration: .8, stagger: .1 }, '-=.5')
        .from('.signal-orb', { scale: .72, opacity: 0, rotate: -12, duration: 1.4 }, '-=1.05')
    }, root)
    return () => context.revert()
  }, [])
  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-grid" aria-hidden="true" /><div className="hero-glow" aria-hidden="true" />
      <div className="hero-rail">
        <div className="hero-layout">
          <div className="hero-copy-block">
            <div className="hero-label"><span>Portfolio · 2026</span><span>Software engineer</span></div>
            <h1><span className="word-line"><i className="hero-word">Engineering</i> <i className="hero-word accent-serif">ideas.</i></span><span className="word-line"><i className="hero-word">Crafting</i> <i className="hero-word">experiences.</i></span></h1>
            <div className="hero-support"><p>{profile.intro}</p><div className="hero-actions"><motion.a className="btn btn-primary" href="#work" whileHover={{ y: -4 }} whileTap={{ scale: .98 }}>Explore work <ArrowDown size={16} /></motion.a><motion.a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer" whileHover={{ y: -4 }}><GitBranch size={16} /> GitHub</motion.a></div></div>
          </div>
          <SignalOrb />
        </div>
        <div className="hero-bottom"><span>Scroll to enter the work</span><div><i /></div><span>Based in India · Building globally</span></div>
      </div>
    </section>
  )
}


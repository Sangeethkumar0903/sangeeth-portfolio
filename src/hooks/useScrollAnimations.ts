import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-title').forEach((title) => {
        gsap.from(title, { yPercent: 55, opacity: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: title, start: 'top 88%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, { y: 46, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 87%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        const graphic = card.querySelector('.graphic-mask')
        const content = card.querySelector('.project-content')
        const timeline = gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 78%', once: true } })
        timeline.from(graphic, { clipPath: 'inset(0 100% 0 0 round 28px)', duration: 1.15, ease: 'power4.inOut' })
          .from(content, { y: 48, opacity: 0, duration: .8, ease: 'power3.out' }, '-=.65')
      })
      gsap.utils.toArray<HTMLElement>('.skill-card').forEach((card, index) => {
        gsap.from(card, { y: 34, opacity: 0, scale: .98, duration: .7, delay: (index % 3) * .07, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 91%', once: true } })
      })
      const track = document.querySelector('.timeline-progress i')
      const timeline = document.querySelector('.experience-timeline')
      if (track && timeline) gsap.fromTo(track, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: timeline, start: 'top 70%', end: 'bottom 65%', scrub: .6 } })
      gsap.utils.toArray<HTMLElement>('.experience-entry').forEach((entry) => {
        gsap.from(entry, { x: 45, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: entry, start: 'top 82%', once: true } })
      })
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        gsap.to(element, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: element.parentElement, start: 'top bottom', end: 'bottom top', scrub: .8 } })
      })
    })
    return () => { context.revert(); ScrollTrigger.getAll().forEach((trigger) => trigger.kill()) }
  }, [])
}


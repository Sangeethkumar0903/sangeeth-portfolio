import { ArrowLeft, ArrowRight, ArrowUpRight, GitBranch } from 'lucide-react'
import { motion } from 'motion/react'
import { Navigation } from '../components/Navigation'
import { ProjectVisual } from '../components/ProjectVisuals'
import { projects, type Project } from '../data/portfolio'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

function Architecture({ project }: { project: Project }) {
  return <div className="case-architecture">{project.pipeline.map((step, index) => <motion.div key={step} className="architecture-node" whileHover={{ y: -6 }}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < project.pipeline.length - 1 && <i aria-hidden="true" />}</motion.div>)}</div>
}

export function CaseStudy({ project }: { project: Project }) {
  useScrollAnimations()
  const current = projects.indexOf(project)
  const next = projects[(current + 1) % projects.length]
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation minimal /><main id="main" className={`case-page project-${project.accent}`}>
    <section className="case-hero"><div className="container"><a className="case-back" href="/#work"><ArrowLeft size={15} /> Back to selected work</a><p className="eyebrow"><span>{project.index}</span>{project.category}</p><h1>{project.title}</h1><div className="case-lead"><p>{project.kicker}</p><div><span>Contribution</span><strong>Full-stack & systems engineering</strong><span>Primary stack</span><strong>{project.technologies.slice(0, 3).join(' · ')}</strong></div></div></div></section>
    <section className="case-visual-section"><div className="case-visual-wrap" data-parallax><ProjectVisual type={project.visual} /></div></section>
    <section className="case-section"><div className="container case-split"><div><p className="eyebrow"><span>01</span>Context</p><h2 className="reveal-title">From problem<br/>to system.</h2></div><div className="case-copy" data-reveal><h3>The problem</h3><p>{project.problem}</p><h3>The approach</h3><p>{project.solution}</p></div></div></section>
    <section className="case-section case-dark"><div className="container"><div className="case-split"><div><p className="eyebrow"><span>02</span>Architecture</p><h2 className="reveal-title">A clear path<br/><em>through complexity.</em></h2></div><p className="case-intro-copy">The architecture separates responsibilities into understandable stages, making the data flow easier to validate, debug, and evolve.</p></div><Architecture project={project} /><div className="tech-marquee">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></section>
    <section className="case-section"><div className="container case-split"><div><p className="eyebrow"><span>03</span>My contribution</p><h2 className="reveal-title">What I<br/>engineered.</h2></div><div className="case-copy contribution-copy" data-reveal><p>{project.contribution}</p>{project.github && <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer"><GitBranch size={16} /> View repository <ArrowUpRight size={14} /></a>}</div></div></section>
    <section className="case-section decisions-section"><div className="container"><div className="case-split"><div><p className="eyebrow"><span>04</span>Technical decisions</p><h2 className="reveal-title">Designed for<br/><em>dependability.</em></h2></div><div className="decision-grid">{project.decisions.map((decision, index) => <article key={decision.title} data-reveal><span>0{index + 1}</span><h3>{decision.title}</h3><p>{decision.body}</p></article>)}</div></div></div></section>
    <section className="case-section challenges-section"><div className="container"><p className="eyebrow"><span>05</span>Engineering challenges</p><div className="challenge-grid">{project.challenges.map((challenge) => <article key={challenge.title} data-reveal><h3>{challenge.title}</h3><p>{challenge.body}</p></article>)}</div><blockquote data-reveal><span>Lesson learned</span>{project.lessons}</blockquote></div></section>
    <section className="next-project"><div className="container"><span>Next case study</span><a href={`/projects/${next.slug}/`}><h2>{next.title}</h2><i><ArrowRight /></i></a></div></section>
  </main></>
}


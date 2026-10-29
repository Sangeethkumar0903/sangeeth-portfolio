import { ArrowUpRight } from 'lucide-react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import type { Project } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisuals'

export function ProjectCard({ project, position }: { project: Project; position: number }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 22 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 22 })
  return (
    <article className={`project-card project-${project.accent} ${position % 2 ? 'is-reversed' : ''}`}>
      <motion.div className="project-graphic" style={{ rotateX, rotateY, transformPerspective: 1400 }} onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); rotateY.set(((event.clientX - rect.left) / rect.width - .5) * 3); rotateX.set(-((event.clientY - rect.top) / rect.height - .5) * 3) }} onPointerLeave={() => { rotateX.set(0); rotateY.set(0) }}><div className="graphic-mask"><ProjectVisual type={project.visual} compact /></div></motion.div>
      <div className="project-content">
        <div className="project-overline"><span>{project.index}</span><span>{project.category}</span></div>
        <h3>{project.title}</h3><p className="project-kicker">{project.kicker}</p>
        <dl><div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>Contribution</dt><dd>{project.contribution}</dd></div></dl>
        <div className="tech-tags">{project.technologies.map((tech) => <motion.span key={tech} whileHover={{ y: -3 }}>{tech}</motion.span>)}</div>
        <a className="text-link" href={`/projects/${project.slug}/`}>Read engineering case study <ArrowUpRight size={16} /></a>
      </div>
    </article>
  )
}

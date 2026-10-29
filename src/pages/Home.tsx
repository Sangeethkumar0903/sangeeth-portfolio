import { useState } from 'react'
import { ArrowUp, BookOpen, Check, Copy, ExternalLink, GitBranch, GraduationCap, Layers3, Mail, Server, Sparkles, Workflow } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Hero } from '../components/Hero'
import { Navigation } from '../components/Navigation'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { education, experience, profile, projects, skillGroups } from '../data/portfolio'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

const skillIcons = [Layers3, Server, Sparkles, Workflow, GitBranch]

function Skills() {
  const [active, setActive] = useState(0)
  const group = skillGroups[active]
  return (
    <section className="section skills-section section-dark" id="skills">
      <div className="skills-orbit orbit-one" aria-hidden="true" /><div className="skills-orbit orbit-two" aria-hidden="true" />
      <div className="container">
        <SectionHeading index="03" eyebrow="Technical system" title={<>Engineering across<br/><em>the whole stack.</em></>} copy="Not a proficiency chart—a view of the systems I can connect, from interaction and APIs to retrieval and deployment." align="split" />
        <div className="skills-layout">
          <div className="skill-nav" role="tablist" aria-label="Technical skill categories">
            {skillGroups.map((item, index) => { const Icon = skillIcons[index]; return <button key={item.name} role="tab" aria-selected={active === index} className={active === index ? 'active' : ''} onClick={() => setActive(index)}><span><Icon size={17} /> {item.name}</span><i>{item.code}</i></button> })}
          </div>
          <div className="skill-stage">
            <AnimatePresence mode="wait">
              <motion.div className="skill-detail" key={group.name} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: .38 }} role="tabpanel">
                <span className="skill-code">{group.code}</span><h3>{group.name}</h3><p>{group.description}</p>
                <div className="skill-cloud">{group.items.map((item, index) => <motion.span className="skill-card" key={item} initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * .045 }} whileHover={{ y: -5, rotate: index % 2 ? 1 : -1 }}><Check size={13} />{item}</motion.span>)}</div>
              </motion.div>
            </AnimatePresence>
            <div className="constellation" aria-hidden="true">{Array.from({ length: 9 }).map((_, index) => <motion.i key={index} animate={{ opacity: [.25, .9, .25], scale: [.7, 1, .7] }} transition={{ duration: 2 + index * .13, repeat: Infinity, delay: index * .12 }} />)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience-section" id="experience"><div className="container"><SectionHeading index="04" eyebrow="Experience" title={<>Building real systems.<br/><em>Solving real problems.</em></>} copy="Product engineering work across enterprise analytics, agentic workflows, real-time data, and full-stack delivery." align="split" />
      <div className="experience-timeline"><div className="timeline-progress" aria-hidden="true"><i /></div>{experience.map((role, roleIndex) => <article className={`experience-entry entry-${role.accent}`} key={role.company}><div className="experience-marker"><span>0{roleIndex + 1}</span></div><div className="experience-meta"><time>{role.period}</time><p>{role.role}</p></div><div className="experience-body"><h3>{role.company}</h3><ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
    </div></section>
  )
}

function Education() {
  return (
    <section className="section education-section" id="education"><div className="container"><SectionHeading index="05" eyebrow="Education" title={<>A foundation for<br/><em>systems thinking.</em></>} align="split" />
      <article className="education-card" data-reveal><div className="education-seal"><GraduationCap size={42} /><span>{education.graduation}</span></div><div className="education-main"><p>{education.shortInstitution}</p><h3>{education.institution}</h3><strong>{education.degree}</strong><div className="subject-row">{education.subjects.map((subject) => <span key={subject}>{subject}</span>)}</div></div><div className="education-note"><BookOpen size={19} /><span>Graduating</span><strong>{education.graduation}</strong></div></article>
    </div></section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = () => {
    void navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    })
  }
  return (
    <section className="contact-section" id="contact"><div className="contact-grid" aria-hidden="true" /><div className="container"><p className="eyebrow"><span>06</span>Start a conversation</p><h2 className="reveal-title">Let’s build something <em>remarkable.</em></h2><p>Interested in full-stack products, intelligent systems, and ambitious engineering problems.</p><div className="contact-actions"><motion.a className="btn btn-primary" href={`mailto:${profile.email}`} whileHover={{ y: -4 }}><Mail size={16} /> Email me</motion.a><motion.a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer" whileHover={{ y: -4 }}>LinkedIn <ExternalLink size={15} /></motion.a><motion.a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer" whileHover={{ y: -4 }}><GitBranch size={16} /> GitHub</motion.a><button className="btn btn-ghost copy-email" type="button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Email copied' : 'Copy email'}</button><span className="sr-only" aria-live="polite">{copied ? `${profile.email} copied to clipboard` : ''}</span></div><footer><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.email}</span><a href="#top">Back to top <ArrowUp size={14} /></a></footer></div></section>
  )
}

export function Home() {
  useScrollAnimations()
  return <><a className="skip-link" href="#main">Skip to content</a><div className="scroll-progress" aria-hidden="true" /><Navigation /><main id="main"><Hero />
    <section className="section about-section" id="about"><div className="container about-grid"><div><p className="eyebrow"><span>01</span>Profile</p><h2 className="reveal-title">Engineering with<br/><em>clarity and craft.</em></h2></div><div className="about-prose" data-reveal><p>I work at the intersection of <strong>software engineering, intelligent systems, and interactive product experiences.</strong></p><p>The goal is not technology for its own sake. It is to understand the problem, shape the architecture, and refine the interface until the system feels coherent.</p><div className="about-facts"><div><span>Focus</span><strong>AI systems · Full stack</strong></div><div><span>Education</span><strong>VIT-AP · Class of 2026</strong></div><div><span>Approach</span><strong>Systems thinking · Product craft</strong></div></div></div></div></section>
    <section className="section projects-section section-dark" id="work"><div className="container"><SectionHeading index="02" eyebrow="Selected work" title={<>Four systems.<br/><em>Four engineering stories.</em></>} copy="Each project is presented through its architecture, technical decisions, and the problem it was designed to solve." align="split" /><div className="project-list">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} position={index} />)}</div></div></section>
    <Skills /><Experience /><Education /><Contact />
  </main></>
}


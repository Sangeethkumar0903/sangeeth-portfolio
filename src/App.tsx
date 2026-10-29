import { CaseStudy } from './pages/CaseStudy'
import { Home } from './pages/Home'
import { projectBySlug } from './data/portfolio'

export default function App() {
  const match = window.location.pathname.match(/^\/projects\/([^/]+)/)
  const project = match ? projectBySlug(match[1]) : undefined
  return project ? <CaseStudy project={project} /> : <Home />
}


export type Accent = 'orange' | 'blue' | 'violet' | 'mint'
export type VisualType = 'bobcat' | 'meeting' | 'rag' | 'commerce'

export interface Project {
  slug: string
  index: string
  title: string
  shortTitle: string
  category: string
  kicker: string
  problem: string
  solution: string
  contribution: string
  technologies: string[]
  pipeline: string[]
  decisions: { title: string; body: string }[]
  challenges: { title: string; body: string }[]
  lessons: string
  github?: string
  accent: Accent
  visual: VisualType
}

export const profile = {
  name: 'Sangeeth Kumar L.',
  displayName: 'Sangeeth Kumar',
  role: 'Software Engineer · Full-Stack Developer · AI Systems Enthusiast',
  intro: 'I’m Sangeeth Kumar, a software engineer building intelligent systems, scalable applications, and thoughtful digital experiences.',
  github: 'https://github.com/Sangeethkumar0903',
  linkedin: 'https://www.linkedin.com/in/sangeethkumar09/',
  email: 'ksangeeth955@gmail.com',
  resume: '',
}

export const projects: Project[] = [
  {
    slug: 'bobcat-pricing-intelligence',
    index: '01',
    title: 'Bobcat Pricing Intelligence',
    shortTitle: 'Pricing Intelligence',
    category: 'Agentic AI · Enterprise engineering',
    kicker: 'An agent-driven workflow that turns fragmented competitor catalogs into structured, comparable pricing intelligence.',
    problem: 'Competitor discovery, catalog ingestion, part matching, and pricing enrichment involve many disconnected steps and inconsistent source data. Manual research makes the process difficult to scale and hard to repeat.',
    solution: 'A coordinated pipeline for automated discovery, scraping and catalog processing, product and part-number matching, enrichment, and pricing comparison—with AWS-backed services supporting the workflow.',
    contribution: 'Contributed to Python-based automation, AI workflow integration, catalog ingestion, product matching, validation, and AWS-backed services. The public presentation uses conceptual data only and excludes customer records, internal identifiers, and confidential implementation details.',
    technologies: ['Python', 'AWS', 'Agent workflows', 'Catalog ingestion', 'Product matching', 'Data enrichment'],
    pipeline: ['Competitor discovery', 'Catalog ingestion', 'Part matching', 'Pricing intelligence'],
    decisions: [
      { title: 'Stage the workflow', body: 'Separated discovery, ingestion, matching, and enrichment into explicit stages so each step could be validated and improved independently.' },
      { title: 'Treat matching as evidence', body: 'Combined identifiers and catalog attributes rather than assuming a single field was reliable across inconsistent competitor data.' },
      { title: 'Design for traceability', body: 'Preserved the path from source catalog to normalized record and comparison output so engineers could debug enrichment decisions.' },
    ],
    challenges: [
      { title: 'Inconsistent catalogs', body: 'Supplier files and scraped sources can differ in naming, structure, and data completeness.' },
      { title: 'Confident matching', body: 'Part-number alignment needs careful normalization and validation to avoid false comparisons.' },
      { title: 'Confidentiality', body: 'The portfolio explains engineering patterns without exposing customer-specific data or internal systems.' },
    ],
    lessons: 'Agentic systems become dependable when orchestration is paired with validation, observability, and clear handoffs between automated stages.',
    accent: 'orange',
    visual: 'bobcat',
  },
  {
    slug: 'meeting-intelligence',
    index: '02',
    title: 'Meeting-to-Document Intelligence',
    shortTitle: 'Meeting Intelligence',
    category: 'AI productivity platform · Full stack',
    kicker: 'A role-aware workspace that transforms raw meeting transcripts into summaries, decisions, action items, and trackable follow-up work.',
    problem: 'After a meeting, teams spend time reconstructing what happened, who owns the next step, and which decisions were actually made. Important context is easily lost across transcripts and manual notes.',
    solution: 'An end-to-end workflow where organizers create meetings, manage participants, upload transcripts, generate structured minutes with Gemini, assign tasks, and export a PDF record. Participants can review invitations, documents, and task status.',
    contribution: 'Designed and implemented the React interface, FastAPI services, Gemini integration, structured-output processing, PostgreSQL data model, JWT authentication, role-based access, task workflows, and PDF generation.',
    technologies: ['React', 'FastAPI', 'Gemini 2.5 Flash', 'PostgreSQL', 'JWT', 'PDF generation'],
    pipeline: ['Transcript upload', 'Gemini processing', 'Structured minutes', 'Task tracking'],
    decisions: [
      { title: 'Constrain AI output', body: 'Converted model responses into predictable summary, decision, and action-item structures that could be validated and stored.' },
      { title: 'Enforce roles at the API', body: 'Separated organizer and participant capabilities with JWT-based authorization instead of relying on interface visibility alone.' },
      { title: 'Connect the lifecycle', body: 'Linked meeting creation, participant management, generation, task assignment, history, and export as one product flow.' },
    ],
    challenges: [
      { title: 'Reliable extraction', body: 'Meeting language is informal, so prompts and parsing need to distinguish discussion from a concrete decision or assignment.' },
      { title: 'Permission boundaries', body: 'Organizers and participants require different access across meetings, documents, and task updates.' },
      { title: 'Useful failure states', body: 'Upload, generation, validation, and PDF creation each require clear recovery paths.' },
    ],
    lessons: 'A model call becomes a product only when it is surrounded by validation, access control, persistent state, and a workflow people can trust.',
    github: 'https://github.com/Sangeethkumar0903/Meeting_to_Document',
    accent: 'blue',
    visual: 'meeting',
  },
  {
    slug: 'rag-knowledge-base',
    index: '03',
    title: 'RAG Knowledge Base',
    shortTitle: 'Knowledge Base',
    category: 'Retrieval-augmented generation · AI',
    kicker: 'A semantic document search system that answers questions from uploaded files and keeps the source context visible.',
    problem: 'Finding a concept across long reports or multiple PDFs is slow. Literal keyword search misses relevant passages when the same idea is expressed with different language.',
    solution: 'A retrieval pipeline that extracts and chunks documents, produces Sentence Transformer embeddings, stores vectors in FAISS, retrieves relevant context, and sends grounded context to Groq-hosted Llama 3.1.',
    contribution: 'Built the document ingestion, text extraction, chunking, embedding, FAISS retrieval, prompt construction, source citation, FastAPI endpoints, and Streamlit interaction flow.',
    technologies: ['Python', 'FAISS', 'Groq', 'Llama 3.1', 'Sentence Transformers', 'Streamlit'],
    pipeline: ['Document upload', 'Chunking', 'Embeddings', 'FAISS search', 'Grounded response'],
    decisions: [
      { title: 'Embed locally', body: 'Used Sentence Transformers locally to keep the retrieval layer efficient and independent of a paid embedding API.' },
      { title: 'Retrieve before generation', body: 'Supplied only the most relevant chunks to the language model to reduce noise and keep responses tied to the collection.' },
      { title: 'Expose sources', body: 'Displayed retrieved context with the answer so users could inspect the grounding instead of treating the response as opaque.' },
    ],
    challenges: [
      { title: 'Chunk boundaries', body: 'Chunk size and overlap affect both retrieval precision and whether enough surrounding context survives.' },
      { title: 'Retrieval quality', body: 'Similarity scores alone need careful top-k selection and source metadata to produce a useful context set.' },
      { title: 'Grounded prompting', body: 'The model must stay within retrieved evidence and communicate when the supplied documents do not contain an answer.' },
    ],
    lessons: 'RAG quality starts before the LLM: document extraction, chunking, embeddings, retrieval, and source presentation shape the answer the user ultimately sees.',
    github: 'https://github.com/Sangeethkumar0903/rag-groq-knowledge-base',
    accent: 'violet',
    visual: 'rag',
  },
  {
    slug: 'ecommerce-platform',
    index: '04',
    title: 'Full-Stack E-Commerce Platform',
    shortTitle: 'Commerce Platform',
    category: 'React · Django · Marketplace engineering',
    kicker: 'An Amazon-inspired marketplace with distinct customer, seller, and administrator workflows across a React client and Django API.',
    problem: 'A multi-role marketplace needs secure account access, clear product ownership, dependable order processing, and different capabilities for customers, sellers, and administrators.',
    solution: 'A decoupled React and Django REST architecture with JWT authentication, role-based authorization, product and order APIs, relational MySQL models, backend validation, and responsive commerce workflows.',
    contribution: 'Implemented the application architecture, authentication flow, role permissions, product management, order processing, MySQL models, API validation, error handling, and frontend integration.',
    technologies: ['React', 'Django REST Framework', 'MySQL', 'JWT', 'REST APIs', 'RBAC'],
    pipeline: ['Browse products', 'Role authorization', 'Order workflow', 'Inventory records'],
    decisions: [
      { title: 'Protect the API', body: 'Enforced ownership and role permissions on the backend so protected operations remained secure beyond visible UI controls.' },
      { title: 'Model relationships', body: 'Structured users, sellers, products, orders, and order items in MySQL to preserve ownership and transaction relationships.' },
      { title: 'Keep services decoupled', body: 'Separated the React client from Django REST services so frontend experiences could evolve against stable API contracts.' },
    ],
    challenges: [
      { title: 'Three user modes', body: 'Customer, seller, and administrator flows share data but require different navigation, actions, and permission checks.' },
      { title: 'Order integrity', body: 'Order creation must validate products, quantities, ownership, and state transitions consistently.' },
      { title: 'Clear API feedback', body: 'Validation and authorization errors need to be understandable enough for the interface to guide recovery.' },
    ],
    lessons: 'Role-based products remain maintainable when permissions and domain rules are explicit in the backend instead of scattered across interface conditions.',
    accent: 'mint',
    visual: 'commerce',
  },
]

export const skillGroups = [
  { name: 'Frontend engineering', code: 'FE', description: 'Responsive product interfaces, component systems, interaction design, and data-rich visual experiences.', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js'] },
  { name: 'Backend engineering', code: 'BE', description: 'Secure service boundaries, API design, real-time transport, validation, and application architecture.', items: ['Python', 'Django', 'FastAPI', 'Node.js', 'REST APIs', 'JWT', 'WebSockets'] },
  { name: 'AI & agentic systems', code: 'AI', description: 'Grounded generation, retrieval pipelines, structured model outputs, and coordinated agent workflows.', items: ['LLMs', 'LangGraph', 'RAG', 'FAISS', 'Gemini', 'Groq', 'Agent workflows'] },
  { name: 'Database engineering', code: 'DB', description: 'Relational modeling, query-backed product features, and persistent workflow state.', items: ['PostgreSQL', 'MySQL', 'Vector stores'] },
  { name: 'Cloud & DevOps', code: 'CL', description: 'Cloud deployment, containerized workflows, source control, and delivery automation.', items: ['AWS', 'Docker', 'GitHub Actions', 'Git', 'CI/CD'] },
]

export const experience = [
  {
    company: 'Intellectyx',
    role: 'Software Engineering',
    period: 'Period to be added',
    accent: 'blue' as Accent,
    bullets: [
      'Developed and refined React features for enterprise financial analytics applications and API-backed workflows.',
      'Implemented financial reporting, KPI visualization, benchmarking interfaces, and responsive dashboard improvements.',
      'Worked on agent-driven competitor pricing workflows spanning catalog ingestion, product matching, and enrichment.',
      'Contributed to Python automation, AI workflow integration, and AWS-backed services.',
      'Implemented validation logic for customs documentation, tariff classifications, and import-related records.',
      'Collaborated on debugging, testing, feature improvements, and engineering handover documentation.',
    ],
  },
  {
    company: 'JointSync',
    role: 'Software Development Intern',
    period: 'May 2025 — July 2025',
    accent: 'orange' as Accent,
    bullets: [
      'Developed interactive frontend experiences with GSAP and Three.js.',
      'Implemented WebSocket-driven multichannel data plotting for 16 live sensor channels.',
      'Integrated Node.js backend services with MySQL and frontend visualization flows.',
      'Worked with AWS EC2 deployments and backend-to-frontend delivery.',
      'Built and improved features across both frontend and backend systems.',
    ],
  },
]

export const education = {
  institution: 'Vellore Institute of Technology, Andhra Pradesh',
  shortInstitution: 'VIT-AP',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  graduation: '2026',
  subjects: ['Data Structures', 'Operating Systems', 'Computer Networks', 'DBMS', 'Software Engineering'],
}

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug)

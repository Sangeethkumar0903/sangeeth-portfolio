window.PORTFOLIO = {
  profile: {
    name: "Sangeeth Kumar L.",
    shortName: "Sangeeth",
    role: "Software Engineer · Full-Stack Developer · AI Systems Enthusiast",
    intro: "I build intelligent systems, thoughtful interfaces, and full-stack products that make complex technology feel clear.",
    education: "B.Tech Computer Science & Engineering · VIT-AP · Class of 2026",
    github: "https://github.com/Sangeethkumar0903",
    linkedin: "",
    email: "",
    resume: ""
  },
  projects: [
    {
      slug: "meeting-intelligence",
      number: "01",
      title: "Meeting-to-Document Intelligence",
      eyebrow: "Full-stack AI application",
      summary: "An AI-powered meeting workspace that turns raw transcripts into structured summaries, decisions, action items, and downloadable reports.",
      problem: "Teams lose time translating long conversations into useful documentation. Decisions get buried, ownership becomes unclear, and follow-ups are easy to miss.",
      solution: "A role-aware workflow for organizers and participants: create meetings, invite people, upload transcripts, generate structured documents with Gemini, and track assigned work through completion.",
      role: "Designed and developed the end-to-end application flow across the React client, FastAPI services, AI generation pipeline, data model, and access control.",
      tech: ["Gemini 2.5 Flash", "FastAPI", "React", "PostgreSQL", "JWT", "PDF"],
      capabilities: ["Structured transcript analysis", "Organizer and participant workflows", "Decision and action-item extraction", "Task status tracking", "Downloadable meeting reports"],
      decisions: [
        ["Structured AI output", "Constrained model responses into predictable sections so generated content could be validated, stored, and rendered consistently."],
        ["Role-aware access", "Separated organizer and participant actions with JWT authentication and role-based authorization."],
        ["Document lifecycle", "Connected transcript upload, AI generation, task assignment, meeting history, and PDF export as one coherent workflow."]
      ],
      outcome: "The project demonstrates how an LLM feature becomes a dependable product workflow when paired with authentication, persistent data, clear permissions, and useful outputs.",
      learning: "AI output quality is only one layer of the system. Validation, failure states, authorization, and a clear user journey are what turn a model call into a usable application.",
      github: "https://github.com/Sangeethkumar0903/Meeting_to_Document",
      accent: "blue",
      visual: "document"
    },
    {
      slug: "rag-knowledge-search",
      number: "02",
      title: "Knowledge-Base Search Engine",
      eyebrow: "Generative AI · RAG",
      summary: "A retrieval-augmented knowledge system that lets users question PDF and text collections with grounded answers and visible source context.",
      problem: "Finding an idea inside long reports or multiple documents is slow, while literal keyword search misses passages that express the same meaning in different language.",
      solution: "A semantic retrieval pipeline that extracts and chunks documents, creates local embeddings, searches a FAISS vector index, and supplies relevant context to a Groq-hosted Llama model.",
      role: "Built the document processing, embedding, retrieval, prompting, citation, API, and Streamlit interaction layers as a complete RAG workflow.",
      tech: ["Python", "Groq", "FAISS", "Sentence Transformers", "FastAPI", "Streamlit"],
      capabilities: ["PDF and text ingestion", "Semantic vector retrieval", "Grounded answer generation", "Source-aware responses", "Health and statistics endpoints"],
      decisions: [
        ["Local embeddings", "Used Sentence Transformers to produce embeddings locally and keep the retrieval layer independent of a paid embedding API."],
        ["Focused context", "Retrieved only the most relevant chunks before inference to reduce noise and keep answers tied to uploaded material."],
        ["Visible grounding", "Presented source context alongside responses so users could inspect where an answer came from instead of treating it as opaque."]
      ],
      outcome: "The system demonstrates the full path from unstructured files to searchable vectors and grounded LLM responses, with both an interface and reusable API surface.",
      learning: "Chunking and retrieval quality strongly shape the final response. A good RAG system begins with careful document handling, not merely a stronger language model.",
      github: "https://github.com/Sangeethkumar0903/rag-groq-knowledge-base",
      accent: "violet",
      visual: "nodes"
    },
    {
      slug: "realtime-sensor-monitoring",
      number: "03",
      title: "Real-Time Sensor Monitoring",
      eyebrow: "JointSync · Internship engineering",
      summary: "A live monitoring experience for 16 sensor channels, built around WebSocket streaming, responsive visualization, backend services, and cloud deployment.",
      problem: "Continuously changing sensor readings need low-latency delivery and clear visualization. Manual refresh and request-heavy polling are poor fits for live operational data.",
      solution: "An event-driven data path using Node.js and WebSockets to deliver channel updates to a responsive dashboard, with MySQL integration and deployment on AWS EC2.",
      role: "Contributed backend services, database integration, WebSocket streaming, frontend visualization, and deployment work during a software development internship.",
      tech: ["Node.js", "WebSockets", "MySQL", "AWS EC2", "Data Visualization"],
      capabilities: ["16 live sensor channels", "Continuous streaming updates", "Responsive plots", "Backend-to-frontend integration", "Cloud deployment"],
      decisions: [
        ["Event-driven updates", "Used WebSockets for continuous two-way communication instead of repeatedly polling the server for changing readings."],
        ["Readable live state", "Designed the visualization layer to keep multiple fast-changing channels distinguishable and responsive."],
        ["Integrated delivery", "Worked across server, database, client, and EC2 deployment so the system operated as a connected whole."]
      ],
      outcome: "The work provided practical experience with real-time systems where timing, data flow, rendering performance, and deployment reliability all meet.",
      learning: "Live interfaces require careful coordination between update frequency and visual clarity. More updates are not automatically more useful if the display becomes noisy.",
      github: "",
      accent: "coral",
      visual: "wave"
    },
    {
      slug: "ecommerce-platform",
      number: "04",
      title: "Full-Stack E-Commerce Platform",
      eyebrow: "Web platform · Backend engineering",
      summary: "A role-based commerce application with separate customer, seller, and administrator workflows across a React client and Django REST API.",
      problem: "A marketplace needs clear ownership rules for products and orders, secure account access, consistent validation, and different capabilities for each type of user.",
      solution: "A separated frontend and backend architecture with JWT authentication, role-based permissions, REST endpoints, relational data modeling, and structured error handling.",
      role: "Implemented the full-stack architecture, authentication flow, permissions, product and order APIs, MySQL models, and React integration.",
      tech: ["Django REST Framework", "React", "MySQL", "JWT", "REST APIs"],
      capabilities: ["Customer, seller, and admin roles", "Product management", "Order processing", "JWT authentication", "Backend validation"],
      decisions: [
        ["Explicit permissions", "Applied authorization at the API layer so protected operations were enforced beyond the visible frontend controls."],
        ["Relational modeling", "Structured users, products, and orders in MySQL to preserve ownership and transaction relationships."],
        ["Separated services", "Kept the React interface decoupled from Django REST services for a clean API-driven architecture."]
      ],
      outcome: "The project demonstrates core full-stack engineering fundamentals: API design, relational data, authentication, authorization, validation, and client integration.",
      learning: "Role-based applications stay maintainable when permissions are modeled deliberately at the backend instead of being scattered through interface conditions.",
      github: "",
      accent: "mint",
      visual: "commerce"
    }
  ],
  skills: [
    { label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "GSAP", "Three.js"] },
    { label: "Backend", items: ["Python", "FastAPI", "Django", "Node.js", "REST APIs", "WebSockets"] },
    { label: "AI systems", items: ["LLM integrations", "RAG", "Embeddings", "Vector search", "Agent workflows", "Prompt design"] },
    { label: "Data & cloud", items: ["PostgreSQL", "MySQL", "FAISS", "AWS", "Docker", "GitHub Actions"] }
  ],
  experience: [
    { company: "Intellectyx", role: "Software Engineering", period: "Period to be added", body: "Enterprise software and AI-assisted systems work. Public details are intentionally limited until verified for publication." },
    { company: "JointSync", role: "Software Development Intern", period: "Period to be added", body: "Built backend and visualization features for real-time sensor data using Node.js, MySQL, WebSockets, and AWS EC2." },
    { company: "VIT-AP", role: "B.Tech · Computer Science & Engineering", period: "Class of 2026", body: "Developing a foundation across software engineering, data systems, intelligent applications, and technical problem-solving." }
  ]
};


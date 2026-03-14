interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  live: string
  year: string
}

const projects: Project[] = [
  {
    title: 'Momentum',
    description:
      'A task management app built around flow state and deep work sessions. Features Pomodoro timers, project grouping, and a distraction-free focus mode.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    year: '2024',
  },
  {
    title: 'Wavelength',
    description:
      'Real-time audio visualizer built on the Web Audio API with custom WebGL shaders. Supports mic input, file upload, and multiple visualisation modes.',
    tags: ['React', 'WebGL', 'Web Audio API', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    year: '2024',
  },
  {
    title: 'Atlas',
    description:
      'Open-source mapping tool for visualising large geospatial datasets in the browser. Handles millions of points via spatial indexing and WebWorkers.',
    tags: ['TypeScript', 'Mapbox GL', 'Node.js', 'PostGIS'],
    github: 'https://github.com',
    live: 'https://example.com',
    year: '2023',
  },
  {
    title: 'Relay',
    description:
      'Lightweight pub/sub message broker built in Go. Supports WebSocket and HTTP transports, persistent queues, and a web dashboard for monitoring.',
    tags: ['Go', 'WebSockets', 'Redis', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    year: '2023',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group border border-[#1e1e1e] rounded-sm p-6 hover:border-[#3a3a3a] transition-all duration-300 flex flex-col gap-4">

      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className="text-xs text-[#3a3a3a] mb-2 block"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {String(index + 1).padStart(2, '0')} — {project.year}
          </span>
          <h3
            className="text-xl text-[#e8e4dc] group-hover:text-[#c8f04a] transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.title}
          </h3>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3a3a3a] hover:text-[#c8f04a] transition-colors text-sm"
            style={{ fontFamily: 'var(--font-mono)' }}
            aria-label={`${project.title} GitHub`}
          >
            GH ↗
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3a3a3a] hover:text-[#c8f04a] transition-colors text-sm"
            style={{ fontFamily: 'var(--font-mono)' }}
            aria-label={`${project.title} live demo`}
          >
            Live ↗
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#6b6b6b] text-sm font-light leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-[#3a3a3a] border border-[#1e1e1e] px-2.5 py-1 rounded-sm"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">

        <p
          className="text-[#c8f04a] text-xs tracking-[0.3em] uppercase mb-12"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          02 — Projects
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Selected{' '}
            <span className="italic text-[#6b6b6b]">work</span>
          </h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#6b6b6b] hover:text-[#c8f04a] transition-colors shrink-0"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            All projects on GitHub ↗
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
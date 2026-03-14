const skills = [
  'TypeScript', 'React', 'Next.js', 'Node.js',
  'PostgreSQL', 'Prisma', 'Docker', 'AWS',
  'Tailwind CSS', 'GraphQL', 'Figma', 'Git',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p
          className="text-[#c8f04a] text-xs tracking-[0.3em] uppercase mb-12"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          01 — About
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <div>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              I build things for the{' '}
              <span className="italic text-[#6b6b6b]">web</span>
            </h2>

            <div className="space-y-4 text-[#6b6b6b] font-light leading-relaxed">
              <p>
                Hi, I'm Alex — a full-stack developer based in San Francisco with a passion
                for building products that are fast, accessible, and delightful to use.
              </p>
              <p>
                I've worked with early-stage startups and established companies alike,
                helping them turn ideas into polished digital products. I care deeply about
                the details — from database query performance to the exact timing of a UI animation.
              </p>
              <p>
                When I'm not coding, you'll find me hiking, reading about systems design,
                or obsessing over mechanical keyboards.
              </p>
            </div>
          </div>

          {/* Right: skills + photo placeholder */}
          <div className="space-y-10">

            {/* Photo placeholder */}
            <div
              className="w-full aspect-square max-w-xs rounded-sm border border-[#1e1e1e] flex items-center justify-center text-[#3a3a3a] text-sm relative overflow-hidden"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(232,228,220,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(232,228,220,0.02) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <span className="relative z-10">your-photo.jpg</span>
            </div>

            {/* Skills */}
            <div>
              <p
                className="text-xs text-[#3a3a3a] tracking-widest uppercase mb-4"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Tech I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-[#6b6b6b] border border-[#1e1e1e] px-3 py-1.5 rounded-sm hover:border-[#c8f04a] hover:text-[#c8f04a] transition-colors cursor-default"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(232,228,220,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,228,220,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,240,74,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10 pt-16">
        <p
          className="text-[#c8f04a] text-xs tracking-[0.3em] mb-8 uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Available for work — 2025
        </p>

        <h1
          className="text-6xl md:text-8xl lg:text-[6.5rem] leading-[0.9] mb-10"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Alex
          <br />
          <span className="italic text-[#6b6b6b]">Rivera</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-20">
          <p className="text-[#6b6b6b] text-lg md:text-xl font-light max-w-md leading-relaxed">
            Full-stack developer crafting thoughtful digital experiences — from backend systems to pixel-perfect interfaces.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="text-[#0a0a0a] bg-[#c8f04a] px-6 py-3 text-sm hover:bg-[#e8e4dc] transition-colors rounded-sm"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-[#e8e4dc] border border-[#1e1e1e] px-6 py-3 text-sm hover:border-[#3a3a3a] transition-colors rounded-sm"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-10 border-t border-[#1e1e1e] grid grid-cols-3 gap-8 max-w-lg">
          {[
            { value: '5+', label: 'Years experience' },
            { value: '30+', label: 'Projects shipped' },
            { value: '12+', label: 'Happy clients' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                className="text-3xl text-[#c8f04a] mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {value}
              </div>
              <div className="text-xs text-[#6b6b6b] font-light">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#home',     label: 'Home' },
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['contact', 'projects', 'about', 'home']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-[#1e1e1e] bg-[#0a0a0a]/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('#home')} className="font-display text-xl text-[#e8e4dc] hover:text-[#c8f04a] transition-colors">
          AR<span className="text-[#c8f04a]">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <button onClick={() => scrollTo(href)} className={`text-sm font-light tracking-wide transition-colors hover:text-[#c8f04a] ${active === href ? 'text-[#c8f04a]' : 'text-[#6b6b6b]'}`}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex text-sm font-mono-custom text-[#0a0a0a] bg-[#c8f04a] px-4 py-2 rounded-sm hover:bg-[#e8e4dc] transition-colors">
          Resume ↗
        </a>

        <button className="md:hidden flex flex-col justify-center gap-1.5 w-6 h-6" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-full h-px bg-[#e8e4dc] transition-all origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-full h-px bg-[#e8e4dc] transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-px bg-[#e8e4dc] transition-all origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1e1e1e] bg-[#0a0a0a] px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <button key={href} onClick={() => scrollTo(href)} className={`text-left text-base transition-colors hover:text-[#c8f04a] ${active === href ? 'text-[#c8f04a]' : 'text-[#6b6b6b]'}`}>
              {label}
            </button>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-center text-sm font-mono-custom text-[#0a0a0a] bg-[#c8f04a] px-4 py-2 rounded-sm mt-2">
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  )
}
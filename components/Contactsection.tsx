'use client'

import { useState } from 'react'

interface FormState {
  name: string
  email: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Replace this with your preferred form service:
    // e.g. Resend, Formspree, EmailJS, or a Next.js API route
    try {
      await new Promise((res) => setTimeout(res, 1200)) // simulate request
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border border-[#1e1e1e] rounded-sm px-4 py-3 text-[#e8e4dc] text-sm font-light placeholder-[#3a3a3a] focus:outline-none focus:border-[#c8f04a] transition-colors'

  return (
    <section id="contact" className="py-32 px-6 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto">

        <p
          className="text-[#c8f04a] text-xs tracking-[0.3em] uppercase mb-12"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          03 — Contact
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: heading + socials */}
          <div>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let's work{' '}
              <span className="italic text-[#6b6b6b]">together</span>
            </h2>
            <p className="text-[#6b6b6b] font-light leading-relaxed mb-10">
              I'm currently open to freelance projects and full-time roles. Whether you have
              a specific project in mind or just want to say hi — my inbox is always open.
            </p>

            <div className="space-y-3">
              {[
                { label: 'Email', value: 'adityarajsharma3030@gmail.com', href: 'adityarajsharma3030@gmail.com' },
                { label: 'GitHub', value: 'github.com/aditya303030', href: 'https://github.com/aditya303030' },
                { label: 'LinkedIn', value: 'linkedin.com/in/aditya-sharma-aba191203', href: 'https://www.linkedin.com/in/aditya-sharma-aba191203/' },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <span
                    className="text-xs text-[#3a3a3a] w-16"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {label}
                  </span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#6b6b6b] hover:text-[#c8f04a] transition-colors"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {value} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs text-[#3a3a3a]" style={{ fontFamily: 'var(--font-mono)' }}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs text-[#3a3a3a]" style={{ fontFamily: 'var(--font-mono)' }}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs text-[#3a3a3a]" style={{ fontFamily: 'var(--font-mono)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="mt-2 text-[#0a0a0a] bg-[#c8f04a] px-6 py-3 text-sm rounded-sm hover:bg-[#e8e4dc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent ✓' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-400" style={{ fontFamily: 'var(--font-mono)' }}>
                Something went wrong. Please try emailing directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
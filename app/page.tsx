import Navbar from '@/components/Navbar'
import HeroSection from '@/components/Herosection'
import AboutSection from '@/components/Aboutsection'
import ProjectsSection from '@/components/Projectsection'
import ContactSection from '@/components/Contactsection'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="border-t border-[#1e1e1e] py-8 px-6 text-center text-[#3a3a3a] text-sm font-light">
        <span style={{ fontFamily: 'var(--font-mono)' }}>
          © {new Date().getFullYear()} Alex Rivera — Built with Next.js
        </span>
      </footer>
    </>
  )
}
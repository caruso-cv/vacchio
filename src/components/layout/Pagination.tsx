'use client'

import { useEffect, useState } from 'react'

export default function Pagination() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      const aboutElement = document.getElementById('about')
      const experienceElement = document.getElementById('experience')
      const projectsElement = document.getElementById('projects')
      
      if (aboutElement && experienceElement && projectsElement) {
        const aboutTop = aboutElement.offsetTop
        const experienceTop = experienceElement.offsetTop
        const projectsTop = projectsElement.offsetTop
        
        // Section detection based on scroll position with proper thresholds
        if (scrollPosition < experienceTop - 200) {
          setActiveSection('about')
        } else if (scrollPosition < projectsTop - 200) {
          setActiveSection('experience')
        } else {
          setActiveSection('projects')
        }
      }
    }

    // Call handleScroll immediately to set initial state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (section: string, e: React.MouseEvent) => {
    e.preventDefault()
    
    if (section === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop - 20
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="mt-12">
      <div className="w-fit group py-2 pagination-item">
        <a href="#about" onClick={(e) => handleNavClick('about', e)} className={`text-xs font-bold uppercase transition-colors flex items-center gap-4 ${activeSection === 'about' ? 'text-vacchio-black/70' : 'text-vacchio-black/30 group-hover:text-vacchio-black/70'}`}>
          <div className={`h-px transition-all duration-200 ${activeSection === 'about' ? 'w-16 bg-vacchio-black/70' : 'w-8 bg-vacchio-black/30 group-hover:w-16 group-hover:bg-vacchio-black/70'}`}></div>
          ABOUT
        </a>
      </div>
      <div className="w-fit group py-2 pagination-item">
        <a href="#experience" onClick={(e) => handleNavClick('experience', e)} className={`text-xs font-bold uppercase transition-colors flex items-center gap-4 ${activeSection === 'experience' ? 'text-vacchio-black/70' : 'text-vacchio-black/30 group-hover:text-vacchio-black/70'}`}>
          <div className={`h-px transition-all duration-200 ${activeSection === 'experience' ? 'w-16 bg-vacchio-black/70' : 'w-8 bg-vacchio-black/30 group-hover:w-16 group-hover:bg-vacchio-black/70'}`}></div>
          EXPERIENCE
        </a>
      </div>
      <div className="w-fit group py-2 pagination-item">
        <a href="#projects" onClick={(e) => handleNavClick('projects', e)} className={`text-xs font-bold uppercase transition-colors flex items-center gap-4 ${activeSection === 'projects' ? 'text-vacchio-black/70' : 'text-vacchio-black/30 group-hover:text-vacchio-black/70'}`}>
          <div className={`h-px transition-all duration-200 ${activeSection === 'projects' ? 'w-16 bg-vacchio-black/70' : 'w-8 bg-vacchio-black/30 group-hover:w-16 group-hover:bg-vacchio-black/70'}`}></div>
          PROJECTS
        </a>
      </div>
    </nav>
  )
}

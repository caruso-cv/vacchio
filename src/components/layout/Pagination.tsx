'use client'

import { useEffect, useState } from 'react'

export default function Pagination() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300
      
      const aboutElement = document.getElementById('about')
      const experienceElement = document.getElementById('experience')
      const projectsElement = document.getElementById('projects')
      
      if (aboutElement && experienceElement && projectsElement) {
        const aboutTop = aboutElement.offsetTop
        const aboutHeight = aboutElement.offsetHeight
        const experienceTop = experienceElement.offsetTop
        const experienceHeight = experienceElement.offsetHeight
        const projectsTop = projectsElement.offsetTop
        
        // When at the very top, highlight about
        if (scrollPosition < 400) {
          setActiveSection('about')
        }
        // Trigger experience when halfway through about
        else if (scrollPosition >= aboutTop + (aboutHeight / 2) && scrollPosition < experienceTop + (experienceHeight / 2)) {
          setActiveSection('experience')
        }
        // Trigger projects when halfway through experience
        else if (scrollPosition >= experienceTop + (experienceHeight / 2) && scrollPosition < projectsTop) {
          setActiveSection('projects')
        }
        // When actually in the projects section
        else if (scrollPosition >= projectsTop) {
          setActiveSection('projects')
        }
      }
    }

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

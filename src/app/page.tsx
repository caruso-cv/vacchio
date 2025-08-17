'use client'

import { useEffect, useState } from 'react'
import ExperienceCard from '../components/layout/Experiences'
import GitHub from '../components/logos/GitHub'
import LinkedIn from '../components/logos/LinkedIn'
import CodePen from '../components/logos/CodePen'
import { TextScramble } from '../components/ui/text-scramble'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null)

  const experiences = [
          {
        period: "2024 — PRESENT",
        title: "Software Developer",
        company: "Ocelot Technologies Ltd.",
        description: "Built and optimized a Next.js-powered game-studio site with Supabase backend, achieving sub-100 ms server response times and 0.66 s FCP. Developed interactive UI components for gamified web apps using React, Next.js, TypeScript, and Tailwind.",
        technologies: ["TypeScript", "React", "Next.js", "Tailwind", "Supabase"],
        link: "https://ocelot-pearl.vercel.app/"
      },
      {
        period: "Jan. 25 — Apr. 25",
        title: "Software Developer • Co-op",
        company: "Neutron Controls",
        description: "Created custom GitLab CI/CD pipeline to mirror GitHub repos and trigger Vercel deployments. Built React/Next.js site with Tailwind CSS and HLS streaming via Amazon S3 + CloudFront for sub-second playback.",
        technologies: ["React", "JavaScript", 'Next.js', "Tailwind", "HTML + CSS", "AWS", 'GitLab', 'Vercel'],
        link: "https://www.neutroncontrols.com/"
      },
  ]

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
    <div className="flex min-h-screen max-w-7xl mx-auto">

      {/* Left side - Fixed */}
      <div className="w-1/2 flex flex-col px-8 py-8 pt-24 sticky top-0 h-screen">
        {/* Name at top */}
        <div className="mb-12">
          <TextScramble 
            className="text-5xl font-inter text-vacchio-black/80 pb-2 font-semibold"
            duration={1.2}
            speed={0.03}
          >
            Carmen Vacchio
          </TextScramble>
          <p className="text-3xl font-regular font-cormorant-garamond text-vacchio-black/70 pb-4">Software Developer</p>
          <p className="text-base font-regular text-vacchio-black/50 leading-relaxed max-w-sm">
            I build accessible, pixel perfect web experiences that blend engineering and design.
          </p>
        </div>

        {/* Pagination Navigation */}
        <nav className="space-y-4 mt-12">
          <div className="w-fit group">
            <a href="#about" onClick={(e) => handleNavClick('about', e)} className={`text-xs font-bold uppercase transition-colors flex items-center gap-4 ${activeSection === 'about' ? 'text-vacchio-black/70' : 'text-vacchio-black/30 group-hover:text-vacchio-black/70'}`}>
              <div className={`h-px transition-all duration-200 ${activeSection === 'about' ? 'w-16 bg-vacchio-black/70' : 'w-8 bg-vacchio-black/30 group-hover:w-16 group-hover:bg-vacchio-black/70'}`}></div>
              ABOUT
            </a>
          </div>
          <div className="w-fit group">
            <a href="#experience" onClick={(e) => handleNavClick('experience', e)} className={`text-xs font-bold uppercase transition-colors flex items-center gap-4 ${activeSection === 'experience' ? 'text-vacchio-black/70' : 'text-vacchio-black/30 group-hover:text-vacchio-black/70'}`}>
              <div className={`h-px transition-all duration-200 ${activeSection === 'experience' ? 'w-16 bg-vacchio-black/70' : 'w-8 bg-vacchio-black/30 group-hover:w-16 group-hover:bg-vacchio-black/70'}`}></div>
              EXPERIENCE
            </a>
          </div>
          <div className="w-fit group">
            <a href="#projects" onClick={(e) => handleNavClick('projects', e)} className={`text-xs font-bold uppercase transition-colors flex items-center gap-4 ${activeSection === 'projects' ? 'text-vacchio-black/70' : 'text-vacchio-black/30 group-hover:text-vacchio-black/70'}`}>
              <div className={`h-px transition-all duration-200 ${activeSection === 'projects' ? 'w-16 bg-vacchio-black/70' : 'w-8 bg-vacchio-black/30 group-hover:w-16 group-hover:bg-vacchio-black/70'}`}></div>
              PROJECTS
            </a>
          </div>
        </nav>

        {/* Social Media Links */}
        <div className="mt-auto mb-14">
          <div className="flex gap-4">
            <a 
              href="https://github.com/SolCaruso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-vacchio-black/30 hover:text-vacchio-black/60 transition-all duration-200 ease-in-out-quad"
            >
              <GitHub />
            </a>
            <a 
              href="https://www.linkedin.com/in/carmenvac/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-vacchio-black/30 hover:text-vacchio-black/60 transition-all duration-200 ease-in-out-quad"
            >
              <LinkedIn />
            </a>
            <a 
              href="https://codepen.io/vacc0003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-vacchio-black/30 hover:text-vacchio-black/60 transition-all duration-200 ease-in-out-quad"
            >
              <CodePen />
            </a>
          </div>
        </div>
      </div>
      
      {/* Right side */}
      <div className="w-1/2">
        <div className="p-8 pt-24 max-w-2xl">
          {/* Longer Bio */}
          <section id="about" className="mb-12">
            <div className="space-y-4 text-vacchio-black/50 leading-relaxed text-base">
              <p>
                I’m a developer passionate about creating accessible, user-focused interfaces that combine thoughtful design with strong engineering. Currently, I’m pursuing a Bachelor’s in <a href="https://admissions.carleton.ca/programs/computer-science/" target="_blank" rel="noopener noreferrer" className="text-vacchio-black/60 font-bold tracking-tighter hover:text-vacchio-blue transition-all duration-200 select-text">Computer Science</a> with a minor in <a href="https://admissions.carleton.ca/programs/interactive-multimedia-and-design-imd/" target="_blank" rel="noopener noreferrer" className="text-vacchio-black/60 font-bold tracking-tighter hover:text-vacchio-blue transition-all duration-200 select-text">Interaction Design</a> at <a href="https://carleton.ca/" target="_blank" rel="noopener noreferrer" className="text-vacchio-black/60 font-bold tracking-tighter hover:text-vacchio-blue transition-all duration-200 select-text">Carleton University</a>, building on a diploma in Interaction Design and hands-on experience with React, JavaScript, and modern web development.
              </p>
              <p>
              My design background gives me a sharp eye for detail and usability, while my computer science studies deepen my problem-solving and software development skills.
              </p>
              <p>
              I thrive at the intersection of design and development, building digital experiences that feel natural.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section 
            id="experience" 
            className="mb-12 pt-12 group"
          >
            <div className="space-y-14 relative group/experience">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  period={experience.period}
                  title={experience.title}
                  company={experience.company}
                  description={experience.description}
                  technologies={experience.technologies}
                  link={experience.link}
                  isAnyCardHovered={hoveredCardIndex !== null}
                  onHoverChange={(isHovered) => {
                    setHoveredCardIndex(isHovered ? index : null)
                  }}
                />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-12 pt-12">

          </section>
        </div>
      </div>
    </div>
  )
}

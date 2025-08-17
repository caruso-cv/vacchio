import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

interface ExperienceCardProps {
  period: string
  title: string
  company: string
  description: string
  technologies: string[]
  link?: string
  isAnyCardHovered: boolean
  onHoverChange: (isHovered: boolean) => void
}

export default function ExperienceCard({ period, title, company, description, technologies, link, isAnyCardHovered, onHoverChange }: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const CardContent = () => (
    <>
      <div className={cn(
        "absolute inset-0 -top-5 -bottom-5 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-50 ease-in-out-quad",
        isHovered && "bg-[#E2E3E1]/20 border-vacchio-black/20 backdrop-blur-lg"
      )}></div>
      <div className="flex gap-8 relative z-10 items-start">
        {/* Date on the left */}
        <div className="flex-shrink-0 py-1.5 w-32">
          <p className="text-xs text-vacchio-black/40 font-semibold uppercase">{period}</p>
        </div>
        
        {/* Job details on the right */}
        <div className="flex-1">
          <h3 className={cn(
            "text-sm font-bold uppercase mb-1 mt-1 flex items-center gap-1 transition-colors duration-50 ease-in-out-quad",
            isHovered ? "text-vacchio-blue" : "text-vacchio-black"
          )}>
            {title}
            {link && (
              <motion.div
                animate={{
                  x: isHovered ? 4 : 0,
                  y: isHovered ? -4 : 0,
                  color: isHovered ? "var(--vacchio-blue)" : "rgba(0, 0, 0, 0.6)"
                }}
                transition={{
                  x: { type: "spring", stiffness: 400, damping: 25 },
                  y: { type: "spring", stiffness: 400, damping: 25 },
                  color: { duration: 0.05 }
                }}
              >
                <ArrowUpRight className="w-4 h-4 mt-1" />
              </motion.div>
            )}
          </h3>
          <p className="text-sm text-vacchio-black/30 mb-3 font-medium">{company}</p>
          <p className="text-vacchio-black/50 mb-4 leading-relaxed text-sm">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )

  if (link) {
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative group transition-opacity duration-200 group-hover/experience:opacity-50 hover:!opacity-100 block"
        )}
        onMouseEnter={() => {
          setIsHovered(true)
          onHoverChange(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          onHoverChange(false)
        }}
      >
        <CardContent />
      </a>
    )
  }

  return (
    <div 
      className={cn(
        "relative group transition-opacity duration-200 group-hover/experience:opacity-50 hover:!opacity-100"
      )}
      onMouseEnter={() => {
        setIsHovered(true)
        onHoverChange(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        onHoverChange(false)
      }}
    >
      <CardContent />
    </div>
  )
}

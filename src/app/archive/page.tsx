import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { TextShimmer } from '../../components/ui/text-shimmer'

export default function ArchivePage() {
  const projects = [
    {
        year: "2025",
        name: "Game Studio Site",
        link: "https://guildsaga.com/",
        linkText: "guildsaga.com",
        madeAt: "Ocelot Technologies.ltd",
        technologies: ["TypeScript", "Next.js", "React", "Supabase", "Shadcn", "Motion", "Tailwind", "Vercel"]
    },
    {
        year: "2025",
        name: "Caddi AI Inc.",
        link: "https://www.caddiai.com/",
        linkText: "caddiai.com",
        madeAt: "Algonquin College",
        technologies: ["Three.js", "Next.js", "TypeScript", "Stripe", "Supabase", "Resend", "Shadcn", "Motion", "Tailwind", "Vercel"]
    },
    {
        year: "2025",
        name: "BMS Tech Site",
        link: "https://www.neutroncontrols.com/",
        linkText: "neutroncontrols.com",
        madeAt: "Neutron Controls",
        technologies: ["React", "JavaScript", "Next.js", "Tailwind", "AWS CloudFront", "S3", "GitLab", "Vercel", "MailGun"]
    },
    {
        year: "2025",
        name: "CSS Framework",
        link: "https://caruso-cv.github.io/tailfeather/",
        linkText: "tailfeather.io",
        madeAt: "Algonquin College",
        technologies: ["SCSS","HTML + CSS", "JavaScript"]
    },
    {
        year: "2024",
        name: "Pokedex",
        link: "https://caruso-cv.github.io/pokedex/",
        linkText: "pokedex.io",
        madeAt: "Algonquin College",
        technologies: ["HTML + CSS", "JavaScript", "Tailwind", "PokeAPI"]
    },
    {
        year: "2024",
        name: "Unsplash Clone",
        link: "https://caruso-cv.github.io/unsplash-clone/",
        linkText: "unsplash-clone.io",
        madeAt: "Algonquin College",
        technologies: ["HTML + CSS", "JavaScript", "Tailwind"]
    },
    {
        year: "2024",
        name: "Sportsbook Site/Docs",
        link: "https://www.revolver.ag/",
        linkText: "revolver.ag",
        madeAt: "Ocelot Technologies.ltd",
        technologies: ["React", "JSX", "MDX", "Next.js", "Tailwind", "Vercel"]
    },
  ]

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="p-6 md:p-12 pt-12 md:pt-14 lg:pt-24 lg:p-6 lg:pr-10">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-vacchio-black/60 hover:text-vacchio-blue transition-colors duration-100 ease-out-quad mb-4 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-100 ease-out-quad group-hover:-translate-x-1" />
              <span className="text-sm font-semibold uppercase">Carmen Vacchio</span>
            </Link>
            <h1 className="text-5xl font-inter text-vacchio-black/80 pb-2 font-semibold">All Projects</h1>
          </div>

                    {/* Projects Table */}
          <table id="content" className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-vacchio-black/10">
              <tr>
                <th className="py-4 pr-8 text-xs font-semibold text-vacchio-black/60 uppercase tracking-wider">Year</th>
                <th className="py-4 pr-8 text-xs font-semibold text-vacchio-black/60 uppercase tracking-wider">Project</th>
                <th className="hidden py-4 pr-8 text-xs font-semibold text-vacchio-black/60 uppercase tracking-wider lg:table-cell">Made at</th>
                <th className="hidden py-4 pr-8 text-xs font-semibold text-vacchio-black/60 uppercase tracking-wider lg:table-cell">Built with</th>
                <th className="hidden py-4 pr-8 text-xs font-semibold text-vacchio-black/60 uppercase tracking-wider sm:table-cell">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="border-b border-vacchio-black/5">
                  <td className="py-6 pr-8 text-sm text-vacchio-black/40 font-medium align-top">
                    <div className="pt-0.5">{project.year}</div>
                  </td>
                  <td className="py-6 pr-8 text-xs text-vacchio-black/80 font-semibold uppercase align-top">
                    <div className="pt-1">
                                          <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name} project`}
                      className="group inline-flex items-center gap-2 text-vacchio-black/80 hover:text-vacchio-blue transition-colors duration-100 ease-out-quad md:hidden"
                    >
                      <span>{project.name}</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform duration-100 ease-out-quad group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                      <span className="hidden md:inline">{project.name}</span>
                    </div>
                  </td>
                  <td className="hidden py-6 pr-8 lg:table-cell align-top">
                    <TextShimmer className="text-sm font-medium text-vacchio-black/50" duration={3}>
                      {project.madeAt}
                    </TextShimmer>
                  </td>
                  <td className="hidden py-6 pr-8 lg:table-cell align-top">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="hidden py-6 pr-8 sm:table-cell align-top">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name} project`}
                      className="group inline-flex items-center gap-1 text-sm text-vacchio-black/50 hover:text-vacchio-blue transition-colors duration-100 ease-out-quad select-text"
                    >
                      <span className="text-sm font-medium">{project.linkText}</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform duration-100 ease-out-quad group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

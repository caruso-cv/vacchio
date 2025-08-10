import React from 'react'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
import ScrollColorImage from '@/components/ui/ScrollColorImage'
import ScrollColorVideo from '@/components/ui/ScrollColorVideo'

interface MediaItem {
  type: 'video' | 'image'
  src: string
  fallbackSrc?: string
  alt?: string
}

interface ProjectLayoutProps {
  title: string
  description: string
  techStack: React.ReactNode
  githubUrl: string
  liveUrl: string
  content: {
    summary: string
    projectGoals: string[]
    technicalImplementation: string
    keyFeatures: string[]
    challenges: string[]
  }
  media: MediaItem[]
}

export default function ProjectLayout({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  content,
  media
}: ProjectLayoutProps) {
  return (
    <>

        {/* First Border */}
        <div className="border-t border-vacchio-black/10"></div>

        {/* Tech Stack & Links Section */}
        <div className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Tech Stack */}
            <div className="flex flex-col gap-4">
                <h3 className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</h3>
                <div className='flex gap-4'>
                    {techStack}
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
                <Link href={githubUrl} target='_blank' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
                <Github className="w-4 h-4" />
                <span>View Repo</span>
                </Link>
                <Link href={liveUrl} target='_blank' className='border-vacchio-black/80 border font-bold px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer bg-vacchio-black hover:bg-vacchio-black/80 text-white/80 transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
                <ExternalLink className="w-4 h-4 opacity-80" />
                <span>Visit Site</span>
                </Link>
            </div>
            </div>
        </div>

        {/* Second Border */}
        <div className="border-t border-vacchio-black/10"></div>

        {/* Main Content Area */}
        <div className="py-12">
            <div className="flex gap-12">
            {/* Blog Content - 3/4 width */}
            <div className="flex-1 max-w-none w-3/4">
                <article className="prose prose-lg max-w-none">

                <section id="short-explanation">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Summary</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    {content.summary}
                    </p>

                    {/* First Media Item */}
                    {media[0] && (
                        <div className="mb-8">
                            {media[0].type === 'video' ? (
                                <ScrollColorVideo
                                    src={media[0].src}
                                    fallbackSrc={media[0].fallbackSrc}
                                    className="w-full h-auto"
                                />
                            ) : (
                                <ScrollColorImage
                                    src={media[0].src}
                                    alt={media[0].alt || `${title} Interface`}
                                    className="w-full h-auto opacity-90 rounded-lg border"
                                />
                            )}
                        </div>
                    )}
                </section>

                <section id="project-goals">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Project Goals</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The primary goal was to create a project that would:
                    </p>
                    <ul className="list-disc pl-6 text-vacchio-black/80 space-y-2 mb-12">
                    {content.projectGoals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                    ))}
                    </ul>
                </section>

                <section id="tech-stack-details">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Technical Implementation</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    {content.technicalImplementation}
                    </p>
                </section>

                <section id="features">

                    {/* Second Media Item */}
                    {media[1] && (
                        <div className="mb-12">
                            {media[1].type === 'video' ? (
                                <ScrollColorVideo
                                    src={media[1].src}
                                    fallbackSrc={media[1].fallbackSrc}
                                    className="w-full h-auto"
                                />
                            ) : (
                                <ScrollColorImage
                                    src={media[1].src}
                                    alt={media[1].alt || `${title} Features`}
                                    className="w-full h-auto opacity-90 rounded-lg border"
                                />
                            )}
                        </div>
                    )}
                </section>

                {/* Narrative between second and third media (balanced with earlier text) */}
                <section id="characters-overview">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Key Features</h2>
                    <ul className="list-disc pl-6 text-vacchio-black/80 mb-8 space-y-2">
                    {content.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                    </ul>
                    <p className="text-vacchio-black/80 leading-relaxed mb-4">
                    The application successfully demonstrates core development principles while creating a functional 
                    and visually appealing experience.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    This project showcases the ability to build practical applications using modern web technologies, 
                    emphasizing clean code, responsive design, and user experience best practices.
                    </p>

                    {/* Third Media Item */}
                    {media[2] && (
                        <div className="mb-12">
                            {media[2].type === 'video' ? (
                                <ScrollColorVideo
                                    src={media[2].src}
                                    fallbackSrc={media[2].fallbackSrc}
                                    className="w-full h-auto"
                                />
                            ) : (
                                <ScrollColorImage
                                    src={media[2].src}
                                    alt={media[2].alt || `${title} Details`}
                                    className="w-full h-auto opacity-90 rounded-lg border"
                                />
                            )}
                        </div>
                    )}
                </section>

                {/* Challenges & Solutions moved to the end */}
                <section id="challenges">
                    <h2 className="text-2xl font-bold text-vacchio-black mb-6">Challenges & Solutions</h2>
                    {content.challenges.map((challenge, index) => (
                        <p key={index} className="text-vacchio-black/80 leading-relaxed mb-6">
                        {challenge}
                        </p>
                    ))}
                </section>

                </article>
            </div>

            {/* Sticky Navigation - 1/4 width */}
            <div className="w-1/4 hidden lg:block">
                <div className="sticky top-8">
                <nav className="bg-[#E2E3E1]/20 backdrop-blur-lg rounded-lg overflow-hidden border p-6">
                    <h3 className="font-bold text-vacchio-black mb-4">On This Page</h3>
                    <ul className="space-y-2">
                    <li>
                        <a 
                        href="#short-explanation" 
                        className="text-sm text-vacchio-black/70 hover:text-vacchio-black transition-colors block py-1"
                        >
                        Summary
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#project-goals" 
                        className="text-sm text-vacchio-black/70 hover:text-vacchio-black transition-colors block py-1"
                        >
                        Project Goals
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#tech-stack-details" 
                        className="text-sm text-vacchio-black/70 hover:text-vacchio-black transition-colors block py-1"
                        >
                        Technical Implementation
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#features" 
                        className="text-sm text-vacchio-black/70 hover:text-vacchio-black transition-colors block py-1"
                        >
                        Key Features
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#challenges" 
                        className="text-sm text-vacchio-black/70 hover:text-vacchio-black transition-colors block py-1"
                        >
                        Challenges & Solutions
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            </div>
        </div>
    </>

  )
}

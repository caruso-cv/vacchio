import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import Nextjs from '@/components/logos/Nextjs'
import Tailwind from '@/components/logos/TailwindCSS'
import ReactLogo from '@/components/logos/React'
import Vercel from '@/components/logos/Vercel'
import AmazonWebServices from '@/components/logos/AmazonWebServices'
import JavaScript from '@/components/logos/JavaScript'
import ScrollColorImage from '@/components/ui/ScrollColorImage'

export default function Neutron() {
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
                    <Nextjs className='w-4 h-4 grayscale opacity-50'/>
                    <Tailwind className='w-4 h-4 text-black opacity-50'/>
                    <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                    <Vercel className='w-4 h-4 text-black opacity-50'/>
                    <AmazonWebServices className='w-6 h-4 mt-px text-black opacity-50'/>
                    <JavaScript className='w-4 h-4 text-black opacity-50'/>
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
                <Link href='https://github.com/SolCaruso/vercel' target='_blank' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
                <Github className="w-4 h-4" />
                <span>View Repo</span>
                </Link>
                <Link href='https://www.neutroncontrols.com/' target='_blank' className='border-vacchio-black/80 border font-bold px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer bg-vacchio-black hover:bg-vacchio-black/80 text-white/80 transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
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
                    Neutron Controls required a complete website rebuild as part of their business pivot from EV battery 
                    technology to Battery Management Systems (BMS) and Energy Storage Systems (ESS). The project was 
                    completed during a co-op placement and needed to reflect their new direction with modern design 
                    and exceptional performance.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-8">
                    The website features lightning-fast 4K video loading through AWS optimization, comprehensive contact 
                    and job application forms, proper cookie handling, Google Ad Sense integration, and a complex CI/CD 
                    pipeline connecting their internal GitLab repository to GitHub and Vercel deployment.
                    </p>
                    <div className="mb-12">
                        <p className="text-vacchio-black/80 leading-relaxed mb-4">
                        The landing sequence establishes mood and pace, letting the world speak through motion and sound. 
                        Subtle UI overlays invite exploration without distracting from the core experience.
                        </p>
                        <p className="text-vacchio-black/80 leading-relaxed">
                        The launch trailer follows with a cinematic cut that anchors the game's themes while showcasing 
                        polished combat and environment art.
                        </p>
                    </div>

                    {/* Home Page Screenshot */}
                    <div className="mb-8">
                        <ScrollColorImage
                            src="/png/neutron1.png" 
                            alt="Ocelot Technologies Homepage"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                <section id="project-goals">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Project Goals</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The primary goal was to create a high-performance corporate website that would:
                    </p>
                    <ul className="list-disc pl-6 text-vacchio-black/80 space-y-2 mb-12">
                    <li>Reflect Neutron Controls' pivot from EV batteries to BMS and ESS technology</li>
                    <li>Deliver exceptional loading speeds to convey performance and technical excellence</li>
                    <li>Implement comprehensive contact and job application forms for client and talent acquisition</li>
                    <li>Integrate Google Ad Sense and tracking for marketing analytics</li>
                    <li>Establish a robust CI/CD pipeline from internal GitLab to public GitHub and Vercel</li>
                    <li>Create a modern, professional design that appeals to enterprise clients</li>
                    </ul>
                </section>

                <section id="tech-stack-details">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Technical Implementation</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The website is built using Next.js with React, utilizing JavaScript/JSX for rapid development and 
                    component-based architecture. Tailwind CSS provides a utility-first approach to styling, enabling 
                    quick implementation of the modern, professional design requirements.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    AWS S3 serves as the content delivery solution for 4K video assets, implementing advanced caching 
                    techniques and video chunking for lightning-fast load times. The CI/CD pipeline connects Neutron's 
                    internal GitLab repository to GitHub, then automatically deploys to Vercel, ensuring seamless 
                    updates while maintaining corporate security protocols.
                    </p>
                </section>

                <section id="features">
                    

                    {/* Blog Page Screenshot */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/png/neutron2.png"
                            alt="Ocelot Technologies Blog Page"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                {/* Narrative between second and third media (balanced with earlier text) */}
                <section id="characters-overview">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Key Features</h2>
                    <ul className="list-disc pl-6 text-vacchio-black/80 mb-8 space-y-2">
                    <li>Lightning-fast 4K video delivery through AWS S3 with advanced caching and chunking</li>
                    <li>Comprehensive contact forms for client inquiries and business development</li>
                    <li>Professional job application system for talent acquisition</li>
                    <li>Google Ad Sense integration with proper tracking and analytics</li>
                    <li>Cookie consent and management system for GDPR compliance</li>
                    <li>Complex CI/CD pipeline connecting internal GitLab to public GitHub and Vercel</li>
                    <li>Modern, enterprise-grade design optimized for BMS and ESS industry clients</li>
                    </ul>
                    <p className="text-vacchio-black/80 leading-relaxed mb-4">
                    Beyond gameplay, the site spotlights the world and its characters. Each hero is introduced with a 
                    concise bio and striking artwork, designed to immerse players in the game's universe.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    This section balances visuals with copy, making it easy to scan while still telling a cohesive story 
                    about the cast and their roles in the game.
                    </p>

                    {/* Character Showcase Screenshot */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/png/neutron3.png"
                            alt="Character Showcase Section"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                {/* Challenges & Solutions moved to the end */}
                <section id="challenges">
                    <h2 className="text-2xl font-bold text-vacchio-black mb-6">Challenges & Solutions</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The primary challenge was achieving exceptional loading speeds for 4K video content on the hero section. 
                    We solved this by implementing advanced AWS S3 caching strategies and video chunking techniques, 
                    allowing massive video files to load almost instantly and giving visitors an immediate impression 
                    of Neutron Controls' technical capabilities and performance standards.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    Another significant challenge was establishing a secure CI/CD pipeline that connected Neutron's internal 
                    GitLab repository to the public deployment infrastructure. We created a complex but seamless pipeline 
                    that maintains corporate security while enabling rapid deployment through GitHub to Vercel, ensuring 
                    code never leaves their controlled environment inappropriately.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-0">
                    Presenting character bios in a highly visual yet accessible layout drove a responsive grid with semantic 
                    headings, keyboard focus states, and readable color contrast.
                    </p>
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
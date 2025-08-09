import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import Nextjs from '@/components/logos/Nextjs'
import Tailwind from '@/components/logos/TailwindCSS'
import Typescript from '@/components/logos/TypeScript'
import ReactLogo from '@/components/logos/React'
import Supabase from '@/components/logos/Supabase'
import Vercel from '@/components/logos/Vercel'
import Solana from '@/components/logos/Solana'
import ScrollColorImage from '@/components/ui/ScrollColorImage'
import ScrollColorVideo from '@/components/ui/ScrollColorVideo'

export default function Ocelot() {
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
                    <Supabase className='w-4 h-4 grayscale'/>
                    <Nextjs className='w-4 h-4 grayscale opacity-50'/>
                    <Tailwind className='w-4 h-4 text-black opacity-50'/>
                    <Typescript className='w-4 h-4  text-black opacity-50'/>
                    <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                    <Solana className='w-4 h-4 grayscale opacity-50'/>
                    <Vercel className='w-4 h-4 text-black opacity-50'/>
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
                <Link href='https://github.com/SolCaruso/ocelot' target='_blank' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
                <Github className="w-4 h-4" />
                <span>View Repo</span>
                </Link>
                <Link href='https://ocelot-pearl.vercel.app/' target='_blank' className='border-vacchio-black/80 border font-bold px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer bg-vacchio-black hover:bg-vacchio-black/80 text-white/80 transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
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
                    Ocelot Technologies is a comprehensive website built for a game development studio that needed both 
                    a professional web presence and integrated blockchain functionality. The site serves as both a 
                    showcase for their games and a platform for community engagement through their native GGEM token.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-8">
                    The website features a custom-built Solana token swap powered by Jupiter, allowing users to trade 
                    for GGEM tokens directly on the site, alongside a Supabase-powered blog system for development 
                    updates and bug fix reports.
                    </p>
                    
                    {/* Home Page Media (Video) */}
                    <ScrollColorVideo
                        src="/webm/MagicImage.webm"
                        className="w-full h-auto"
                    />
                </section>

                <section id="project-goals">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Project Goals</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The primary goal was to create a professional online presence for the game studio that would:
                    </p>
                    <ul className="list-disc pl-6 text-vacchio-black/80 space-y-2 mb-12">
                    <li>Create a professional web presence for the game development studio</li>
                    <li>Build a Supabase-powered blog system for development updates and bug reports</li>
                    <li>Integrate a custom Solana token swap for their native GGEM token</li>
                    <li>Ensure seamless user experience between traditional web and blockchain features</li>
                    <li>Provide fast loading times and excellent SEO performance</li>
                    <li>Create an engaging platform that reflects the studio&apos;s innovative approach</li>
                    </ul>
                </section>

                <section id="tech-stack-details">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Technical Implementation</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The website is built using Next.js 14 with React 18, providing server-side rendering and 
                    excellent performance optimization. TypeScript ensures type safety throughout the codebase, 
                    while Tailwind CSS provides a utility-first approach to styling.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    Supabase serves as the backend for the blog system, providing authentication, database management, 
                    and real-time capabilities for development updates and bug reports. The custom Solana integration 
                    uses Jupiter&apos;s swap API to enable seamless GGEM token trading, while Vercel provides optimal 
                    deployment performance and seamless CI/CD integration.
                    </p>
                </section>

                <section id="features">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Key Features</h2>
                    <ul className="list-disc pl-6 text-vacchio-black/80 mb-8 space-y-2">
                    <li>Custom embedded Solana token swap powered by Jupiter for GGEM tokens</li>
                    <li>Supabase-powered blog system for development updates and bug fix reports</li>
                    <li>Real-time content management for game development announcements</li>
                    <li>Responsive design that works perfectly on all devices</li>
                    <li>Seamless integration between traditional web and blockchain features</li>
                    <li>SEO optimization for better search visibility</li>
                    <li>Fast loading times with optimized performance for both web and DeFi features</li>
                    </ul>

                    {/* Blog Page Screenshot */}
                    <ScrollColorImage
                        src="/png/ocelot2.png"
                        alt="Ocelot Technologies Blog Page"
                        className="w-full h-auto opacity-90 rounded-lg border"
                    />
                </section>

                <section id="challenges">
                    <h2 className="text-2xl font-bold text-vacchio-black mb-6">Challenges & Solutions</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    One of the main challenges was integrating blockchain functionality (Solana token swap) into 
                    a traditional web application while maintaining excellent UX. We solved this by creating a 
                    seamless embedded swap interface powered by Jupiter that feels native to the website experience.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-8">
                    Another challenge was building a robust blog system for technical content like development updates 
                    and bug reports. We implemented a Supabase-powered CMS that allows the development team to easily 
                    publish updates, manage content, and engage with their community in real-time.
                    </p>

                    {/* Swap Page Screenshot */}
                    <ScrollColorImage
                        src="/png/ocelot3.png" 
                        alt="Ocelot Technologies GGEM Token Swap Page"
                        className="w-full h-auto opacity-90"
                    />
                </section>

                </article>
            </div>

            {/* Sticky Navigation - 1/4 width */}
            <div className="w-1/4 hidden lg:block">
                <div className="sticky top-22">
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
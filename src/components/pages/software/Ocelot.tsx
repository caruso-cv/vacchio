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
                    Ocelot Technologies is a modern site for a game studio that prioritizes the in-game experience, 
                    character storytelling, and a fast, reliable blog for updates.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-8">
                    The home screen features a high-quality looping gameplay video alongside a dedicated launch trailer. 
                    A production-ready blog with advanced caching keeps readers up to date with instant load times.
                    </p>
                    <div className="mb-12">
                        <p className="text-vacchio-black/80 leading-relaxed mb-4">
                        The landing sequence establishes mood and pace, letting the world speak through motion and sound. 
                        Subtle UI overlays invite exploration without distracting from the core experience.
                        </p>
                        <p className="text-vacchio-black/80 leading-relaxed">
                        The launch trailer follows with a cinematic cut that anchors the game&apos;s themes while showcasing 
                        polished combat and environment art.
                        </p>
                    </div>

                    {/* Gameplay Loop */}
                    <div className="mb-8">
                        <ScrollColorVideo
                            src="/webm/MagicImage.webm"
                            className="w-full h-auto"
                        />
                    </div>
                    
                </section>

                <section id="project-goals">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Project Goals</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The primary goal was to build a site that would:
                    </p>
                    <ul className="list-disc pl-6 text-vacchio-black/80 space-y-2 mb-12">
                    <li>Showcase the game with a looping hero video and a dedicated launch trailer</li>
                    <li>Highlight key characters with bios in a visually rich, immersive layout</li>
                    <li>Provide a robust blog for studio updates, dev logs, and patch notes</li>
                    <li>Use advanced caching for instant reads while keeping content fresh</li>
                    <li>Deliver responsive design, strong accessibility, and great SEO</li>
                    </ul>
                </section>

                <section id="tech-stack-details">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Technical Implementation</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    Built with Next.js 14 and React 18 using TypeScript and Tailwind CSS for a fast, maintainable UI.
                    Supabase powers the blog (content, auth, storage), and Vercel handles deployment and edge caching.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    The blog leverages stale-while-revalidate and tag-based revalidation for instant loads, with route 
                    segment caching to keep popular posts fast while ensuring updates propagate quickly.
                    </p>
                </section>

                <section id="features">
                    

                    {/* Blog Page Screenshot */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/png/ocelot2.png"
                            alt="Ocelot Blog Page"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                {/* Narrative between second and third media (balanced with earlier text) */}
                <section id="characters-overview">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Key Features</h2>
                    <ul className="list-disc pl-6 text-vacchio-black/80 mb-8 space-y-2">
                    <li>High-quality looping gameplay video and a dedicated launch trailer</li>
                    <li>Supabase-powered blog with advanced caching and instant loads</li>
                    <li>Character showcase with bios in a visually aesthetic layout</li>
                    <li>Responsive design, accessibility, and SEO optimizations</li>
                    </ul>
                    <p className="text-vacchio-black/80 leading-relaxed mb-4">
                    Beyond gameplay, the site spotlights the world and its characters. Each hero is introduced with a 
                    concise bio and striking artwork, designed to immerse players in the game&apos;s universe.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    This section balances visuals with copy, making it easy to scan while still telling a cohesive story 
                    about the cast and their roles in the game.
                    </p>

                    {/* Character Showcase Screenshot */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/png/ocelot3.png"
                            alt="Character Showcase Section"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                {/* Challenges & Solutions moved to the end */}
                <section id="challenges">
                    <h2 className="text-2xl font-bold text-vacchio-black mb-6">Challenges & Solutions</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    Delivering high-fidelity video while preserving performance required careful encoding and lazy loading. 
                    We optimized media formats and deferrals so the hero loop and trailer feel instant without blocking interaction.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    For the blog, balancing freshness with speed led to cache tagging and stale-while-revalidate, so popular 
                    posts render immediately while edits propagate quickly.
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
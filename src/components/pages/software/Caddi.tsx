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
import Stripe from '@/components/logos/Stripe'

export default function Caddi() {
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
                    <Vercel className='w-4 h-4 text-black opacity-50'/>
                    <Stripe className='w-7 h-4 mt-px text-black opacity-50'/>
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
                    Caddi AI required a complete website redesign and rebuild from scratch to showcase their golf technology 
                    business. The project combined two distinct business models: promoting their Forecaddi golf app for distance 
                    tracking and wind speed analysis, and selling custom hardwood golf divot tools with personalized engraving.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-8">
                    The website features a full ecommerce platform with Stripe integration, a custom 3D divot tool builder 
                    where users can select wood grains and upload custom logos, and a comprehensive product showcase for 
                    both the golf app and merchandise offerings.
                    </p>
                    
                    {/* Home Page Screenshot */}
                    <div className="mb-12 rounded-lg overflow-hidden border border-vacchio-black/10">
                    <Image
                        src="/png/Screenshot 2025-07-28 at 2.42.30 AM.png" 
                        alt="Ocelot Technologies Homepage"
                        width={800}
                        height={500}
                        className="w-full h-auto"
                    />
                    </div>
                </section>

                <section id="project-goals">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Project Goals</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The primary goal was to create a comprehensive digital platform that would:
                    </p>
                    <ul className="list-disc pl-6 text-vacchio-black/80 space-y-2 mb-12">
                    <li>Showcase the Forecaddi golf app with detailed feature explanations and benefits</li>
                    <li>Build a complete ecommerce solution for custom hardwood divot tools and golf merchandise</li>
                    <li>Integrate Stripe payment processing for seamless transactions</li>
                    <li>Create a custom 3D divot tool builder with wood grain selection and logo upload functionality</li>
                    <li>Develop a comprehensive product database to manage inventory and customization options</li>
                    <li>Ensure responsive design for optimal mobile and desktop shopping experiences</li>
                    </ul>
                </section>

                <section id="tech-stack-details">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Technical Implementation</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The website is built using Next.js 14 with React 18, providing server-side rendering and 
                    excellent performance optimization. TypeScript ensures type safety throughout the codebase, 
                    while Tailwind CSS provides a utility-first approach to styling for rapid development.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    Supabase serves as the backend database, managing product inventory, user accounts, and order processing. 
                    Stripe handles secure payment processing for all ecommerce transactions. The custom 3D divot tool builder 
                    uses advanced web technologies to provide real-time visualization of wood grain selections and logo placements, 
                    while Vercel provides optimal deployment performance and seamless CI/CD integration.
                    </p>
                </section>

                <section id="features">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Key Features</h2>
                    <ul className="list-disc pl-6 text-vacchio-black/80 mb-8 space-y-2">
                    <li>Interactive 3D divot tool builder with real-time wood grain and logo visualization</li>
                    <li>Complete ecommerce platform with Stripe payment processing and order management</li>
                    <li>Comprehensive product database for managing divot tool variations and golf merchandise</li>
                    <li>Custom logo upload and positioning system for personalized engraving</li>
                    <li>Forecaddi golf app showcase with feature demonstrations and download links</li>
                    <li>Responsive design optimized for both mobile shopping and desktop browsing</li>
                    <li>SEO optimization for golf-related keywords and local golf pro shop visibility</li>
                    </ul>

                    {/* Blog Page Screenshot */}
                    <div className="mb-12 rounded-lg overflow-hidden border border-vacchio-black/10">
                    <Image
                        src="/png/Screenshot 2025-07-28 at 2.42.53 AM.png"
                        alt="Ocelot Technologies Blog Page"
                        width={800}
                        height={500}
                        className="w-full h-auto"
                    />
                    </div>
                </section>

                <section id="challenges">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Challenges & Solutions</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    One of the main challenges was building a comprehensive ecommerce database from scratch to handle 
                    the complex product variations of custom hardwood divot tools. We created a flexible database schema 
                    that accommodates different wood types, divot styles, logo placements, and custom engraving options 
                    while maintaining efficient inventory management.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-8">
                    Another significant challenge was developing the 3D divot tool builder that allows users to visualize 
                    their custom selections in real-time. We implemented advanced web rendering techniques to show wood grain 
                    textures and logo placement accurately, giving customers confidence in their custom orders before purchase.
                    </p>

                    {/* Swap Page Screenshot */}
                    <div className="my-8 rounded-lg overflow-hidden border border-vacchio-black/10">
                    <Image
                        src="/png/Database Structure.png" 
                        alt="Ocelot Technologies GGEM Token Swap Page"
                        width={800}
                        height={500}
                        className="w-full h-auto"
                    />
                    </div>
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
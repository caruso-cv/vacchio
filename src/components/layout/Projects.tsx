import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="mb-18 pt-12 group"
    >
      <div className="space-y-10 relative group/projects mb-10">

        {/* Caddi Project Card */}
        <a 
          href="https://caddi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/caddi block project-card"
        >
          <div className="absolute inset-0 -top-4 -bottom-4 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-200 ease-in-out-quad group-hover/caddi:bg-[#E2E3E1]/40 group-hover/caddi:shadow-xs group-hover/caddi:border-vacchio-black/10 group-hover/caddi:backdrop-blur-lg"></div>
          <div className="flex gap-8 relative z-10 items-start">
            <div className="flex-shrink-0 py-1.5 w-32">
              <Image 
                src="/png/caddi.png" 
                alt="Caddi Project" 
                width={150} 
                height={81} 
                className="w-[150px] h-[81px] object-fill rounded-sm opacity-60 border-vacchio-black/05 border group-hover/caddi:border-vacchio-black/10 group-hover/caddi:border"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold uppercase mb-1 mt-1 flex items-center gap-1 transition-colors duration-200 ease-in-out-quad group-hover/caddi:text-vacchio-blue">
                CADDI AI INC.
                <div className="transition-all duration-200 ease-in-out group-hover/caddi:translate-x-1 group-hover/caddi:-translate-y-1 text-vacchio-black/60 group-hover/caddi:text-vacchio-blue">
                  <ArrowUpRight className="w-4 h-4 mt-1" />
                </div>
              </h3>
              <p className="text-vacchio-black/50 mb-4 leading-relaxed text-sm">
                E-commerce platform built with Next.js and Supabase, featuring a shopping cart, 3D product builder, and payment integration.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">Three.js</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">Next.js</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">Stripe</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">Supabase</span>
              </div>
            </div>
          </div>
        </a>

        {/* Pokedex Project Card */}
        <a 
          href="https://solcaruso.github.io/pokedex/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/pokedex block project-card"
        >
          <div className="absolute inset-0 -top-4 -bottom-4 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-200 ease-in-out-quad group-hover/pokedex:bg-[#E2E3E1]/40 group-hover/pokedex:shadow-xs group-hover/pokedex:border-vacchio-black/10 group-hover/pokedex:backdrop-blur-lg"></div>
          <div className="flex gap-8 relative z-10 items-start">
            <div className="flex-shrink-0 py-1.5 w-32">
              <Image 
                src="/png/pokedex.png" 
                alt="Pokedex Project" 
                width={150} 
                height={81}  
                className="w-[150px] h-[81px] object-fill rounded-sm opacity-60 border-vacchio-black/05 border group-hover/pokedex:border-vacchio-black/10 group-hover/pokedex:border"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold uppercase mb-1 mt-1 flex items-center gap-1 transition-colors duration-200 ease-in-out-quad group-hover/pokedex:text-vacchio-blue">
                POKEDEX
                <div className="transition-all duration-200 ease-in-out group-hover/pokedex:translate-x-1 group-hover/pokedex:-translate-y-1 text-vacchio-black/60 group-hover/pokedex:text-vacchio-blue">
                  <ArrowUpRight className="w-4 h-4 mt-1" />
                </div>
              </h3>
              <p className="text-vacchio-black/50 mb-4 leading-relaxed text-sm">
                Interactive Pokemon database with search, filtering, and detailed information. Built with the PokeAPI for real-time data.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">HTML + CSS</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">JavaScript</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">Tailwind</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">PokeAPI</span>
              </div>
            </div>
          </div>
        </a>

        {/* Unsplash Project Card */}
        <a 
          href="https://solcaruso.github.io/unsplash-clone/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/unsplash block project-card"
        >
          <div className="absolute inset-0 -top-4 -bottom-4 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-200 ease-in-out-quad group-hover/unsplash:bg-[#E2E3E1]/40 group-hover/unsplash:shadow-xs group-hover/unsplash:border-vacchio-black/10 group-hover/unsplash:backdrop-blur-lg"></div>
          <div className="flex gap-8 relative z-10 items-start">
            <div className="flex-shrink-0 py-1.5 w-32">
              <Image 
                src="/png/unsplash.png" 
                alt="Unsplash Project" 
                width={150} 
                height={81} 
                className="w-[150px] h-[81px] object-fill rounded-sm opacity-50 border-vacchio-black/05 border group-hover/unsplash:border-vacchio-black/10 group-hover/unsplash:border"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold uppercase mb-1 mt-1 flex items-center gap-1 transition-colors duration-200 ease-in-out-quad group-hover/unsplash:text-vacchio-blue">
                UNSPLASH CLONE
                <div className="transition-all duration-200 ease-in-out group-hover/unsplash:translate-x-1 group-hover/unsplash:-translate-y-1 text-vacchio-black/60 group-hover/unsplash:text-vacchio-blue">
                  <ArrowUpRight className="w-4 h-4 mt-1" />
                </div>
              </h3>
              <p className="text-vacchio-black/50 mb-4 leading-relaxed text-sm">
                A fun short school project of an Unsplash page. Features include download functionality, responsive design, and image optimization.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">HTML + CSS</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">JavaScript</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full">Tailwind</span>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* View Full Resume Button */}
      <div className="relative z-20 resume-button">
         <a 
           href="https://drive.google.com/file/d/1V3Ge1V0qLqDq0mtDPI68vQcOwzeuqNjJ/view?usp=sharing"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-1.5 text-xs font-bold uppercase transition-colors duration-200 ease-in-out-quad text-vacchio-black/80 hover:text-vacchio-blue group/button"
         >
           <span>VIEW FULL PROJECT ARCHIVE</span>
           <div className="transition-all duration-200 ease-in-out group-hover/button:translate-x-1 text-vacchio-black/80 group-hover/button:text-vacchio-blue">
             <ArrowRight className="w-4 h-4" />
           </div>
         </a>
       </div>
    </section>
  )
}
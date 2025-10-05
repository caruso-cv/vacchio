import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="mb-18 sm:pt-8 group"
    >

      {/* Divider */}
      <div className="hidden lg:flex items-center mb-10 section-divider">
          <div className="flex-1 h-px bg-vacchio-black/10"></div>
          <span className="px-4 text-xs font-medium text-stone-600/50 uppercase tracking-wider select-text">Projects</span>
          <div className="flex-1 h-px bg-vacchio-black/10"></div>
      </div>

      {/* Mobile heading */}
      <h2 className="lg:hidden text-sm font-bold mb-10 uppercase">Projects</h2>

      <div className="space-y-10 relative group/projects mb-10">

        {/* Caddi Project Card */}
        <div className="relative group/caddi block project-card">
          <div className="absolute inset-0 -top-4 -bottom-4 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-100 ease-out-quad lg:group-hover/caddi:bg-[#E2E3E1]/40 lg:group-hover/caddi:shadow-xs lg:group-hover/caddi:border-vacchio-black/10 lg:group-hover/caddi:backdrop-blur-lg"></div>
          <a 
            href="https://www.caddiai.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Caddi AI Inc. project"
            className="absolute inset-0 -top-4 -bottom-4 -left-5 -right-5 hidden lg:block z-20"
          >
            <span className="sr-only">Visit Caddi AI Inc. project</span>
          </a>
          <div className="flex gap-8 relative z-10 items-start">
            <div className="hidden sm:block flex-shrink-0 py-1.5 w-32">
              <Image 
                src="/webp/caddi.webp" 
                alt="Caddi Project" 
                width={150} 
                height={81} 
                className="w-[150px] h-[81px] object-fill rounded-sm opacity-80 border-vacchio-black/05 border group-hover/caddi:border-vacchio-black/10 group-hover/caddi:border transition-opacity duration-100 ease-out-quad"
              />
            </div>
            <div className="flex-1">
              <div className="lg:hidden">
                <a 
                  href="https://www.caddiai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-sm font-bold uppercase mb-1 mt-1 transition-colors duration-100 ease-out-quad hover:text-vacchio-blue select-text"
                >
                  <span>CADDI AI INC.</span>
                  <span className="inline-block transition-all duration-100 ease-out-quad group-hover/link:translate-x-1 group-hover/link:-translate-y-1 text-vacchio-black/60 group-hover/link:text-vacchio-blue align-text-bottom">
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </span>
                </a>
              </div>
              <h3 className="hidden lg:block text-sm font-bold uppercase mb-1 mt-1 transition-colors duration-100 ease-out-quad lg:group-hover/caddi:text-vacchio-blue select-text">
                CADDI AI INC.
                <span className="inline-block transition-all duration-100 ease-out-quad lg:group-hover/caddi:translate-x-1 lg:group-hover/caddi:-translate-y-1 text-vacchio-black/60 lg:group-hover/caddi:text-vacchio-blue align-text-bottom">
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </span>
              </h3>
              <p className="text-vacchio-black/60 mb-4 leading-relaxed text-sm select-text">
                E-commerce platform built with Next.js and Supabase, featuring a shopping cart, 3D product builder, and payment integration.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Three.js</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Next.js</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Stripe</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Supabase</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pokedex Project Card */}
        <div className="relative group/pokedex block project-card">
          <div className="absolute inset-0 -top-4 -bottom-4 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-100 ease-out-quad lg:group-hover/pokedex:bg-[#E2E3E1]/40 lg:group-hover/pokedex:shadow-xs lg:group-hover/pokedex:border-vacchio-black/10 lg:group-hover/pokedex:backdrop-blur-lg"></div>
          <a 
            href="https://caruso-cv.github.io/pokedex/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Pokedex project"
            className="absolute inset-0 -top-4 -bottom-4 -left-5 -right-5 hidden lg:block z-20"
          >
            <span className="sr-only">Visit Pokedex project</span>
          </a>
          <div className="flex gap-8 relative z-10 items-start">
            <div className="hidden sm:block flex-shrink-0 py-1.5 w-32">
              <Image 
                src="/webp/pokedex.webp" 
                alt="Pokedex Project" 
                width={150} 
                height={81}  
                className="w-[150px] h-[81px] object-fill rounded-sm opacity-80 border-vacchio-black/05 border group-hover/pokedex:border-vacchio-black/10 group-hover/pokedex:border transition-opacity duration-100 ease-out-quad"
              />
            </div>
            <div className="flex-1">
              <div className="lg:hidden">
                <a 
                  href="https://caruso-cv.github.io/pokedex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-sm font-bold uppercase mb-1 mt-1 transition-colors duration-100 ease-out-quad hover:text-vacchio-blue select-text"
                >
                  <span>POKEDEX</span>
                  <span className="inline-block transition-all duration-100 ease-out-quad group-hover/link:translate-x-1 group-hover/link:-translate-y-1 text-vacchio-black/60 group-hover/link:text-vacchio-blue align-text-bottom">
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </span>
                </a>
              </div>
              <h3 className="hidden lg:block text-sm font-bold uppercase mb-1 mt-1 transition-colors duration-100 ease-out-quad lg:group-hover/pokedex:text-vacchio-blue select-text">
                POKEDEX
                <span className="inline-block transition-all duration-100 ease-out-quad lg:group-hover/pokedex:translate-x-1 lg:group-hover/pokedex:-translate-y-1 text-vacchio-black/60 lg:group-hover/pokedex:text-vacchio-blue align-text-bottom">
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </span>
              </h3>
              <p className="text-vacchio-black/60 mb-4 leading-relaxed text-sm select-text">
                Interactive Pokemon database with search, filtering, and detailed information. Built with the PokeAPI for real-time data.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">HTML + CSS</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">JavaScript</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Tailwind</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">PokeAPI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Unsplash Project Card */}
        <div className="relative group/unsplash block project-card">
          <div className="absolute inset-0 -top-4 -bottom-4 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-100 ease-out-quad lg:group-hover/unsplash:bg-[#E2E3E1]/40 lg:group-hover/unsplash:shadow-xs lg:group-hover/unsplash:border-vacchio-black/10 lg:group-hover/unsplash:backdrop-blur-lg"></div>
          <a 
            href="https://caruso-cv.github.io/unsplash-clone/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Unsplash Clone project"
            className="absolute inset-0 -top-4 -bottom-4 -left-5 -right-5 hidden lg:block z-20"
          >
            <span className="sr-only">Visit Unsplash Clone project</span>
          </a>
          <div className="flex gap-8 relative z-10 items-start">
            <div className="hidden sm:block flex-shrink-0 py-1.5 w-32">
              <Image 
                src="/webp/unsplash.webp" 
                alt="Unsplash Project" 
                width={150} 
                height={81} 
                className="w-[150px] h-[81px] object-fill rounded-sm opacity-80 border-vacchio-black/05 border group-hover/unsplash:border-vacchio-black/10 group-hover/unsplash:border group-hover/projects:opacity-80 transition-opacity duration-100 ease-out-quad"
              />
            </div>
            <div className="flex-1">
              <div className="lg:hidden">
                <a 
                  href="https://caruso-cv.github.io/unsplash-clone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-sm font-bold uppercase mb-1 mt-1 transition-colors duration-100 ease-out-quad hover:text-vacchio-blue select-text"
                >
                  <span>UNSPLASH CLONE</span>
                  <span className="inline-block transition-all duration-100 ease-out-quad group-hover/link:translate-x-1 group-hover/link:-translate-y-1 text-vacchio-black/60 group-hover/link:text-vacchio-blue align-text-bottom">
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </span>
                </a>
              </div>
              <h3 className="hidden lg:block text-sm font-bold uppercase mb-1 mt-1 transition-colors duration-100 ease-out-quad lg:group-hover/unsplash:text-vacchio-blue select-text">
                UNSPLASH CLONE
                <span className="inline-block transition-all duration-100 ease-out-quad lg:group-hover/unsplash:translate-x-1 lg:group-hover/unsplash:-translate-y-1 text-vacchio-black/60 lg:group-hover/unsplash:text-vacchio-blue align-text-bottom">
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </span>
              </h3>
              <p className="text-vacchio-black/60 mb-4 leading-relaxed text-sm select-text">
                A fun short school project of an Unsplash page. Features include download functionality, responsive design, and image optimization.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">HTML + CSS</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">JavaScript</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>

             {/* View Full Projects Button */}
       <div className="relative z-20 resume-button">
         <Link 
           href="/archive"
           className="inline-flex items-center gap-1.5 text-xs font-bold uppercase transition-all duration-100 ease-out-quad text-vacchio-black/80 underline underline-offset-6 decoration-transparent hover:decoration-vacchio-blue group/button select-text"
         >
           <span>VIEW FULL PROJECT ARCHIVE</span>
           <div className="transition-all duration-100 ease-out-quad group-hover/button:translate-x-1 text-vacchio-black/80">
             <ArrowRight className="w-4 h-4" />
           </div>
         </Link>
       </div>
    </section>
  )
}
import React from 'react'
import ScrollColorImage from '@/components/ui/ScrollColorImage'
import { Phone, Mail, MapPin, Landmark, Github } from 'lucide-react'
import LinkedIn from '@/components/logos/LinkedIn'
import Notion from '@/components/logos/Notion'
import Raycast from '@/components/logos/Raycast'
import Cursor from '@/components/logos/Cursor'
import Figma from '@/components/logos/Figma'
import Superhuman from '@/components/logos/Superhuman'
import Dia from '@/components/logos/Dia'
import Apple from '@/components/logos/Apple'

export default function AboutMe() {
  return (
    <section className='my-20 relative z-20'>

      {/* About Me */}
      <h2 className="font-bold font-cantarell uppercase text-sm text-vacchio-black">About Me</h2>

      <div>
        <div className="overflow-hidden relative z-20">
          <div className="pt-8 pb-6">

            {/* Main Content Grid - 1/3 Image + 2/3 Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">

              {/* First Column - Image (1/3) */}
              <div className="col-span-1 md:col-span-1 lg:col-span-1">
                {/* Profile Image */}
                <div className="flex justify-start lg:justify-start justify-center">
                  <ScrollColorImage 
                    src="/webp/carmen.webp" 
                    alt="Carmen Vacchio" 
                    className="rounded-lg object-cover w-full md:max-w-[400px] md:h-[400px] h-auto aspect-square border opacity-90"
                    containerClassName=" overflow-hidden"
                  />
                </div>
              </div>

              {/* Content Area (2/3) */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between h-full">

                {/* Contact Section - inside right column, spaced between */}
                <div className='hidden xl:flex mb-8 w-full justify-between'>
                  <div className="flex items-start gap-4.5">
                    <div className="flex flex-col items-center justify-between h-full">
                      <Phone className="w-6.5 h-6.5 text-vacchio-black/40 mt-1"/>
                      <div className="w-7 h-[2px] rounded-full bg-vacchio-black/30 mb-1"></div>
                    </div>
                    <div className="flex flex-col w-32 justify-between">
                      <span className="font-bold text-base text-vacchio-black">Phone</span>
                      <span className="text-sm text-vacchio-black/50">613 698 6970</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4.5">
                    <div className="flex flex-col items-center justify-between h-full">
                      <Mail className="w-7 h-7 text-[#8C8C8B] mt-[2px]"/>
                      <div className="w-7 h-[2px] rounded-full bg-vacchio-black/30 mb-1"></div>
                    </div>
                    <div className="flex flex-col w-32 justify-between">
                      <span className="font-bold text-base text-vacchio-black">Email</span>
                      <a 
                        href="mailto:carmen@zolas.ca" 
                        className="text-sm text-vacchio-black/50 hover:underline transition-all duration-200 cursor-pointer"
                      >
                        carmen@zolas.ca
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4.5 pr-12">
                    <div className="flex flex-col items-center justify-between h-full">
                      <Github className="w-6 h-6 text-vacchio-black/40 mt-1"/>
                      <div className="w-7 h-[2px] rounded-full bg-vacchio-black/30 mb-1"></div>
                    </div>
                    <div className="flex flex-col w-32 justify-between">
                      <span className="font-bold text-base text-vacchio-black">GitHub</span>
                      <a 
                        href="https://github.com/SolCaruso" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-vacchio-black/50 hover:underline transition-all duration-200 cursor-pointer"
                      >
                        github.com/SolCaruso
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4.5">
                    <div className="flex flex-col items-center justify-between h-full">
                      <LinkedIn className="w-6 h-6 text-vacchio-black/40 mt-1"/>
                      <div className="w-7 h-[2px] rounded-full bg-vacchio-black/30 mb-1"></div>
                    </div>
                    <div className="flex flex-col w-32 justify-between">
                      <span className="font-bold text-base text-vacchio-black">LinkedIn</span>
                      <a 
                        href="https://linkedin.com/in/carmenvac" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-vacchio-black/50 hover:underline transition-all duration-200 cursor-pointer"
                      >
                        linkedin.com/in/carmenvac
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bio, Brands, and Skills Grid */}
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">

                  {/* Bio Column */}
                  <div className="md:col-span-1 lg:col-span-2 flex flex-col justify-end lg:pr-12 pr-0">

                    {/* BIO */}
                    <div className='mb-6'>
                      <h3 className="font-bold text-vacchio-black text-sm uppercase mb-2">Bio</h3>
                      <p className=" text-vacchio-black/70 leading-relaxed">
                        Front-end developer and aspiring software developer with a strong background in interaction design and a passion for UI development. Over a year of experience building React-based web apps, 3+ years in UI/UX design, and 8+ years in leadership roles. As a former general manager of a family restaurant, I developed strong leadership, teamwork, and project management skills in a fast-paced, high-pressure environment.
                      </p>
                    </div>

                    {/* Location / School Badges */}
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border text-sm text-vacchio-black/70">
                          <MapPin className="w-4 h-4 text-vacchio-black/50" />
                          Ottawa, Ontario
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border text-sm text-vacchio-black/70">
                          <Landmark className="w-4 h-4 text-vacchio-black/50" />
                          Algonquin College
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Brands and Skills Column */}
                  <div className="space-y-12 hidden lg:block lg:col-span-1">

                    {/* FAVOURITE BRANDS */}
                    <div>
                      <h3 className="font-bold text-vacchio-black text-sm uppercase mb-1">Favourite Brands</h3>
                      <div className="flex flex-wrap gap-4 grayscale pt-4">
                          <Notion className="w-5 h-5 opacity-40" />
                          <Cursor className="w-5 h-5 opacity-50" />
                          <Figma className="w-5 h-5" />
                          <Apple className="w-5 h-5 opacity-40" />
                          <Raycast className="w-5 h-5" />
                          <Superhuman className="w-5 h-5 opacity-50" />
                          <Dia className="w-8 h-4 opacity-50 mt-1" />
                      </div>
                    </div>

                    {/* SKILLS */}
                    <div>
                      <h3 className="font-bold text-vacchio-black text-sm uppercase mb-4">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium text-vacchio-black/70 border border-vacchio-black/20 rounded-full">
                          FRONT-END DEVELOPMENT
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-vacchio-black/70 border border-vacchio-black/20 rounded-full">
                          REACT & NEXT.JS
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-vacchio-black/70 border border-vacchio-black/20 rounded-full">
                          UX/UI DESIGN
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-vacchio-black/70 border border-vacchio-black/20 rounded-full">
                          TYPESCRIPT
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-vacchio-black/70 border border-vacchio-black/20 rounded-full">
                          TAILWIND CSS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
} 
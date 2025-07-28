import React from 'react'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import LinkedIn from '@/components/logos/LinkedIn'

export default function AboutMe() {
  return (
    <section className='pt-12 relative z-20'>
      {/* About Me */}
      <h2 className="font-bold font-cantarell uppercase text-sm text-vacchio-black">About Me</h2>

      <div className="pt-12 pb-42">

        {/* Main Content Grid - 1/3 Image + 2/3 Content */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* First Column - Image (1/3) */}
          <div>
            {/* Profile Image */}
            <div className="flex justify-start">
              <Image 
                src="/webp/vacchio.webp" 
                alt="Carmen Vacchio" 
                width={400}
                height={400}
                className="rounded-lg object-cover w-[400px] h-[400px]"
              />
            </div>
          </div>

          {/* Content Area (2/3) */}
          <div className="md:col-span-2 flex flex-col justify-between h-full">

            {/* Contact Section */}
            <div>
              <div className="flex gap-8">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center justify-between h-12">
                    <Phone className="w-5 h-5 text-vacchio-black" />
                    <div className="flex-1"></div>
                    <div className="w-8 h-px bg-vacchio-black/30"></div>
                  </div>
                  <div className="flex flex-col w-32 justify-between h-12">
                    <span className="font-bold text-sm text-vacchio-black">Phone</span>
                    <div className="flex-1"></div>
                    <span className="text-sm text-vacchio-black/70">613 698 6970</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center justify-between h-12">
                    <Mail className="w-5 h-5 text-vacchio-black" />
                    <div className="flex-1"></div>
                    <div className="w-8 h-px bg-vacchio-black/30"></div>
                  </div>
                  <div className="flex flex-col w-32 justify-between h-12">
                    <span className="font-bold text-sm text-vacchio-black">Email</span>
                    <div className="flex-1"></div>
                    <span className="text-sm text-vacchio-black/70">carmen@zolas.ca</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center justify-between h-12">
                    <LinkedIn className="w-5 h-5 text-vacchio-black" />
                    <div className="flex-1"></div>
                    <div className="w-8 h-px bg-vacchio-black/30"></div>
                  </div>
                  <div className="flex flex-col w-32 justify-between h-12">
                    <span className="font-bold text-sm text-vacchio-black">LinkedIn</span>
                    <div className="flex-1"></div>
                    <span className="text-sm text-vacchio-black/70">linkedin.com/in/carmenvac</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio, Brands, and Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Bio Column */}
              <div className="space-y-6 pr-12">

                {/* BIO */}
                <div>
                  <h3 className="font-bold text-vacchio-black text-sm uppercase mb-2">Bio</h3>
                  <p className=" text-vacchio-black/70 leading-relaxed">
                    Front-end developer and aspiring software developer with a strong background in interaction design and a passion for UI development. Over a year of experience building React-based web apps, 3+ years in UI/UX design, and 8+ years in leadership roles. As a former general manager of a family restaurant, I developed strong leadership, teamwork, and project management skills in a fast-paced, high-pressure environment.
                  </p>
                </div>
              </div>

              {/* Brands and Skills Column */}
              <div className="space-y-12">

                {/* FAVOURITE BRANDS */}
                <div>
                  <h3 className="font-bold text-vacchio-black text-sm uppercase mb-4">Favourite Brands</h3>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-vacchio-black/70 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-vacchio-black/70 rounded-sm"></div>
                    </div>
                    <div className="w-8 h-8 bg-vacchio-black/70 rounded flex items-center justify-center">
                      <div className="w-3 h-4 bg-vacchio-black/70 rounded-sm"></div>
                    </div>
                    <div className="w-8 h-8 bg-vacchio-black/70 rounded flex items-center justify-center">
                      <div className="w-4 h-2 bg-vacchio-black/70 rounded-sm"></div>
                    </div>
                    <div className="w-8 h-8 bg-vacchio-black/70 rounded flex items-center justify-center">
                      <div className="w-3 h-4 bg-vacchio-black/70 rounded-sm border border-vacchio-black/70"></div>
                    </div>
                  </div>
                </div>

                {/* SKILLS */}
                <div>
                  <h3 className="font-bold text-vacchio-black text-sm uppercase mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium text-vacchio-black/70 border border-vacchio-black/20 rounded-full">
                      FULL-STACK DEVELOPMENT
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
    </section>
  )
} 
import { ArrowUpRight } from 'lucide-react'
import { TextShimmer } from '../ui/text-shimmer'
import Image from 'next/image'

export default function Experiences() {
  return (
    <>
      <section 
        className="mb-18 pt-12 group"
      >
      <div className="space-y-8 relative group/experience mb-16">

        {/* 1st Link Card */}
        <a 
          href="https://www.makingsoftware.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/ocelot block experience-card"
        >
          <div className="absolute inset-0 -top-3 -bottom-3 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-200 ease-in-out-quad group-hover/ocelot:bg-[#E2E3E1]/40 group-hover/ocelot:shadow-xs group-hover/ocelot:border-vacchio-black/10 group-hover/ocelot:backdrop-blur-lg"></div>
          <div className="flex gap-8 relative z-10 items-center">
           
          <div className="flex-shrink-0 py-1.5 w-32">
              <Image 
                src="/png/software.png" 
                alt="Making Software" 
                width={150} 
                height={81}  
                className="w-[150px] h-[81px] object-fill rounded-sm opacity-60 border-vacchio-black/05 border group-hover/pokedex:border-vacchio-black/10 group-hover/pokedex:border"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <TextShimmer className="text-sm font-medium text-vacchio-black/30" duration={3}>
                Written by Dan Hollick
              </TextShimmer>
              <h3 className="text-sm font-bold uppercase mb-1 mt-1 flex items-center gap-1 transition-colors duration-200 ease-in-out-quad group-hover/ocelot:text-vacchio-blue">
                A reference manual for making software
                <div className="transition-all duration-200 ease-in-out group-hover/ocelot:translate-x-1 group-hover/ocelot:-translate-y-1 text-vacchio-black/60 group-hover/ocelot:text-vacchio-blue">
                  <ArrowUpRight className="w-4 h-4 mt-1" />
                </div>
              </h3>
            </div>
          </div>
        </a>

        {/* 2nd Link Card */}
        <a 
          href="https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/ocelot block experience-card"
        >
          <div className="absolute inset-0 -top-3 -bottom-3 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-200 ease-in-out-quad group-hover/ocelot:bg-[#E2E3E1]/40 group-hover/ocelot:shadow-xs group-hover/ocelot:border-vacchio-black/10 group-hover/ocelot:backdrop-blur-lg"></div>
          <div className="flex gap-8 relative z-10 items-center">
           
          <div className="flex-shrink-0 py-1.5 w-32">
              <Image 
                src="/png/accessibility.png" 
                alt="Accessibility" 
                width={150} 
                height={81}  
                className="w-[150px] h-[81px] object-fill rounded-sm opacity-60 border-vacchio-black/05 border group-hover/pokedex:border-vacchio-black/10 group-hover/pokedex:border"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <TextShimmer className="text-sm font-medium text-vacchio-black/30" duration={3}>
                Written by Brittany Chiang
              </TextShimmer>
              <h3 className="text-sm font-bold uppercase mb-1 mt-1 flex items-center gap-1 transition-colors duration-200 ease-in-out-quad group-hover/ocelot:text-vacchio-blue">
                5 Common Accessibility Pitfalls to Avoid
                <div className="transition-all duration-200 ease-in-out group-hover/ocelot:translate-x-1 group-hover/ocelot:-translate-y-1 text-vacchio-black/60 group-hover/ocelot:text-vacchio-blue">
                  <ArrowUpRight className="w-4 h-4 mt-1" />
                </div>
              </h3>
            </div>
          </div>
        </a>


      </div>
     </section>
   </>
 )
}
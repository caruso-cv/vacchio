import { ArrowUpRight } from 'lucide-react'
import { TextShimmer } from '../ui/text-shimmer'

export default function Experiences() {
  return (
    <>
      <section 
        id="experience" 
        className="mb-18 pt-14 group"
      >

      {/* Divider */}
      <div className="flex items-center mb-10 opacity-50">
        <div className="flex-1 h-px bg-vacchio-black/20"></div>
        <span className="px-4 text-xs font-medium text-vacchio-black/40 uppercase tracking-wider select-text">Experience</span>
        <div className="flex-1 h-px bg-vacchio-black/20"></div>
      </div>
      
      <div className="space-y-14 relative group/experience mb-12">
        {/* Ocelot Experience Card */}
        <a 
          href="https://ocelot-pearl.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/ocelot block experience-card"
        >
          <div className="absolute inset-0 -top-5 -bottom-5 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-200 ease-in-out-quad group-hover/ocelot:bg-[#E2E3E1]/40 group-hover/ocelot:shadow-xs group-hover/ocelot:border-vacchio-black/10 group-hover/ocelot:backdrop-blur-lg"></div>
          <div className="flex gap-8 relative z-10 items-start">
            <div className="flex-shrink-0 py-1.5 w-32">
              <p className="text-xs text-vacchio-black/40 font-semibold uppercase select-text">2024 — PRESENT</p>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold uppercase mb-1 mt-1 flex items-center gap-1 transition-colors duration-200 ease-in-out-quad group-hover/ocelot:text-vacchio-blue select-text">
                SOFTWARE DEVELOPER
                <div className="transition-all duration-200 ease-in-out group-hover/ocelot:translate-x-1 group-hover/ocelot:-translate-y-1 text-vacchio-black/60 group-hover/ocelot:text-vacchio-blue">
                  <ArrowUpRight className="w-4 h-4 mt-1" />
                </div>
              </h3>
              <TextShimmer className="text-sm font-medium text-vacchio-black/30 select-text" duration={3}>
                Ocelot Technologies Ltd.
              </TextShimmer>
              <p className="text-vacchio-black/50 mb-4 leading-relaxed text-sm select-text">
                Built and optimized a Next.js-powered game-studio site with Supabase backend, achieving sub-100 ms server response times and 0.66 s FCP. Developed interactive UI components for gamified web apps using React, Next.js, TypeScript, and Tailwind.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">TypeScript</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">React</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Next.js</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Tailwind</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Supabase</span>
              </div>
            </div>
          </div>
        </a>

        {/* Neutron Experience Card */}
        <a 
          href="https://www.neutroncontrols.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/neutron block experience-card"
        >
          <div className="absolute inset-0 -top-5 -bottom-5 -left-5 -right-5 rounded-sm border border-transparent transition-all duration-200 ease-in-out-quad group-hover/neutron:bg-[#E2E3E1]/40 group-hover/neutron:shadow-xs group-hover/neutron:border-vacchio-black/10 group-hover/neutron:backdrop-blur-lg"></div>
          <div className="flex gap-8 relative z-10 items-start">
            <div className="flex-shrink-0 py-1.5 w-32">
              <p className="text-xs text-vacchio-black/40 font-semibold uppercase select-text">Jan — Apr 2025</p>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold uppercase mb-1 mt-1 flex items-center gap-1 transition-colors duration-200 ease-in-out-quad group-hover/neutron:text-vacchio-blue select-text">
                SOFTWARE DEVELOPER • CO-OP
                <div className="transition-all duration-200 ease-in-out group-hover/neutron:translate-x-1 group-hover/neutron:-translate-y-1 text-vacchio-black/60 group-hover/neutron:text-vacchio-blue">
                  <ArrowUpRight className="w-4 h-4 mt-1" />
                </div>
              </h3>
              <TextShimmer className="text-sm mb-3 font-medium text-vacchio-black/30 select-text" duration={3}>
                Neutron Controls
              </TextShimmer>
              <p className="text-vacchio-black/50 mb-4 leading-relaxed text-sm select-text">
                Created custom GitLab CI/CD pipeline to mirror GitHub repos and trigger Vercel deployments. Built React/Next.js site with Tailwind CSS and HLS streaming via Amazon S3 + CloudFront for sub-second playback.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">React</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">JavaScript</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Next.js</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Tailwind</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">HTML + CSS</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">AWS</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">GitLab</span>
                <span className="px-3 py-1 text-vacchio-blue bg-vacchio-blue/8 text-xs rounded-full select-text">Vercel</span>
              </div>
            </div>
          </div>
        </a>
      </div>

                    {/* View Full Resume Button */}
       <div className="mb-22 relative z-20 resume-button">
         <a 
           href="https://drive.google.com/file/d/1V3Ge1V0qLqDq0mtDPI68vQcOwzeuqNjJ/view?usp=sharing"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-1.5 text-xs font-bold uppercase transition-colors duration-200 ease-in-out-quad text-vacchio-black/80 hover:text-vacchio-blue group/button select-text"
         >
           <span>VIEW FULL RESUME</span>
           <div className="transition-all duration-200 ease-in-out group-hover/button:translate-x-1 group-hover/button:-translate-y-1 text-vacchio-black/80 group-hover/button:text-vacchio-blue">
             <ArrowUpRight className="w-4 h-4" />
           </div>
         </a>
       </div>
     </section>
   </>
 )
}
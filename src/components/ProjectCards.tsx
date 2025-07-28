import React from 'react'
import Supabase from '@/components/logos/Supabase'
import Nextjs from '@/components/logos/Nextjs'
import Tailwind from '@/components/logos/TailwindCSS'
import Typescript from '@/components/logos/TypeScript'
import ReactLogo from '@/components/logos/React'
import Solana from '@/components/logos/Solana'

export default function ProjectCards() {
  return (
    <>
      {/* Recent Projects */}
      <h2 className="font-bold font-cantarell uppercase text-sm text-vacchio-black">Recent Projects</h2>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-12">

        {/* Card 1 */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg aspect-video rounded-lg overflow-hidden relative border z-20">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Project</p>
                <p className='text-base font-regular text-vacchio-black/70'>Indie Game Studio Website</p>
              </div>

              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
              </div>

              <div className='flex gap-4'>
                <Supabase className='w-4 h-4 grayscale'/>
                <Nextjs className='w-4 h-4 grayscale opacity-50'/>
                <Tailwind className='w-4 h-4 text-black opacity-50'/>
                <Typescript className='w-4 h-4  text-black opacity-50'/>
                <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                <Solana className='w-4 h-4 grayscale opacity-50'/>
              </div>
            </div>

            <button className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad'>
              View Project
            </button>

          </div>

          {/* <Image 
            src="/webp/ocelot.webp" 
            alt="Ocelot Game Studio Website Project" 
            width={1506}
            height={1886}
            draggable={false}
            className=' absolute -right-20 -bottom-50 w-100 object-cover opacity-20' 
          /> */}

        </div>
        
        {/* Card 2 */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg aspect-video rounded-lg overflow-hidden relative border z-20">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Project</p>
                <p className='text-base font-regular text-vacchio-black/70'>Indie Game Studio Website</p>
              </div>

              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
              </div>

              <div className='flex gap-4'>
                <Supabase className='w-4 h-4 grayscale'/>
                <Nextjs className='w-4 h-4 grayscale opacity-50'/>
                <Tailwind className='w-4 h-4 text-black opacity-50'/>
                <Typescript className='w-4 h-4  text-black opacity-50'/>
                <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                <Solana className='w-4 h-4 grayscale opacity-50'/>
              </div>
            </div>

            <button className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad'>
              View Project
            </button>

          </div>

          {/* <Image 
            src="/webp/caddi2.webp" 
            alt="Caddi AI Commerce Web Project" 
            width={1506}
            height={1886}
            draggable={false}
            className=' absolute -right-30 -bottom-20 w-100 object-cover opacity-20' 
          /> */}

        </div>

        {/* Card 3 */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg aspect-video rounded-lg overflow-hidden relative border z-20">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Project</p>
                <p className='text-base font-regular text-vacchio-black/70'>Indie Game Studio Website</p>
              </div>

              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
              </div>

              <div className='flex gap-4'>
                <Supabase className='w-4 h-4 grayscale'/>
                <Nextjs className='w-4 h-4 grayscale opacity-50'/>
                <Tailwind className='w-4 h-4 text-black opacity-50'/>
                <Typescript className='w-4 h-4  text-black opacity-50'/>
                <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                <Solana className='w-4 h-4 grayscale opacity-50'/>
              </div>
            </div>

            <button className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad'>
              View Project
            </button>

          </div>

          {/* <Image 
            src="/webp/neutron.webp" 
            alt="Neutron Controls Website Project" 
            width={1506}
            height={1886}
            draggable={false}
            className=' absolute -right-40 -bottom-15 w-100 object-cover opacity-15' 
          /> */}

        </div>

      </div>
    </>
  )
} 
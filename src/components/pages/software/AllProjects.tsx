import React from 'react'
import Supabase from '@/components/logos/Supabase'
import Nextjs from '@/components/logos/Nextjs'
import Tailwind from '@/components/logos/TailwindCSS'
import Typescript from '@/components/logos/TypeScript'
import ReactLogo from '@/components/logos/React'
import Solana from '@/components/logos/Solana'
import JavaScript from '@/components/logos/JavaScript'
import AmazonWebServices from '@/components/logos/AmazonWebServices'
import Stripe from '@/components/logos/Stripe'
import Vercel from '@/components/logos/Vercel'
import HTML5 from '@/components/logos/HTML5'
import CSSNew from '@/components/logos/CSSNew'
import Sass from '@/components/logos/Sass'
import Link from 'next/link'

export default function AllProjects() {
  return (
    <section className='pt-12 pb-12'>
      {/* All Projects */}
      
      <div className="flex justify-between">
        <h2 className="font-bold font-cantarell uppercase text-sm text-vacchio-black">All Projects</h2>
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">

        {/* Card 1 - Ocelot */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg rounded-lg overflow-hidden relative border z-20 min-h-[200px]">
          <div className='pt-8 px-6 pb-6 flex flex-col gap-8 justify-between h-full relative z-1'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Ocelot Technologies Ltd.</p>
                <p className='text-base font-regular text-vacchio-black/70'>Indie Game Studio Site</p>
              </div>
              <div className='flex flex-col gap-3'>
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
                  <Vercel className='w-4 h-4 text-black opacity-50'/>
                </div>
              </div>
            </div>
            <Link href='/software/ocelot' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center'>
              View Project
            </Link>
          </div>
        </div>
        
        {/* Card 2 - Caddi */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg rounded-lg overflow-hidden relative border z-20 min-h-[200px]">
          <div className='pt-8 px-6 pb-6 flex flex-col gap-8 justify-between h-full relative z-1'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Caddi AI Inc.</p>
                <p className='text-base font-regular text-vacchio-black/70'>Golf E-Commerce Site</p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-0.5 flex-col'>
                  <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
                </div>
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
            </div>
            <Link href='/software/caddi' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center'>
              View Project
            </Link>
          </div>
        </div>

        {/* Card 3 - Neutron */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg rounded-lg overflow-hidden relative border z-20 min-h-[200px]">
          <div className='pt-8 px-6 pb-6 flex flex-col gap-8 justify-between h-full relative z-1'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Neutron Controls</p>
                <p className='text-base font-regular text-vacchio-black/70'>BMS Technology Site</p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-0.5 flex-col'>
                  <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
                </div>
                <div className='flex gap-4'>
                  <Nextjs className='w-4 h-4 grayscale opacity-50'/>
                  <Tailwind className='w-4 h-4 text-black opacity-50'/>
                  <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                  <Vercel className='w-4 h-4 text-black opacity-50'/>
                  <AmazonWebServices className='w-6 h-4 mt-px text-black opacity-50'/>
                  <JavaScript className='w-4 h-4 text-black opacity-50'/>
                </div>
              </div>
            </div>
            <Link href='/software/neutron' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center'>
              View Project
            </Link>
          </div>
        </div>

        {/* Card 4 - Pokedex */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg rounded-lg overflow-hidden relative border z-20 min-h-[200px]">
          <div className='pt-8 px-6 pb-6 flex flex-col gap-8 justify-between h-full relative z-1'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Pokedex</p>
                <p className='text-base font-regular text-vacchio-black/70'>Pokemon Database App</p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-0.5 flex-col'>
                  <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
                </div>
                <div className='flex gap-4'>
                  <HTML5 className='w-4 h-4 text-black opacity-50'/>
                  <CSSNew className='w-4 h-4 text-black opacity-50'/>
                  <JavaScript className='w-4 h-4 text-black opacity-50'/>
                  <Tailwind className='w-4 h-4 text-black opacity-50'/>
                </div>
              </div>
            </div>
            <Link href='/software/pokedex' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center'>
              View Project
            </Link>
          </div>
        </div>

        {/* Card 5 - Unsplash */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg rounded-lg overflow-hidden relative border z-20 min-h-[200px]">
          <div className='pt-8 px-6 pb-6 flex flex-col gap-8 justify-between h-full relative z-1'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Unsplash Clone</p>
                <p className='text-base font-regular text-vacchio-black/70'>Photography Browsing App</p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-0.5 flex-col'>
                  <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
                </div>
                <div className='flex gap-4'>
                  <HTML5 className='w-4 h-4 text-black opacity-50'/>
                  <CSSNew className='w-4 h-4 text-black opacity-50'/>
                  <JavaScript className='w-4 h-4 text-black opacity-50'/>
                </div>
              </div>
            </div>
            <Link href='/software/unsplash' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center'>
              View Project
            </Link>
          </div>
        </div>

        {/* Card 6 - TailFeather */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg overflow-hidden relative border z-20 min-h-[200px]">
          <div className='pt-8 px-6 pb-6 flex flex-col gap-8 justify-between h-full relative z-1'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>TailFeather CSS</p>
                <p className='text-base font-regular text-vacchio-black/70'>Utility-First CSS Framework</p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-0.5 flex-col'>
                  <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
                </div>
                <div className='flex gap-4'>
                  <HTML5 className='w-4 h-4 text-black opacity-50'/>
                  <CSSNew className='w-4 h-4 text-black opacity-50'/>
                  <Sass className='w-4 h-4 text-black opacity-50'/>
                  <JavaScript className='w-4 h-4 text-black opacity-50'/>
                </div>
              </div>
            </div>
            <Link href='/software/tailfeather' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center'>
              View Project
            </Link>
          </div>
        </div>

      </div>
      
    </section>
  )
}

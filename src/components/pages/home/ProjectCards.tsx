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
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function ProjectCards() {
  return (
    <section className='pt-12'>
      {/* Recent Projects */}
      
      {/* See all projects link */}
      <div className="flex justify-between">
        <h2 className="font-bold font-cantarell uppercase text-sm text-vacchio-black">Recent Projects</h2>
        <Link 
          href="/" 
          className="text-sm font-medium text-vacchio-black/70 hover:text-vacchio-black transition-colors duration-200 flex gap-1 items-center"
        >
          <span>See all projects</span> <ChevronRight className="w-3 h-3 mt-1" />
        </Link>
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-12 mt-6">

        {/* Card 1 */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg aspect-video rounded-lg overflow-hidden relative border z-20">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Ocelot Technologies Ltd.</p>
                <p className='text-base font-regular text-vacchio-black/70'>Indie Game Studio Site</p>
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
                <Vercel className='w-4 h-4 text-black opacity-50'/>
              </div>
            </div>

            <Link href='/software/ocelot' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center'>
              View Project
            </Link>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg aspect-video rounded-lg overflow-hidden relative border z-20">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Caddi AI Inc.</p>
                <p className='text-base font-regular text-vacchio-black/70'>Golf E-Commerce Site</p>
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
                <Vercel className='w-4 h-4 text-black opacity-50'/>
                <Stripe className='w-7 h-4 mt-px text-black opacity-50'/>
              </div>
            </div>

            <Link href='/' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center'>
              View Project
            </Link>

          </div>

        </div>

        {/* Card 3 */}
        <div className="bg-[#E2E3E1]/20 backdrop-blur-lg aspect-video rounded-lg overflow-hidden relative border z-20">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Neutron Controls</p>
                <p className='text-base font-regular text-vacchio-black/70'>BMS Technology Site</p>
              </div>

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

            <Link href='/' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center'>
              View Project
            </Link>

          </div>

        </div>

      </div>
      
    </section>
  )
} 
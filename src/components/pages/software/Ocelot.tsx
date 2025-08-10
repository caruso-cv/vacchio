import React from 'react'
import Nextjs from '@/components/logos/Nextjs'
import Tailwind from '@/components/logos/TailwindCSS'
import Typescript from '@/components/logos/TypeScript'
import ReactLogo from '@/components/logos/React'
import Supabase from '@/components/logos/Supabase'
import Vercel from '@/components/logos/Vercel'
import Solana from '@/components/logos/Solana'
import ProjectLayout from '@/components/layout/ProjectLayout'

export default function Ocelot() {
  return (
    <ProjectLayout
      title="Ocelot Technologies"
      description="Modern game studio website with high-quality video content and advanced blog caching."
      techStack={
        <>
          <Supabase className='w-4 h-4 grayscale'/>
          <Nextjs className='w-4 h-4 grayscale opacity-50'/>
          <Tailwind className='w-4 h-4 text-black opacity-50'/>
          <Typescript className='w-4 h-4  text-black opacity-50'/>
          <ReactLogo className='w-4 h-4 text-black opacity-50'/>
          <Solana className='w-4 h-4 grayscale opacity-50'/>
          <Vercel className='w-4 h-4 text-black opacity-50'/>
        </>
      }
      githubUrl="https://github.com/SolCaruso/ocelot"
      liveUrl="https://ocelot-pearl.vercel.app/"
      content={{
        summary: "Ocelot Technologies is a modern site for a game studio that prioritizes the in-game experience, character storytelling, and a fast, reliable blog for updates. The home screen features a high-quality looping gameplay video alongside a dedicated launch trailer. A production-ready blog with advanced caching keeps readers up to date with instant load times. The landing sequence establishes mood and pace, letting the world speak through motion and sound. Subtle UI overlays invite exploration without distracting from the core experience. The launch trailer follows with a cinematic cut that anchors the game's themes while showcasing polished combat and environment art.",
        projectGoals: [
          "Showcase the game with a looping hero video and a dedicated launch trailer",
          "Highlight key characters with bios in a visually rich, immersive layout",
          "Provide a robust blog for studio updates, dev logs, and patch notes",
          "Use advanced caching for instant reads while keeping content fresh",
          "Deliver responsive design, strong accessibility, and great SEO"
        ],
        technicalImplementation: "Built with Next.js 14 and React 18 using TypeScript and Tailwind CSS for a fast, maintainable UI. Supabase powers the blog (content, auth, storage), and Vercel handles deployment and edge caching. The blog leverages stale-while-revalidate and tag-based revalidation for instant loads, with route segment caching to keep popular posts fast while ensuring updates propagate quickly.",
        keyFeatures: [
          "High-quality looping gameplay video and a dedicated launch trailer",
          "Supabase-powered blog with advanced caching and instant loads",
          "Character showcase with bios in a visually aesthetic layout",
          "Responsive design, accessibility, and SEO optimizations"
        ],
        challenges: [
          "Delivering high-fidelity video while preserving performance required careful encoding and lazy loading. We optimized media formats and deferrals so the hero loop and trailer feel instant without blocking interaction.",
          "For the blog, balancing freshness with speed led to cache tagging and stale-while-revalidate, so popular posts render immediately while edits propagate quickly.",
          "Presenting character bios in a highly visual yet accessible layout drove a responsive grid with semantic headings, keyboard focus states, and readable color contrast."
        ]
      }}
      media={[
        { type: 'video', src: '/webm/MagicImage.webm' },
        { type: 'image', src: '/png/ocelot2.png', alt: 'Ocelot Blog Page' },
        { type: 'image', src: '/png/ocelot3.png', alt: 'Character Showcase Section' }
      ]}
    />
  )
}
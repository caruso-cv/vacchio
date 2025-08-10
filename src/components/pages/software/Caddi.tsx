import React from 'react'
import Nextjs from '@/components/logos/Nextjs'
import Tailwind from '@/components/logos/TailwindCSS'
import Typescript from '@/components/logos/TypeScript'
import ReactLogo from '@/components/logos/React'
import Supabase from '@/components/logos/Supabase'
import Vercel from '@/components/logos/Vercel'
import Stripe from '@/components/logos/Stripe'
import ProjectLayout from '@/components/layout/ProjectLayout'

export default function Caddi() {
  return (
    <ProjectLayout
      title="Caddi AI"
      description="Complete ecommerce platform for golf technology with custom 3D divot tool builder."
      techStack={
        <>
          <Supabase className='w-4 h-4 grayscale'/>
          <Nextjs className='w-4 h-4 grayscale opacity-50'/>
          <Tailwind className='w-4 h-4 text-black opacity-50'/>
          <Typescript className='w-4 h-4  text-black opacity-50'/>
          <ReactLogo className='w-4 h-4 text-black opacity-50'/>
          <Vercel className='w-4 h-4 text-black opacity-50'/>
          <Stripe className='w-7 h-4 mt-px text-black opacity-50'/>
        </>
      }
      githubUrl="https://github.com/SolCaruso/caddi"
      liveUrl="https://caddi.vercel.app/"
      content={{
        summary: "Caddi AI required a complete website redesign and rebuild from scratch to showcase their golf technology business. The project combined two distinct business models: promoting their Forecaddi golf app for distance tracking and wind speed analysis, and selling custom hardwood golf divot tools with personalized engraving. The website features a full ecommerce platform with Stripe integration, a custom 3D divot tool builder where users can select wood grains and upload custom logos, and a comprehensive product showcase for both the golf app and merchandise offerings. The landing sequence establishes mood and pace, letting the world speak through motion and sound. Subtle UI overlays invite exploration without distracting from the core experience. The launch trailer follows with a cinematic cut that anchors the game's themes while showcasing polished combat and environment art.",
        projectGoals: [
          "Showcase the Forecaddi golf app with detailed feature explanations and benefits",
          "Build a complete ecommerce solution for custom hardwood divot tools and golf merchandise",
          "Integrate Stripe payment processing for seamless transactions",
          "Create a custom 3D divot tool builder with wood grain selection and logo upload functionality",
          "Develop a comprehensive product database to manage inventory and customization options",
          "Ensure responsive design for optimal mobile and desktop shopping experiences"
        ],
        technicalImplementation: "The website is built using Next.js 14 with React 18, providing server-side rendering and excellent performance optimization. TypeScript ensures type safety throughout the codebase, while Tailwind CSS provides a utility-first approach to styling for rapid development. Supabase serves as the backend database, managing product inventory, user accounts, and order processing. Stripe handles secure payment processing for all ecommerce transactions. The custom 3D divot tool builder uses advanced web technologies to provide real-time visualization of wood grain selections and logo placements, while Vercel provides optimal deployment performance and seamless CI/CD integration.",
        keyFeatures: [
          "Interactive 3D divot tool builder with real-time wood grain and logo visualization",
          "Complete ecommerce platform with Stripe payment processing and order management",
          "Comprehensive product database for managing divot tool variations and golf merchandise",
          "Custom logo upload and positioning system for personalized engraving",
          "Forecaddi golf app showcase with feature demonstrations and download links",
          "Responsive design optimized for both mobile shopping and desktop browsing",
          "SEO optimization for golf-related keywords and local golf pro shop visibility"
        ],
        challenges: [
          "One of the main challenges was building a comprehensive ecommerce database from scratch to handle the complex product variations of custom hardwood divot tools. We created a flexible database schema that accommodates different wood types, divot styles, logo placements, and custom engraving options while maintaining efficient inventory management.",
          "Another significant challenge was developing the 3D divot tool builder that allows users to visualize their custom selections in real-time. We implemented advanced web rendering techniques to show wood grain textures and logo placement accurately, giving customers confidence in their custom orders before purchase.",
          "Presenting character bios in a highly visual yet accessible layout drove a responsive grid with semantic headings, keyboard focus states, and readable color contrast."
        ]
      }}
      media={[
        { type: 'image', src: '/webp/caddi2.webp', alt: 'Caddi AI Interface' },
        { type: 'video', src: '/webm/caddi.webm' },
        { type: 'image', src: '/webp/caddi3.webp', alt: '3D Divot Tool Builder' }
      ]}
    />
  )
}
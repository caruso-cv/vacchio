import React from 'react'
import Nextjs from '@/components/logos/Nextjs'
import Tailwind from '@/components/logos/TailwindCSS'
import ReactLogo from '@/components/logos/React'
import Vercel from '@/components/logos/Vercel'
import AmazonWebServices from '@/components/logos/AmazonWebServices'
import JavaScript from '@/components/logos/JavaScript'
import ProjectLayout from '@/components/layout/ProjectLayout'

export default function Neutron() {
  return (
    <ProjectLayout
      title="Neutron Controls"
      description="High-performance corporate website with 4K video delivery and complex CI/CD pipeline."
      techStack={
        <>
          <Nextjs className='w-4 h-4 grayscale opacity-50'/>
          <Tailwind className='w-4 h-4 text-black opacity-50'/>
          <ReactLogo className='w-4 h-4 text-black opacity-50'/>
          <Vercel className='w-4 h-4 text-black opacity-50'/>
          <AmazonWebServices className='w-6 h-4 mt-px text-black opacity-50'/>
          <JavaScript className='w-4 h-4 text-black opacity-50'/>
        </>
      }
      githubUrl="https://github.com/SolCaruso/vercel"
      liveUrl="https://www.neutroncontrols.com/"
      content={{
        summary: "Neutron Controls required a complete website rebuild as part of their business pivot from EV battery technology to Battery Management Systems (BMS) and Energy Storage Systems (ESS). The project was completed during a co-op placement and needed to reflect their new direction with modern design and exceptional performance. The website features lightning-fast 4K video loading through AWS optimization, comprehensive contact and job application forms, proper cookie handling, Google Ad Sense integration, and a complex CI/CD pipeline connecting their internal GitLab repository to GitHub and Vercel deployment. The landing sequence establishes mood and pace, letting the world speak through motion and sound. Subtle UI overlays invite exploration without distracting from the core experience. The launch trailer follows with a cinematic cut that anchors the game's themes while showcasing polished combat and environment art.",
        projectGoals: [
          "Reflect Neutron Controls' pivot from EV batteries to BMS and ESS technology",
          "Deliver exceptional loading speeds to convey performance and technical excellence",
          "Implement comprehensive contact and job application forms for client and talent acquisition",
          "Integrate Google Ad Sense and tracking for marketing analytics",
          "Establish a robust CI/CD pipeline from internal GitLab to public GitHub and Vercel",
          "Create a modern, professional design that appeals to enterprise clients"
        ],
        technicalImplementation: "The website is built using Next.js with React, utilizing JavaScript/JSX for rapid development and component-based architecture. Tailwind CSS provides a utility-first approach to styling, enabling quick implementation of the modern, professional design requirements. AWS S3 serves as the content delivery solution for 4K video assets, implementing advanced caching techniques and video chunking for lightning-fast load times. The CI/CD pipeline connects Neutron's internal GitLab repository to GitHub, then automatically deploys to Vercel, ensuring seamless updates while maintaining corporate security protocols.",
        keyFeatures: [
          "Lightning-fast 4K video delivery through AWS S3 with advanced caching and chunking",
          "Comprehensive contact forms for client inquiries and business development",
          "Professional job application system for talent acquisition",
          "Google Ad Sense integration with proper tracking and analytics",
          "Cookie consent and management system for GDPR compliance",
          "Complex CI/CD pipeline connecting internal GitLab to public GitHub and Vercel",
          "Modern, enterprise-grade design optimized for BMS and ESS industry clients"
        ],
        challenges: [
          "The primary challenge was achieving exceptional loading speeds for 4K video content on the hero section. We solved this by implementing advanced AWS S3 caching strategies and video chunking techniques, allowing massive video files to load almost instantly and giving visitors an immediate impression of Neutron Controls' technical capabilities and performance standards.",
          "Another significant challenge was establishing a secure CI/CD pipeline that connected Neutron's internal GitLab repository to the public deployment infrastructure. We created a complex but seamless pipeline that maintains corporate security while enabling rapid deployment through GitHub to Vercel, ensuring code never leaves their controlled environment inappropriately.",
          "Presenting character bios in a highly visual yet accessible layout drove a responsive grid with semantic headings, keyboard focus states, and readable color contrast."
        ]
      }}
      media={[
        { type: 'video', src: '/webm/neutron.webm', fallbackSrc: '/mp4/neutron.mp4' },
        { type: 'image', src: '/webp/neutron2.webp', alt: 'Neutron Controls Blog Page' },
        { type: 'image', src: '/webp/neutron3.webp', alt: 'Character Showcase Section' }
      ]}
    />
  )
}
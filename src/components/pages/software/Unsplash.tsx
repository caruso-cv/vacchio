import React from 'react'
import JavaScript from '@/components/logos/JavaScript'
import HTML5 from '@/components/logos/HTML5'
import CSSNew from '@/components/logos/CSSNew'
import ProjectLayout from '@/components/layout/ProjectLayout'

export default function Unsplash() {
  return (
    <ProjectLayout
      title="Unsplash Clone"
      description="Photography browsing application with Unsplash API integration and camera specifications display."
      techStack={
        <>
          <HTML5 className='w-4 h-4 text-black opacity-50'/>
          <CSSNew className='w-4 h-4 text-black opacity-50'/>
          <JavaScript className='w-4 h-4 text-black opacity-50'/>
        </>
      }
      githubUrl="https://github.com/SolCaruso/unsplash-clone"
      liveUrl="https://solcaruso.github.io/unsplash-clone/"
      content={{
        summary: "A simple Unsplash clone built for a school assignment that allows users to browse and view high-quality photography. The application provides a clean, intuitive interface for discovering beautiful images from talented photographers around the world. Users can explore a curated collection of images, click to view detailed information about each photograph, and see the camera specifications and settings used to capture the shot. Clicking on an image opens a detailed view where users can see the image in glorious full-screen mode and download the high-resolution version. Each image is linked to the photographer's Unsplash profile, creating a seamless connection between the viewer and the artist. The design focuses on simplicity and visual appeal, allowing the photography to take center stage. The interface provides essential functionality without overwhelming users with unnecessary features. Built with vanilla HTML, CSS, and JavaScript, this project demonstrates fundamental web development skills while creating a functional and visually appealing application.",
        projectGoals: [
          "Display high-quality images in an organized grid layout",
          "Provide detailed information about each photograph including camera specifications",
          "Link each image to the photographer's Unsplash profile for attribution",
          "Create a clean, responsive design that works well on different screen sizes",
          "Implement smooth image loading and modal interactions for enhanced user experience",
          "Provide full-screen image viewing and download functionality for high-resolution images",
          "Demonstrate proficiency with vanilla HTML, CSS, and JavaScript fundamentals",
          "Ensure proper image loading and error handling for reliable content display",
          "Maintain fast loading times and optimal performance for image-heavy content"
        ],
        technicalImplementation: "The application is built using vanilla HTML, CSS, and JavaScript, demonstrating fundamental web development skills without relying on frameworks or libraries. The project showcases clean, semantic HTML structure, modern CSS techniques for responsive design, and efficient JavaScript for dynamic functionality. The application features smooth modal interactions for detailed image views, responsive grid layouts that adapt to different screen sizes, and efficient image loading with proper error handling. The design prioritizes visual appeal while maintaining excellent performance and accessibility standards.",
        keyFeatures: [
          "Image gallery with responsive grid layout displaying high-quality Unsplash photographs",
          "Detailed image modal showing camera specifications and capture settings",
          "Full-screen image viewing mode for immersive photography experience",
          "Image download functionality for high-resolution versions",
          "Photographer attribution with direct links to Unsplash profiles",
          "Responsive design optimized for desktop, tablet, and mobile viewing",
          "Smooth modal interactions and image loading with proper error handling",
          "Clean, minimalistic interface that puts focus on the photography",
          "Static image content with photographer information and camera specifications",
          "Semantic HTML structure with modern CSS and vanilla JavaScript functionality"
        ],
        challenges: [
          "One of the main challenges was implementing a responsive grid layout that would display images beautifully across different screen sizes. We used CSS Grid and Flexbox techniques to create a flexible layout that adapts seamlessly from desktop to mobile devices while maintaining visual appeal.",
          "Another significant challenge was creating smooth modal interactions for detailed image views and full-screen functionality. We implemented vanilla JavaScript event handling to manage modal states, image loading, full-screen transitions, and download functionality while ensuring proper accessibility and keyboard navigation support.",
          "Managing image data and handling potential loading errors gracefully was important for reliability. We implemented proper error handling for image loading and created fallback states to ensure users always have a good experience even when images fail to load.",
          "Optimizing image loading performance while maintaining visual quality required careful consideration of image sizing, lazy loading techniques, and efficient DOM manipulation to ensure fast, smooth user interactions."
        ]
      }}
      media={[
        { type: 'image', src: '/webp/unsplash.webp' },
        { type: 'image', src: '/webp/unsplash2.webp', alt: 'Unsplash Clone Interface' },
        { type: 'image', src: '/webp/unsplash3.webp', alt: 'Image Detail Modal' }
      ]}
    />
  )
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import JavaScript from '@/components/logos/JavaScript'
import ScrollColorImage from '@/components/ui/ScrollColorImage'
import ScrollColorVideo from '@/components/ui/ScrollColorVideo'

export default function Unsplash() {
  return (

    <>

        {/* First Border */}
        <div className="border-t border-vacchio-black/10"></div>

        {/* Tech Stack & Links Section */}
        <div className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Tech Stack */}
            <div className="flex flex-col gap-4">
                <h3 className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</h3>
                <div className='flex gap-4'>
                    <JavaScript className='w-4 h-4 text-black opacity-50'/>
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
                <Link href='https://github.com/SolCaruso/unsplash-clone' target='_blank' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
                <Github className="w-4 h-4" />
                <span>View Repo</span>
                </Link>
                <Link href='https://solcaruso.github.io/unsplash-clone/' target='_blank' className='border-vacchio-black/80 border font-bold px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer bg-vacchio-black hover:bg-vacchio-black/80 text-white/80 transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
                <ExternalLink className="w-4 h-4 opacity-80" />
                <span>Visit Site</span>
                </Link>
            </div>
            </div>
        </div>

        {/* Second Border */}
        <div className="border-t border-vacchio-black/10"></div>


        {/* Main Content Area */}
        <div className="py-12">
            <div className="flex gap-12">
            {/* Blog Content - 3/4 width */}
            <div className="flex-1 max-w-none w-3/4">
                <article className="prose prose-lg max-w-none">

                <section id="short-explanation">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Summary</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    A simple Unsplash clone built for a school assignment that allows users to browse and view high-quality 
                    photography. The application provides a clean, intuitive interface for discovering beautiful images 
                    from talented photographers around the world.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-8">
                    Users can explore a curated collection of images, click to view detailed information about each photograph, 
                    and see the camera specifications and settings used to capture the shot. Clicking on an image opens a detailed 
                    view where users can see the image in glorious full-screen mode and download the high-resolution version. 
                    Each image is linked to the photographer's Unsplash profile, creating a seamless connection between the 
                    viewer and the artist.
                    </p>
                    <div className="mb-12">
                        <p className="text-vacchio-black/80 leading-relaxed mb-4">
                        The design focuses on simplicity and visual appeal, allowing the photography to take center stage. 
                        The interface provides essential functionality without overwhelming users with unnecessary features.
                        </p>
                        <p className="text-vacchio-black/80 leading-relaxed">
                        Built with vanilla HTML, CSS, and JavaScript, this project demonstrates fundamental web development 
                        skills while creating a functional and visually appealing application.
                        </p>
                    </div>

                    {/* Home Page Video */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/webp/unsplash.webp"
                            alt="Unsplash Clone Interface"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                <section id="project-goals">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Project Goals</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The primary goal was to create a simple, functional Unsplash clone that would:
                    </p>
                    <ul className="list-disc pl-6 text-vacchio-black/80 space-y-2 mb-12">
                    <li>Display high-quality images in an organized grid layout</li>
                    <li>Provide detailed information about each photograph including camera specifications</li>
                    <li>Link each image to the photographer's Unsplash profile for attribution</li>
                    <li>Create a clean, responsive design that works well on different screen sizes</li>
                    <li>Implement smooth image loading and modal interactions for enhanced user experience</li>
                    <li>Provide full-screen image viewing and download functionality for high-resolution images</li>
                    <li>Demonstrate proficiency with vanilla HTML, CSS, and JavaScript fundamentals</li>
                    <li>Ensure proper image loading and error handling for reliable content display</li>
                    <li>Maintain fast loading times and optimal performance for image-heavy content</li>
                    </ul>
                </section>

                <section id="tech-stack-details">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Technical Implementation</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The application is built using vanilla HTML, CSS, and JavaScript, demonstrating fundamental web development 
                    skills without relying on frameworks or libraries. The project showcases clean, semantic HTML structure, 
                    modern CSS techniques for responsive design, and efficient JavaScript for dynamic functionality.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    The application features smooth modal interactions for detailed image views, responsive grid layouts 
                    that adapt to different screen sizes, and efficient image loading with proper error handling. The 
                    design prioritizes visual appeal while maintaining excellent performance and accessibility standards.
                    </p>
                </section>

                <section id="features">

                    {/* Blog Page Screenshot */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/webp/unsplash2.webp"
                            alt="Unsplash Clone Interface"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                {/* Narrative between second and third media (balanced with earlier text) */}
                <section id="characters-overview">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Key Features</h2>
                    <ul className="list-disc pl-6 text-vacchio-black/80 mb-8 space-y-2">
                    <li>Image gallery with responsive grid layout displaying high-quality Unsplash photographs</li>
                    <li>Detailed image modal showing camera specifications and capture settings</li>
                    <li>Full-screen image viewing mode for immersive photography experience</li>
                    <li>Image download functionality for high-resolution versions</li>
                    <li>Photographer attribution with direct links to Unsplash profiles</li>
                    <li>Responsive design optimized for desktop, tablet, and mobile viewing</li>
                    <li>Smooth modal interactions and image loading with proper error handling</li>
                    <li>Clean, minimalistic interface that puts focus on the photography</li>
                    <li>Static image content with photographer information and camera specifications</li>
                    <li>Semantic HTML structure with modern CSS and vanilla JavaScript functionality</li>
                    </ul>
                    <p className="text-vacchio-black/80 leading-relaxed mb-4">
                    The application successfully demonstrates core web development principles while creating a functional 
                    and visually appealing photography browsing experience.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    This project showcases the ability to build practical applications using fundamental web technologies, 
                    emphasizing clean code, responsive design, and user experience best practices.
                    </p>

                    {/* Character Showcase Screenshot */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/webp/unsplash3.webp"
                            alt="Image Detail Modal"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                {/* Challenges & Solutions moved to the end */}
                <section id="challenges">
                    <h2 className="text-2xl font-bold text-vacchio-black mb-6">Challenges & Solutions</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    One of the main challenges was implementing a responsive grid layout that would display images 
                    beautifully across different screen sizes. We used CSS Grid and Flexbox techniques to create a 
                    flexible layout that adapts seamlessly from desktop to mobile devices while maintaining visual appeal.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    Another significant challenge was creating smooth modal interactions for detailed image views and 
                    full-screen functionality. We implemented vanilla JavaScript event handling to manage modal states, 
                    image loading, full-screen transitions, and download functionality while ensuring proper accessibility 
                    and keyboard navigation support.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    Managing image data and handling potential loading errors gracefully was important for reliability. We 
                    implemented proper error handling for image loading and created fallback states to ensure 
                    users always have a good experience even when images fail to load.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-0">
                    Optimizing image loading performance while maintaining visual quality required careful consideration 
                    of image sizing, lazy loading techniques, and efficient DOM manipulation to ensure fast, smooth 
                    user interactions.
                    </p>
                </section>

                </article>
            </div>

            {/* Sticky Navigation - 1/4 width */}
            <div className="w-1/4 hidden lg:block">
                <div className="sticky top-8">
                <nav className="bg-[#E2E3E1]/20 backdrop-blur-lg rounded-lg overflow-hidden border p-6">
                    <h3 className="font-bold text-vacchio-black mb-4">On This Page</h3>
                    <ul className="space-y-2">
                    <li>
                        <a 
                        href="#short-explanation" 
                        className="text-sm text-vacchio-black/70 hover:text-vacchio-black transition-colors block py-1"
                        >
                        Summary
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#project-goals" 
                        className="text-sm text-vacchio-black/70 hover:text-vacchio-black transition-colors block py-1"
                        >
                        Project Goals
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#tech-stack-details" 
                        className="text-sm text-vacchio-black/70 hover:text-vacchio-black transition-colors block py-1"
                        >
                        Technical Implementation
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#features" 
                        className="text-sm text-vacchio-black/70 hover:text-vacchio-black transition-colors block py-1"
                        >
                        Key Features
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#challenges" 
                        className="text-sm text-vacchio-black/70 hover:text-vacchio-black transition-colors block py-1"
                        >
                        Challenges & Solutions
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            </div>
        </div>
    </>

  )
}

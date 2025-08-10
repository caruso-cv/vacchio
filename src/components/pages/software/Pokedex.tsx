import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import Tailwind from '@/components/logos/TailwindCSS'
import JavaScript from '@/components/logos/JavaScript'
import ScrollColorImage from '@/components/ui/ScrollColorImage'
import ScrollColorVideo from '@/components/ui/ScrollColorVideo'

export default function Pokedex() {
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
                    <Tailwind className='w-4 h-4 text-black opacity-50'/>
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
                <Link href='https://github.com/SolCaruso/pokedex' target='_blank' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
                <Github className="w-4 h-4" />
                <span>View Repo</span>
                </Link>
                <Link href='https://solcaruso.github.io/pokedex/' target='_blank' className='border-vacchio-black/80 border font-bold px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer bg-vacchio-black hover:bg-vacchio-black/80 text-white/80 transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
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
                    A comprehensive Pokedex application that leverages the PokeAPI to display up to 717 Pokemon with 
                    high-quality user experience. The project features a modern, responsive design with advanced 
                    functionality including search capabilities, light/dark mode toggle, filtering options, and 
                    a favorites system with local storage integration.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-8">
                    The application includes a sophisticated modal system that displays detailed Pokemon information 
                    including general stats, base stats, evolution chains, and move sets. Users can seamlessly navigate 
                    between Pokemon by clicking on evolution links, creating an intuitive browsing experience. The design 
                    embraces minimalistic layout with ample white space and subtle Pokemon-themed elements.
                    </p>
                    <div className="mb-12">
                        <p className="text-vacchio-black/80 leading-relaxed mb-4">
                        The design features a polkadot gradient aesthetic with faded Pokeball elements in the background, 
                        creating a modern digital feel while maintaining simplicity. Small Pokeball icons are scattered 
                        throughout the interface, reinforcing the Pokedex theme in a non-intrusive manner.
                        </p>
                        <p className="text-vacchio-black/80 leading-relaxed">
                        The prototype successfully integrates responsive design, dynamic JavaScript functionality, local 
                        storage integration, and efficient data retrieval via the Fetch API, resulting in a polished and 
                        immersive user experience.
                        </p>
                    </div>

                    {/* Home Page Video */}
                    <div className="mb-8">
                        <ScrollColorVideo
                            src="/webm/pokedex.webm"
                            className="w-full h-auto"
                        />
                    </div>
                </section>

                <section id="project-goals">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Project Goals</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The primary goal was to create a comprehensive Pokemon database application that would:
                    </p>
                    <ul className="list-disc pl-6 text-vacchio-black/80 space-y-2 mb-12">
                    <li>Create an intuitive interface for browsing and searching through the complete Pokemon database</li>
                    <li>Design a responsive layout that works seamlessly across all device types and screen sizes</li>
                    <li>Implement efficient data management with optimized API calls and local storage integration</li>
                    <li>Build a user-friendly favorites system that persists user preferences across sessions</li>
                    <li>Develop an accessible design with proper contrast, keyboard navigation, and screen reader support</li>
                    <li>Create a visually appealing interface that balances functionality with Pokemon-themed aesthetics</li>
                    <li>Ensure fast loading times and smooth interactions even with large datasets</li>
                    <li>Provide comprehensive Pokemon information including stats, evolutions, and move details</li>
                    </ul>
                </section>

                <section id="tech-stack-details">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Technical Implementation</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The application is built using vanilla JavaScript with modern ES6+ features, providing dynamic 
                    functionality and efficient DOM manipulation. Tailwind CSS provides a utility-first approach to 
                    styling for rapid development and consistent design patterns across components.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    The PokeAPI integration handles all Pokemon data including stats, evolutions, and moves through 
                    efficient Fetch API calls. The application features local storage integration for favorites and 
                    theme preferences, with debounced search functionality for optimal performance. The modal system 
                    provides smooth transitions and intuitive navigation, while responsive design utilizes Flexbox and 
                    CSS Grid for optimal layout across all devices.
                    </p>
                </section>

                <section id="features">

                    {/* Blog Page Screenshot */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/webp/pokedex2.webp"
                            alt="Pokedex Application Interface"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                {/* Narrative between second and third media (balanced with earlier text) */}
                <section id="characters-overview">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Key Features</h2>
                    <ul className="list-disc pl-6 text-vacchio-black/80 mb-8 space-y-2">
                    <li>Comprehensive Pokemon database with up to 717 entries from the PokeAPI</li>
                    <li>Advanced search functionality with real-time filtering and debounced input handling</li>
                    <li>Light and dark mode toggle with persistent user preferences via local storage</li>
                    <li>Favorites system with local storage integration for saving preferred Pokemon</li>
                    <li>Detailed modal system displaying comprehensive Pokemon information including moves</li>
                    <li>Evolution chain navigation with clickable links to related Pokemon</li>
                    <li>Fully responsive design utilizing Flexbox and CSS Grid for optimal layout</li>
                    <li>Minimalistic design with polkadot gradient aesthetic and subtle Pokemon-themed elements</li>
                    <li>Efficient data loading with deferred fetching for move details to optimize performance</li>
                    </ul>
                    <p className="text-vacchio-black/80 leading-relaxed mb-4">
                    The application successfully balances functionality with aesthetics, creating an intuitive interface 
                    that allows users to explore Pokemon data efficiently while maintaining visual appeal.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    This project demonstrates the integration of modern web technologies, responsive design principles, 
                    and user experience best practices to create a polished and functional Pokemon database application.
                    </p>

                    {/* Character Showcase Screenshot */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/webp/pokedex3.webp"
                            alt="Pokemon Detail Modal"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                {/* Challenges & Solutions moved to the end */}
                <section id="challenges">
                    <h2 className="text-2xl font-bold text-vacchio-black mb-6">Challenges & Solutions</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    One of the main challenges was efficiently handling the large dataset of 717 Pokemon while maintaining 
                    fast search and filter performance. We implemented debounced search functionality and deferred fetching 
                    for move details, ensuring data was only requested when needed to balance efficiency and responsiveness.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    Another significant challenge was fine-tuning the responsive layout for various devices. Cards, tooltips, 
                    and SVG icons needed incremental adjustments to maintain consistency and readability across mobile, 
                    tablet, and desktop screens using careful media queries and responsive units.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    Maintaining snappy interactions while integrating local storage updates, favorites management, and 
                    filtering results was challenging. Properly debouncing actions and using incremental fetching helped 
                    preserve performance and ensure a smooth user experience.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-0">
                    SVG icon alignment and accessibility across different screen sizes and themes required iterative CSS 
                    refinements. Ensuring keyboard accessibility and proper ARIA labels was crucial to provide an inclusive 
                    experience for all users.
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

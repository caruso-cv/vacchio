import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import JavaScript from '@/components/logos/JavaScript'
import ScrollColorImage from '@/components/ui/ScrollColorImage'
import ScrollColorVideo from '@/components/ui/ScrollColorVideo'

export default function TailFeather() {
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
                <Link href='https://github.com/vacc0003/custom-css-framework' target='_blank' className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
                <Github className="w-4 h-4" />
                <span>View Repo</span>
                </Link>
                <Link href='https://vacc0003.github.io/custom-css-framework/' target='_blank' className='border-vacchio-black/80 border font-bold px-8 py-3.5 rounded-full uppercase text-xs cursor-pointer bg-vacchio-black hover:bg-vacchio-black/80 text-white/80 transition-all duration-200 ease-in-out-quad text-center flex items-center gap-2'>
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
                    TailFeather CSS is a lightweight, customizable utility-first CSS framework inspired by Tailwind CSS. 
                    Built with Sass, it offers a simplified set of utility classes and base styles for rapid web development, 
                    providing developers with a streamlined alternative to larger CSS frameworks.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-8">
                    The framework features utility-first class naming conventions, making it easy to apply styles directly 
                    in HTML markup. With built-in SCSS compilation and a modular architecture, developers can easily 
                    customize and extend the framework to suit their specific project needs while maintaining fast 
                    compilation times and optimal performance.
                    </p>
                    <div className="mb-12">
                        <p className="text-vacchio-black/80 leading-relaxed mb-4">
                        The design philosophy focuses on simplicity and efficiency, offering essential utility classes 
                        without the complexity of larger frameworks. This makes TailFeather ideal for projects that need 
                        rapid styling capabilities without unnecessary overhead.
                        </p>
                        <p className="text-vacchio-black/80 leading-relaxed">
                        Built with modern Sass features, the framework provides a solid foundation for building responsive, 
                        maintainable web applications with clean, semantic markup and efficient CSS output.
                        </p>
                    </div>

                    <div className="mb-12">
                        <ScrollColorImage
                            src="/webp/tailfeather.webp"
                            alt="TailFeather CSS Framework"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                <section id="project-goals">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Project Goals</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The primary goal was to create a lightweight CSS framework that would:
                    </p>
                    <ul className="list-disc pl-6 text-vacchio-black/80 space-y-2 mb-12">
                    <li>Provide utility-first class naming inspired by Tailwind CSS for rapid development</li>
                    <li>Build a lightweight framework that compiles quickly and efficiently</li>
                    <li>Create a modular SCSS architecture for easy customization and extension</li>
                    <li>Offer simplified utility classes without the complexity of larger frameworks</li>
                    <li>Implement a Sass-based build system with automatic compilation and watching</li>
                    <li>Ensure fast loading times and optimal performance for web applications</li>
                    <li>Provide comprehensive documentation and usage examples</li>
                    <li>Maintain clean, semantic CSS output with minimal file size</li>
                    </ul>
                </section>

                <section id="tech-stack-details">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Technical Implementation</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    The framework is built using Sass (SCSS) with a modular architecture that separates concerns into 
                    organized directories. The build system uses Sass compilation with automatic watching capabilities, 
                    allowing developers to make changes and see immediate updates in their compiled CSS.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    The project structure includes base styles, component styles, and utility classes organized in separate 
                    SCSS files. The framework provides essential utility classes for spacing, colors, typography, and layout, 
                    while maintaining a lightweight footprint. The modular approach allows developers to easily customize 
                    variables, extend functionality, and remove unused features to optimize for their specific use cases.
                    </p>
                </section>

                <section id="features">

                    {/* Blog Page Screenshot */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/webp/tailfeather2.webp"
                            alt="TailFeather CSS Framework"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                {/* Narrative between second and third media (balanced with earlier text) */}
                <section id="characters-overview">
                    <h2 className="text-xl uppercase font-bold text-vacchio-black mb-5">Key Features</h2>
                    <ul className="list-disc pl-6 text-vacchio-black/80 mb-8 space-y-2">
                    <li>Utility-first class naming convention inspired by Tailwind CSS</li>
                    <li>Built with SCSS for easy customization and extension</li>
                    <li>Lightweight and fast compilation with minimal file size</li>
                    <li>Modular architecture with organized base, component, and utility styles</li>
                    <li>Automatic Sass compilation with file watching capabilities</li>
                    <li>Comprehensive utility classes for spacing, colors, typography, and layout</li>
                    <li>Clean, semantic CSS output optimized for performance</li>
                    <li>Easy installation and setup process with clear documentation</li>
                    </ul>
                    <p className="text-vacchio-black/80 leading-relaxed mb-4">
                    The framework successfully provides a streamlined alternative to larger CSS frameworks while maintaining 
                    the flexibility and power needed for modern web development.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-12">
                    This project demonstrates the ability to create practical development tools that solve real problems 
                    while maintaining clean code architecture and comprehensive documentation.
                    </p>

                    {/* Character Showcase Screenshot */}
                    <div className="mb-12">
                        <ScrollColorImage
                            src="/webp/tailfeather3.webp"
                            alt="Framework Documentation"
                            className="w-full h-auto opacity-90 rounded-lg border"
                        />
                    </div>
                </section>

                {/* Challenges & Solutions moved to the end */}
                <section id="challenges">
                    <h2 className="text-2xl font-bold text-vacchio-black mb-6">Challenges & Solutions</h2>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    One of the main challenges was creating a utility-first framework that remained lightweight while 
                    providing essential functionality. We carefully selected the most commonly used utility classes and 
                    implemented a modular SCSS architecture that allows developers to include only what they need, 
                    keeping the final CSS file size minimal.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    Another significant challenge was designing an intuitive class naming system that would be familiar 
                    to developers while remaining simple and memorable. We studied existing frameworks like Tailwind CSS 
                    and created a simplified naming convention that maintains consistency and reduces the learning curve.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-6">
                    Setting up an efficient build system with automatic compilation and file watching required careful 
                    configuration of Sass compilation options. We implemented a streamlined build process that provides 
                    fast compilation times and immediate feedback during development.
                    </p>
                    <p className="text-vacchio-black/80 leading-relaxed mb-0">
                    Creating comprehensive documentation that would be helpful for developers of all skill levels was 
                    important for adoption. We provided clear installation instructions, usage examples, and customization 
                    guides to ensure developers could quickly integrate and extend the framework for their projects.
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

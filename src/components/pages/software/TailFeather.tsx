import React from 'react'
import JavaScript from '@/components/logos/JavaScript'
import ProjectLayout from '@/components/layout/ProjectLayout'

export default function TailFeather() {
  return (
    <ProjectLayout
      title="TailFeather CSS"
      description="Lightweight utility-first CSS framework built with Sass, inspired by Tailwind CSS."
      techStack={
        <>
          <JavaScript className='w-4 h-4 text-black opacity-50'/>
        </>
      }
      githubUrl="https://github.com/vacc0003/custom-css-framework"
      liveUrl="https://vacc0003.github.io/custom-css-framework/"
      content={{
        summary: "TailFeather CSS is a lightweight, customizable utility-first CSS framework inspired by Tailwind CSS. Built with Sass, it offers a simplified set of utility classes and base styles for rapid web development, providing developers with a streamlined alternative to larger CSS frameworks. The framework features utility-first class naming conventions, making it easy to apply styles directly in HTML markup. With built-in SCSS compilation and a modular architecture, developers can easily customize and extend the framework to suit their specific project needs while maintaining fast compilation times and optimal performance. The design philosophy focuses on simplicity and efficiency, offering essential utility classes without the complexity of larger frameworks. This makes TailFeather ideal for projects that need rapid styling capabilities without unnecessary overhead. Built with modern Sass features, the framework provides a solid foundation for building responsive, maintainable web applications with clean, semantic markup and efficient CSS output.",
        projectGoals: [
          "Provide utility-first class naming inspired by Tailwind CSS for rapid development",
          "Build a lightweight framework that compiles quickly and efficiently",
          "Create a modular SCSS architecture for easy customization and extension",
          "Offer simplified utility classes without the complexity of larger frameworks",
          "Implement a Sass-based build system with automatic compilation and watching",
          "Ensure fast loading times and optimal performance for web applications",
          "Provide comprehensive documentation and usage examples",
          "Maintain clean, semantic CSS output with minimal file size"
        ],
        technicalImplementation: "The framework is built using Sass (SCSS) with a modular architecture that separates concerns into organized directories. The build system uses Sass compilation with automatic watching capabilities, allowing developers to make changes and see immediate updates in their compiled CSS. The project structure includes base styles, component styles, and utility classes organized in separate SCSS files. The framework provides essential utility classes for spacing, colors, typography, and layout, while maintaining a lightweight footprint. The modular approach allows developers to easily customize variables, extend functionality, and remove unused features to optimize for their specific use cases.",
        keyFeatures: [
          "Utility-first class naming convention inspired by Tailwind CSS",
          "Built with SCSS for easy customization and extension",
          "Lightweight and fast compilation with minimal file size",
          "Modular architecture with organized base, component, and utility styles",
          "Automatic Sass compilation with file watching capabilities",
          "Comprehensive utility classes for spacing, colors, typography, and layout",
          "Clean, semantic CSS output optimized for performance",
          "Easy installation and setup process with clear documentation"
        ],
        challenges: [
          "One of the main challenges was creating a utility-first framework that remained lightweight while providing essential functionality. We carefully selected the most commonly used utility classes and implemented a modular SCSS architecture that allows developers to include only what they need, keeping the final CSS file size minimal.",
          "Another significant challenge was designing an intuitive class naming system that would be familiar to developers while remaining simple and memorable. We studied existing frameworks like Tailwind CSS and created a simplified naming convention that maintains consistency and reduces the learning curve.",
          "Setting up an efficient build system with automatic compilation and file watching required careful configuration of Sass compilation options. We implemented a streamlined build process that provides fast compilation times and immediate feedback during development.",
          "Creating comprehensive documentation that would be helpful for developers of all skill levels was important for adoption. We provided clear installation instructions, usage examples, and customization guides to ensure developers could quickly integrate and extend the framework for their projects."
        ]
      }}
      media={[
        { type: 'image', src: '/webp/tailfeather.webp', alt: 'TailFeather CSS Framework' },
        { type: 'image', src: '/webp/tailfeather2.webp', alt: 'TailFeather CSS Framework' },
        { type: 'image', src: '/webp/tailfeather3.webp', alt: 'Framework Documentation' }
      ]}
    />
  )
}

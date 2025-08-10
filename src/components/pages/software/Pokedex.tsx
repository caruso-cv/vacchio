import React from 'react'
import JavaScript from '@/components/logos/JavaScript'
import Tailwind from '@/components/logos/TailwindCSS'
import ProjectLayout from '@/components/layout/ProjectLayout'

export default function Pokedex() {
  return (
    <ProjectLayout
      title="Pokedex"
      description="Comprehensive Pokemon database application with PokeAPI integration and advanced search functionality."
      techStack={
        <>
          <JavaScript className='w-4 h-4 text-black opacity-50'/>
          <Tailwind className='w-4 h-4 text-black opacity-50'/>
        </>
      }
      githubUrl="https://github.com/SolCaruso/pokedex"
      liveUrl="https://solcaruso.github.io/pokedex/"
      content={{
        summary: "A comprehensive Pokedex application that leverages the PokeAPI to display up to 717 Pokemon with high-quality user experience. The project features a modern, responsive design with advanced functionality including search capabilities, light/dark mode toggle, filtering options, and a favorites system with local storage integration. The application includes a sophisticated modal system that displays detailed Pokemon information including general stats, base stats, evolution chains, and move sets. Users can seamlessly navigate between Pokemon by clicking on evolution links, creating an intuitive browsing experience. The design embraces minimalistic layout with ample white space and subtle Pokemon-themed elements. The design features a polkadot gradient aesthetic with faded Pokeball elements in the background, creating a modern digital feel while maintaining simplicity. Small Pokeball icons are scattered throughout the interface, reinforcing the Pokedex theme in a non-intrusive manner. The prototype successfully integrates responsive design, dynamic JavaScript functionality, local storage integration, and efficient data retrieval via the Fetch API, resulting in a polished and immersive user experience.",
        projectGoals: [
          "Display up to 717 Pokemon with high-quality images and data from the PokeAPI",
          "Implement advanced search functionality with real-time filtering and debounced input",
          "Create a seamless light/dark mode toggle with persistent user preferences",
          "Build a favorites system with local storage for saving preferred Pokemon",
          "Develop a detailed modal system for comprehensive Pokemon information",
          "Include evolution chain navigation with clickable evolution links",
          "Ensure fully responsive design optimized for desktop, tablet, and mobile devices",
          "Maintain a clean, minimalistic layout with ample white space and thematic elements"
        ],
        technicalImplementation: "The application is built using vanilla JavaScript with modern ES6+ features, providing dynamic functionality and efficient DOM manipulation. Tailwind CSS provides a utility-first approach to styling for rapid development and consistent design patterns across components. The PokeAPI integration handles all Pokemon data including stats, evolutions, and moves through efficient Fetch API calls. The application features local storage integration for favorites and theme preferences, with debounced search functionality for optimal performance. The modal system provides smooth transitions and intuitive navigation, while responsive design utilizes Flexbox and CSS Grid for optimal layout across all devices.",
        keyFeatures: [
          "Comprehensive Pokemon database with up to 717 entries from the PokeAPI",
          "Advanced search functionality with real-time filtering and debounced input handling",
          "Light and dark mode toggle with persistent user preferences via local storage",
          "Favorites system with local storage integration for saving preferred Pokemon",
          "Detailed modal system displaying comprehensive Pokemon information including moves",
          "Evolution chain navigation with clickable links to related Pokemon",
          "Fully responsive design utilizing Flexbox and CSS Grid for optimal layout",
          "Minimalistic design with polkadot gradient aesthetic and subtle Pokemon-themed elements",
          "Efficient data loading with deferred fetching for move details to optimize performance"
        ],
        challenges: [
          "One of the main challenges was efficiently handling the large dataset of 717 Pokemon while maintaining fast search and filter performance. We implemented debounced search functionality and deferred fetching for move details, ensuring data was only requested when needed to balance efficiency and responsiveness.",
          "Another significant challenge was fine-tuning the responsive layout for various devices. Cards, tooltips, and SVG icons needed incremental adjustments to maintain consistency and readability across mobile, tablet, and desktop screens using careful media queries and responsive units.",
          "Maintaining snappy interactions while integrating local storage updates, favorites management, and filtering results was challenging. Properly debouncing actions and using incremental fetching helped preserve performance and ensure a smooth user experience.",
          "SVG icon alignment and accessibility across different screen sizes and themes required iterative CSS refinements. Ensuring keyboard accessibility and proper ARIA labels was crucial to provide an inclusive experience for all users."
        ]
      }}
      media={[
        { type: 'video', src: '/webm/pokedex.webm' },
        { type: 'image', src: '/webp/pokedex2.webp', alt: 'Pokedex Application Interface' },
        { type: 'image', src: '/webp/pokedex3.webp', alt: 'Pokemon Detail Modal' }
      ]}
    />
  )
}

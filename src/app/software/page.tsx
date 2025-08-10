import AllProjects from '@/components/pages/software/AllProjects'

export default function Projects() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto relative z-20">
      
      {/* Hero Banner */}
      <div className="pt-12 pb-12">
        <div className="text-start">
          <h1 className="text-5xl font-light font-playfair text-vacchio-black mb-4 ">
            All Projects
          </h1>
          <p className="text-base text-vacchio-black/70">
            A comprehensive collection of my software development projects, showcasing various technologies and solutions.
          </p>
        </div>
      </div>

      <AllProjects />
      
    </div>
  )
}
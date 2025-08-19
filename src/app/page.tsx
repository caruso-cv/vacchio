import Experience from '../components/layout/Experience'
import Projects from '../components/layout/Projects'
import Pagination from '../components/layout/Pagination'
import About from '../components/layout/About'
import SocialLinks from '../components/footer/SocialLinks'
import Links from '../components/layout/Links'

export default function Home() {

  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">

      {/* Left side - Fixed */}
      <div className="w-1/2 flex flex-col px-8 py-8 pt-24 sticky top-0 h-screen">
        <div className="mb-12">
          <h1 className="text-5xl font-inter text-vacchio-black/80 pb-2 font-semibold">
            Carmen Vacchio
          </h1>
          <p className="text-3xl font-regular font-cormorant-garamond text-vacchio-black/70 pb-4">Software Developer</p>
          <p className="text-base font-regular text-vacchio-black/50 leading-relaxed max-w-sm">
            Passionate about creating software that combines thoughtful design with robust engineering.
          </p>
        </div>
        <Pagination />
        <SocialLinks />
      </div>
      
      {/* Right side */}
      <div className="w-1/2">
        <div className="p-8 pt-24 max-w-2xl">
          <About />
          <Experience />
          <Projects />
          <Links />
        </div>
      </div>

    </div>
  )
}

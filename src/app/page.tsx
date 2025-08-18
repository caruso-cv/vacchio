import Experience from '../components/layout/Experience'
import Pagination from '../components/layout/Pagination'
import About from '../components/layout/About'
import SocialLinks from '../components/footer/SocialLinks'

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
            I build accessible, pixel perfect web experiences that blend engineering and design.
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
        </div>
      </div>
      
    </div>
  )
}

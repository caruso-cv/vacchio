import ProjectCards from '@/components/pages/home/ProjectCards'
import AboutMe from '@/components/pages/home/AboutMe'

export default function Home() {
  return (
    <main className="pt-12 max-w-8xl mx-auto w-full flex flex-col gap-4 ">

      {/* Hero */}
      <div className='pb-12'>
        <h1 className="text-4xl font-regular font-inter text-vacchio-black/80 pb-1 font-bold">Carmen Vacchio</h1>
        <p className="text-3xl font-regular font-cormorant-garamond text-vacchio-black/70 pl-0.5">Software Developer</p>
      </div>

      <ProjectCards />

      <AboutMe />

    </main>
  )
}

import Image from 'next/image'
import Supabase from '@/components/logos/Supabase'
import Nextjs from '@/components/logos/Nextjs'
import Tailwind from '@/components/logos/TailwindCSS'
import Typescript from '@/components/logos/TypeScript'
import ReactLogo from '@/components/logos/React'
import Solana from '@/components/logos/Solana'

export default function Home() {
  return (
    <main className="pt-12 max-w-8xl mx-auto w-full flex flex-col gap-4 ">

      {/* Hero */}
      <div className='pb-12'>
        <h1 className="text-4xl font-regular font-inter text-vacchio-black/80 pb-1 font-bold">Carmen Vacchio</h1>
        <p className="text-3xl font-regular font-cormorant-garamond text-vacchio-black/70 pl-0.5">Software Developer</p>
      </div>

      {/* Recent Projects */}
      <h2 className="font-bold font-cantarell uppercase text-sm text-vacchio-black">Recent Projects</h2>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-12">

        {/* Card 1 */}
        <div className="bg-muted/50 aspect-video rounded-lg overflow-hidden relative border ">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Project</p>
                <p className='text-base font-regular text-vacchio-black/70'>Indie Game Studio Website</p>
              </div>

              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
              </div>

              <div className='flex gap-4'>
                <Supabase className='w-4 h-4 grayscale'/>
                <Nextjs className='w-4 h-4 grayscale opacity-50'/>
                <Tailwind className='w-4 h-4 text-black opacity-50'/>
                <Typescript className='w-4 h-4  text-black opacity-50'/>
                <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                <Solana className='w-4 h-4 grayscale opacity-50'/>
              </div>
            </div>

            <button className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad'>
              View Project
            </button>

          </div>

          <Image 
            src="/webp/ocelot.webp" 
            alt="Project 1" 
            width={1506}
            height={1886}
            draggable={false}
            className=' absolute -right-20 -bottom-50 w-100 object-cover opacity-30' 
          />

        </div>
        
        {/* Card 1 */}
        <div className="bg-muted/50 aspect-video rounded-lg overflow-hidden relative border ">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Project</p>
                <p className='text-base font-regular text-vacchio-black/70'>Indie Game Studio Website</p>
              </div>

              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
              </div>

              <div className='flex gap-4'>
                <Supabase className='w-4 h-4 grayscale'/>
                <Nextjs className='w-4 h-4 grayscale opacity-50'/>
                <Tailwind className='w-4 h-4 text-black opacity-50'/>
                <Typescript className='w-4 h-4  text-black opacity-50'/>
                <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                <Solana className='w-4 h-4 grayscale opacity-50'/>
              </div>
            </div>

            <button className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad'>
              View Project
            </button>

          </div>

          <Image 
            src="/webp/ocelot.webp" 
            alt="Project 1" 
            width={1506}
            height={1886}
            draggable={false}
            className=' absolute -right-20 -bottom-50 w-100 object-cover opacity-30' 
          />

        </div>

        {/* Card 1 */}
        <div className="bg-muted/50 aspect-video rounded-lg overflow-hidden relative border ">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Project</p>
                <p className='text-base font-regular text-vacchio-black/70'>Indie Game Studio Website</p>
              </div>

              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
              </div>

              <div className='flex gap-4'>
                <Supabase className='w-4 h-4 grayscale'/>
                <Nextjs className='w-4 h-4 grayscale opacity-50'/>
                <Tailwind className='w-4 h-4 text-black opacity-50'/>
                <Typescript className='w-4 h-4  text-black opacity-50'/>
                <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                <Solana className='w-4 h-4 grayscale opacity-50'/>
              </div>
            </div>

            <button className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad'>
              View Project
            </button>

          </div>

          <Image 
            src="/webp/ocelot.webp" 
            alt="Project 1" 
            width={1506}
            height={1886}
            draggable={false}
            className=' absolute -right-20 -bottom-50 w-100 object-cover opacity-30' 
          />

        </div>

      </div>

      {/* About Me */}
      <h2 className="font-bold font-cantarell uppercase text-sm text-vacchio-black/70">About Me</h2>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />

    </main>
  )
}

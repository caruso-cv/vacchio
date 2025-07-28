import Image from 'next/image'
import Supabase from '@/components/logos/Supabase'
import Nextjs from '@/components/logos/Nextjs'
import Tailwind from '@/components/logos/TailwindCSS'
import Typescript from '@/components/logos/TypeScript'
import ReactLogo from '@/components/logos/React'
import Solana from '@/components/logos/Solana'
import Stripe from '@/components/logos/Stripe'
import AmazonWebServices from '@/components/logos/AmazonWebServices'
import JavaScript from '@/components/logos/JavaScript'

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
        <div className="bg-[#E2E3E1]/20 aspect-video rounded-lg overflow-hidden relative border ">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Ocelot Technologies</p>
                <p className='text-base font-regular text-vacchio-black/70'>Indie Game Studio Website</p>
              </div>

              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
              </div>

              <div className='flex gap-4 items-center'>
                <Supabase className='w-4 h-4 grayscale'/>
                <Nextjs className='w-4 h-4 grayscale opacity-40'/>
                <Tailwind className='w-4 h-4 text-black opacity-50'/>
                <Typescript className='w-4 h-4  text-black opacity-40'/>
                <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                <Solana className='w-4 h-4 grayscale opacity-40'/>
              </div>
            </div>

            <button className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad'>
              View Project
            </button>

          </div>

          <Image 
            src="/webp/ocelot.webp" 
            alt="Ocelot Game Studio Website Project" 
            width={479}
            height={600}
            draggable={false}
            className=' absolute -right-20 -bottom-50 w-100 object-cover opacity-20' 
          />

        </div>
        
        {/* Card 2 */}
        <div className="bg-[#E2E3E1]/20 aspect-video rounded-lg overflow-hidden relative border ">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Caddi AI</p>
                <p className='text-base font-regular text-vacchio-black/70'>Golf Ecommerce Website</p>
              </div>

              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
              </div>

              <div className='flex gap-4 items-center'>
                <Supabase className='w-4 h-4 grayscale'/>
                <Nextjs className='w-4 h-4 grayscale opacity-40'/>
                <Tailwind className='w-4 h-4 text-black opacity-50'/>
                <Typescript className='w-4 h-4  text-black opacity-40'/>
                <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                <Stripe className='w-7 h-4 text-black opacity-40'/>
              </div>
            </div>

            <button className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad'>
              View Project
            </button>

          </div>

          <Image 
            src="/webp/caddi2.webp" 
            alt="Caddi AI Commerce Web Project" 
            width={355}
            height={600}
            draggable={false}
            className=' absolute -right-30 -bottom-20 w-100 object-cover opacity-20' 
          />

        </div>

        {/* Card 3 */}
        <div className="bg-[#E2E3E1]/20 aspect-video rounded-lg overflow-hidden relative border ">

          <div className='pt-8 px-6 pb-6 flex flex-col gap-4 justify-between h-full relative z-1'>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Neutron Controls</p>
                <p className='text-base font-regular text-vacchio-black/70'>BMS Technology Website</p>
              </div>

              <div className='flex gap-0.5 flex-col'>
                <p className='text-sm font-bold text-vacchio-black/80 uppercase'>Tech Stack</p>
              </div>

              <div className='flex gap-4 items-center'>
                <Nextjs className='w-4 h-4 grayscale opacity-40'/>
                <Tailwind className='w-4 h-4 text-black opacity-50'/>
                <JavaScript className='w-4 h-4  text-black opacity-40'/>
                <ReactLogo className='w-4 h-4 text-black opacity-50'/>
                <AmazonWebServices className='w-5 h-4 grayscale opacity-50'/>
              </div>
            </div>

            <button className='border-vacchio-black/80 border font-bold text-vacchio-black/80 px-4 py-3.5 rounded-full uppercase text-xs cursor-pointer hover:bg-vacchio-yellow hover:border-vacchio-yellow hover:text-vacchio-dark-yellow transition-all duration-200 ease-in-out-quad'>
              View Project
            </button>

          </div>

          <Image 
            src="/webp/neutron.webp" 
            alt="Neutron Controls Website Project" 
            width={550}
            height={600}
            draggable={false}
            className=' absolute -right-40 -bottom-15 w-100 object-cover opacity-15' 
          />

        </div>

      </div>

      {/* About Me */}
      <h2 className="font-bold font-cantarell uppercase text-sm text-vacchio-black/70">About Me</h2>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />

    </main>
  )
}

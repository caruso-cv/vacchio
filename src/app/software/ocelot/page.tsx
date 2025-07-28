import Ocelot from '@/components/pages/software/Ocelot'

export default function OcelotPage() {
  return (
    <div className="min-h-screen w-full max-w-8xl mx-auto relative z-20">
      
      {/* Hero Banner */}
      <div className="pt-12 pb-12">
        <div className="text-start">
          <h1 className="text-5xl font-light font-playfair text-vacchio-black mb-4 ">
            Ocelot Technologies
          </h1>
          <p className="text-base text-vacchio-black/70">
            Game development studio website with integrated blog system and blockchain token swap.
          </p>
        </div>
      </div>

      <Ocelot />
      
    </div>
  )
}
  
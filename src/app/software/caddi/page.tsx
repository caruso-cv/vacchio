import Caddi from '@/components/pages/software/Caddi'

export default function Projects() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto relative z-20">
      
    {/* Hero Banner */}
    <div className="pt-12 pb-12">
      <div className="text-start">
        <h1 className="text-5xl font-light font-playfair text-vacchio-black mb-4 ">
          Caddi AI Inc.
        </h1>
        <p className="text-base text-vacchio-black/70">
          Golf E-Commerce Site with Custom Divot Tool Builder and Stripe Integration.
        </p>
      </div>
    </div>

    <Caddi />
    
  </div>
  )
}
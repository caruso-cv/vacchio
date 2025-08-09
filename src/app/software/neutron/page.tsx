import Neutron from '@/components/pages/software/Neutron'

export default function Projects() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto relative z-20">
      
    {/* Hero Banner */}
    <div className="pt-12 pb-12">
      <div className="text-start">
        <h1 className="text-5xl font-light font-playfair text-vacchio-black mb-4 ">
          Neutron Controls
        </h1>
        <p className="text-base text-vacchio-black/70">
          Neutron is a platform for creating and sharing 3D models.
        </p>
      </div>
    </div>

    <Neutron />
    
  </div>
  )
}
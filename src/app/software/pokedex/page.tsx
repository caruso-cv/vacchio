import Pokedex from '@/components/pages/software/Pokedex'

export default function PokedexPage() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto relative z-20">
      
      {/* Hero Banner */}
      <div className="pt-12 pb-12">
        <div className="text-start">
          <h1 className="text-5xl font-light font-playfair text-vacchio-black mb-4 ">
            Pokedex
          </h1>
          <p className="text-base text-vacchio-black/70">
            Comprehensive Pokemon database application with PokeAPI integration and advanced search functionality.
          </p>
        </div>
      </div>

      <Pokedex />
      
    </div>
  )
}

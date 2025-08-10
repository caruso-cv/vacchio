import Unsplash from '@/components/pages/software/Unsplash'

export default function UnsplashPage() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto relative z-20">
      
      {/* Hero Banner */}
      <div className="pt-12 pb-12">
        <div className="text-start">
          <h1 className="text-5xl font-light font-playfair text-vacchio-black mb-4 ">
            Unsplash Clone
          </h1>
          <p className="text-base text-vacchio-black/70">
            Photography browsing application with Unsplash API integration and camera specifications display.
          </p>
        </div>
      </div>

      <Unsplash />
      
    </div>
  )
}

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className='py-12 border-t border-vacchio-black/10'>
          
          {/* Main Footer Content - Multi-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Column 1: Home */}
            <div>
              <h3 className="text-xs font-semibold text-vacchio-black/80 mb-2 mt-6">Home</h3>
              <div className="flex flex-col gap-2">
                <Link 
                  href="/" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </Link>
              </div>
              
              <h3 className="text-xs font-semibold text-vacchio-black/80 mb-2 mt-5">Recent Projects</h3>
              <div className="flex flex-col gap-2">
                <Link 
                  href="/software/ocelot" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Game Studio Site
                </Link>
                <Link 
                  href="/software/caddi" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Commerce Website
                </Link>
                <Link 
                  href="/software/neutron" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  BMS Tech Site
                </Link>
                <Link 
                  href="/software/pokedex" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Pokedex App
                </Link>
                <Link 
                  href="/software" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  All Projects
                </Link>
              </div>
            </div>

            {/* Column 2: Software Projects */}
            <div>
              <h3 className="text-xs font-semibold text-vacchio-black/80 mb-2 mt-6">Software Projects</h3>
              <div className="flex flex-col gap-2">
                <Link 
                  href="/software/ocelot" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Game Studio Site
                </Link>
                <Link 
                  href="/software/caddi" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Commerce Website
                </Link>
                <Link 
                  href="/software/neutron" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  BMS Tech Site
                </Link>
                <Link 
                  href="/software/pokedex" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Pokedex App
                </Link>
                <Link 
                  href="/software/unsplash" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Unsplash Clone
                </Link>
                <Link 
                  href="/software/tailfeather" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  SCSS Framework
                </Link>
              </div>
            </div>

            {/* Column 3: UX/UI Projects */}
            <div>
              <h3 className="text-xs font-semibold text-vacchio-black/80 mb-2 mt-6">UX/UI Projects</h3>
              <div className="flex flex-col gap-2">
                <Link 
                  href="/ux/mobile-ordering" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Mobile Ordering App
                </Link>
                <Link 
                  href="/ux/phone-case-store" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Phone Case Store
                </Link>
                <Link 
                  href="/ux/nft-marketplace" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  NFT Marketplace
                </Link>
                <Link 
                  href="/ux/ottawa-site" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  City of Ottawa Site
                </Link>
              </div>
            </div>

            {/* Column 4: Graphic Design */}
            <div>
              <h3 className="text-xs font-semibold text-vacchio-black/80 mb-2 mt-6">Graphic Design</h3>
              <div className="flex flex-col gap-2">
                <Link 
                  href="/design/roadside-signs" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Roadside Signs
                </Link>
                <Link 
                  href="/design/magazine-ads" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Magazine Ads
                </Link>
                <Link 
                  href="/design/business-cards" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Business Cards
                </Link>
                <Link 
                  href="/design/menus" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Menus
                </Link>
              </div>
            </div>

            {/* Column 5: Photography */}
            <div>
              <h3 className="text-xs font-semibold text-vacchio-black/80 mb-2 mt-6">Photography</h3>
              <div className="flex flex-col gap-2">
                <Link 
                  href="/photography/portraits" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Portraits
                </Link>
                <Link 
                  href="/photography/food" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Food
                </Link>
                <Link 
                  href="/photography/golf-shoot" 
                  className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
                >
                  Golf Shoot
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom section with copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-vacchio-black/10 pt-6">
          <div className="text-left">
            <p className="text-xs text-vacchio-black/60">
              &copy; {new Date().getFullYear()} Carmen James Caruso Vacchio
            </p>
          </div>
                     <div className="text-right">
             <a 
               href="mailto:carmen@zolas.ca"
               className="text-xs text-vacchio-black/60 hover:text-vacchio-black transition-colors duration-200 cursor-pointer"
             >
               carmen@zolas.ca
             </a>
           </div>
        </div>
      </div>
    </footer>
  );
}
import React, { useEffect, useState } from "react"
import Image from 'next/image';

const logos = [
  { name: "Walmart", src: "/brandlogos/walmart.svg" },
  { name: "Carrefour", src: "/brandlogos/carrefour.svg" },
  { name: "Target", src: "/brandlogos/target.svg" },
  { name: "Tesco", src: "/brandlogos/tesco.svg" },
  { name: "Costco", src: "/brandlogos/costco.svg" },
  { name: "Big Bazaar", src: "/brandlogos/bigbazaar.svg" },
  { name: "Reliance", src: "/brandlogos/reliance.svg" },
  { name: "DMart", src: "/brandlogos/dmart.svg" },
  { name: "Max", src: "/brandlogos/max.svg" },
  { name: "IKEA", src: "/brandlogos/ikea.svg" }, // ✅ Added
]

const BrandLogoCarousel: React.FC = () => {
  // Repeat logos enough times for seamless loop
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos]
  const [showTagline, setShowTagline] = useState(false)
  const [showCarousel, setShowCarousel] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTagline(true)
        // Delay showing carousel for fade-up effect after tagline
        setTimeout(() => setShowCarousel(true), 400)
      } else {
        setShowTagline(false)
        setShowCarousel(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full bg-white py-6">
      <div className="flex flex-col items-center justify-center w-full">
        <h3
          className={`text-center text-base md:text-lg font-semibold text-black mb-4 transition-all duration-700 ease-out opacity-0 translate-y-6 ${showTagline ? 'fade-up-active' : ''}`}
        >
          Designed to Scale With the World&apos;s Largest Retailers
        </h3>

        <div className={`relative w-full flex flex-col items-center justify-center overflow-x-hidden transition-all duration-700 ease-out opacity-0 translate-y-6 ${showCarousel ? 'fade-up-active' : ''}`}>
          {/* Desktop: Static row */}
          <div className="hidden sm:flex flex-wrap justify-center items-center gap-10 w-full">
            {logos.map((logo, idx) => (
              <div
                key={logo.name + idx}
                className="flex-shrink-0 flex items-center justify-center h-16 w-24"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-20 object-contain"
                  width={64}
                  height={64}
                />
              </div>
            ))}
          </div>

          {/* Mobile: Animated infinite carousel */}
          <div className="flex sm:hidden animate-carousel gap-10 w-max" style={{ minWidth: '200vw' }}>
            {repeatedLogos.map((logo, idx) => (
              <div
                key={logo.name + idx}
                className="flex-shrink-0 flex items-center justify-center h-10 w-20"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  className="h-5 w-16 object-contain"
                  width={64}
                  height={64}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel 25s linear infinite;
          will-change: transform;
        }
        @media (max-width: 639px) {
          .animate-carousel {
            animation-duration: 32s !important;
            animation-timing-function: linear !important;
          }
        }
        .fade-up-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        h3, .relative {
          opacity: 0;
          transform: translateY(24px);
        }
      `}</style>
    </div>
  )
}

export default BrandLogoCarousel

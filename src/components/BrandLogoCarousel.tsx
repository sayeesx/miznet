import React from "react"

const logos = [
  { name: "Walmart", src: "/brandlogos/walmart.svg" },
  { name: "Carrefour", src: "/brandlogos/carrefour.svg" },
  { name: "Target", src: "/brandlogos/target.svg" },
  { name: "Tesco", src: "/brandlogos/tesco.svg" },
  { name: "Costco", src: "/brandlogos/costco.svg" },
  { name: "Big Bazaar", src: "/brandlogos/bigbazaar.svg" },
  { name: "Reliance", src: "/brandlogos/reliance.svg" },
  { name: "DMart", src: "/brandlogos/dmart.svg" },
  { name: "Max", src: "/brandlogos/max.svg" }, // ✅ Added
]

const BrandLogoCarousel: React.FC = () => {
  const repeatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="w-full bg-white py-6">
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="text-center text-base md:text-lg font-semibold text-black mb-4">
          Designed to Scale With the World&apos;s Largest Retailers
        </h3>

        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Desktop: Static row */}
          <div className="hidden sm:flex flex-wrap justify-center items-center gap-10 w-full">
            {logos.map((logo, idx) => (
              <div
                key={logo.name + idx}
                className="flex-shrink-0 flex items-center justify-center h-16 w-24"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-20 object-contain filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Mobile: Animated infinite carousel */}
          <div className="flex sm:hidden animate-carousel gap-10" style={{ width: 'max-content' }}>
            {repeatedLogos.map((logo, idx) => (
              <div
                key={logo.name + idx}
                className="flex-shrink-0 flex items-center justify-center h-10 w-20"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-5 w-16 object-contain filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-sm md:text-base text-gray-500 mt-10 max-w-2xl mx-auto">
        We&apos;re looking to partner with innovative retail teams to pilot next-gen supply chain systems
      </p>

      <style jsx>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-carousel {
          animation: carousel 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}

export default BrandLogoCarousel

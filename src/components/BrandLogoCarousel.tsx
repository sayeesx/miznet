import React, { useEffect, useState } from "react"
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

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
  { name: "IKEA", src: "/brandlogos/ikea.svg" }
]

const BrandLogoCarousel: React.FC = () => {
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className="w-full bg-white py-6">
      <div className="flex flex-col items-center justify-center w-full">
        <h3
          className="text-center text-base md:text-lg font-semibold text-black mb-4"
        >
          Designed to Scale With the World&apos;s Largest Retailers
        </h3>

        <div className="relative w-full flex flex-col items-center justify-center overflow-x-hidden">
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

          {/* Mobile: Smooth infinite carousel */}
          <div className="flex sm:hidden overflow-hidden relative w-full">
            <div
              className="flex gap-8 animate-infinite-scroll"
              style={{
                width: "max-content",
                willChange: "transform",
                paddingRight: "2rem"
              }}
            >
              {repeatedLogos.map((logo, idx) => (
                <div
                  key={logo.name + idx}
                  className="flex-shrink-0 flex items-center justify-center w-24"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 w-20 object-contain"
                    width={64}
                    height={64}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandLogoCarousel;

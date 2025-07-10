"use client"

import React from "react"
import Lottie from "lottie-react"
import { useInView } from 'react-intersection-observer'
import immutableTrackingLottie from "../animations/immutabletracking.json"
import robotLottie from "../animations/robot.json"
import workerLottie from "../animations/worker.json"

function LazyLottie({ animationData, desktopSize, mobileSize }: { animationData: object, desktopSize: number, mobileSize: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px' })
  return (
    <div ref={ref} className="flex items-center justify-center">
      {inView && (
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: '100%', maxWidth: desktopSize, height: 'auto' }}
          className={`w-[${mobileSize}px] h-[${mobileSize}px] md:w-[${desktopSize}px] md:h-[${desktopSize}px]`}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      )}
    </div>
  )
}

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="bg-gradient-to-br from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-12 text-center drop-shadow-sm">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Feature 1 (AI-Based Restocking) */}
          <div className="group flex flex-row md:flex-col items-start md:items-center bg-white/70 backdrop-blur-sm rounded-2xl p-3 md:p-6 border border-white/20 shadow-lg">
            <div className="p-2 md:p-4 mb-0 md:mb-4 flex-shrink-0" style={{ width: '80px', height: '80px', maxWidth: '80px' }}>
              <LazyLottie animationData={robotLottie} desktopSize={180} mobileSize={70} />
            </div>
            <div className="flex-1 ml-3 md:ml-0 md:text-center">
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#111827] group-hover:text-[#fc0404] transition-colors duration-300">AI-Based Restocking</h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                Forecasts demand and triggers automated stock movement.
              </p>
            </div>
          </div>
          {/* Feature 2 (Immutable Tracking) */}
          <div className="group flex flex-row md:flex-col items-start md:items-center bg-white/70 backdrop-blur-sm rounded-2xl p-3 md:p-6 border border-white/20 shadow-lg">
            <div className="p-2 md:p-4 mb-0 md:mb-4 flex-shrink-0" style={{ width: '80px', height: '80px', maxWidth: '80px' }}>
              <LazyLottie animationData={immutableTrackingLottie} desktopSize={140} mobileSize={60} />
            </div>
            <div className="flex-1 ml-3 md:ml-0 md:text-center">
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#111827] group-hover:text-[#fc0404] transition-colors duration-300">Immutable Tracking</h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                Blockchain logs every product from supplier to customer.
              </p>
            </div>
          </div>
          {/* Feature 3 (No Manual Workers Needed) */}
          <div className="group flex flex-row md:flex-col items-start md:items-center bg-white/70 backdrop-blur-sm rounded-2xl p-3 md:p-6 border border-white/20 shadow-lg">
            <div className="p-2 md:p-4 mb-0 md:mb-4 flex-shrink-0" style={{ width: '80px', height: '80px', maxWidth: '80px' }}>
              <LazyLottie animationData={workerLottie} desktopSize={180} mobileSize={70} />
            </div>
            <div className="flex-1 ml-3 md:ml-0 md:text-center">
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#111827] group-hover:text-[#fc0404] transition-colors duration-300">No Manual Workers Needed</h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">Eliminates human inventory updates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 
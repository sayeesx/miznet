"use client"

import React from "react"
import AnimatedButton from "./AnimatedButton"
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

interface FeaturesSectionProps {
  logoCarouselVisible: boolean;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ logoCarouselVisible }) => {
  // Only fade in on first scroll down, not when returning from bottom
  const [hasAnimated, setHasAnimated] = React.useState(false);
  // Show features as soon as logoCarouselVisible is false, and keep visible after first show
  const [hasShown, setHasShown] = React.useState(false);
  React.useEffect(() => {
    if (!logoCarouselVisible) setHasShown(true);
  }, [logoCarouselVisible]);
  const shouldShow = hasShown;

  return (
    <section 
      id="features" 
      className={`py-12 px-6 bg-white transition-all duration-500 ease-out ${
        shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none select-none'
      }`}>
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`text-[1.5rem] md:text-[2.1rem] font-bold text-gray-900 mb-8 text-left whitespace-nowrap transform transition-all duration-1000 ease-out ${
            shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Why Choose <span style={{ color: '#fc0404' }}>Miznet</span>?
        </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Feature 1 (AI-Based Restocking) */}
          <div 
            className={`group flex flex-row md:flex-col items-start md:items-center bg-white rounded-2xl p-3 md:p-6 border border-gray-100 transform transition-all duration-1000 ease-out delay-[400ms] ${
              shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-2 md:p-4 mb-0 md:mb-4 flex-shrink-0" style={{ width: '80px', height: '80px', maxWidth: '80px' }}>
              <LazyLottie animationData={robotLottie} desktopSize={180} mobileSize={70} />
            </div>
            <div className="flex-1 ml-3 md:ml-0 md:text-center">
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#111827] group-hover:text-[#fc0404] transition-colors duration-300">
                AI-Based Restocking
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                Forecasts demand and triggers automated stock movement.
              </p>
            </div>
          </div>

          {/* Feature 2 (Immutable Tracking) */}
          <div 
            className={`group flex flex-row md:flex-col items-start md:items-center bg-white rounded-2xl p-3 md:p-6 border border-gray-100 transform transition-all duration-1000 ease-out delay-[800ms] ${
              shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-2 md:p-4 mb-0 md:mb-4 flex-shrink-0" style={{ width: '80px', height: '80px', maxWidth: '80px' }}>
              <LazyLottie animationData={immutableTrackingLottie} desktopSize={140} mobileSize={60} />
            </div>
            <div className="flex-1 ml-3 md:ml-0 md:text-center">
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#111827] group-hover:text-[#fc0404] transition-colors duration-300">
                Immutable Tracking
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                Blockchain logs every product from supplier to customer.
              </p>
            </div>
          </div>

          {/* Feature 3 (No Manual Workers Needed) */}
          <div 
            className={`group flex flex-row md:flex-col items-start md:items-center bg-white rounded-2xl p-3 md:p-6 border border-gray-100 transform transition-all duration-1000 ease-out delay-[1200ms] ${
              shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-2 md:p-4 mb-0 md:mb-4 flex-shrink-0" style={{ width: '80px', height: '80px', maxWidth: '80px' }}>
              <LazyLottie animationData={workerLottie} desktopSize={180} mobileSize={70} />
            </div>
            <div className="flex-1 ml-3 md:ml-0 md:text-center">
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#111827] group-hover:text-[#fc0404] transition-colors duration-300">
                No Manual Workers Needed
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                Eliminates human inventory updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
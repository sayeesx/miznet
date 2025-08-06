"use client"

import React from "react"
import ChatbotButton from "../components/ChatbotButton"
import ChatWindow from "../components/ChatWindow"
import ContactButton from "../components/ContactButton"
import Image from "next/image"
import abstract1 from '../../assets/abstract/abstract1.webp'
import PageContainer from "../components/PageContainer"
import BrandLogoCarousel from "../components/BrandLogoCarousel"
import BenfitChart from "../components/benfitcomponent/benfitchart";
import BenefitsSection from "../components/benfitcomponent/BenefitsSection";
import BenefitMetrics from "../components/benfitcomponent/BenefitMetrics";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";
// AOS imports
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import AnimatedButton from "../components/AnimatedButton";



export default function Home() {
  const [chatOpen, setChatOpen] = React.useState(false)
  const [logoCarouselVisible, setLogoCarouselVisible] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // Simulate checking if page is ready
    const checkPageReady = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => setIsLoading(false), 500) // Small delay to ensure smooth transition
      } else {
        window.addEventListener('load', () => {
          setTimeout(() => setIsLoading(false), 500)
        })
      }
    }
    checkPageReady()
    // AOS.init({
    //   duration: 700,
    //   once: true,
    //   offset: 60,
    //   easing: 'ease-out-cubic',
    // })
  }, [])

  return (
    <PageContainer>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
          <div className="w-12 h-12 border-3 border-[#fc0404] border-t-transparent rounded-full animate-[spin_0.6s_linear_infinite]"></div>
        </div>
      ) : null}
      <div className={`bg-white min-h-screen flex flex-col font-[Manrope,sans-serif] text-[#111827] ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto pt-16 pb-16 px-6 gap-12 w-full mt-8 md:mt-0">
          {/* Left */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-2xl">
              Track Every Product from Warehouse to Checkout —{" "}
              <span className="text-[#fc0404]">Automatically</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mb-8">
              <span className="font-bold text-[#fc0404]">Miznet AI</span> uses blockchain and machine learning to
              eliminate stockouts, manage expiry, and restock shelves without human intervention.
            </p>
            <ContactButton className="mt-6 md:mt-2 self-start ml-0" text="Book a Demo" />
          </div>
          {/* Right */}
          <div className="flex-1 flex items-center justify-center hidden sm:flex">
            <div className="w-full max-w-[500px] aspect-[4/3] flex items-center justify-center">
              <Image
                src={abstract1}
                alt="Abstract Hero"
                width={640}
                height={640}
                className="w-[32rem] h-[32rem] object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Brand Logo Carousel */}
        <div className="mb-6">
          <BrandLogoCarousel onVisibilityChange={(isVisible) => setLogoCarouselVisible(isVisible)} />
        </div>

        <FeaturesSection logoCarouselVisible={logoCarouselVisible} />

        {/* See How Miznet Works Button */}
        <div className="flex justify-center mb-12">
          <AnimatedButton href="/miznet" small>
            See How Miznet Works
          </AnimatedButton>
        </div>

        {/* Benefits Section + Performance Analytics */}
        <section className="w-full flex flex-col md:flex-row items-start justify-center gap-6 mb-12">
          <div className="w-full md:w-3/5">
            <BenefitsSection />
          </div>
          <div className="w-full md:w-2/5">
            <BenfitChart />
          </div>
        </section>
        <div className="w-full max-w-4xl mx-auto mb-12">
          <BenefitMetrics />
        </div>

        <AboutSection />

        {/* Chatbot Button - Now with higher z-index and better visibility */}
        <ChatbotButton onClick={() => setChatOpen((v) => !v)} />

        {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}
      </div>
    </PageContainer>
  )
}

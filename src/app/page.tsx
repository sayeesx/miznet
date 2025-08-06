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

  React.useEffect(() => {
    // AOS.init({
    //   duration: 700,
    //   once: true,
    //   offset: 60,
    //   easing: 'ease-out-cubic',
    // })
  }, [])

  return (
    <PageContainer>
      <div className="bg-white min-h-screen flex flex-col font-[Manrope,sans-serif] text-[#111827]">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto pt-16 pb-16 px-6 gap-12 w-full mt-8 md:mt-0">
          {/* Left */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-2xl">
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
        <div>
          <BrandLogoCarousel />
        </div>

        <FeaturesSection />

        {/* See How Miznet Works Button (moved here) */}
        <div className="flex justify-center -mt-6 mb-2"> {/* reduced margin-top and margin-bottom */}
          <AnimatedButton href="/miznet" small>
            See How Miznet Works
          </AnimatedButton>
        </div>

        {/* Benefits Section + Performance Analytics */}
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-0 my-0 mt-2"> {/* add mt-2 for slight separation, gap-0 for no gap */}
          {/* BenefitsSection on left, BenfitChart on right (desktop); stacked on mobile */}
          <div className="w-full md:w-2/3 flex justify-center md:mr-2"> {/* add md:mr-2 for a small gap on desktop */}
            <BenefitsSection />
          </div>
          <div className="w-full flex justify-center md:max-w-xl px-2 md:px-4"> {/* reduce px */}
            <BenfitChart />
          </div>
        </section>
        <div className="w-full flex justify-center md:max-w-4xl px-1 md:px-2 mt-1 mb-0 mx-auto"> {/* increased max-width for metrics */}
          <BenefitMetrics />
        </div>

        <AboutSection />



        {/* Footer */}
        <footer className="bg-[#111827]/80 backdrop-blur-sm text-[#F9FAFB] py-8 px-6 mt-auto border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[#F9FAFB] font-bold">© 2025 Miznet AI</div>
            <div className="flex gap-6 text-[#F9FAFB] text-sm">
              <a href="#" className="hover:underline font-semibold transition-colors duration-200 hover:text-[#fc0404]">
                Terms
              </a>
              <a href="#" className="hover:underline font-semibold transition-colors duration-200 hover:text-[#fc0404]">
                Privacy
              </a>
              <a href="#" className="hover:underline font-semibold transition-colors duration-200 hover:text-[#fc0404]">
                Contact
              </a>
            </div>
          </div>
        </footer>

        {/* Chatbot Button - Now with higher z-index and better visibility */}
        <ChatbotButton onClick={() => setChatOpen((v) => !v)} />

        {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}
      </div>
    </PageContainer>
  )
}

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
import SparkleButton from "../components/SparkleButton";



export default function Home() {
  const [chatOpen, setChatOpen] = React.useState(false)
  const [logoCarouselVisible, setLogoCarouselVisible] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [showHeroSection, setShowHeroSection] = React.useState(false)
  const [visibleSections, setVisibleSections] = React.useState(new Set<string>())

  React.useEffect(() => {
    // Simulate checking if page is ready
    const checkPageReady = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setIsLoading(false)
          setShowHeroSection(true) // Show hero section immediately after loading
        }, 500)
      } else {
        window.addEventListener('load', () => {
          setTimeout(() => {
            setIsLoading(false)
            setShowHeroSection(true)
          }, 500)
        })
      }
    }
    checkPageReady()

    // Handle scroll-based animations for all sections
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      
      // Define sections in order from top to bottom
      const sections = [
        'hero-section',
        'brand-carousel-section',
        'features-section',
        'benefits-section',
        'about-section'
      ]

      // Calculate visibility based on scroll position
      const isVisible = (element: Element | null) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= windowHeight * 0.85 // Trigger slightly earlier
      }

      // Check each section in order
      setVisibleSections(prevVisible => {
        const newVisible = new Set(prevVisible)
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId)
          if (element && isVisible(element)) {
            newVisible.add(sectionId)
          }
        }
        
        return newVisible
      })
    }

    window.addEventListener('scroll', handleScroll)
    // Trigger initial check
    setTimeout(handleScroll, 100) // Small delay to ensure DOM is ready
    
    return () => window.removeEventListener('scroll', handleScroll)
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
        <section id="hero-section" className={`flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto pt-16 pb-16 px-6 gap-12 w-full mt-8 md:mt-0 transition-all duration-1000 ease-out ${showHeroSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

        {/* Brand Logo Carousel - hidden at top, fade in on scroll */}
        <div id="brand-carousel-section" className={`mb-2 transition-all duration-1000 ease-out ${visibleSections.has('brand-carousel-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {visibleSections.has('brand-carousel-section') && (
            <BrandLogoCarousel onVisibilityChange={(isVisible) => setLogoCarouselVisible(isVisible)} />
          )}
        </div>

        {/* Features Section */}
        <div id="features-section" className={`transition-all duration-1000 ease-out ${visibleSections.has('features-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <FeaturesSection logoCarouselVisible={logoCarouselVisible} />
          
          {/* See How Miznet Works Button */}
          <div className="flex justify-center mt-8 mb-12">
            <SparkleButton href="/miznet" className="text-sm px-4 py-2" />
          </div>
        </div>

        {/* Benefits Section + Performance Analytics */}
        <section id="benefits-section" className={`w-full flex flex-col md:flex-row items-start justify-center gap-6 mb-12 transition-all duration-1000 ease-out ${visibleSections.has('benefits-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full md:w-3/5">
            <BenefitsSection />
          </div>
          <div className="w-full md:w-2/5">
            <BenfitChart />
          </div>
        </section>
        <div className={`w-full max-w-4xl mx-auto mb-12 transition-all duration-1000 ease-out ${visibleSections.has('benefits-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <BenefitMetrics />
        </div>

        {/* About Section */}
        <div id="about-section" className={`transition-all duration-1000 ease-out ${visibleSections.has('about-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <AboutSection />
        </div>

        {/* Chatbot Button - Now with higher z-index and better visibility */}
        <ChatbotButton onClick={() => setChatOpen((v) => !v)} />

        {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}
      </div>
    </PageContainer>
  )
}

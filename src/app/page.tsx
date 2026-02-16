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

  return (
    <PageContainer>
      <div className="bg-white min-h-screen flex flex-col font-[Manrope,sans-serif] text-[#111827]">
        {/* Hero Section */}
        <section id="hero-section" className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto pt-16 pb-16 px-6 gap-12 w-full mt-8 md:mt-0">
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
        <div id="brand-carousel-section" className="mb-2">
          <BrandLogoCarousel />
        </div>

        {/* Features Section */}
        <div id="features-section">
          <FeaturesSection />
          
          {/* See How Miznet Works Button */}
          <div className="flex justify-center mt-8 mb-12">
            <SparkleButton href="/miznet" className="text-sm px-4 py-2" />
          </div>
        </div>

        {/* Benefits Section + Performance Analytics */}
        <section id="benefits-section" className="w-full flex flex-col md:flex-row items-start justify-center gap-6 mb-12">
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

        {/* About Section */}
        <div id="about-section">
          <AboutSection />
        </div>

        {/* Chatbot Button */}
        <ChatbotButton onClick={() => setChatOpen((v) => !v)} />

        {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}
      </div>
    </PageContainer>
  )
}

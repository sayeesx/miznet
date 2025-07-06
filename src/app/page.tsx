"use client"

import React from "react"
import ChatbotButton from "../components/ChatbotButton"
import ChatWindow from "../components/ChatWindow"
import ContactButton from "../components/ContactButton"
import Image from "next/image"
import abstract1 from '../../assets/abstract/abstract1.webp'
import { NavbarDemo } from "../components/ui/resizable-navbar"
import Lottie from "lottie-react"
import immutableTrackingLottie from "../animations/immutabletracking.json"
import robotLottie from "../animations/robot.json"
import workerLottie from "../animations/worker.json"

export default function Home() {
  const [chatOpen, setChatOpen] = React.useState(false)

  return (
    <div className="bg-white min-h-screen flex flex-col font-[Manrope,sans-serif] text-[#111827]">
      <NavbarDemo />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto pt-20 pb-16 px-6 gap-12 w-full">
        {/* Left */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111827] mb-6 leading-tight max-w-2xl drop-shadow-lg">
            Track Every Product from Warehouse to Checkout —{" "}
            <span className="text-[#fc0404] font-extrabold">Automatically</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mb-8 font-medium">
            <span className="font-bold text-[#fc0404]">Miznet AI</span> uses blockchain and machine learning to
            eliminate stockouts, manage expiry, and restock shelves without human intervention.
          </p>
          <ContactButton className="mt-2 self-start ml-0" />
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

      {/* Features Section */}
      <section id="features" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-12 text-center drop-shadow">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 (AI-Based Restocking) */}
            <div className="flex flex-col items-center bg-white rounded-xl p-10">
              <div className="bg-[#fc0404] text-white p-5 rounded-full mb-4 text-4xl flex items-center justify-center" style={{ width: 170, height: 170, background: '#fff' }}>
                <Lottie
                  animationData={robotLottie}
                  loop
                  autoplay
                  style={{ width: 150, height: 150, background: "#fff" }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#111827]">AI-Based Restocking</h3>
              <p className="text-gray-500 text-center font-medium">
                Forecasts demand and triggers automated stock movement.
              </p>
            </div>
            {/* Feature 2 (Immutable Tracking) */}
            <div className="flex flex-col items-center bg-white rounded-xl p-10">
              <div className="bg-[#fc0404] text-white p-5 rounded-full mb-4 text-4xl flex items-center justify-center" style={{ width: 170, height: 170, background: '#fff' }}>
                <Lottie
                  animationData={immutableTrackingLottie}
                  loop
                  autoplay
                  style={{ width: 110, height: 110, background: "#fff" }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#111827]">Immutable Tracking</h3>
              <p className="text-gray-500 text-center font-medium">
                Blockchain logs every product from supplier to customer.
              </p>
            </div>
            {/* Feature 3 (No Manual Workers Needed) */}
            <div className="flex flex-col items-center bg-white rounded-xl p-10">
              <div className="bg-[#fc0404] text-white p-5 rounded-full mb-4 text-4xl flex items-center justify-center" style={{ width: 170, height: 170, background: '#fff' }}>
                <Lottie
                  animationData={workerLottie}
                  loop
                  autoplay
                  style={{ width: 150, height: 150, background: "#fff" }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#111827]">No Manual Workers Needed</h3>
              <p className="text-gray-500 text-center font-medium">Eliminates human inventory updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Miznet Works Heading */}
      <div className="w-full flex flex-col items-center justify-center bg-[#F9FAFB] pt-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#fc0404] mb-4 text-center drop-shadow">How Miznet Works?</h2>
      </div>

      {/* How It Works Section */}
      <section id="how" className="bg-[#F9FAFB] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white rounded-xl p-6 w-full max-w-[400px] aspect-[4/3] flex items-center justify-center">
                <span className="text-5xl text-[#fc0404]">🧾</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold text-[#111827] mb-2">Smart Billing with Blockchain</h3>
              <p className="text-gray-500 mb-2 font-medium">
                Product sale logs trigger <span className="font-bold text-[#fc0404]">AI restocking</span> if expiry or
                low stock is detected.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white rounded-xl p-6 w-full max-w-[400px] aspect-[4/3] flex items-center justify-center">
                <span className="text-5xl text-[#fc0404]">🏭</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold text-[#111827] mb-2">Warehouse to Shelf Automation</h3>
              <p className="text-gray-500 mb-2 font-medium">
                Predictive AI sends restock commands directly to{" "}
                <span className="font-bold text-[#fc0404]">warehouse bots</span>.
              </p>
            </div>
          </div>
        </div>
        {/* Button to Works page */}
        <div className="flex justify-center mt-12">
          <a href="/miznet" className="px-8 py-3 rounded-full bg-[#fc0404] text-white font-extrabold hover:bg-[#ff8800] focus:ring-2 focus:ring-[#ffb366] focus:outline-none text-lg transition-all duration-300 shadow-md">
            See How Miznet Works
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="rounded-full border-4 border-[#fc0404] w-48 h-48 flex items-center justify-center mb-8 bg-gray-50">
            <span className="text-7xl text-[#fc0404]">🤝</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-2 drop-shadow">Miznet AI</h2>
          <h3 className="text-lg text-[#fc0404] font-bold mb-4">AI + Blockchain = Autonomous Retail Supply Chain</h3>
          <p className="text-gray-500 max-w-xl font-medium">
            We&apos;re redefining how supermarkets operate using{" "}
            <span className="font-bold text-[#fc0404]">secure, intelligent automation</span>.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#F9FAFB] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-12 text-center drop-shadow">Pricing</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Starter */}
            <div className="flex-1 bg-white rounded-xl p-10 flex flex-col items-center max-w-sm mx-auto">
              <h3 className="text-xl font-bold mb-2 text-[#111827]">Starter</h3>
              <ul className="text-gray-500 mb-6 text-left list-disc list-inside font-medium">
                <li>Up to 2 stores</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
              <div className="text-3xl font-extrabold text-[#fc0404] mb-4">
                $49<span className="text-base font-normal text-gray-500">/mo</span>
              </div>
              <a
                href="#"
                className="px-8 py-3 rounded-full bg-[#fc0404] text-white font-extrabold hover:bg-[#ff8800] focus:ring-2 focus:ring-[#ffb366] focus:outline-none text-lg"
              >
                Start Now
              </a>
            </div>
            {/* Pro */}
            <div className="flex-1 bg-white rounded-xl p-10 flex flex-col items-center max-w-sm mx-auto">
              <h3 className="text-xl font-bold mb-2 text-[#111827]">Pro</h3>
              <ul className="text-gray-500 mb-6 text-left list-disc list-inside font-medium">
                <li>Up to 10 stores</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
              </ul>
              <div className="text-3xl font-extrabold text-[#fc0404] mb-4">
                $149<span className="text-base font-normal text-gray-500">/mo</span>
              </div>
              <a
                href="#"
                className="px-8 py-3 rounded-full bg-[#fc0404] text-white font-extrabold hover:bg-[#ff8800] focus:ring-2 focus:ring-[#ffb366] focus:outline-none text-lg"
              >
                Start Now
              </a>
            </div>
            {/* Enterprise */}
            <div className="flex-1 bg-white rounded-xl p-10 flex flex-col items-center max-w-sm mx-auto">
              <h3 className="text-xl font-bold mb-2 text-[#111827]">Enterprise</h3>
              <ul className="text-gray-500 mb-6 text-left list-disc list-inside font-medium">
                <li>Unlimited stores</li>
                <li>Custom integrations</li>
                <li>Dedicated support</li>
              </ul>
              <div className="text-3xl font-extrabold text-[#fc0404] mb-4">Contact Us</div>
              <a
                href="#"
                className="px-8 py-3 rounded-full bg-[#fc0404] text-white font-extrabold hover:bg-[#ff8800] focus:ring-2 focus:ring-[#ffb366] focus:outline-none text-lg"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-[#F9FAFB] py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#F9FAFB] font-bold">© 2025 Miznet AI</div>
          <div className="flex gap-6 text-[#F9FAFB] text-sm">
            <a href="#" className="hover:underline font-semibold">
              Terms
            </a>
            <a href="#" className="hover:underline font-semibold">
              Privacy
            </a>
            <a href="#" className="hover:underline font-semibold">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Chatbot Button - Now with higher z-index and better visibility */}
      <ChatbotButton onClick={() => setChatOpen((v) => !v)} />

      {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}
    </div>
  )
}

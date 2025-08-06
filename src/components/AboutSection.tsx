import React from "react"

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="relative w-48 h-48 mb-8">
          <div className="absolute inset-0 bg-red-600 rounded-full opacity-50 blur-xl animate-pulse"></div>
          <div className="relative w-full h-full rounded-full bg-white/95 backdrop-blur-xl flex items-center justify-center border-2 border-white shadow-[20px_20px_60px_#bebebe,_-20px_-20px_60px_#ffffff]">
            <span className="text-7xl text-[#fc0404]">🤝</span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-2 drop-shadow-sm">Miznet AI</h2>
        <h3 className="text-lg text-[#fc0404] font-bold mb-4">AI + Blockchain = Autonomous Retail Supply Chain</h3>
        <p className="text-gray-500 max-w-xl font-medium">
          We&apos;re redefining how supermarkets operate using{" "}
          <span className="font-bold text-[#fc0404]">secure, intelligent automation</span>.
        </p>
      </div>
    </section>
  )
}

export default AboutSection 
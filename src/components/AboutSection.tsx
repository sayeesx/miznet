import React from "react"

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="rounded-full border-4 border-[#fc0404] w-48 h-48 flex items-center justify-center mb-8 bg-gray-50">
          <span className="text-7xl text-[#fc0404]">🤝</span>
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
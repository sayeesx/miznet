import React from 'react'

interface BenefitCardProps {
  emoji: string
  title: string
  description?: string
}

function BenefitCard({ emoji, title, description }: BenefitCardProps) {
  return (
    <div className="benefit-card-animated flex flex-col items-center bg-white rounded-lg p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Animation layers */}
      <div className="benefit-card-bg" />
      <div className="benefit-card-blob" />
      {/* Card content */}
      <span className="text-3xl md:text-4xl mb-3 z-10">{emoji}</span>
      <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2 text-center z-10">
        {title}
      </h3>
      {description && (
        <p className="text-xs md:text-sm text-gray-500 text-center z-10">
          {description}
        </p>
      )}
    </div>
  )
}

export default function BenefitsSection() {
  const benefits = [
    {
      emoji: "💰",
      title: "Reduce operational cost",
      description: "Cut expenses with automated inventory management"
    },
    {
      emoji: "📉",
      title: "Prevent stockouts and overstock",
      description: "AI-driven demand forecasting prevents waste"
    },
    {
      emoji: "⏱️",
      title: "Save hours of manual labor",
      description: "Automate routine inventory tasks completely"
    },
    {
      emoji: "🧾",
      title: "Comply with traceability laws",
      description: "Blockchain ensures regulatory compliance"
    },
    {
      emoji: "📊",
      title: "Real-time insights for decision-making",
      description: "Get actionable data when you need it most"
    }
  ]

  return (
    <section className="bg-[#F9FAFB] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-4 text-[#111827]">
          Benefits of using Miznet AI
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
          The smarter, faster, autonomous supply chain system.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              emoji={benefit.emoji}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 
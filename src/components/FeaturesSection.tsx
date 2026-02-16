"use client"

import React from "react"
import { Bot, Link, TrendingUp } from "lucide-react"

const FeatureIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-4">
    <Icon className="w-10 h-10 text-[#fc0404]" strokeWidth={1.5} />
  </div>
)

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-[1.5rem] md:text-[2.1rem] font-bold text-gray-900 mb-8 text-left whitespace-nowrap"
        >
          Why Choose <span style={{ color: '#fc0404' }}>Miznet</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Feature 1 (ERP-Connected Intelligence) */}
          <div
            className="group flex flex-row md:flex-col items-start md:items-center bg-white rounded-2xl p-3 md:p-6 border border-gray-100 transition-colors duration-300 hover:border-gray-200"
          >
            <div className="p-2 md:p-0 mb-0 md:mb-4 flex-shrink-0">
              <FeatureIcon icon={Link} />
            </div>
            <div className="flex-1 ml-3 md:ml-0 md:text-center">
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#111827] group-hover:text-[#fc0404] transition-colors duration-300">
                ERP-Connected Intelligence
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                Seamlessly integrates with your ERP and supply chain systems for real-time visibility.
              </p>
            </div>
          </div>

          {/* Feature 2 (Autonomous Decision Engine) */}
          <div
            className="group flex flex-row md:flex-col items-start md:items-center bg-white rounded-2xl p-3 md:p-6 border border-gray-100 transition-colors duration-300 hover:border-gray-200"
          >
            <div className="p-2 md:p-0 mb-0 md:mb-4 flex-shrink-0">
              <FeatureIcon icon={Bot} />
            </div>
            <div className="flex-1 ml-3 md:ml-0 md:text-center">
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#111827] group-hover:text-[#fc0404] transition-colors duration-300">
                Autonomous Decision Engine
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                Learns business patterns and independently optimizes dispatch, forecasting, and inventory.
              </p>
            </div>
          </div>

          {/* Feature 3 (Continuous Self-Improvement) */}
          <div
            className="group flex flex-row md:flex-col items-start md:items-center bg-white rounded-2xl p-3 md:p-6 border border-gray-100 transition-colors duration-300 hover:border-gray-200"
          >
            <div className="p-2 md:p-0 mb-0 md:mb-4 flex-shrink-0">
              <FeatureIcon icon={TrendingUp} />
            </div>
            <div className="flex-1 ml-3 md:ml-0 md:text-center">
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#111827] group-hover:text-[#fc0404] transition-colors duration-300">
                Continuous Self-Improvement
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                Improves accuracy and efficiency every cycle through adaptive learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
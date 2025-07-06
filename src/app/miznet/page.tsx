"use client"
import {
  Warehouse,
  Link,
  TrendingUp,
  ShoppingCart,
  Radar,
  User,
  CreditCard,
  Receipt,
  BarChart3,
  Bot,
  Package,
  CheckCircle,
  RotateCcw,
} from "lucide-react"
import { NavbarDemo } from "../../components/ui/resizable-navbar"

const steps = [
  {
    id: 1,
    icon: <Warehouse className="w-6 h-6" />,
    title: "Product Arrival",
    description: "Product arrives at Warehouse with complete documentation and quality verification.",
    date: "STEP 01",
  },
  {
    id: 2,
    icon: <Link className="w-6 h-6" />,
    title: "Blockchain Logging",
    description: "Logged on Blockchain with Batch ID, Expiry date, and Quantity for complete traceability.",
    date: "STEP 02",
  },
  {
    id: 3,
    icon: <TrendingUp className="w-6 h-6" />,
    title: "ML Forecasting",
    description:
      "Machine Learning forecasts restocking needs based on sales data, weather patterns, and market trends.",
    date: "STEP 03",
  },
  {
    id: 4,
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Retail Placement",
    description: "Products are strategically moved to retail shelves with optimal positioning for customer access.",
    date: "STEP 04",
  },
  {
    id: 5,
    icon: <Radar className="w-6 h-6" />,
    title: "Smart Monitoring",
    description:
      "Continuous shelf monitoring via RFID technology and Computer Vision for real-time inventory tracking.",
    date: "STEP 05",
  },
  {
    id: 6,
    icon: <User className="w-6 h-6" />,
    title: "Customer Interaction",
    description:
      "Customer selects and picks products with seamless shopping experience and product information access.",
    date: "STEP 06",
  },
  {
    id: 7,
    icon: <CreditCard className="w-6 h-6" />,
    title: "Auto Billing",
    description: "Automated billing system triggers payment processing through Smart Cart or Self-service Kiosk.",
    date: "STEP 07",
  },
  {
    id: 8,
    icon: <Receipt className="w-6 h-6" />,
    title: "Transaction Record",
    description: "Complete transaction details are securely recorded on Blockchain for audit trail and transparency.",
    date: "STEP 08",
  },
  {
    id: 9,
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Inventory Check",
    description: "Automated system performs real-time quantity verification and expiry date monitoring.",
    date: "STEP 09",
  },
  {
    id: 10,
    icon: <Bot className="w-6 h-6" />,
    title: "AI Restock Trigger",
    description:
      "Artificial Intelligence analyzes inventory levels and automatically triggers restock requests when needed.",
    date: "STEP 10",
  },
  {
    id: 11,
    icon: <Package className="w-6 h-6" />,
    title: "Auto Order",
    description:
      "Warehouse management system receives and processes automated restock orders with priority scheduling.",
    date: "STEP 11",
  },
  {
    id: 12,
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Restock Complete",
    description:
      "Restocking process is fulfilled and all updates are recorded on Blockchain for complete transparency.",
    date: "STEP 12",
  },
  {
    id: 13,
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Cycle Repeats",
    description:
      "The entire supply chain cycle repeats seamlessly, ensuring continuous product availability and optimization.",
    date: "STEP 13",
  },
]

export default function Page() {
  return (
    <>
      <NavbarDemo />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 pt-32 md:pt-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block p-2 bg-[#fc0404]/10 rounded-full mb-6">
              <div className="w-16 h-16 bg-[#fc0404] rounded-full flex items-center justify-center">
                <Package className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Supply Chain Management
              <span className="block text-[#fc0404]">Timeline</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Complete process flow from warehouse to customer with blockchain integration and AI optimization
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central dotted line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5" style={{ height: "calc(100% + 120px)" }}>
              <div className="w-full h-full border-l-2 border-dashed border-gray-400"></div>
            </div>

            {/* Timeline items */}
            <div className="space-y-16 md:space-y-16">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center">
                    {/* Round step label - centered */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-white border-2 border-gray-300 rounded-full px-4 py-2">
                        <span className="text-sm font-bold text-gray-900">{step.date}</span>
                      </div>
                    </div>

                    {/* Left side layout (even index) */}
                    {index % 2 === 0 && (
                      <>
                        {/* Left card */}
                        <div className="w-1/2 pr-24 flex justify-end">
                          <div className="w-full max-w-xs">
                            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                              <div className="flex items-start gap-4">
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#fc0404] transition-colors duration-300">
                                    {step.title}
                                  </h3>
                                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                </div>
                                <div className="flex-shrink-0">
                                  <div className="w-12 h-12 bg-gradient-to-br from-[#fc0404] to-[#e00404] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                                    {step.icon}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Connector line from center to left card */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 z-10">
                          <div className="w-24 h-0.5 border-t-2 border-dashed border-gray-400 transform -translate-x-full"></div>
                        </div>

                        {/* Right empty space */}
                        <div className="w-1/2"></div>
                      </>
                    )}

                    {/* Right side layout (odd index) */}
                    {index % 2 === 1 && (
                      <>
                        {/* Left empty space */}
                        <div className="w-1/2"></div>

                        {/* Connector line from center to right card */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 z-10">
                          <div className="w-24 h-0.5 border-t-2 border-dashed border-gray-400"></div>
                        </div>

                        {/* Right card */}
                        <div className="w-1/2 pl-24 flex justify-start">
                          <div className="w-full max-w-xs">
                            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                  <div className="w-12 h-12 bg-gradient-to-br from-[#fc0404] to-[#e00404] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                                    {step.icon}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#fc0404] transition-colors duration-300">
                                    {step.title}
                                  </h3>
                                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile layout - step label above card */}
                  <div className="md:hidden flex flex-col items-center">
                    {/* Step label positioned above card */}
                    <div className="mb-6 z-20">
                      <div className="bg-white border-2 border-gray-300 rounded-full px-4 py-2 shadow-md">
                        <span className="text-sm font-bold text-gray-900">{step.date}</span>
                      </div>
                    </div>

                    {/* Feature card below step label */}
                    <div className="w-full max-w-sm">
                      <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-xl">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#fc0404] to-[#e00404] rounded-2xl flex items-center justify-center text-white shadow-lg">
                              {step.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final dotted connection line */}
          <div className="flex justify-center mt-8">
            <div className="w-0.5 h-16 border-l-2 border-dashed border-gray-400"></div>
          </div>

          {/* Footer - Process Complete Card */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#fc0404]/20 rounded-3xl p-10 max-w-lg mx-auto shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#fc0404]/20 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#fc0404]/30 rounded-full"></div>

                <div className="w-20 h-20 bg-gradient-to-br from-[#fc0404] to-[#e00404] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#fc0404] transition-colors duration-300">
                  Process Complete
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The supply chain management cycle ensures continuous optimization, transparency, and seamless operations
                  across all touchpoints.
                </p>

                {/* Success indicators */}
                <div className="flex justify-center gap-4 mt-6 flex-wrap">
                  <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-700">Optimized</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-700">Transparent</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium text-purple-700">Automated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#fc0404]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-[#fc0404]" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">13 Steps</h4>
                <p className="text-gray-600">Complete Process Flow</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#fc0404]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-[#fc0404]" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">AI Powered</h4>
                <p className="text-gray-600">Smart Automation</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#fc0404]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link className="w-6 h-6 text-[#fc0404]" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Blockchain</h4>
                <p className="text-gray-600">Full Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

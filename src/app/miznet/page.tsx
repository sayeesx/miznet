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
  Zap,
  Shield,
  Download,
} from "lucide-react"
import { useEffect, useState } from "react"
import PageContainer from "../../components/PageContainer"

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
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Get all step elements
      const stepElements = document.querySelectorAll("[data-step-id]")
      let currentActiveStep = null

      stepElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementBottom = elementTop + rect.height

        // Check if the middle of the viewport intersects with this step
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          currentActiveStep = Number.parseInt(element.getAttribute("data-step-id") || "0")
        }
      })

      setActiveStep(currentActiveStep)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isClient])

  const handleDownload = async () => {
    setIsDownloading(true)

    // Simulate download process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsDownloading(false)

    // Here you would typically trigger the actual download
    console.log("Brochure download started")
  }

  return (
    <PageContainer>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 pt-16">
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
            {/* Central dotted line - hidden behind cards on mobile */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 z-0"
              style={{ height: "calc(100% + 200px)" }}
            >
              <div className="w-full h-full border-l-4 border-dotted border-gray-400 md:border-l-2 md:border-dashed"></div>
            </div>

            {/* Timeline items */}
            <div className="space-y-16 md:space-y-16">
              {steps.map((step, index) => (
                <div key={step.id} className="relative" data-step-id={step.id}>
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
                            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative z-30">
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

                        {/* Connector line from center to left card - Behind cards */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 z-5">
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

                        {/* Connector line from center to right card - Behind cards */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 z-5">
                          <div className="w-24 h-0.5 border-t-2 border-dashed border-gray-400"></div>
                        </div>

                        {/* Right card */}
                        <div className="w-1/2 pl-24 flex justify-start">
                          <div className="w-full max-w-xs">
                            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative z-30">
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

                  {/* Mobile layout - step label attached to card top with scroll-based hover */}
                  <div className="md:hidden flex flex-col items-center">
                    <div className="w-full max-w-sm relative z-10">
                      {/* Step label positioned at the top center of the card - Same as desktop when active */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                        <div className="bg-white border-2 border-gray-300 rounded-full px-4 py-2 shadow-md transition-all duration-300">
                          <span className="text-sm font-bold text-gray-900">{step.date}</span>
                        </div>
                      </div>

                      {/* Feature card with scroll-based hover effect - No border change on mobile */}
                      <div
                        className={`bg-white rounded-3xl p-6 pt-8 transition-all duration-500 relative z-20 ${
                          activeStep === step.id
                            ? "shadow-2xl scale-105"
                            : "border-2 border-gray-200 shadow-md shadow-gray-200/50 hover:shadow-lg hover:shadow-gray-300/50 hover:scale-[1.02]"
                        } group`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3
                              className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                                activeStep === step.id ? "text-[#fc0404]" : "text-gray-900 group-hover:text-[#fc0404]"
                              }`}
                            >
                              {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br from-[#fc0404] to-[#e00404] rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
                                activeStep === step.id
                                  ? "shadow-xl rotate-6 scale-110"
                                  : "group-hover:shadow-xl group-hover:rotate-6"
                              }`}
                            >
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

          {/* Process Complete Section - Modern Professional Design */}
          <div className="mt-20 relative">
            {/* Connecting line that touches the card - Fixed to normal dashed line */}
            <div className="flex justify-center mb-0">
              <div className="w-0.5 h-20 border-l-2 border-dashed border-gray-400"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Main completion card - Light grey shadow */}
              <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-md shadow-gray-200/50 hover:shadow-lg hover:shadow-gray-300/50 transition-all duration-300 md:hover:scale-[1.01] z-10">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>

                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Icon section */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#fc0404] to-[#e00404] rounded-xl flex items-center justify-center shadow-md shadow-gray-300/50 hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-300 hover:rotate-6">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">Process Complete</h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        The supply chain management cycle ensures continuous optimization, transparency, and seamless
                        operations across all touchpoints.
                      </p>
                    </div>

                    {/* Action section - Download Brochure Button */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#fc0404] text-white font-medium rounded-lg hover:bg-[#e00404] transition-all duration-200 hover:scale-105 shadow-md shadow-gray-300/50 hover:shadow-lg hover:shadow-gray-400/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isDownloading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            Download Brochure
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features grid - Light grey shadows */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {/* Feature 1 - Optimized */}
                <div className="group relative bg-white rounded-xl border border-gray-200 p-6 shadow-md shadow-gray-200/50 hover:shadow-lg hover:shadow-gray-300/50 transition-all duration-300 hover:scale-[1.02] hover:border-green-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-700 transition-colors duration-300">
                        13 Steps
                      </h3>
                      <p className="text-sm text-gray-600">Complete Process Flow</p>
                      <div className="mt-3 flex items-center text-xs text-green-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                        Optimized
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 - AI Powered */}
                <div className="group relative bg-white rounded-xl border border-gray-200 p-6 shadow-md shadow-gray-200/50 hover:shadow-lg hover:shadow-gray-300/50 transition-all duration-300 hover:scale-[1.02] hover:border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Bot className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                        AI Powered
                      </h3>
                      <p className="text-sm text-gray-600">Smart Automation</p>
                      <div className="mt-3 flex items-center text-xs text-blue-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                        Intelligent
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 - Blockchain */}
                <div className="group relative bg-white rounded-xl border border-gray-200 p-6 shadow-md shadow-gray-200/50 hover:shadow-lg hover:shadow-gray-300/50 transition-all duration-300 hover:scale-[1.02] hover:border-purple-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">
                        Blockchain
                      </h3>
                      <p className="text-sm text-gray-600">Full Transparency</p>
                      <div className="mt-3 flex items-center text-xs text-purple-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                        Secure
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

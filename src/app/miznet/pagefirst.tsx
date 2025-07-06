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

export default function SupplyChainTimeline() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Supply Chain Management Timeline</h1>
          <p className="text-lg text-gray-600">Complete process flow from warehouse to customer</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central dashed line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
            <div className="w-full h-full border-l-2 border-dashed border-gray-400"></div>
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Date label */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="bg-white px-4 py-1">
                    <span className="text-sm font-bold text-gray-900">{step.date}</span>
                  </div>
                </div>

                {/* Timeline item */}
                <div
                  className={`flex ${
                    // On mobile (sm and below): always center
                    // On desktop (md and above): alternate left/right
                    index % 2 === 0 ? "justify-center md:justify-start" : "justify-center md:justify-end"
                  } mt-8`}
                >
                  <div
                    className={`w-full max-w-md ${
                      // On mobile: no padding
                      // On desktop: add padding based on side
                      index % 2 === 0 ? "px-4 md:px-0 md:pr-8" : "px-4 md:px-0 md:pl-8"
                    }`}
                  >
                    <div className="bg-white border-2 border-gray-900 rounded-3xl p-6 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#fc0404] rounded-full flex items-center justify-center text-white">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connector line to center - hidden on mobile */}
                    <div
                      className={`hidden md:block relative ${index % 2 === 0 ? "ml-auto" : "mr-auto"} w-8 h-0.5 mt-6`}
                    >
                      <div className="w-full h-full border-t-2 border-dashed border-gray-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="bg-white border-2 border-gray-900 rounded-3xl p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-[#fc0404] rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Process Complete</h3>
            <p className="text-gray-600">
              The supply chain management cycle ensures continuous optimization and transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

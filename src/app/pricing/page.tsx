"use client"

import PageContainer from "../../components/PageContainer";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const router = useRouter();

  return (
    <PageContainer>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Custom Pricing for Your Business
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We offer tailored solutions based on your business needs. Our pricing is customized to match your organization&apos;s scale, requirements, and goals.
        </p>
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mb-8 w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Custom Pricing?</h2>
          <ul className="text-left space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-[#fc0404] mr-2">•</span>
              <span>Every retail operation is unique with different scales and needs</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#fc0404] mr-2">•</span>
              <span>We adapt our solution to your existing infrastructure</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#fc0404] mr-2">•</span>
              <span>Flexible pricing based on your deployment scope</span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => router.push('/contact')}
          className="bg-[#fc0404] hover:bg-[#dc0404] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Book a Demo
        </button>
      </div>
    </PageContainer>
  );
}
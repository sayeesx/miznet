"use client"

export default function ChatbotButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onClick}
        className="group relative flex items-center justify-center w-[45px] h-[45px] rounded-full backdrop-blur-md bg-[#F9FAFB]/90 text-[#111827] font-semibold hover:w-[125px] hover:rounded-[40px] focus:ring-2 focus:ring-[#fc0404] focus:outline-none transition-all duration-300 shadow-sm active:translate-x-[2px] active:translate-y-[2px] overflow-hidden"
        aria-label="Open Chatbot"
      >
        {/* Icon container */}
        <div className="flex items-center justify-center transition-all duration-300 group-hover:absolute group-hover:left-0 group-hover:w-[30%] group-hover:pl-5 group-hover:h-full">
          <svg className="w-5 h-5 text-[#fc0404]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </div>

        {/* Text container */}
        <div className="absolute right-0 top-0 w-0 h-full opacity-0 text-[#111827] text-lg font-semibold transition-all duration-300 group-hover:opacity-100 group-hover:w-[70%] flex items-center justify-center group-hover:pr-[10px]">
          Chat
        </div>
      </button>
    </div>
  )
}

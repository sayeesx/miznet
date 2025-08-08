"use client"

export default function ChatbotButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-2">
      <div className="bg-white border border-[#fc0404] text-[#fc0404] px-2.5 py-1.5 rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-300 opacity-0 group-hover:opacity-100 text-xs font-medium whitespace-nowrap relative scale-90 origin-right">
        Chat with us
        <div className="absolute top-1/2 -right-[5px] transform -translate-y-1/2 w-[5px] h-[5px] bg-white border-r border-t border-[#fc0404] rotate-45"></div>
      </div>
      <button
        onClick={onClick}
        className="relative w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#fc0404] to-[#fc0404]/80 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Open Chatbot"
      >
        {/* Modern Chatbot Icon */}
        <svg 
          className="w-6 h-6 text-white transform transition-transform duration-700 group-hover:animate-[jello_0.9s_both]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h.01" />
          <path d="M12 9h.01" />
          <path d="M16 9h.01" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes jello {
          0% { transform: scale3d(1, 1, 1); }
          30% { transform: scale3d(0.75, 1.25, 1); }
          40% { transform: scale3d(1.25, 0.75, 1); }
          50% { transform: scale3d(0.85, 1.15, 1); }
          65% { transform: scale3d(1.05, 0.95, 1); }
          75% { transform: scale3d(0.95, 1.05, 1); }
          100% { transform: scale3d(1, 1, 1); }
        }
      `}</style>
    </div>
  )
}

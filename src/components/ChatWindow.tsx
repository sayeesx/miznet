import React from "react";

export default function ChatWindow({ onClose }: { onClose?: () => void }) {
  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white border border-[#ffb366] rounded-2xl flex flex-col overflow-hidden animate-fade-in">
      <div className="flex items-center justify-between px-4 py-3 bg-[#ff7300] text-white font-bold">
        <span>Chat with Miznet AI</span>
        <button onClick={onClose} className="text-white hover:text-[#ffd6b3] text-xl font-bold focus:outline-none">×</button>
      </div>
      <div className="flex-1 px-4 py-3 text-gray-600 text-sm bg-[#F9FAFB]">
        <div className="mb-2">👋 Hi! How can I help you today?</div>
        <div className="mb-2 text-right text-[#111827] font-semibold">(Type your message...)</div>
      </div>
      <div className="px-4 py-3 bg-white border-t border-[#ffb366] flex items-center gap-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded-full border border-gray-200 focus:ring-2 focus:ring-[#ffb366] outline-none text-sm"
          placeholder="Type a message..."
          disabled
        />
        <button className="px-4 py-2 rounded-full bg-[#ff7300] text-white font-bold text-sm cursor-not-allowed opacity-60">Send</button>
      </div>
    </div>
  );
}

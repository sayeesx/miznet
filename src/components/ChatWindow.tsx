import React, { useState, useRef, useEffect } from "react";

export default function ChatWindow({ onClose }: { onClose?: () => void }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input },
      { from: "bot", text: "This is a demo. How can I help you?" },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div
      className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] rounded-2xl flex flex-col overflow-hidden shadow-xl font-[Manrope,sans-serif] border border-white/30"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.55) 60%, rgba(240,240,255,0.35) 100%)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 bg-[#fc0404]/90 text-white font-extrabold text-base">
        <span>Chat with Miznet AI</span>
        <button onClick={onClose} className="text-white hover:text-[#ffd6b3] text-xl font-extrabold focus:outline-none">×</button>
      </div>
      <div className="flex-1 px-4 py-3 text-[#111827] text-sm bg-transparent overflow-y-auto" style={{ maxHeight: 320 }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              msg.from === "user"
                ? "mb-2 text-right text-[#fc0404] font-semibold"
                : "mb-2 text-left text-[#111827]"
            }
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="px-4 py-3 border-t border-white/30 flex items-center gap-2" style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 60%, rgba(240,240,255,0.45) 100%)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)'
      }}>
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded-full border border-gray-200 focus:ring-2 focus:ring-[#ffb366] outline-none text-sm bg-white/60 text-[#111827] font-medium placeholder:text-[#888] backdrop-blur-md"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        />
        <button
          className="px-4 py-2 rounded-full bg-[#fc0404] text-white font-extrabold text-sm disabled:cursor-not-allowed disabled:opacity-60"
          onClick={handleSend}
          disabled={!input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

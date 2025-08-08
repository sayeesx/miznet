import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import Loader from './ui/Loader';

type Message = {
  from: "bot" | "user";
  text: string;
};

export default function ChatWindow({ onClose }: { onClose?: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const simulateTyping = async () => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);
    return "Chatbot server is experiencing heavy traffic, please contact us";
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    setShowPlaceholder(false);
    const userMessage = input;
    setInput("");
    setIsSending(true);
    setMessages(msgs => [...msgs, { from: "user", text: userMessage }]);
    
    const botResponse = await simulateTyping();
    setMessages(msgs => [
      ...msgs, 
      { 
        from: "bot", 
        text: botResponse
      }
    ]);
    setIsSending(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white rounded-2xl flex flex-col overflow-hidden shadow-xl border border-white/30">
      <div className="flex flex-col h-[400px]">
        <div className="px-4 py-3 border-b bg-[#fc0404]">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">
              Chat with Miznet AI
            </h2>
            <div className="flex items-center gap-2">
              <div className="bg-white text-[#fc0404] text-xs px-2 py-1 rounded-full flex items-center gap-1 border-2 border-white outline outline-[#fc0404] outline-2">
                <span className="w-2 h-2 bg-[#fc0404] rounded-full animate-pulse"></span>
                <span>Offline</span>
              </div>
              <button onClick={onClose} className="text-white hover:text-white/80 focus:outline-none">
                ×
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2 bg-white" id="chatDisplay">
          {showPlaceholder && messages.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <span className="text-gray-400 text-sm animate-pulse">
                Chat with our bot
              </span>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div
                className={`chat-message ${
                  msg.from === "user"
                    ? "self-end bg-[#fc0404] text-white"
                    : "self-start bg-gray-100 text-gray-800"
                } max-w-xs rounded-lg px-3 py-1.5 text-sm animate-fadeIn`}
              >
                {msg.from === "bot" ? (
                  <span>
                    {msg.text.split("contact us").map((part, index, array) => {
                      if (index === array.length - 1) return part;
                      return (
                        <React.Fragment key={index}>
                          {part}
                          <Link href="/contact" className="text-[#fc0404] underline hover:text-[#fc0404]/80">
                            contact us
                          </Link>
                        </React.Fragment>
                      );
                    })}
                  </span>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="self-start bg-gray-100 text-gray-800 max-w-xs rounded-lg px-3 py-1.5 text-sm flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="px-3 py-2 border-t border-gray-100 bg-white">
          <div className="flex gap-2">
            <input
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg bg-white text-gray-800 border-gray-200 text-sm focus:outline-none focus:border-[#fc0404] focus:ring-1 focus:ring-[#fc0404] transition-colors"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              type="text"
            />
            <button
              className="bg-[#fc0404] hover:bg-[#fc0404]/90 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm disabled:opacity-50 disabled:cursor-not-allowed min-w-[70px] flex items-center justify-center"
              onClick={handleSend}
              disabled={!input.trim() || isSending}
            >
              {isSending ? <Loader /> : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const Loader = () => {
  return (
    <div className="relative w-[24px] h-[24px]">
      <div className="loader">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-[8%] h-[24%] bg-white absolute left-[50%] top-[30%] opacity-0 rounded-[50px] shadow-sm"
            style={{
              transform: `rotate(${i * 30}deg) translate(0, -130%)`,
              animationDelay: `${-0.1 * (11 - i)}s`,
              animation: 'fade458 1s linear infinite'
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes fade458 {
          from {
            opacity: 1;
          }
          to {
            opacity: 0.25;
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;

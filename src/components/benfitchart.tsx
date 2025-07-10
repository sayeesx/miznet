import React from 'react';

const BenfitChart = () => {
  return (
    <div className="relative flex w-full max-w-2xl flex-col rounded-2xl bg-white min-h-[24rem] overflow-hidden justify-center items-center px-8 mx-auto sm:px-4 sm:max-w-full" style={{ boxShadow: '0 6px 24px 0 rgba(0,0,0,0.08)' }}>
      {/* Red blurred blob background, fixed to top right */}
      <div className="absolute right-8 top-8 w-[60%] h-[70%] min-w-[120px] min-h-[120px] max-w-[320px] max-h-[320px] rounded-full bg-[#fc0404] opacity-15 blur-3xl pointer-events-none z-0" />
      <div className="relative z-10 w-full">
        <div className="mb-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fc0404]">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-black">Performance Analytics</h3>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>
        <div className="mb-4 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          <div className="rounded-lg bg-gray-100 p-4">
            <p className="text-xs font-medium text-gray-500">Total Views</p>
            <p className="text-lg font-semibold text-black">24.5K</p>
            <span className="text-xs font-medium text-emerald-500">+12.3%</span>
          </div>
          <div className="rounded-lg bg-gray-100 p-4">
            <p className="text-xs font-medium text-gray-500">Conversions</p>
            <p className="text-lg font-semibold text-black">1.2K</p>
            <span className="text-xs font-medium text-emerald-500">+8.1%</span>
          </div>
          <div className="rounded-lg bg-gray-100 p-4 hidden md:block">
            <p className="text-xs font-medium text-gray-500">Bounce Rate</p>
            <p className="text-lg font-semibold text-black">32%</p>
            <span className="text-xs font-medium text-red-500">-2.1%</span>
          </div>
        </div>
        <div className="mb-4 h-24 w-full overflow-hidden rounded-lg bg-gray-100 p-4">
          <div className="flex h-full w-full items-end justify-between gap-2">
            <div className="h-[40%] w-4 rounded-sm bg-[#fc0404]/20">
              <div className="h-[60%] w-full rounded-sm bg-[#fc0404] transition-all duration-300" />
            </div>
            <div className="h-[60%] w-4 rounded-sm bg-[#fc0404]/20">
              <div className="h-[40%] w-full rounded-sm bg-[#fc0404] transition-all duration-300" />
            </div>
            <div className="h-[75%] w-4 rounded-sm bg-[#fc0404]/20">
              <div className="h-[80%] w-full rounded-sm bg-[#fc0404] transition-all duration-300" />
            </div>
            <div className="h-[45%] w-4 rounded-sm bg-[#fc0404]/20">
              <div className="h-[50%] w-full rounded-sm bg-[#fc0404] transition-all duration-300" />
            </div>
            <div className="h-[85%] w-4 rounded-sm bg-[#fc0404]/20">
              <div className="h-[90%] w-full rounded-sm bg-[#fc0404] transition-all duration-300" />
            </div>
            <div className="h-[65%] w-4 rounded-sm bg-[#fc0404]/20">
              <div className="h-[70%] w-full rounded-sm bg-[#fc0404] transition-all duration-300" />
            </div>
            <div className="h-[95%] w-4 rounded-sm bg-[#fc0404]/20">
              <div className="h-[85%] w-full rounded-sm bg-[#fc0404] transition-all duration-300" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500">Last 7 days</span>
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <button className="flex items-center gap-1 rounded-lg bg-[#fc0404] px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#cc0303]">
            View Details
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenfitChart; 
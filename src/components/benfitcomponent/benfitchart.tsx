import React from 'react';

const BenfitChart = () => {
  return (
    <div
      id="benefit-chart"
      className="relative flex w-[95%] md:w-full h-full md:min-h-[390px] flex-col rounded-2xl bg-white overflow-hidden justify-center items-center p-3 md:p-4 mt-6 md:mt-5 mx-auto md:-ml-4"
      style={{ boxShadow: '0 6px 24px 0 rgba(0,0,0,0.08)' }}
    >
      {/* Red blurred blob background */}
      <div className="absolute right-8 top-8 w-[60%] h-[70%] min-w-[120px] min-h-[120px] max-w-[320px] max-h-[320px] rounded-full bg-[#fc0404] opacity-15 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 w-full">
        {/* Top Header */}
        <div className="mb-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fc0404]">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-[1.5rem] md:text-[2.1rem] font-bold text-[#111827] leading-tight relative z-2">Miznet Activity Metrics</h3>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-4 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          <div className="rounded-lg bg-gray-100 p-4">
            <p className="text-xs font-medium text-gray-500">Institutions Onboarded</p>
            <p className="text-lg font-semibold text-black">120+</p>
            <span className="text-xs font-medium text-emerald-500">+5 this week</span>
          </div>
          <div className="rounded-lg bg-gray-100 p-4">
            <p className="text-xs font-medium text-gray-500">AI-Powered Flags</p>
            <p className="text-lg font-semibold text-black">893</p>
            <span className="text-xs font-medium text-emerald-500">+10.4%</span>
          </div>
          <div className="rounded-lg bg-gray-100 p-4 hidden md:block">
            <p className="text-xs font-medium text-gray-500">Avg. Resolution Time</p>
            <p className="text-lg font-semibold text-black">4.2 hrs</p>
            <span className="text-xs font-medium text-emerald-500">↓ 1.3 hrs</span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="mb-4 h-24 w-full overflow-hidden rounded-lg bg-gray-100 p-4">
          <div className="flex h-full w-full items-end justify-between gap-2">
            {[50, 30, 70, 45, 85, 65, 95].map((value, index) => (
              <div key={index} className="h-full w-4 rounded-sm bg-[#fc0404]/20">
                <div
                  className="w-full rounded-sm bg-[#fc0404] transition-all duration-300"
                  style={{ height: `${value}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Legend + Button */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#fc0404]/20"></div>
              <span className="text-xs text-gray-500">Usual Sales</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#fc0404]"></div>
              <span className="text-xs text-gray-500">Sales using Miznet</span>
            </div>
          </div>
          <button className="flex items-center gap-1 rounded-lg bg-[#fc0404] px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#cc0303]">
            View Dashboard
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

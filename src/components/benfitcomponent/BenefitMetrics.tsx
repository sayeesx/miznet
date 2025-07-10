import React from 'react';
import { NumberTicker } from '../ui/NumberTicker';

const BenefitMetrics = () => (
  <div className="w-full flex justify-center mt-16 md:mt-4">
    <div className="grid grid-cols-2 gap-10 sm:gap-12 md:flex md:flex-row md:gap-8 md:justify-center">
      <div className="flex flex-col items-center">
        <div className="text-xs md:text-lg text-gray-700 text-center whitespace-nowrap">
          <NumberTicker value={12} className="font-semibold text-red-600 text-[32px] md:text-[64px]" />% increase in total sales
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xs md:text-lg text-gray-700 text-center whitespace-nowrap">
          <NumberTicker value={25} className="font-semibold text-red-600 text-[32px] md:text-[64px]" />% fewer stockouts
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xs md:text-lg text-gray-700 text-center whitespace-nowrap">
          <NumberTicker value={18} className="font-semibold text-red-600 text-[32px] md:text-[64px]" />% fewer expired items
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xs md:text-lg text-gray-700 text-center whitespace-nowrap">
          <NumberTicker value={40} className="font-semibold text-red-600 text-[32px] md:text-[64px]" />+ hours saved per month
        </div>
      </div>
    </div>
  </div>
);

export default BenefitMetrics; 
import React from 'react';
import { NumberTicker } from '../ui/NumberTicker';
import styled from 'styled-components';

const BenefitMetrics: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('benefit-metrics');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div 
      id="benefit-metrics"
      className={`w-full h-full flex items-center justify-center p-3 md:p-6 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full">
        <StyledCard>
          <div className="card">
            <div className="bg" />
            <div className="blob" />
            <div className="content">
              <div className="font-semibold text-red-600 text-[14px] md:text-2xl lg:text-3xl block">
                <span><NumberTicker value={12} />%</span>
              </div>
              <span className="block text-[10px] md:text-sm mt-1">increase in total sales</span>
            </div>
          </div>
        </StyledCard>

        <StyledCard>
          <div className="card">
            <div className="bg" />
            <div className="blob" />
            <div className="content">
              <div className="font-semibold text-red-600 text-[14px] md:text-2xl lg:text-3xl block">
                <span><NumberTicker value={25} />%</span>
              </div>
              <span className="block text-[10px] md:text-sm mt-1">fewer stockouts</span>
            </div>
          </div>
        </StyledCard>

        <StyledCard>
          <div className="card">
            <div className="bg" />
            <div className="blob" />
            <div className="content">
              <div className="font-semibold text-red-600 text-[14px] md:text-2xl lg:text-3xl block">
                <span><NumberTicker value={18} />%</span>
              </div>
              <span className="block text-[10px] md:text-sm mt-1">fewer expired items</span>
            </div>
          </div>
        </StyledCard>

        <StyledCard>
          <div className="card">
            <div className="bg" />
            <div className="blob" />
            <div className="content">
              <div className="font-semibold text-red-600 text-[14px] md:text-2xl lg:text-3xl block">
                <NumberTicker value={40} />%
              </div>
              <span className="block text-[10px] md:text-sm mt-1">hours saved per month</span>
            </div>
          </div>
        </StyledCard>
      </div>
    </div>
  );
};

const StyledCard = styled.div`
  .card {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    @media (min-width: 768px) {
      aspect-ratio: auto;
      height: 180px;
    }
    border-radius: 10px;
    @media (min-width: 768px) {
      border-radius: 14px;
    }
    z-index: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #ffffff;
    @media (min-width: 768px) {
      box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    }
  }

  .content {
    position: relative;
    z-index: 3;
    text-align: center;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 0.5;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default BenefitMetrics; 
import React from 'react';
import { NumberTicker } from '../ui/NumberTicker';
import styled from 'styled-components';

const BenefitMetrics: React.FC = () => {
  return (
    <div
      id="benefit-metrics"
      className="w-full h-full flex items-center justify-center p-3 md:p-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full">
        {[12, 25, 18, 40].map((value, index) => (
          <StyledCard key={index}>
            <div className="card">
              <div className="bg" />
              <div className="blob" />
              <div className="mini-blob" />
              <div className="content">
                <div className="font-semibold text-red-600 text-[14px] md:text-2xl lg:text-3xl block">
                  <span><NumberTicker value={value} />%</span>
                </div>
                <span className="block text-[10px] md:text-sm mt-1">
                  {index === 0 && 'increase in total sales'}
                  {index === 1 && 'fewer stockouts'}
                  {index === 2 && 'fewer expired items'}
                  {index === 3 && 'hours saved per month'}
                </span>
              </div>
            </div>
          </StyledCard>
        ))}
      </div>
    </div>
  );
};

const StyledCard = styled.div`
  .card {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 10px;
    z-index: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 768px) {
      aspect-ratio: auto;
      height: 180px;
      border-radius: 14px;
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
    background: rgba(255, 255, 255, 0.95);
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
    animation: blobOrbitAndFade 3.5s ease-in-out forwards;
    transform: translate(-50%, -50%) translate(-70px, -70px);
  }

  .mini-blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 0;
    filter: blur(10px);
    transform: translate(-50%, -50%);
    animation: miniBlobAppear 1s ease-in forwards 3s;
  }

  /* Border animation keyframes for mobile */
  @keyframes borderPulse {
    0% {
      box-shadow: none;
    }
    30% {
      box-shadow: 
        10px 10px 30px #bebebe, 
        -10px -10px 30px #ffffff;
    }
    70% {
      box-shadow: 
        10px 10px 30px #bebebe, 
        -10px -10px 30px #ffffff;
    }
    100% {
      box-shadow: none;
    }
  }

  /* Border animation keyframes for desktop */
  @keyframes borderPulseLarge {
    0% {
      box-shadow: none;
    }
    30% {
      box-shadow: 
        20px 20px 60px #bebebe, 
        -20px -20px 60px #ffffff;
    }
    70% {
      box-shadow: 
        20px 20px 60px #bebebe, 
        -20px -20px 60px #ffffff;
    }
    100% {
      box-shadow: none;
    }
  }

  /* Blob animation keyframes */
  @keyframes blobOrbitAndFade {
    0% {
      transform: translate(-50%, -50%) translate(-70px, -70px);
      opacity: 0.5;
    }
    20% {
      transform: translate(-50%, -50%) translate(70px, -70px);
      opacity: 0.5;
    }
    40% {
      transform: translate(-50%, -50%) translate(70px, 70px);
      opacity: 0.5;
    }
    60% {
      transform: translate(-50%, -50%) translate(-70px, 70px);
      opacity: 0.4;
    }
    80% {
      transform: translate(-50%, -50%) translate(-70px, -70px);
      opacity: 0.3;
    }
    100% {
      transform: translate(-50%, -50%) translate(-70px, -70px);
      opacity: 0;
    }
  }

  @keyframes miniBlobAppear {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.5);
    }
    100% {
      opacity: 0.35;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes miniBlobPulse {
    0% {
      opacity: 0.35;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.25;
      transform: translate(-50%, -50%) scale(1.1);
    }
    100% {
      opacity: 0.35;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export default BenefitMetrics;

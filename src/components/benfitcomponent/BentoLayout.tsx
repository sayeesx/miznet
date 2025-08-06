import React from 'react';
import styled from 'styled-components';
import BenefitsSection from './BenefitsSection';
import BenfitChart from './benfitchart';
import BenefitMetrics from './BenefitMetrics';

const BentoLayout: React.FC = () => {
  return (
    <BentoWrapper>
      <div className="bento-grid">
        <div className="bento-item benefits">
          <BenefitsSection />
        </div>
        <div className="bento-item chart">
          <BenfitChart />
        </div>
        <div className="bento-item metrics">
          <BenefitMetrics />
        </div>
      </div>
    </BentoWrapper>
  );
};

const BentoWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 2rem;
    width: 100%;
  }

  .bento-item {
    background: #ffffff;
    border-radius: 24px;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }
  }

  .benefits {
    grid-column: 1 / -1;
    grid-row: 1;
  }

  .chart {
    grid-column: 1;
    grid-row: 2;
  }

  .metrics {
    grid-column: 2;
    grid-row: 2;
  }

  @media (max-width: 1200px) {
    padding: 1.5rem;
    
    .bento-grid {
      gap: 1.5rem;
    }
  }

  @media (max-width: 900px) {
    padding: 1rem;
    
    .bento-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .benefits {
      grid-column: 1;
      grid-row: 1;
    }

    .chart {
      grid-column: 1;
      grid-row: 2;
    }

    .metrics {
      grid-column: 1;
      grid-row: 3;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    
    .bento-grid {
      gap: 0.75rem;
    }

    .bento-item {
      border-radius: 16px;
    }
  }
`;

export default BentoLayout;

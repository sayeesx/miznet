import React from 'react';
import styled from 'styled-components';
import AnimatedButton from '../AnimatedButton';

interface Benefit {
  title: string;
  description: string;
}

const ArrowIcon = (
  <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7L15 10L12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BenefitsSection: React.FC = () => {
  const benefits: Benefit[] = [
    {
      title: "Reduce operational cost",
      description: "Cut expenses with automated inventory management"
    },
    {
      title: "Prevent stockouts and overstock",
      description: "AI-driven demand forecasting prevents waste"
    },
    {
      title: "Save hours of manual labor",
      description: "Automate routine inventory tasks completely"
    },
    {
      title: "Comply with traceability laws",
      description: "Blockchain ensures regulatory compliance"
    },
    {
      title: "Real-time insights for decision-making",
      description: "Get actionable data when you need it most"
    }
  ];

  return (
    <StyledWrapper id="benefits-section">
      <div className="card">
        <div
          className="blob"
          style={{
            left: '10%',
            top: '10%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="card-content">
          <div className="card-text">
            <span className="card_title">Key Benefits</span>
            <p className="card_paragraph">Transform your business with our smart inventory solutions.</p>
            <AnimatedButton href="/contact" icon={ArrowIcon} small={true}>Get Started Today</AnimatedButton>
          </div>
          <div className="card-list-button">
            <ul className="card__list">
              {benefits.map((benefit, index) => (
                <li key={index} className="card__list_item">
                  <span className="check">
                    <svg className="check_svg" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fillRule="evenodd" />
                    </svg>
                  </span>
                  <div className="list_content">
                    <span className="list_title">{benefit.title}</span>
                    <span className="list_description">{benefit.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: stretch;
  min-height: auto;
  overflow: visible;
  width: 100%;
  margin: 0;

  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 15%);
    --paragraph: hsl(0, 0%, 60%);
    --line: hsl(0, 0%, 90%);
    --primary: #fc0404;
    --primary-light: #ff4444;
    --primary-dark: #cc0303;

    position: relative;
    z-index: 1;
    margin-right: 4rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding: 0;
    width: 100%;
    max-width: 56rem;
    min-height: 24rem;
    background-color: var(--white);
    border-radius: 28px;
    /* Subtle shadow */
    box-shadow: 0 6px 24px 0 rgba(0,0,0,0.08);
  }

  .blob {
    position: absolute;
    z-index: 0;
    width: 60%;
    height: 70%;
    min-width: 200px;
    min-height: 200px;
    max-width: 420px;
    max-height: 420px;
    border-radius: 50%;
    background-color: #fc0404;
    opacity: 0.15;
    filter: blur(48px);
    transition: left 0.7s cubic-bezier(0.4,0,0.2,1), top 0.7s cubic-bezier(0.4,0,0.2,1);
    pointer-events: none;
  }

  .card-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 3rem 3.5rem 2.5rem 3.5rem;
    gap: 2.5rem;
  }

  .card-text {
    flex: 1 1 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.2rem;
    min-width: 220px;
    max-width: 340px;
  }

  .card_title {
    font-size: clamp(1.5rem, 4vw, 2.1rem);
    font-weight: 700;
    color: var(--black);
    margin-bottom: 0.5rem;
    z-index: 2;
    position: relative;
  }

  .card_paragraph {
    margin-top: 0.25rem;
    width: 100%;
    font-size: 1.1rem;
    line-height: 1.5;
    color: var(--paragraph);
    z-index: 2;
    position: relative;
  }

  .card-list-button {
    flex: 1 1 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.2rem;
    min-width: 260px;
  }

  .card__list {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    z-index: 2;
    position: relative;
    margin-bottom: 0.7rem;
  }

  .card__list_item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--primary);
    border-radius: 50%;
    margin-top: 0.125rem;
  }

  .check_svg {
    width: 1rem;
    height: 1rem;
    fill: var(--white);
  }

  .list_content {
    display: flex;
    flex-direction: column;
    gap: 0.18rem;
  }

  .list_title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--black);
    line-height: 1.3;
  }

  .list_description {
    font-size: 0.89rem;
    color: var(--paragraph);
    line-height: 1.4;
  }

  .card-list-button > a {
    margin-top: 0.2rem;
    align-self: flex-start;
  }

  @media (max-width: 900px) {
    .card-content {
      flex-direction: column;
      padding: 2rem 1.2rem 1.5rem 1.2rem;
      gap: 1.5rem;
    }
    .card-text, .card-list-button {
      min-width: 0;
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    .card {
      max-width: 100%;
      min-height: unset;
      padding: 0;
      border-radius: 16px;
      margin: 0;
    }
    .card-content {
      flex-direction: column;
      padding: 1.2rem;
      gap: 1.1rem;
    }
    .card-text, .card-list-button {
      min-width: 0;
      max-width: 100%;
    }
    .blob {
      min-width: 120px;
      min-height: 120px;
      max-width: 180px;
      max-height: 180px;
    }
  }
  .arrow-icon {
    color: #fc0404;
    transition: color 0.2s;
  }
  .card-list-button > a:hover .arrow-icon,
  .card-list-button > a:active .arrow-icon {
    color: #fff;
  }
`;

export default BenefitsSection;
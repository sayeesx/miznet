import React from 'react';
import styled from 'styled-components';

interface SparkleButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const SparkleButton: React.FC<SparkleButtonProps> = ({ text = "See How Miznet Works", onClick, href, className }) => {
  const ButtonElement = href ? 'a' : 'button';
  
  return (
    <StyledWrapper className={className}>
      <ButtonElement className="btn" onClick={onClick} href={href}>
        <svg height={24} width={24} fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
        </svg>
        <span className="text">{text}</span>
      </ButtonElement>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    border: 2px solid #fc0404;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: #FFFFFF;
    cursor: pointer;
    transition: all 450ms ease-in-out;
    text-decoration: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    position: relative;
    isolation: isolate;
  }

  .sparkle {
    fill: #fc0404;
    transition: all 800ms ease;
    opacity: 0.9;
    width: 20px;
    height: 20px;
  }

  .text {
    font-weight: 600;
    color: #fc0404;
    font-size: 0.875rem;
    opacity: 0.9;
  }

  .btn::after {
    content: '';
    position: absolute;
    z-index: -1;
    background: #fc0404;
    inset: -1px;
    border-radius: inherit;
    opacity: 0;
    transition: all 450ms ease-in-out;
  }

  .btn:hover {
    background: #fc0404;
    border-color: #fc0404;
    transform: translateY(-2px);
  }

  .btn:hover::after {
    opacity: 1;
    filter: blur(24px);
  }

  .btn:hover .text {
    color: white;
    opacity: 1;
  }

  .btn:hover .sparkle {
    fill: white;
    transform: scale(1.2);
    opacity: 1;
  }
`;

export default SparkleButton;

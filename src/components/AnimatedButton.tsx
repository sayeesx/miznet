import React from 'react';
import styled from 'styled-components';

const AnimatedButton = ({ href, children, small = false, icon }: { href: string; children?: React.ReactNode; small?: boolean; icon?: React.ReactNode }) => {
  return (
    <StyledWrapper>
      <GlassButton href={href} $small={small}>
        {icon ? React.cloneElement(icon as React.ReactElement, { style: { color: 'inherit' } }) : (
          <SparkleIcon $small={small}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
              stroke="#fc0404"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </SparkleIcon>
        )}
        <ButtonText>{children || 'Explore'}</ButtonText>
      </GlassButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: inline-block;
`;

const GlassButton = styled.a<{ $small?: boolean }>`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: relative;
  padding: ${({ $small }) => ($small ? '7px 16px' : '12px 24px')};
  display: inline-flex;
  align-items: center;
  font-size: ${({ $small }) => ($small ? '14px' : '16px')};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid rgba(252, 4, 4, 0.3);
  border-radius: ${({ $small }) => ($small ? '8px' : '12px')};
  outline: none;
  overflow: hidden;
  color: #fc0404;
  transition: all 0.3s ease;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), 
              0 8px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #fc0404;
    color: #fff;
    box-shadow: 0 8px 30px rgba(0,0,0,0.18), 0 12px 20px rgba(0,0,0,0.12);
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(252, 4, 4, 0.05),
      transparent
    );
    transition: all 0.5s ease;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const SparkleIcon = styled.svg<{ $small?: boolean }>`
  width: ${({ $small }) => ($small ? '15px' : '18px')};
  height: ${({ $small }) => ($small ? '15px' : '18px')};
  margin-bottom: 2px; /* shift icon up */
  transition: transform 0.3s ease, filter 0.3s, fill 0.3s;

  ${GlassButton}:hover & {
    transform: rotate(180deg) scale(1.2) translateY(-2px);
    filter: drop-shadow(0 0 4px rgba(0,0,0,0.25));
  }

  ${GlassButton}:hover & path {
    stroke: #fff;
  }

  @media (max-width: 600px) {
    width: ${({ $small }) => ($small ? '12px' : '15px')};
    height: ${({ $small }) => ($small ? '12px' : '15px')};
  }
`;

const ButtonText = styled.span`
  margin-left: 12px;
  transition: text-shadow 0.3s ease, color 0.3s;

  ${GlassButton}:hover & {
    text-shadow: 0 0 8px rgba(0,0,0,0.18);
    color: #fff;
  }
`;

export default AnimatedButton;
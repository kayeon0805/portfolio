import styled, { keyframes } from 'styled-components'
import Section from '../common/Section'

export const StyledSection = styled(Section)`
  flex-direction: column;
`

export const List = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;

  a,
  button {
    width: 80px;
    height: 80px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 50px;
      height: 50px;
    }
  }

  button {
    position: relative;
    background-color: transparent;
    border: none;

    img {
      opacity: 0;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 10px;
      right: -5px;
      transition: opacity 0.2s ease-in-out;
    }

    @media (hover: hover) {
      &:hover {
        img {
          opacity: 0.99;
        }
      }
    }
  }
`

const fadeInOut = keyframes`
  0%, 100% { opacity: 0; }
  10%, 90% { opacity: 1; }
`

export const CopyStatusMessage = styled.p<{ success: boolean }>`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%, 100%);
  color: ${(props) => (props.success ? '#00cf00' : '#ff4747')};
  font-size: 16px;
  font-weight: 500;
  animation: ${fadeInOut} 2s forwards;
`

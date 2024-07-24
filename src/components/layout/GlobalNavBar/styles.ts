import styled from 'styled-components'

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: var(--nav-width);
  height: 100dvh;
  min-height: 500px;
  overflow-y: auto;
  background-color: var(--primary-card-bg-color);
  z-index: 1;
  padding: 30px 0;
  border-right: 1px solid #15181c;
  transition:
    background 0.3s ease-in-out,
    border 0.3s ease-in-out;

  .light & {
    background: var(--secondary-card-bg-color);
    border-right: 1px solid #d0d0d0;
  }
`

export const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  width: 100%;
  height: 40px;

  img {
    width: 30px;
    height: 30px;
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;

  li {
    width: 100%;
    height: 40px;
    &.active svg path {
      fill: #ffb929;
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

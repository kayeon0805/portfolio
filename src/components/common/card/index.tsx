import styled from 'styled-components'

const Card = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 30px;
  background-color: var(--primary-card-bg-color);
  transition: background 0.3s ease-in-out;

  .light & {
    background-color: var(--secondary-card-bg-color);
  }

  ${({ theme }) => theme.media('tablet')`
      padding: 20px;
    `};
`

export default Card

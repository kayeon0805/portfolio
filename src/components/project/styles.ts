import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;

  ${({ theme }) => theme.media('desktop')`
    width: 90%;
  `};
`

export const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

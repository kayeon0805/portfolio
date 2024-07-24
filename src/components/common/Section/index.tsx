import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  ${({ theme }) => theme.media('mobile')`
			height: 100%;
		`}
`

export default Section

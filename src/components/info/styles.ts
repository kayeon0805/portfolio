import styled from 'styled-components'
import Card from '../common/card'
import { H1, H3, H5 } from '../common/typography'
import Section from '../common/section'

export const StyledSection = styled(Section)`
  ${({ theme }) => theme.media('mobile')`
			padding: 50px 0;
		`}
`

export const ProfileCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;

  & > div {
    width: 300px;
    height: 300px;
  }
`

export const Grid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  column-gap: 40px;

  ${H1} {
    grid-column: 2/3;
    padding-left: 10px;
    margin-bottom: 8px;

    ${({ theme }) => theme.media('tablet')`
      grid-row: 1;
      grid-column: 1;
      margin-bottom: 0;
      font-size: 24px;
    `};
  }

  ${({ theme }) => theme.media('desktop')`
    width: 90%;
    column-gap: 30px;
  `};

  ${({ theme }) => theme.media('tablet')`
      grid-template-columns: auto;
      column-gap: 0;
      row-gap: 20px;
    `};
`

export const Ul = styled.ul`
  list-style-type: none;

  p {
    line-height: 160%;
    margin: 0;
    font-size: 16px;

    & > ${H5} {
      font-style: italic;
      margin-left: 10px;
      margin-bottom: 4px;
    }

    ${({ theme }) => theme.media('desktop')`
      font-size: 14px;
    `};
  }
`

export const ListTitle = styled(H3).attrs({
  fontWeight: 600,
  marginBottom: 4,
})`
  ${({ theme }) => theme.media('desktop')`
      font-size: 20px;
    `};
`

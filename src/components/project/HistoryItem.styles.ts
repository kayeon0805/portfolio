import styled from 'styled-components'
import { H3 } from '../common/Typography'
import Section from '../common/Section'

export const CardFlexContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  gap: 30px;
  white-space: pre-wrap;

  .image-card {
    aspect-ratio: 16/9;
  }

  img {
    object-fit: contain;
    border-radius: 12px;
  }

  ${({ theme }) => theme.media('tablet')`
      flex-direction: column;
      gap: 20px;
    `};
`

export const HistoryListTitle = styled(H3).attrs({
  fontWeight: 600,
  marginBottom: 14,
})``

export const HistoryList = styled.ul`
  li {
    margin-left: 10px;
    line-height: 1.8;

    &::marker {
      content: '- ';
    }

    ${({ theme }) => theme.media('desktop')`
      font-size: 14px;
    `};
  }
`

export const ListItem = styled(Section).attrs({
  as: 'li',
})`
  flex-direction: column;
  align-items: start;
`

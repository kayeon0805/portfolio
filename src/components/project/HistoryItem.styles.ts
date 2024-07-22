import styled from 'styled-components'
import { H4 } from '../common/Typography'

export const CardFlexContainer = styled.div`
  display: flex;
  margin-top: 12px;
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

export const HistoryListTitle = styled(H4).attrs({
  fontWeight: 600,
  marginBottom: 8,
})``

export const HistoryList = styled.ul`
  li {
    margin-left: 10px;
    line-height: 1.5;

    &::marker {
      content: '- ';
    }

    ${({ theme }) => theme.media('desktop')`
      font-size: 14px;
    `};
  }
`

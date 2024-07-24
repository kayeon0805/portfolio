import styled from 'styled-components'

interface TypographyProps {
  color?: string
  fontSize?: string
  fontWeight?: number
  marginTop?: number
  marginBottom?: number
}

const Base = styled.h1<TypographyProps>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
`

export const H1 = styled(Base).attrs({ as: 'h1' })`
  font-size: 2em;
`

export const H2 = styled(Base).attrs({ as: 'h2' })`
  font-size: 1.75em;
`

export const H3 = styled(Base).attrs({ as: 'h3' })`
  font-size: 1.5em;
`

export const H4 = styled(Base).attrs({ as: 'h4' })`
  font-size: 1.25em;
`

export const H5 = styled(Base).attrs({ as: 'h5' })`
  font-size: 1em;
`

export const H6 = styled(Base).attrs({ as: 'h6' })`
  font-size: 0.75em;
`

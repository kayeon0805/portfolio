import { css } from 'styled-components'

export const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
} as const

export type Breakpoints = keyof typeof breakpoints

export const media = (breakpoint: Breakpoints) => (styles: TemplateStringsArray) => css`
  @media (max-width: ${breakpoints[breakpoint]}px) {
    ${css(styles)}
  }
`

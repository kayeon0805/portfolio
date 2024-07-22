import styled from 'styled-components'
import Section from '../common/Section'
import { Canvas } from '@react-three/fiber'

export const StyledSection = styled(Section)`
  background: #121212;
  width: 100%;
`

export const StyledCanvas = styled(Canvas)`
  height: 100%;
  aspect-ratio: 1 / 1;
`

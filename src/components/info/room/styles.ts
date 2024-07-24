import styled from 'styled-components'
import Section from '../../common/section'
import { Canvas } from '@react-three/fiber'

export const StyledSection = styled(Section)`
  position: relative;
  background: #2c2c2c;
  width: 100%;
  transition: background 0.3s ease-in-out;

  .light & {
    background: #c6c6c6;
  }
`

export const StyledCanvas = styled(Canvas)`
  height: 100%;
  aspect-ratio: 1 / 1;
`

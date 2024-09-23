'use client'

import { useEffect, useState } from 'react'
import { Breakpoints, breakpoints } from '../../styles/theme/breakpoints'

const checkBreakpoint = (width: number): Breakpoints => {
  return (Object.keys(breakpoints) as Breakpoints[]).reverse().reduce((acc, key) => {
    if (width <= breakpoints[key]) {
      return key
    }
    return acc
  }, 'desktop')
}

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoints>('desktop')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setBreakpoint(checkBreakpoint(window.innerWidth))
      }

      setBreakpoint(checkBreakpoint(window.innerWidth))

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return breakpoint
}

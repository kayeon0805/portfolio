'use client'

import { useEffect } from 'react'
import GlobalNavBar from '../components/layout/GlobalNavBar'
import useActiveSection from '../hooks/common/useActiveSection'
import useBreakpoint from '../hooks/common/useBreakpoint'
import { NAV_MENUS } from '../components/layout/GlobalNavBar/constants'

export default function ContainerWithNavBar({ children }: { children: React.ReactNode }) {
  const breakpoint = useBreakpoint()
  const { setRef, activeId, elementsMap } = useActiveSection({
    threshold: 0.1,
  })

  const handleClickNav = (sectionId: string) => {
    const element = elementsMap.current.get(sectionId)
    if (element) {
      element.scrollIntoView({ block: 'start' })
    }
  }

  useEffect(() => {
    Object.values(NAV_MENUS).forEach((menu) => {
      const el = document.getElementById(menu)
      if (el) setRef(el)
    })
  }, [NAV_MENUS])

  return (
    <>
      {breakpoint === 'desktop' && <GlobalNavBar activeId={activeId} handleClickNav={handleClickNav} />}
      {children}
    </>
  )
}

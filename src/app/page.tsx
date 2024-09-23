'use client'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import Contact from '../components/contact'
import Info from '../components/info'
import GlobalNavBar from '../components/layout/GlobalNavBar'
import Project from '../components/project'
import useActiveSection from '../hooks/common/useActiveSection'
import useBreakpoint from '../hooks/common/useBreakpoint'
import { ThemeProvider } from '../providers/ThemeProvider'
import { theme } from '../styles/theme/theme'
import GlobalStyle from '../styles/global/GlobalStyles'

export default function App() {
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

  const assignRef = (el: HTMLElement | null) => {
    if (el) setRef(el)
  }

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeProvider>
        {breakpoint === 'desktop' && <GlobalNavBar activeId={activeId} handleClickNav={handleClickNav} />}
        <main>
          <div id="info" ref={assignRef}>
            <Info />
          </div>
          <div id="project" ref={assignRef}>
            <Project />
          </div>
          <div id="contact" ref={assignRef}>
            <Contact />
          </div>
        </main>
      </ThemeProvider>
    </StyledThemeProvider>
  )
}

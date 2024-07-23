import Project from './components/project'
import Info from './components/info'
import GlobalNavBar from './components/layout/GlobalNavBar'
import useBreakpoint from './hooks/common/useBreakpoint'
import Room from './components/room/index'
import Contact from './components/contact'
import useActiveSection from './hooks/common/useActiveSection'

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

  return (
    <>
      {breakpoint === 'desktop' && <GlobalNavBar activeId={activeId} handleClickNav={handleClickNav} />}
      <main>
        <div id="info" ref={(el) => el && setRef(el)}>
          <Info />
        </div>
        <div id="room" ref={(el) => el && setRef(el)}>
          <Room />
        </div>
        <div id="project" ref={(el) => el && setRef(el)}>
          <Project />
        </div>
        <div id="contact" ref={(el) => el && setRef(el)}>
          <Contact />
        </div>
      </main>
    </>
  )
}

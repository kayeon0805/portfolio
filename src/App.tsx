import Project from './components/project'
import Info from './components/info'
import GlobalNavBar from './components/layout/GlobalNavBar'
import useBreakpoint from './hooks/common/useBreakpoint'
import Room from './components/room/index'
import Contact from './components/contact'

export default function App() {
  const breakpoint = useBreakpoint()
  return (
    <>
      {breakpoint === 'desktop' && <GlobalNavBar />}
      <main>
        <Info />
        <Room />
        <Project />
        <Contact />
      </main>
    </>
  )
}

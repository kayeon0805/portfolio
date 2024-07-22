import Project from './components/project'
import Info from './components/info'
import GlobalNavBar from './components/layout/GlobalNavBar'
import useBreakpoint from './hooks/common/useBreakpoint'

export default function App() {
  const breakpoint = useBreakpoint()
  return (
    <>
      {breakpoint === 'desktop' && <GlobalNavBar />}
      <main>
        <Info />
        <Project />
      </main>
    </>
  )
}

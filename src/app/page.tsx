import Contact from '../components/contact'
import Info from '../components/info'
import Project from '../components/project'
import ContainerWithNavBar from './ContainerWithNavBar'

export default function App() {
  return (
    <ContainerWithNavBar>
      <main>
        <Info />
        <Project />
        <Contact />
      </main>
    </ContainerWithNavBar>
  )
}

import ThemeToggleButton from './ThemeToggleButton'
import { Button, NavBar, NavList } from './styles'
import { ReactComponent as InfoIcon } from '../../../assets/images/icon_info.svg'
import { ReactComponent as RoomIcon } from '../../../assets/images/icon_home.svg'
import { ReactComponent as ProjectIcon } from '../../../assets/images/icon_project.svg'
import { ReactComponent as ContactIcon } from '../../../assets/images/icon_question.svg'

type Props = {
  activeId: string
  handleClickNav: (sectionId: string) => void
}

export default function GlobalNavBar({ activeId, handleClickNav }: Props) {
  return (
    <NavBar>
      <Button onClick={() => handleClickNav('info')}>
        <img src="/images/logo.svg" alt="logo" />
      </Button>
      <NavList>
        {['info', 'room', 'project', 'contact'].map((sectionId) => (
          <li key={sectionId} onClick={() => handleClickNav(sectionId)} className={activeId === sectionId ? 'active' : ''}>
            <Button>{getSectionIcon(sectionId)}</Button>
          </li>
        ))}
      </NavList>
      <ThemeToggleButton />
    </NavBar>
  )
}

const getSectionIcon = (section: string) => {
  switch (section) {
    case 'info':
    default:
      return <InfoIcon />
    case 'room':
      return <RoomIcon />
    case 'project':
      return <ProjectIcon />
    case 'contact':
      return <ContactIcon />
  }
}

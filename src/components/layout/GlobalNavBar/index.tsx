import ThemeToggleButton from './ThemeToggleButton'
import { Button, NavBar, NavList } from './styles'

export default function GlobalNavBar() {
  return (
    <NavBar>
      <Button>
        <img src="/image/logo.svg" alt="logo" />
      </Button>
      <NavList>
        <li>
          <Button>
            <img src="/image/icon_info.svg" alt="info" />
          </Button>
        </li>
        <li>
          <Button>
            <img src="/image/icon_home.svg" alt="showcase" />
          </Button>
        </li>
        <li>
          <Button>
            <img src="/image/icon_project.svg" alt="project" />
          </Button>
        </li>
        <li>
          <Button>
            <img src="/image/icon_question.svg" alt="contact" />
          </Button>
        </li>
      </NavList>
      <ThemeToggleButton />
    </NavBar>
  )
}

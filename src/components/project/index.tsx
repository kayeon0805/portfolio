import { NAV_MENUS } from '../layout/GlobalNavBar/constants'
import HistoryItem from './HistoryItem'
import { VplateEditorInfo, VplateInfo, adminInfo, labsInfo } from './constants'
import { Container, ProjectList, ProjectSection } from './styles'

export default function Project() {
  return (
    <ProjectSection id={NAV_MENUS.PROJECT}>
      <Container>
        <ProjectList>
          <HistoryItem {...VplateInfo} />
          <HistoryItem {...VplateEditorInfo} />
          <HistoryItem {...adminInfo} />
          <HistoryItem {...labsInfo} />
        </ProjectList>
      </Container>
    </ProjectSection>
  )
}

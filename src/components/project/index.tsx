import Section from '../common/Section'
import { H1 } from '../common/Typography'
import HistoryItem from './HistoryItem'
import { VplateEditorInfo, VplateInfo, adminInfo, labsInfo } from './constants'
import { Container, ProjectList } from './styles'

export default function Project() {
  return (
    <Section>
      <Container>
        <H1 fontWeight={600} marginBottom={30}>
          Project
        </H1>
        <ProjectList>
          <HistoryItem {...VplateInfo} />
          <HistoryItem {...VplateEditorInfo} />
          <HistoryItem {...adminInfo} />
          <HistoryItem {...labsInfo} />
        </ProjectList>
      </Container>
    </Section>
  )
}

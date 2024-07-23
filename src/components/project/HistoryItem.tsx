import Card from '../common/Card'
import { H1, H5 } from '../common/Typography'
import { CardFlexContainer, HistoryList, HistoryListTitle, ListItem } from './HistoryItem.styles'

type Image = {
  src: string
  alt: string
}

interface Props {
  title: string
  subtitle: string
  image: Image
  workScopes: string[]
  techSpecs: string[]
}

export default function HistoryItem({ title, subtitle, image, workScopes, techSpecs }: Props) {
  return (
    <ListItem>
      <H1 fontWeight={500} marginBottom={20}>
        {title}
      </H1>
      <H5 style={{ fontStyle: 'italic' }}>{subtitle}</H5>
      <CardFlexContainer>
        <Card className="image-card">
          <img src={image.src} alt={image.alt} />
        </Card>
        <Card>
          <div>
            <HistoryListTitle>Work Scope</HistoryListTitle>
            <HistoryList>
              {workScopes.map((scope) => (
                <li key={scope}>{scope}</li>
              ))}
            </HistoryList>
          </div>
          <div style={{ marginTop: 30 }}>
            <HistoryListTitle>Tech Spec</HistoryListTitle>
            <HistoryList>
              {techSpecs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </HistoryList>
          </div>
        </Card>
      </CardFlexContainer>
    </ListItem>
  )
}

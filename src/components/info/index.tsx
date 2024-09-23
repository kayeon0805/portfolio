import Card from '../common/card'
import { H1, H5 } from '../common/typography'
import Room from './room'
import { Grid, ListTitle, ProfileCard, StyledSection, Ul } from './styles'

export default function Info() {
  return (
    <StyledSection>
      <Grid>
        <H1 fontWeight={700}>Kayeon</H1>
        <ProfileCard>
          <div>
            <Room />
          </div>
        </ProfileCard>
        <Card>
          <Ul>
            <li>
              <ListTitle fontWeight={600} marginBottom={4}>
                About Me
              </ListTitle>
              <div>
                <H5>- 안녕하세요 웹 프론트엔드 개발자 김가연입니다.</H5>
              </div>
              <p>1. 스타트업에서 상용 서비스의 프론트엔드 개발을 주도하였습니다.</p>
              <p>2. 다양한 직군과 원활하게 소통이 가능합니다.</p>
              <p>3. 반응형 디자인을 적용해 다양한 화면에서 일관된 사용자 경험을 제공할 수 있습니다.</p>
            </li>
            <li>
              <ListTitle marginTop={20}>Hobby</ListTitle>
              <p>기타 연주, 공예, 개발 공부</p>
            </li>
            <li>
              <ListTitle marginTop={20}>Career</ListTitle>
              <p>2022.07 ~ 2024.04 | The Vplanet INC.</p>
            </li>
          </Ul>
        </Card>
      </Grid>
    </StyledSection>
  )
}

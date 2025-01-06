import { Container } from "../Container/Container"
import { ContentWrapperStyled } from "./ContentWrapper.styled"

export const ContentWrapper = ({ pagetitle, children }) => {

  document.title = pagetitle

  return (
    <ContentWrapperStyled>
        <Container className="greybox">
          <Container className="center">
            <h1>{pagetitle}</h1>
          </Container>
        </Container>
        <Container className="center">
          {children}
        </Container>
    </ContentWrapperStyled>
  )
}

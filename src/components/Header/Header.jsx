import { Container } from "../Container/Container"
import { HeaderStyled } from "./Header.styled"
import Logo from '../../assets/images/logo-sdg.svg'
import { NavBar } from "../NavBar/NavBar"

export const Header = () => {
  return (
    <>
      <Container bgcolor="#2BBBDE" height="30px"></Container>
      <Container className="center">
        <HeaderStyled>
          <img src={Logo} />
          <NavBar />
        </HeaderStyled>
      </Container>
    </>
  )
}

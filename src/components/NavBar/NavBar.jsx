import { NavLink } from "react-router-dom"
import { NavBarStyled } from "./NavBar.styled"

export const NavBar = () => {
  return (
    <NavBarStyled>
        <ul>
            <li><NavLink to="/">Verdensmålene</NavLink></li>
            <li><NavLink to="/education">Undervisning</NavLink></li>
            <li><NavLink to="/customgoal">Byg dit eget mål</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/contact">Kontakt os</NavLink></li>
        </ul>
    </NavBarStyled>
  )
}

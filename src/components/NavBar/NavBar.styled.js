import styled from 'styled-components'
import { ResetList } from '../../assets/Mixins'

export const NavBarStyled = styled.nav`
    ul {
        ${ResetList};

        li {
            display: inline-block;

            a {
                color: black;
                text-transform: uppercase;
                font-family: ${props => props.theme.fonts[0]};
                font-size: ${props => props.theme.fontsizes.l};
                text-decoration: none;
                font-weight: bold;
                margin-left: 3.0rem;

                &:hover, &.active {
                    color: #${props => props.theme.colors.primary};
                }
            }
        }
    }
`
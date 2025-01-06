import styled from 'styled-components'
import Worldmap from '../../assets/images/worldmap.png'

export const FooterStyled = styled.footer`
    background-color: #${props => props.theme.colors.tertiary};
    background-image: url(${Worldmap});
    background-position: center;
    background-size: 100%;
    padding: 2rem 0;
    color: white;

    section {
        display: flex;
        justify-content: space-between;

        div {
            box-sizing: border-box;
            width: 50%;
            padding: 0 1rem 0 0;

            h4 {
                margin-top: 0;
                text-transform: uppercase;
            }

            img {
                margin-right: 0.5rem;
                margin-bottom: 1rem;
            }
        }
    }
`
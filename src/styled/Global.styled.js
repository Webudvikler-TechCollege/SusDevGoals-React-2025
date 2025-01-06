import { createGlobalStyle } from 'styled-components'
import { Reset } from './Mixins'

export const GlobalStyle = createGlobalStyle`
    body {
        ${Reset};
        background-color: #fff;
        font-family: 'Open Sans', Arial, Verdana;
        font-size: ${props => props.theme.fontsizes.m};
    }

    h1 {
        display: flex;
        height: 80px;
        align-items: center;
        font-family: ${props => props.theme.fonts[0]};
        font-size: ${props => props.theme.fontsizes.xl};
        text-transform: uppercase;
        margin-top: 0;
    }

    h2 {
        font-family: ${props => props.theme.fonts[1]};
        font-size: ${props => props.theme.fontsizes.l};
    }
`
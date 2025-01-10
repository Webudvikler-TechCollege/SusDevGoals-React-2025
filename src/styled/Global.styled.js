import { createGlobalStyle } from 'styled-components'
import { Reset } from './Mixins'

export const GlobalStyle = createGlobalStyle`
    body {
        ${Reset};
        font-family: 'Open Sans', Arial, Verdana;
        font-size: ${props => props.theme.fontsizes.m};
    }

    .dark-mode {
        background-color: #333;
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
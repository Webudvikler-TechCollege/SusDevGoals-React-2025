import styled from 'styled-components'
import { ResetList } from '../../styled/Mixins'

export const GoalListStyled = styled.div`
    text-align: center;

    h1 {
        padding-top: 1rem !important;
        height: auto;
        margin-bottom: 0;
        display: block;
    }

    ul {
        ${ResetList};
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-gap: 0.5rem;
        padding-bottom: 2rem;
    }

    img {
        margin: 0.5rem 0;
    }
`
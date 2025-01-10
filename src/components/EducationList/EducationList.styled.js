import styled from 'styled-components'
import { ResetList } from '../../styled/Mixins';

export const EducationListStyled = styled.ul`
    ${ResetList};
    background-color: #${props => props.color};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-gap: 0.5rem;
    color: white;
`
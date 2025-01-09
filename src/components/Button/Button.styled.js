import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: ${props => props.btncolor || '#efefef' };
    color: ${props => props.txtcolor || 'black' };
    padding: 0.5rem 1rem;
    border-radius: 3px;
`
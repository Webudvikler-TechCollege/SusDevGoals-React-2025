import styled from 'styled-components'

export const CustomGoalDesignerStyled = styled.div`
    display: flex;

    &>div {
        width: 50%;
    }

    .customgoal {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: ${props => props.theme.fonts[0]};
        font-weight: bold;
        border: solid 1px #ccc;
        width: 200px;
        height: 200px;
    }


`
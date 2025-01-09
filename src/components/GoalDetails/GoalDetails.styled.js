import styled from 'styled-components'

export const GoalDetailsStyled = styled.div`
    iframe {
        margin-bottom: 2rem;
        width: 100%;
        height: 700px;
    }
    img {
        max-width: 500px;

        &.left {
            float: left;
            margin-right: 2rem;
        }

        &.right {
            float: right;
            margin-left: 2rem;
        }
    }

    p {
        white-space: pre-wrap;
    }
`
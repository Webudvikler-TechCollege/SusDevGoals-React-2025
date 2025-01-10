import { EducationCardStyled } from "./EducationCard.styled"

export const EducationCard = ({color, children}) => {
    return (
        <EducationCardStyled color={color}>
            {children}
        </EducationCardStyled>
    )
}

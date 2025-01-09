import { ButtonStyled } from "./Button.styled"

export const Button = ({btncolor, txtcolor, children}) => {
  return (
    <ButtonStyled btncolor={btncolor} txtcolor={txtcolor}>
        {children}
    </ButtonStyled>
  )
}

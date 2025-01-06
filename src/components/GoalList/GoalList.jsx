import { goals } from "../../data/sdg"
import { Container } from "../Container/Container"
import { GoalCard } from "../GoalCard/GoalCard"
import { GoalListStyled } from "./GoalList.styled"
import Divider from '../../assets/images/divider.svg'
import { Link } from "react-router-dom"

export const GoalList = () => {
  return (
    <GoalListStyled>
      <Container className="greybox">
        <h1>FN's verdensmål for bæredygtig udvikling</h1>
        <img src={Divider} />
        <Container  className="center">
          <ul>
            {goals.map((value, index) => {
              return (
                <Link to={`/goal/${value.id}`} key={index} >
                  <GoalCard number={value.id} title={value.title} color={value.color} icon={value.icon} />
                </Link>
              )
            })}
          </ul>
        </Container>
      </Container>
    </GoalListStyled>
  )
}

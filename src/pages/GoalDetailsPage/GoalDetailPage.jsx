import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { GoalDetails } from "../../components/GoalDetails/GoalDetails"
import { goals } from "../../data/sdg"
import { GoalList } from "../../components/GoalList/GoalList"

export const GoalDetailPage = () => {
    const { goal_id } = useParams()

    const goal = goals.filter(x => x.id === goal_id)[0]

    return (
        <>
            <ContentWrapper pagetitle={goal.title}>
                <GoalDetails details={goal} />
            </ContentWrapper>
            <GoalList />
        </>
    )
}

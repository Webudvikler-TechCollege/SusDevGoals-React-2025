import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { GoalDetails } from "../../components/GoalDetails/GoalDetails"
import { GoalList } from "../../components/GoalList/GoalList"

export const GoalDetailPage = () => {
    return (
        <>
            <ContentWrapper>
                <GoalDetails />
            </ContentWrapper>
            <GoalList />
        </>
    )
}

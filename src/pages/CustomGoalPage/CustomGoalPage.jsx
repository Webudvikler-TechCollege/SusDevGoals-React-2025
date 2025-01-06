import { useState } from "react"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { CustomGoalDesigner } from "../../components/CustomGoalDesigner/CustomGoalDesigner"

export const CustomGoalPage = () => {

    return (
        <ContentWrapper pagetitle="Byg dit eget mål">
            <CustomGoalDesigner />
        </ContentWrapper>

    )
}

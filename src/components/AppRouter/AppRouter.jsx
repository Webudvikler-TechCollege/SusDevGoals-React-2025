import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage'
import { EducationPage } from '../../pages/EducationPage/EducationPage'
import { FAQPage } from '../../pages/FAQPage/FAQPage'
import { ContactPage } from '../../pages/ContactPage/ContactPage'
import { GoalDetailPage } from '../../pages/GoalDetailsPage/GoalDetailPage'
import { CustomGoalPage } from '../../pages/CustomGoalPage/CustomGoalPage'

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/goal/:goal_id" element={<GoalDetailPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/customgoal" element={<CustomGoalPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>

    )
}
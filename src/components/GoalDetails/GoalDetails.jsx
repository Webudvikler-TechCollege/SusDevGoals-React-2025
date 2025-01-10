import { GoalDetailsStyled } from "./GoalDetails.styled"
import parse from "html-react-parser";
import { goals } from "../../data/sdg"
import { useParams } from "react-router-dom";

export const GoalDetails = () => {
  const { goal_id } = useParams()
  const goal = goals.find(x => x.id === goal_id)

  return (
    <GoalDetailsStyled>
        <h2>{goal.byline}</h2>
        <iframe 
            src={goal.video_url} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>            
        <p><img src={goal.image_url} className={(Math.random() < 0.5 ? "left" : "right")} />
          {parse(goal.description)}
        </p>      
    </GoalDetailsStyled>
  )
}

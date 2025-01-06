import { GoalList } from "../GoalList/GoalList";
import { GoalDetailsStyled } from "./GoalDetails.styled"
import parse from "html-react-parser";

export const GoalDetails = ({details}) => {

  return (
    <GoalDetailsStyled>
        <h2>{details.byline}</h2>
        <iframe 
            width="560" 
            height="315" 
            src={details.video_url} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>            
        <p><img src={details.image_url} className={(Math.random() < 0.5 ? "left" : "right")} />{parse(details.description)}</p>      
    </GoalDetailsStyled>
  )
}

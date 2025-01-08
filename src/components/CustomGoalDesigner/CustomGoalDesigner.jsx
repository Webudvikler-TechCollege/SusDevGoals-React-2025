import { useEffect, useState } from "react"
import { CustomGoalDesignerStyled } from "./CustomGoalDesigner.styled"


export const CustomGoalDesigner = () => {
    const [text, setText] = useState("Din tekst")
    const [color, setColor] = useState("efefef")
    const [error, setError] = useState('')

    useEffect(() => {
        if(!text) {
            setError('Tekst må ikke være tom')
        } else {
            setError('')
        }
    }, [text])

    return (
        <CustomGoalDesignerStyled>
            <div>
                <p>Her kan du bygge dit eget mål</p>
                <p>
                    <label>Indtast tekst: </label>
                    <input
                        type="text"
                        name="goaltext"
                        id="goaltext"
                        onChange={(e) => setText(e.target.value)}
                    />
                    {error && <span style={{ color: "red" }}>{error}</span>}
                </p>
                <p>
                    <label>Indtast farvekode: </label>
                    <input
                        type="text"
                        name="color"
                        id="color"
                        onChange={(e) => setColor(e.target.value)}
                    />
                </p>
            </div>

            <div>
                <div className="customgoal" style={{backgroundColor: `#${color}`}}>
                    {text}
                </div>
            </div>
        </CustomGoalDesignerStyled>
    )
}

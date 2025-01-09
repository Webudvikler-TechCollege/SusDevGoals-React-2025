import { useEffect, useState } from "react"
import { EducationListStyled } from "./EducationListstyled"

export const EducationList = () => {
    const [apiData, setApiData] = useState([])

    const getData = async () => {
        const response = await fetch('https://api.mediehuset.net/sdg/edu')
        const data = await response.json();
        setApiData(data.items);        
    }

    useEffect(() => {
        getData()
    },[])
    console.log(apiData);



    return (
        <ul>
            {apiData && apiData.map((value, index) => {
                return (
                    <EducationListStyled key={index} color={value.color}>
                        {value.name}
                    </EducationListStyled>
                )
            })}
        </ul>
    )
}

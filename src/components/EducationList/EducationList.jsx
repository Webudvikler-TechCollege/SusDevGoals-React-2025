import { useEffect, useState } from "react"
import { EducationCard } from "../EducationCard/EducationCard"
import { EducationListStyled } from "../EducationList/EducationList.styled"

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
        <EducationListStyled>
            {apiData && apiData.map((value, index) => {
                return (
                    <EducationCard key={index} color={value.color}>
                        {value.name}
                    </EducationCard>
                )
            })}
        </EducationListStyled>
    )
}

import { useEffect, useState } from "react"

export const EducationList = () => {
    const [apiData, setApiData] = useState([])

    const getData = async () => {
        const response = await fetch('https://api.mediehuset.net/sdg/edu')
        const data = await response.json();
        setApiData(data.items);        
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(apiData);


    return (
        <ul>
            {apiData && apiData.map((value, index) => {
                return (
                    <li key={index}>{value.name}</li>
                )
            })}
        </ul>
    )
}

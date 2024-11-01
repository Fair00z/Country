import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios"

function Card_List(){
    const [contries,setContries]=useState([])
    const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((response)=>{
            setContries(response.data)
        }).catch((error) => {
            setError(error.message);
          });
    },[])
    return(
        <div className="row mt-4">
            {contries.map((country,i)=>(
                <Card key={i} country_name={country.name.common} capital={country.capital ? country.capital[0] : 'N/A'} region={country.region} population={country.population.toLocaleString()} flag={country.flags.svg} />
            ))}
        </div>
    )
}
export default Card_List;
import React, { useState,createContext, useContext } from "react";
import "./Card.css"
import { DetailsContext } from "../../Contexts/detailsContext/detailsContext";
import { useNavigate } from "react-router-dom";

function Card(props){
    const {setData} = useContext(DetailsContext)
    const navigate=useNavigate();

    return(
        <div class="col-md-3 mb-5" onClick={()=>{
            setData(props)
            navigate(`details/${props.country_name}`)
            }}>
            <div class="c-card w-100">
                <img src={props.flag}></img>
                <div class="c-card-detail px-4 py-5">
                    <h3>{props.country_name}</h3>
                    <div>
                        <span>Population:</span>
                        <span class="c-card-detail-value">{props.population}</span>
                    </div>
                    <div>
                        <span>Region:</span>
                        <span class="c-card-detail-value">{props.region}</span>
                    </div>
                    <div>
                        <span>Capital:</span>
                        <span class="c-card-detail-value">{props.capital}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
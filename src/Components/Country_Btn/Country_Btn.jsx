import React from "react";
import "./Country_Btn.css"

function Country_Btn(props){
    return(
        <button class="btn btn-countries mb-2">{props.country_name}</button>
    )
}
export default Country_Btn;
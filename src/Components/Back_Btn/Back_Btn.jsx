import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Back_Btn.css"

function Back_Btn(){
    const navigate = useNavigate();
    return(
        <div class="row mt-5">
            <div class="col-12">
                <button onClick={()=>navigate('/')} class="btn btn-back"><i class="fa-solid fa-arrow-left"></i>Back</button>
            </div>
        </div>
    )
}
export default Back_Btn;
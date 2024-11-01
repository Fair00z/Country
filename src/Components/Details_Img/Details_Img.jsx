import React from "react";
import "./Details_Img.css"

function Details_Img(props){
    return(
        <div class="col-md-6">
            <div class="w-100 d-flex d-md-block justify-content-center">
                <div class="detail-flag">
                    <img src={props.flag}></img>
                </div>
            </div>
        </div>
    )
}
export default Details_Img;
import React from "react";
import Header from "../../Components/Header/Header";
import Back_Btn from "../../Components/Back_Btn/Back_Btn";
import Details_Country from "../../Components/Details_Country/Details_Country";

function Details(){
    return(
        <div>
            <Header/>
            <section>
                <div className="container">
                    <Back_Btn/>
                    <Details_Country/>
                </div>
            </section>
        </div>
    )
}
export default Details;
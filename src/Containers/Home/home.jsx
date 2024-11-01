import React from "react";
import Header from "../../Components/Header/Header";
import Search_Filter from "../../Components/Search_Filter/Search_Filter";
import Card_List from "../../Components/Card_List/Card_List";

function Home(){
    return(
        <div>
            <Header/>
            <section className="mt-5">
                <div className="container">
                    <Search_Filter/>
                    <Card_List/>
                </div>
            </section>
        </div>
    )
}
export default Home;
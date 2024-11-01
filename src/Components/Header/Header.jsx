import React from "react";
import "./Header.css"

function Header(){
    return(
        <header>
            <div class="container">
                <nav class="">
                    <span>Where in the world?</span>
                    <button class="btn btn-theme"><i class="fa-solid fa-moon"></i>Dark Mode</button>
                </nav>
            </div>
        </header>
    )
}
export default Header;
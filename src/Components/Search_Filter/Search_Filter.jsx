import React from "react";
import "./Search_Filter.css"

function Search_Filter(){
    return(
        <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="search px-4">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input placeholder="Search for a country" type="text"></input>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="w-100 d-md-flex justify-content-end">
                        <select class="filter px-4">
                            <option value="" disabled selected>Filter by Region</option>
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                            <option value="America">America</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>
            </div>
    )
}
export default Search_Filter;
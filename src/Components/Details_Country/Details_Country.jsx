import React, { useContext, useEffect, useState } from "react";
import Details_Img from "../Details_Img/Details_Img";
import Country_Btn from "../Country_Btn/Country_Btn";
import "./Details_Country.css";
import { DetailsContext } from "../../Contexts/detailsContext/detailsContext";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details_Country() {
    const { data } = useContext(DetailsContext);
    const { country_name } = useParams();
    console.log(country_name);
    const [country, setCountry] = useState({});
    const [error, setError] = useState('');
    const [borders, setBorders] = useState([]);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${country_name}`)
            .then((response) => {
                setCountry(response.data[0]);
                if (response.data[0].borders){
                    Promise.all(
                        response.data[0].borders.map(borderCode =>
                            axios.get(`https://restcountries.com/v3.1/alpha/${borderCode}`)
                        )
                    ).then((responses)=>{
                        setBorders(responses.map(country_res => country_res.data[0].name.common));
                    }).catch(error => {
                        setError("Failed to fetch border countries");
                    });
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [country_name]);

    if (!country.name) {
        return <div className="d-flex w-100 justify-content-center align-items-center mt-5">
            <span className="text-white mr-2 h2 "><i class="fa-solid fa-spinner fa-spin "></i></span>
            <span className="text-white">Loading......</span>
        </div>;
    }

    return (
        <div className="row mt-5 mb-5">
            <Details_Img flag={country.flags.svg} />
            <div className="col-md-6 text-white pl-5">
                <h2 className="mt-5 mt-md-2 mb-3">{country.name.common}</h2>
                <div className="w-100 d-md-flex">
                    <div className="mb-5 mr-5">
                        <div className="mb-1">
                            <span>Native Name:</span>
                            <span className="c-card-detail-value">{country.name.official}</span>
                        </div>
                        <div className="mb-1">
                            <span>Population:</span>
                            <span className="c-card-detail-value">{country.population.toLocaleString()}</span>
                        </div>
                        <div className="mb-1">
                            <span>Region:</span>
                            <span className="c-card-detail-value">{country.region}</span>
                        </div>
                        <div className="mb-1">
                            <span>Sub Region:</span>
                            <span className="c-card-detail-value">{country.subregion}</span>
                        </div>
                        <div className="mb-1">
                            <span>Capital:</span>
                            <span className="c-card-detail-value">{country.capital ? country.capital[0] : 'N/A'}</span>
                        </div>
                    </div>
                    <div>
                        <div className="mb-1">
                            <span>Top Level Domain:</span>
                            <span className="c-card-detail-value">{country.tld ? country.tld.join(', ') : 'N/A'}</span>
                        </div>
                        <div className="mb-1">
                            <span>Currencies:</span>
                            <span className="c-card-detail-value">{country.currencies ? Object.values(country.currencies).map(curr => `${curr.name} (${curr.symbol})`).join(', ') : 'N/A'}</span>
                        </div>
                        <div className="mb-1">
                            <span>Languages:</span>
                            <span className="c-card-detail-value">{country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</span>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-block align-items-center d-md-flex">
                    <span className="mr-3">Border Countries:</span>
                    <div className=" d-flex flex-wrap justify-content-start">
                    {borders.length > 0 ? (
                            borders.map(border => (
                                <Country_Btn key={border} country_name={border} />
                            ))
                        ) : (
                            <span className="text-danger">No border countries</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details_Country;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data,setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const radios = ["Africa" , "America", "Asia" , "Europe" , "Oceania"];
    const [selectedRadio, setSelectedRadio] = useState('');


    useEffect( ()=> {
        axios.get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data))
    }, []
    )

    return (
        // input type radio, relier au state rangeValue
        <div className='countries'>
            <ul className='radio-container'>
            <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e)=> setRangeValue(e.target.value)} />

            {
                // map des inputs
                radios.map((continent, index) => (
                    <li key={index}>
                        <input type="radio" id={continent} name="continent-radio" checked={continent===selectedRadio} onChange={(e)=> setSelectedRadio(e.target.id)}/>
                        <label htmlFor={continent}> {continent} </label> 
                    </li>
                ))
            }
            </ul>
            



            {/* reset input  */}

            {selectedRadio && (
                <button onClick={()=> setSelectedRadio('')}>Annuler la recherche</button>
            )}


            
            {/* Génération des items */}
            <ul>
                {
                    data
                    .filter((country)=> country.continents[0].includes(selectedRadio))
                    .sort( (a,b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country, index)=> 
                    <Card key={index} country={country}/>
                    )
                }
            </ul>
        </div>
    );
};

export default Countries;
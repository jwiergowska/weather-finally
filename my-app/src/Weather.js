import React from "react";
import axios from 'axios';


export default function Weather() {
    function handleResponse(response) {

    alert(`The weather in New York is ${response.data.main.temp})°C`);
    
        
        let apiKey = "6b374c0d0bedcac1d05f0349705398eb";
        let apiURL = `https://api.openweather.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
        
        return (
        <h2>
            Hello from weather
        </h2>
        ) 
    '}'
import React from "react";
const axios = require('axios').default;

export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }

    let apiKey = "6458e738d641627494ff8c0b51ef5d37";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);


    return (
        <h2>
            Hello from Weather
        </h2>
    )
}
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import "./WeatherApp.css"
export default function WeatherApp()
{
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Pune",
        description:"Haze",
        feelsLike:26.82,
        humidity:15,
        temp:34.85,
        tempMin:34.85,
        tempMax:34.85

    });
    let getWeatherInfo=(result)=>{
        setWeatherInfo(result);//result yane naya info 
    }
    return (
        <div className="mainApp">
            <h1>Weather App</h1>
            <SearchBox getWeatherInfo={getWeatherInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}
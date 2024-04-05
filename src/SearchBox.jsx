import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({getWeatherInfo})
{
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="2870ac58823e30cc58db3e4de36064ab";
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let getInfo=async()=>{
           try{
            let responce=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
           let jsonResponce=await responce.json();
        //    console.log(jsonResponce);
           let result={
            city:city,
            temp:jsonResponce.main.temp,
            tempMin:jsonResponce.main.temp_min,
            tempMax:jsonResponce.main.temp_max,
            humidity:jsonResponce.main.humidity,
            feelsLike:jsonResponce.main.feels_like,
            description:jsonResponce.weather[0].description
           }
           console.log(result);
        //    getWeatherInfo(result);
        // better way
        return result;
           }catch(err)
           {
            throw err;
           }
    }
    function handleCity(event)
    {
       setCity(event.target.value);
    }
   async function handleForm(event)
    {
       try{
        event.preventDefault();
        // console.log(city);
        setCity("");
       let newinfo=await getInfo();
       setError(false)
       getWeatherInfo(newinfo);
       }catch(err)
       {
        setError(true);
       }
    }
    return (
        <div className='SearchBox'>
            
            <form action="" onSubmit={handleForm}>
            <TextField id="city" label="City" variant="outlined"  value={city} onChange={handleCity} required/>
            <br /><br />

            <Button variant="contained" type='submit'>
                {/* we have to add type submit */}
        Search
      </Button>
      {error && <p style={{color:"red"}}>Sorry information is not available!</p>
      }
            </form>
        </div>
    )
}
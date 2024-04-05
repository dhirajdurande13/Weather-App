import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import image from './assets/weather.jpg'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'
export default function InfoBox({info})
{
    const HOT_URL="https://images.unsplash.com/photo-1523653049681-701d71cf57c0?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1628261141505-9e8f379f8509?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let info={
    //     city:"Delhi",
    //     description:"Haze",
    //     feelsLike:26.82,
    //     humidity:15,
    //     temp:34.85,
    //     tempMin:34.85,
    //     tempMax:34.85
    // }
    return (
        <div className='InfoBox'>
            
            <div className='cardContainer' >
            <Card sx={{ maxWidth: 345 }} className='cardApp' >
      <CardMedia
        sx={{ height: 140 }}
        // image={image}
        image={info.humidity>70? RAIN_URL : info.temp>15?HOT_URL:COLD_URL}
        // if humidiyt above 70 rainy temp above 15 hot below 15 cold
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;{
            info.humidity>70? <ThunderstormIcon/> : info.temp>15?<WbSunnyIcon/>:<AcUnitIcon></AcUnitIcon>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            {/* component=span errors hatane ke liye jo typography ke hai */}
         <p>Temprature:{info.temp}&deg;C</p>
         <p>Humidity:{info.humidity}</p>
         <p>Min Temp:{info.tempMin}&deg;C</p>
         <p>Max Temp:{info.tempMax}&deg;C</p>
         <p>The weather can be described as <b>{info.description}</b> and feels like:{info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}
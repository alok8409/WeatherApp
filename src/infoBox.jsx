import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infoBox.css";


export default function InfoBox({ info }){
    const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=ID6SPra-gNgAYY7F9p_7_eVLgoxZJeD3N95Nu3LOY9I=";
    const RAIN_URL = "https://images.unsplash.com/photo-1718917911444-946b40e5fe74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return(
    <div className="InfoBox">
        <div className='Card'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2"  color = "text.secondary" component = {"span"} >
          <div>Temperature = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}</div>
          <p>Min Temp = {info.tempMin}</p>
          <p>Max Temp = {info.tempMax}</p>
          <p>The weather can be described as <i>${info.weather}</i> and feels like {info.feelslike}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';
function App() {
  

  return (
    <div style={{textAlign:"center"}}>
    <WeatherApp></WeatherApp>
      
      {/* <h3>Material UI demo</h3>
      <Button variant="contained" startIcon={<DeleteIcon></DeleteIcon>}>Click Me!</Button>
      <Button variant="contained" color="error" >Click Me2!</Button>
      <Alert severity="error">Delete button is given.</Alert> */}
    </div>
  )
}

export default App

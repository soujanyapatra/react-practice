import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
// import Button from '@mui/material/Button';
import { useEffect, useState } from 'react'
import http from '../../plugins/axios'

const Weather = () => {
  const [weatherData, setWeatherData] = useState({})
  const test = async () => {
    try {
      let { data } = await http.get('api.openweathermap.org/data/2.5/weather?q=gandhinagar&appid=89ec28049c1396329dc3ad681b0eef13')
      if (data) {
        setWeatherData(data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    test()
  }, [])

  return (
    <div style={{ minWidth: '100%' }}>
      <Box
        sx={{
          p: 2,
          display: 'grid',
          gap: 2,
        }}
      >
        <Paper elevation={3}>
          <div className='p-10'>
            Weather condition
            <Stack direction="row" spacing={1} className='d-flex justify-center mt-2'>
              {
                weatherData?.base ? (
                  <div>Base: {weatherData?.base}</div>
                ) : (
                  <Skeleton variant="rectangle" width={100} height={20} />
                )
              }
            </Stack>
            <Stack direction="row" spacing={1} className='d-flex justify-center mt-2'>
              {
                weatherData?.base ? (
                  <div>Clouds: {weatherData?.clouds?.all}</div>
                ) : (
                  <Skeleton variant="rectangle" width={100} height={20} />
                )
              }
            </Stack>
            <Stack direction="row" spacing={1} className='d-flex justify-center mt-2'>
              {
                weatherData?.cod ? (
                  <div>Cod: {weatherData?.cod}</div>
                ) : (
                  <Skeleton variant="rectangle" width={100} height={20} />
                )
              }
            </Stack>
            <Stack direction="row" spacing={1} className='d-flex justify-center mt-2'>
              {
                weatherData?.main?.humidity ? (
                  <div>
                    <div>Humidity: {weatherData?.main?.humidity}</div>
                    <div>pressure: {weatherData?.main?.pressure}</div>
                    <div>Temperature: {weatherData?.main?.temp}</div>
                    <div>Temperature max: {weatherData?.main?.temp_max}</div>
                    <div>Temperature min: {weatherData?.main?.temp_min}</div>
                  </div>
                ) : (
                  <Skeleton variant="rectangle" width={100} height={100} />
                )
              }
            </Stack>
          </div>
        </Paper>
      </Box>
    </div>
  )
}

export default Weather

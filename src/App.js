import './App.css';
import {useState,useEffect} from 'react'
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherApi';

function App() {
  const [query,setQuery] = useState({q:'berlin'});
  const [units,setUnits] = useState('metric');
  const [weather , setWeather] = useState(null);

  useEffect(()=>{
      const fetchWeather = async () => {
      await getFormattedWeatherData({...query,units}).then(data => {
        setWeather(data)
      });
     }
     fetchWeather();
  },[query,units]);

 const formatBackground = () => {
   if(!weather) return 'from-cyan-700 to-blue-700'
   const threshold = units === 'metric' ? 20 : 60
   if(weather.temp < threshold) return 'from-cyan-700 to-blue-700'
   return 'from-yellow-700 to-orange-700'
 }

  return (
    <div className={`mx-auto max-w-screen-sm m-4 py-5 sm:px-24 px-8 bg-gradient-to-br h-fit shodow-xl shadow-gray-400 ${formatBackground()}` }>
      <TopButtons setQuery={setQuery}/>
      <Inputs units={units} setQuery={setQuery} setUnits={setUnits}/>
      {weather && (
         <div>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>
          <Forecast title="hourly forecast" items={weather.hourly}/>
          <Forecast title="daily forecast" items={weather.daily}/>
         </div>
      )}
    </div>
  );
}

export default App;
 
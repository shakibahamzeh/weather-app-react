import { DateTime } from "luxon";

const API_KEY = "18985fccc16d081f6db513f36638824a";

const BASE_URL = "https://api.openweathermap.org/data/2.5";


const getWeather = async(infoType , searchPrams) => {
   const url = new URL(BASE_URL + '/' + infoType)
   url.search = new URLSearchParams({...searchPrams,appid:API_KEY})

   return fetch(url)
   .then(res => res.json())
}

const formatCurrentWeather = (data) => {
    const {
        coord : {lat , lon},
        main : {temp , feels_like , temp_min , temp_max , humidity},
        name,
        dt,
        sys : {country , sunrise , sunset},
        weather,
        wind : {speed}
    } = data;
    const {main:details , icon} = weather[0];
    return {lat,lon,temp,feels_like,temp_max,temp_min,humidity,name,dt,country,sunrise,sunset,weather,speed,details,icon}
}

const formatForecastWeather = (data) => {
   let {timezone , daily , hourly} = data;
   daily = daily.slice(1,7).map(d => {
       return {
           title : formatToLocalTime(d.dt , timezone ,'ccc'),
           temp : d.temp.day,
           icon: d.weather[0].icon 
       }
   })
    hourly = hourly.slice(1,6).map(d => {
       return {
           title : formatToLocalTime(d.dt , timezone ,'hh:mm a'),
           temp : d.temp,
           icon: d.weather[0].icon 
       }
   })
  return {timezone , daily ,hourly}
}
const getFormattedWeatherData = async (searchPrams) => {
    const formattedCurrentWeather = await getWeather('weather' ,searchPrams).then(formatCurrentWeather);
    const {lat , lon } = formattedCurrentWeather;
    const formattedForecastWeather = await getWeather('onecall',{
        lat,lon,exclude : 'current,minutly,alerts' ,
        units: searchPrams.units,
    }).then(formatForecastWeather)
    return {...formattedCurrentWeather, ...formattedForecastWeather};
}

const formatToLocalTime = (secs , zone , format="cccc, dd LLL yyyy'| Local Time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export {formatToLocalTime , iconUrlFromCode};
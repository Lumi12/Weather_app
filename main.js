const API_key = "e1034f41cee9547a9307e5c5ccf75e1e";
const basic = document.getElementById("basic_information")
const city = document.getElementById("city")
const coordins = document.getElementById("coords")
const country = document.getElementById("country")
const temp_inf = document.getElementById("temperature_information")
const temp_current = document.getElementById("current_temperature")
const max = document.getElementById("max")
const min = document.getElementById("min")
const feels = document.getElementById("feels_like")
const pressure = document.getElementById("pressure")
const cloudsin = document.getElementById("clouds_info")
const current_weather = document.getElementById("current_weather")
const wind_inf = document.getElementById("wind_information")
const degr = document.getElementById("degree")
const gusti = document.getElementById("gust")
const speed = document.getElementById("speed")
const humid = document.getElementById("humidity")







const showWeatherByLocation = (pos) =>{
const coords=pos.coords;
console.log(pos);
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_key}`;
fetch(URL)
   .then((res)=>res.json())
   .then((res) => weatherInfo(res))
   .catch((err)=>console.log(err))
   .finally(() => console.log("finish"));
}
const converttocelsius = (temp) => Math.round(temp - 273.15)
const weatherInfo = (info)=>{
    const { clouds, coord, sys, weather, main, wind, name } = info;

    console.log(main.pressure);
    basic.textContent="Basic Information"
    city.textContent = name
    coordins.textContent = `${coord.lat}, ${coord.lon}`
    country.textContent = sys.country
    temp_inf.textContent = "Temperature"
    temp_current.textContent = `current - ${converttocelsius(main.temp)} C`
    max.textContent = `maximum - ${converttocelsius(main.temp_max)} C`
    min.textContent = `minimum - ${converttocelsius(main.temp_min)} C`
    pressure.textContent = `pressure - ${main.pressure} hPa`
    
    feels.textContent = `feels like - ${converttocelsius(main.feels_like)} C`
    humid.textContent = `humidity - ${main.humidity} %`
    cloudsin.textContent = `weather`
    
    wind_inf.textContent = "Wind"
    degr.textContent = `degree - ${wind.deg}`
    gusti.textContent = `gust - ${wind.gust}`
    speed.textContent = `speed - ${wind.speed}`
    current_weather.textContent = weather[0].description
    
    


    


}
const getmyposition = ()=>{
    navigator.geolocation.getCurrentPosition((pos) => showWeatherByLocation(pos));
}
getmyposition();



const apikey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data.weather[0].main)

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    var weatherIcon = document.querySelector(".weather img");

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png"
    }
    else if(data.weather[0].main == "Smoke"){
        weatherIcon.src = "./images/clouds.png"
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "./images/clouds.png"
    }

}



document.querySelector(".search button").addEventListener("click", function(){
    var city = document.querySelector(".search input").value; //to get value inside input field
    checkWeather(city);                                       //use '.value' not '.innerHTML'

})

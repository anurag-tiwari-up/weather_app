let apiKey = "adb29378f99e0b7b978df7c94333a144";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const images = document.querySelector(".images");

const searchBox = document.querySelector(".search input");

async function checkData(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const result = await response.json();
  console.log(result);

  if (result.cod == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = result.name;
    document.querySelector(".temp").innerHTML =
      Math.round(result.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = result.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = result.main.humidity + "%";

    if (result.weather[0].main == "Clouds") {
      images.src = "images/clouds.png";
    } else if (result.weather[0].main == "Clear") {
      images.src = "images/clear.png";
    } else if (result.weather[0].main == "Rain") {
      images.src = "images/rain.png";
    } else if (result.weather[0].main == "Drizzle") {
      images.src = "images/drizzle.png";
    } else if (result.weather[0].main == "Mist") {
      images.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

}

document.querySelector('form').addEventListener("submit", (e) => {
  e.preventDefault()
  checkData(searchBox.value);
});

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const APIKEY = "6e8ac902375b7792acfd0656b8c92911";

function geoLocOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    fetch(url)
        .then(Response => Response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function geoLocerror() {
    alert("Can't fine you, No weather for you");
}

navigator.geolocation.getCurrentPosition(geoLocOk, geoLocerror);

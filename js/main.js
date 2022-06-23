const url = "https://api.openweathermap.org/data/2.5/"
const key = "4edccbb82d5aa88adab56308a67b9eca"

const setquery = (e) => {
    if(e.keyCode =="13"){
        getResult(input.value)
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector(".city")
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}℃`;

    let desc = document.querySelector('.description')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}℃
    ${Math.round(result.main.temp_max)}℃`
}


const input = document.getElementById('input')
input.addEventListener('keypress', setquery)


var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.shortDesc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')


async function changWeatherUI(capitalSearch){
    
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=2cd9ae06bd667000ed906862b206ccca
    `
    let data = await fetch(apiURL).then(res => res.json())
    if(data.cod == 200){
    content.classList.remove('hide')
    city.innerText = data.name
    country.innerText = data.sys.country
    visibility.innerText = data.visibility + 'm'
    wind.innerText = data.wind.speed + 'm/s'
    sun.innerText = data.main.humidity + 'g/m³'
    value.innerText = Math.round((data.main.temp - 273.15))
    let temp = data.weather[0] ? data.weather[0].main : ''
    shortDesc.innerText = temp
    time.innerText = new Date().toLocaleString('vi')
        if(temp == 'Rain'){
            body.setAttribute('class', 'rainny')
        }
    else if(temp == 'Clouds'){
        body.setAttribute('class', 'cloudy')
    }
    else if (temp == 'Clear'){
        body.setAttribute('class', 'sunny')
    }
    }
    else{
        content.classList.add('hide')
        
    }
}
search.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
        let capitalSearch = search.value.trim()
        changWeatherUI(capitalSearch)
    }
})
changWeatherUI('Ho Chi Minh')
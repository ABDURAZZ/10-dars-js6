let button = document.getElementById('btn')
let wrapper_weather = document.getElementById('wrapper-weather')



button.addEventListener('click' , ()=>{
    wrapper_weather.style.height = '600px'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`)
    .then(response => response.json)
    .then(data => console.log(data)
    )

    let img = document.getElementById('img')
    img.src =item.image
})
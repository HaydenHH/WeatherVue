var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
        var response = JSON.parse(ajax.responseText)
        var wea = response.weather
        var show = document.getElementById('weather')
        show.innerText = wea[0].main
        console.log(wea[0].main)
        console.log(response)
    }
};
ajax.open('post', 'https://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=82161b512fc36f943b2cf28bf4f7df2a', true);
ajax.send();
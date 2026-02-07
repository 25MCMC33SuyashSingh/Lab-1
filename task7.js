let btn = document.querySelector("button");
let output = document.getElementById("output");

btn.addEventListener("click", function(){
    let city = cityInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8c27da2e6d6c1f852b8042d223709ea`)
        // .then(response => response.json())
        // .then(data => {
            
        //     output.innerText = `Temperature: ${data.main.temp} Humidity: ${data.main.humidity}`;
        // })
        console.log(data);
    
})

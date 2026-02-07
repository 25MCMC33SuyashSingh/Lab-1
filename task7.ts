let btn = document.querySelector("button") as HTMLButtonElement;
let output = document.getElementById("output") as HTMLElement;
let cityInput = document.getElementById("cityInput") as HTMLInputElement;

btn.addEventListener("click", function () {

    let city = cityInput.value;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d8c27da2e6d6c1f852b8042d223709ea")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            output.innerHTML =
                "Temperature: " + data.main.temp +
                "<br>Humidity: " + data.main.humidity;

        });

});


// Static winter values
let temperature = 7; // °C
let windSpeed = 10; // km/h

function calculateWindChill(tempC, speedKmh) {
return (
13.12 +
0.6215 * tempC -
11.37 * Math.pow(speedKmh, 0.16) +
0.3965 * tempC * Math.pow(speedKmh, 0.16)
);
}

let windChill;
if (temperature <= 10 && windSpeed > 4.8) {
windChill = Math.round(calculateWindChill(temperature, windSpeed)) + " °C";
} else {
windChill = "N/A";
}

document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#windchill").textContent = windChill;
});





const year = document.querySelector("#date");
const lastModified = (document.lastModified);
document.querySelector("#lastModified").innerHTML ="Last Modified: " + lastModified;


today = new Date ()
 year.textContent = today.getFullYear();

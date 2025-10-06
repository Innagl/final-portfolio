const api = {
   endpoint: "https://api.openweathermap.org/data/2.5/",
   key: "7cde2b86cdf38f02188d048023bbf7da"
}


const input = document.querySelector("#input");
input.addEventListener("keydown", enter);

function enter(e) {

   if (e.keyCode === 13) {
      getInfo(input.value)
   }
}

async function getInfo(data) {

   const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
   console.log(res)

   const result = await res.json();
   displayResult(result);


}

function displayResult(result) {
   console.log(result)
   let city = document.querySelector("#city");
   city.textContent = `${result.name}, ${result.sys.country}`;

   getDate();

   let temperature = document.querySelector("#temperature")
   temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;


   // ADDITIONAL

   let wind = document.querySelector("#displayWind");
   wind.innerHTML = `${Math.round(result.wind.speed)}`;

   let humidity = document.querySelector("#displayHumidity");
   humidity.innerHTML = `${result.main.humidity}`;

   let feelsLike = document.querySelector("#displayFeelsLike");
   feelsLike.innerHTML = `${Math.round(result.main.feels_like)}`;

   let conditions = document.querySelector("#displayCondition");
   conditions.textContent = `${result.weather[0].main}`;

   document.querySelector(".blocks-container").style.display = "block";
   document.querySelector("#title").style.display = "none";
}

function getDate() {
   const myDate = new Date();
   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   let weekDay = days[myDate.getDay()];
   console.log(weekDay);

   let todayDate = myDate.getDate();
   console.log(todayDate);

   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   let currentMonth = months[myDate.getMonth()];
   console.log(currentMonth);

   let currentYear = myDate.getFullYear();
   console.log(currentYear);

   let showDate = document.querySelector("#date");
   showDate.textContent = `${weekDay}` + " " + `${todayDate}` + " " + `${currentMonth}` + " " + `${currentYear}`;


}
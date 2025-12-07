const button= document.getElementById("search-button");
const input= document.getElementById("city-input");
const cityname= document.getElementById("city-name");
const citytime= document.getElementById("city-time");
const citytemp= document.getElementById("city-temp");


async function getData(cityName){
  const promise= await fetch(
    `http://api.weatherapi.com/v1/current.json?key=670adb72e28e46589e861405250712&q=${cityName}&aqi=yes`
);
  return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityname.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
    citytime.innerText = `${result.location.localtime}`;
    citytemp.innerText = `${result.current.temp_c}`;
});


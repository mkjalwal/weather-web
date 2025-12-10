const button= document.getElementById("search-button");
const input= document.getElementById("city-input");
const cityname= document.getElementById("city-name");
const citytime= document.getElementById("city-time");
const citytemp= document.getElementById("city-temp");


async function getData(lat,long){
  const promise= await fetch(
    `http://api.weatherapi.com/v1/current.json?key=670adb72e28e46589e861405250712&q=${lat},${long}&aqi=yes`
);
  return await promise.json();
}

async function gotlocation(position){
  const result= await getData(
    position.coords.latitude,
    position.coords.longitude
  )
  cityname.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
  citytime.innerText = `${result.location.localtime}`;
  citytemp.innerText = `${result.current.temp_c}`;
}

function failedtoget(){
  console.log("There is some error");
}

button.addEventListener("click" , async () =>{
 const result = navigator.geolocation.getCurrentPosition(gotlocation,failedtoget);
   // cityname.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
   // citytime.innerText = `${result.location.localtime}`;
    //citytemp.innerText = `${result.current.temp_c}`;
});

//button.addEventListener("click", async () => {
   // const value = input.value;
    //const result = await getData(value);
    //const result = await gotlocation(position);
    //cityname.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
   // citytime.innerText = `${result.location.localtime}`;
   // citytemp.innerText = `${result.current.temp_c}`;
//});


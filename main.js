
// Dark/Light mode
const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('myLight');
}
function change() {
    document.getElementById('icon').classList.toggle('bi-moon-fill');
}

// coupon code
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity = '0.3';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1';
}

// Geo Location
      function geolocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          x.innerText = "Geo Not Supported";
        }
      }

      function showPosition(data) {
        console.log(data);
        let x = document.getElementById("out");
        let y = document.getElementById("weather");
        let lat = data.coords.latitude;
        let lon = data.coords.longitude;
        // let out = `Latitude is ${lat} and Longitude is ${lon}`;
        // x.innerText = out;
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
        /// api calling
        fetch(url,{method: 'GET'})
        /// return promise
        .then((res) => res.json())
        /// return data
        .then((data) => {
            console.log(data)
            let city = data.city.name
            let temp = data.list[0].temp.day
            y.innerText = `${city} ${temp}°C`
        })
      }




document.querySelector("button").addEventListener("click",data);
function data(){
    let year = document.querySelector(".year").value;
    let month = document.querySelector(".month").value;
    let day = document.querySelector(".day").value;
    let startdate = `date=${year}-${month}-${day}`
    let url = `https://api.nasa.gov/planetary/apod?api_key=IuisVDj4E1YBVrYdhh81k6CAp6A0bzjQHLbcpMkd&${startdate}`

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (answer) {
        console.log(answer);

        document.querySelector("div").innerHTML = `<img src="${answer.hdurl}">`;
        document.querySelector("div").innerHTML += `<p>${answer.date}</p>`;   
        document.querySelector("div").innerHTML += `<p>${answer.title}</p>`;   
        document.querySelector("div").innerHTML += `<p>${answer.explanation}</p>`;   
    })
}
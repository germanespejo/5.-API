fetch("https://randomuser.me/api/")
    .then(function (response) {
        return response.json();
    })
    .then(function (answer) {
        console.log(answer);

        document.querySelector("div").innerHTML += `<img src="${answer.results[0].picture.large}">`;
        document.querySelector("div").innerHTML += `<p>${answer.results[0].name.title}${" "}${answer.results[0].name.first}${" "}${answer.results[0].name.last}</p>`;
        document.querySelector("div").innerHTML += `<p>${answer.results[0].location.street.name}${" "}${answer.results[0].location.street.number}</p>`;
        document.querySelector("div").innerHTML += `<p>${answer.results[0].location.city}</p>`;
        document.querySelector("div").innerHTML += `<p>${answer.results[0].location.state}</p>`;
        document.querySelector("div").innerHTML += `<p>${answer.results[0].location.country}</p>`;
        document.querySelector("div").innerHTML += `<p>${answer.results[0].location.postcode}</p>`;
    })
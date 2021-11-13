let page = 0;
for (let i = 1; i <= 34; i++) {
    page = i;
    console.log(page);

    let link = "https://rickandmortyapi.com/api/character/?page="
    fetch(link + page)
        .then(function (response) {
            return response.json();
        })
        .then(function (answer) {
            for (i = 0; i <= 20; i++) {
                document.querySelector("div").innerHTML += `<img src="${answer.results[i].image}">`;
                document.querySelector("div").innerHTML += `<p>${answer.results[i].name}</p>`;
            }
        })
}
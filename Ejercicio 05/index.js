let page = 0;
let select = document.querySelector("select");

for (let i = 1; i <= 1118; i+=20) {
    page = i;
    console.log(page);
    

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=` + page + `&limit=20`)
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            for (j = 0; j <= 20; j++) {
                document.querySelector("div").innerHTML += `<p>${res.results[j].name}</p>`;
            }
        })
    }

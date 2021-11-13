/* Mi intento infructuoso

document.querySelector("select").addEventListener("click", data);
function data() {
    let url = "https://swapi.dev/api/planets"

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (ans) {
            console.log(ans);

            function fPlanetas(x) {
                alert("Has elegido el planeta " + x + ".");
            }

            for (let i = 0; i < 10; i++) {
                document.querySelector("div").innerHTML += `<option value="${fPlanetas()}">${ans.results[i].name}</option><br>`;

            }
            let buttons = document.querySelectorAll("option");
            for (let i = 0; i < option.length; i++) {
                buttons[i].addEventListener("click", function(){alert(buttons[i].innerHTML)})
                
            }

        })
}
<!DOCTYPE html>
<html lang="en">*/

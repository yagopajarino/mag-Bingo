let songSelectors = document.querySelectorAll(".songSelector");
let songsDiv = document.getElementById("salidos")
let selec = document.querySelector(".canciones")

songSelectors.forEach(function(element) {
    element.addEventListener("onchange", function() {
        let song = element.innerHTML;
        songsDiv.innerHTML += `<p>${song}</p>`
    })
})

selec.addEventListener("change", function() {
    let value = selec.value
    songsDiv.innerHTML += `<p>${value}</p>`;
    let ps = songsDiv.querySelectorAll("p");
    if (ps.length > 10) {
        ps[0].remove();
    }
})


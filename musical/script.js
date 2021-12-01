let canciones
let request = new XMLHttpRequest();
request.open('GET', "canciones.txt", true);
request.responseType = 'blob';
request.onload = function() {
    var reader = new FileReader();
    reader.readAsText(request.response);
    reader.onload =  function(e){
        canciones = reader.result;
    };
};
request.send()



let songSelectors = document.querySelectorAll(".songSelector");
let songsDiv = document.getElementById("salidos")
let selec = document.querySelector(".canciones")

songSelectors.forEach(function(element) {
    element.addEventListener("onchange", function() {
        let song = element.innerHTML;
        let p = document.createElement("p")
        p.textContent = song
        songsDiv.appendChild(p)
    })
})

selec.addEventListener("change", function() {
    let value = selec.value
    let p = document.createElement("p")
    p.textContent = value
    songsDiv.appendChild(p)
    let ps = songsDiv.querySelectorAll("p");
    if (ps.length > 10) {
        ps[0].remove();
    }
})


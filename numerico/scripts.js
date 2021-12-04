let celdas = document.querySelectorAll(".nosel");
let number = document.getElementById("last_number");
let s = document.querySelector("strong")
celdas.forEach(function(element) {
    element.addEventListener("click", function () {
        let c = element.className;
        if (c == 'sel') {
            element.className = "nosel";
        }
        else {
            element.className = "sel";
            s.innerHTML = element.innerHTML;
        }
    });
});



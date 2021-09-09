let celdas = document.querySelectorAll(".nosel");
let number = document.getElementById("last_number");
celdas.forEach(function(element) {
    element.addEventListener("click", function () {
        let c = element.className;
        if (c == 'sel') {
            element.className = "nosel";
        }
        else {
            element.className = "sel";
            number.innerHTML = element.innerHTML;
        }
    });
});
let celdas = document.querySelectorAll(".nosel");
celdas.forEach(function(element) {
    element.addEventListener("click", function () {
        let c = element.className;
        if (c == 'sel') {
            element.className = "nosel";
        }
        else {
            element.className = "sel";
        }
    });
});
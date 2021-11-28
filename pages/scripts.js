let cButton = document.getElementById("agregar_num_btn")
cButton.addEventListener("click", agregarCarton);
cButton.addEventListener("click", eliminarCarton);
cButton.addEventListener("click", editarCarton);
cButton.addEventListener("click", guardarCarton);
cButton.addEventListener("click", cambioColor);

let pButton = document.getElementById("jugar_btn")
pButton.addEventListener("click", selecCelda);

function agregarCarton() {
    let cart = document.getElementById("cart_num");
    cart.innerHTML += "<div class='carton'>\
                        <div class='btn_cont'>\
                        <input class='c_numero'></input>\
                        <button class='colorBtn'>Azul</button>\
                        <button class='colorBtn'>Rojo</button>\
                        <button class='colorBtn'>Verde</button>\
                        </div>\
                        <table class=carton>\
                            <tr>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                            </tr>\
                            <tr>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                            </tr>\
                            <tr>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                                <td style class='empty'><span></span></td>\
                            </tr>\
                        </table>\
                        <div class='c_buttons'>\
                        <button class='eliminar_carton'>Eliminar</button>\
                        <button class='editar_carton'>Editar</button>\
                        <button hidden class='guardar_carton'>Guardar</button>\
                        </div>\
                        </div>"
}

function eliminarCarton () {
    let borrar_btn = document.querySelectorAll(".eliminar_carton")
    borrar_btn.forEach(function(element) {
        element.addEventListener('click', function() {
            element.parentElement.parentElement.remove();
        });
    });
}

function editarCarton () {
    let edit_btn = document.querySelectorAll(".editar_carton");
    edit_btn.forEach(function(element) {
        let guardar_btn = element.parentElement.querySelector(".guardar_carton");
        element.addEventListener('click', function() {
            guardar_btn.hidden = false;
            element.hidden = true;
            let tabla = element.parentElement.parentElement.getElementsByTagName("table")[0];
            let tds = tabla.querySelectorAll("td");
            tds.forEach(function (e) {
                let span = e.querySelector("span");
                e.style.backgroundColor="white";
                if (span == null) {
                    e.innerHTML = "<input></input>";
                }
                else {
                    let value = span.innerHTML
                    e.innerHTML = `<input value="${value}" placeholder="${value}"></input>`;
                }
            });
        });
    });
}

function guardarCarton () {
    let guardar_btn = document.querySelectorAll(".guardar_carton");
    guardar_btn.forEach(function(element) {
        let edit_btn = element.parentElement.querySelector(".editar_carton")
        element.addEventListener('click', function() {
            element.hidden = true;
            edit_btn.hidden = false;
            let tabla = edit_btn.parentElement.parentElement.getElementsByTagName("table")[0];
            let tds = tabla.querySelectorAll("td");
            tds.forEach(function (e) {
                let value = e.querySelector("input").value;
                e.style.backgroundColor="white";
                if (value != "") {
                    e.innerHTML = `<span>${value}</span>`;
                    e.className = "fill";
                }
                else {
                    e.innerHTML = `<span></span>`;
                    e.className = "empty";
                }
            });
        });
        element.addEventListener("click", cambioColor); 
    });
}

function cambioColor () {
    let btn = document.querySelectorAll(".colorBtn");
    btn.forEach(function(element) {
        element.addEventListener("click", function() {
            let color = element.innerHTML;
            let tds = element.parentElement.parentElement.querySelector("table").querySelectorAll("td");
            tds.forEach(function(td) {
                let cl = td.className;
                /*
                if (cl == "fill") {
                    if (color == "Azul") {
                        td.style.color = `blue`;
                    }
                    else if (color == "Rojo") {
                        td.style.color = `red`;
                    }
                    else {
                        td.style.color = `green`;
                    }
                }
                
                else*/ if (cl =="empty") {
                    if (color == "Azul") {
                        td.style.backgroundColor = `blue`;
                    }
                    else if (color == "Rojo") {
                        td.style.backgroundColor = `red`;
                    }
                    else {
                        td.style.backgroundColor = `green`;
                    }
                }
            })
            })
        })
}

function selecCelda () {
    let celdas = document.querySelectorAll(".fill");
    celdas.forEach(function(element) {
        element.addEventListener("click", function () {
            let c = element.style.backgroundColor;
            if (c == "white") {
                element.style.backgroundColor = "rgb(126, 212, 126)";
            }
            else {
                element.style.backgroundColor = "white";
            }
        });
    });
}
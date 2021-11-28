/* Cartones azules */
let agregar_azul = document.getElementById("carton_azul");
agregar_azul.addEventListener('click', agregarCartonAzul);
agregar_azul.addEventListener('click', borrarCarton);

function agregarCartonAzul() {
    let cart = document.getElementById("c_azules");
    cart.innerHTML += "<div class='carton'>\
                        <table class=carton_azul>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                        </table>\
                        <div>\
                        <button class='eliminar_carton'>Eliminar</button>\
                        <button class='editar_carton'>Editar</button>\
                        </div>\
                        </div>"
}

function borrarCarton() {
    let borrar_btn = document.querySelectorAll(".eliminar_carton")
    borrar_btn.forEach(function(element) {
    element.addEventListener('click', function() {
        element.parentElement.parentElement.remove();
        });
    });
}



/* Agregar funcion a AddEL de button "editar"*/
function editarCarton () {
    let editar = document.querySelectorAll(".editar_carton");
    editar.forEach(function (element){
        element.addEventListener("click", function(){
            let tds = document.querySelectorAll("td");
            tds.forEach(function (element) {
            element.innerHTML += "<input type=text>"});
        })
    })
};

/* Cartones rojos */
let agregar_rojo = document.getElementById("carton_rojo");
agregar_rojo.addEventListener('click', agregarCartonRojo);
agregar_rojo.addEventListener('click', borrarCarton);

function agregarCartonRojo() {
    let cart = document.getElementById("c_rojo");
    cart.innerHTML += "<div class='carton'>\
                        <table class='carton_rojo'>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                        </table>\
                        <div>\
                        <button class='eliminar_carton'>Eliminar</button>\
                        <button class='editar_carton'>Editar</button>\
                        </div>\
                        </div>"
}

/* Cartones verdes */
let agregar_verde = document.getElementById("carton_verde");
agregar_verde.addEventListener('click', agregarCartonVerde);
agregar_verde.addEventListener('click', borrarCarton);

function agregarCartonVerde() {
    let cart = document.getElementById("c_verde");
    cart.innerHTML += "<div class='carton'>\
                        <table class='carton_verde'>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                        </table>\
                        <div>\
                        <button class='eliminar_carton'>Eliminar</button>\
                        <button class='editar_carton'>Editar</button>\
                        </div>\
                        </div>"
}

/* Cartones musicales */
let agregar_mus = document.getElementById("carton_mus");
agregar_mus.addEventListener('click', agregarCartonMus);
agregar_mus.addEventListener('click', borrarCarton);

function agregarCartonMus() {
    let cart = document.getElementById("c_mus");
    cart.innerHTML += "<div class='carton'>\
                        <table class='carton_mus'>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                            <tr>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                                <td></td>\
                            </tr>\
                        </table>\
                        <div>\
                        <button class='eliminar_carton'>Eliminar</button>\
                        <button class='editar_carton'>Editar</button>\
                        </div>\
                        </div>"
}

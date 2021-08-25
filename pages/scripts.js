let agregar_azul = document.getElementById("carton_azul");
agregar_azul.addEventListener('click', agregarCarton);
agregar_azul.addEventListener('click', borrarCarton);


function agregarCarton() {
    let cart = document.getElementById("c_azules");
    cart.innerHTML += "<div class='carton'>\
                        <table>\
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
                        <button class='eliminar_carton'>Eliminar</button>\
                        </div>"
}

function borrarCarton() {
    let borrar_btn = document.querySelectorAll(".eliminar_carton")
    borrar_btn.forEach(function(element) {
    element.addEventListener('click', function() {
        element.parentElement.remove();
        });
    });
}

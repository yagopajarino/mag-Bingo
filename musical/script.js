let c
/*
fetch('canciones.txt')
    .then(response => response.text())
    .then(text => c = text)
*/

// TODO generar forma de leer canciones.txt
c = "Abriendo Caminos - Diego Torres;Ahora Te Puedes Marchar - Luis Miguel;Amor Salvaje - Chaqueño Palavecino;Another Brick In The Wall, Pt. 2 - 2011 Remastered Version - Pink Floyd;Antes Que Ver El Sol - Coti;Bendita Tu Luz - Maná;Bicho Bicho - Los Fatales;Bohemian Rhapsody - Queen;Cambalache - Carlos Gardel;Caraluna - Bacilos;Celebra La Vida - Axel;Ciega, Sordomuda - Shakira;Ciudad Mágica - Tan Bionica;Color Esperanza - Diego Torres;Como Alí - Los Piojos;Como Eran Las Cosas - Babasónicos;Corazón Con Agujeritos - Chiquititas;Corazón en venta - Andrés Calamaro;Costumbres Argentinas - Los Abuelos De La Nada;Cuando Calienta El Sol - Luis Miguel;Dance Monkey - Tones And I;Dancing Queen - ABBA;Descontrolado - Jóvenes Pordioseros;El Bombón - Los Palmeras;Ella - Tan Bionica;Esos Locos Bajitos - Joan Manuel Serrat;Estoy Saliendo Con un Chabon - Los Sultanes;Flaca - Andrés Calamaro;Harry Potter - The Session;Help! - The Beatles;Humanos a Marte - Chayanne;Ilariê - Xuxa;La Cobra - j mena;La Vida Es Un Carnaval - Celia Cruz;La Vuelta Al Mundo - Calle 13;Livin' la Vida Loca - Ricky Martin;Lloviendo Estrellas - Cristian Castro;Los Piratas - Los Auténticos Decadentes;Madre Tierra (Oye) - Chayanne;Mal Acostumbrao - Mau y Ricky;Maldita Noche - Bandana;Mariposa tecknicolor - Fito Paez;Minutos - Ricardo Arjona;Ni Una Sola Palabra - Paulina Rubio;Obsesionario en la Mayor - Tan Bionica;Oops!...I Did It Again - Britney Spears;Oración del Remanso - Los Puesteros;Panamericano - Mc Lagrot;Para No Verte Más - La Mosca Tse-Tse;Resistiré - Duo Dinamico;Rolling in the Deep - Adele;Rosas - La Oreja de Van Gogh;SUBEME LA RADIO (feat. Descemer Bueno & Zion & Lennox) - Enrique Iglesias;Saca La Mano Antonio - Las Primas;Somos Novios - Armando Manzanero;Somos Uno (feat. Abel Pintos) - Axel;Start Me Up - Remastered 2009 - The Rolling Stones;Stayin Alive - Bee Gees;Suave - Luis Miguel;Sueños - Diego Torres;The Imperial March (Darth Vader's Theme) - John Williams;The Ketchup Song (Aserejé) - Spanglish Version - Las Ketchup;Todo De Ti - Rauw Alejandro;Torero - Chayanne;Tren Del Cielo - Soledad;Tus Ojos - Los Cafres;Un'Estate Italiana (Notti Magiche) - Stadio Version - Gianna Nannini;Wannabe - Spice Girls;Échame La Culpa - Luis Fonsi;Índigo - Camilo"


body = document.querySelector("body")
selector = document.createElement("select")
selector.classList = "canciones"
selector.name = "canciones"

canciones = c.split(";")
canciones.forEach(cancion => {
    let option = document.createElement("option")
    option.textContent = cancion
    option.classList.toggle("songSelector")
    selector.appendChild(option)
});

body.appendChild(selector)


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


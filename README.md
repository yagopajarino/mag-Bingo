# mag-Bingo 📝

Tablero numérico para control de cartones tradicionales y sistema de bingo musical: armado de cartones, integración con Spotify y planilla de control para stream.

## Requerimientos

* Python 3.6 o superior 👉 <a href="https://www.python.org/downloads/">Descarga python</a>
* Instalación de librerías

    ```
    pip install -r requirements.txt
    ```

## Utilización musical  ⚙️

app.py toma el json descargado de spotify almacenado en tracks.json y lo parsea para crear tuplas del tipo (nombre_cancion, artista) que luego utiliza para armar los cartones.
El diseño está planteado como string HTML que luego es impreso en PDF utilizando <a href="https://pypi.org/project/pdfkit/">pdfkit</a>

Workflow:
1. Obtener lista de canciones Spotify siguiendo musical/get_playlist_tracks.txt
2. Parametrizar musical/app.py - Cantidad de cartones, ruta de salida, html, css

## Contacto
En caso de dudas, consutas, mejoras 👉 <a href="https://yagopajarino.github.io/repos-contact/?mag-Bingo" target="_blank">Get in touch</a>

## Invitame un cafecito :money_with_wings:
Este repositorio es de uso libre bajo licencia MIT pero tu donación ayuda a mantenero y mejorarlo.

[![Invitame un café en cafecito.app](https://cdn.cafecito.app/imgs/buttons/button_3.svg)](https://cafecito.app/yagopajarino)

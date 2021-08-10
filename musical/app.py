import pandas as pd
import requests
import json
import sys
import numpy as np
import pdfkit


# Lista de tuplas (cancion, artista)
j = open("tracks.json","r")
data = json.load(j)

tracks = []
for x in data["items"]:
    song = x["track"]["name"]
    artist = x["track"]["album"]["artists"][0]["name"]
    tracks.append((song, artist))
    
q = len(tracks)

# Armado de carton HTML
options = {
    "orientation":"Landscape",
    'page-size': 'Letter',
    'encoding': "UTF-8",
    'quiet': '',
}

# Iniciar aca loop de cartones

def print_cartones(cantidad):
    cartones = {}
    n_carton = 1
    for x in range(cantidad):
        print("Printing {} of {}".format(n_carton,cantidad))
        html_code = """
        <html>
            <style>
                body {
                    text-align:center;
                    font-family:Arial;
                    color: #c603fc;
                }

                table {
                    display: flex;
                    justify-content: center;

                }

                td {
                    border: 2px solid;
                    width:100px;
                    height:100px;
                    padding: 10px;
                }

                .empty {
                    background-color: #c603fc;
                }

                .filled {
                    text-align:center;
                    font-weight: 200;
                }

                p{
                    padding-top: 20px;
                }

                a {
                    text-decoration:none;
                }

                .footer {
                    position:absolute;
                    bottom:0;
                    width:100%;
                    text-align:center;
                }
            </style>
            <body>
                <h1>Bingo musical MAG</h1>"""

        html_code += "<h2>Cartón nro: %s</h2> <table> " % (str(n_carton).zfill(2))

        nros = list(np.random.choice(range(1,q), 15, replace=False))
        pos = list(np.random.choice(range(0,27), 15, replace=False))
        cartones[n_carton] = nros
        n_pos = 0
        for f in range(1,4):
            html_code += "<tr>"
            for c in range(1,10):
                if n_pos in pos:
                    inner_html = str(tracks[nros[0]][0] + " - " + tracks[nros[0]][1])
                    html_code += "<td class='filled'>{}</td>".format(inner_html)
                    nros = nros[1:]
                else:
                    html_code += "<td class='empty'></td>"
                n_pos += 1
            html_code += "</tr>"

        html_code += """    
        </table>
        <p>Accedé a la playlist en <a href="https://open.spotify.com/playlist/6kSIoB0kOUq5QQS3acx4ud?si=279be6ec23be4bb7">Spotify</a></p>
        <p class="footer">Made with ❤️ by <a href="https://github.com/yagopajarino/mag-Bingo">yagopajarino</a></p>
        </body>
        </html>
        """

        nombre_carton = "./cartones/musical_{}.pdf".format(n_carton)
        pdfkit.from_string(html_code, nombre_carton, options=options)
        n_carton += 1
    return cartones

def check_duplicados(cartones):
    repetidos = []
    for x in list(cartones.keys()):
        nros = sorted(cartones[x])
        n = 0
        for y in list(cartones.keys()):
            check = sorted(cartones[y])
            if nros == check:
                n += 1
        if n > 1:
            repetidos.append((x,y))
    return repetidos

cartones = print_cartones(5)
print(check_duplicados(cartones))
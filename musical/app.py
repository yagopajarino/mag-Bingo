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
tracks = sorted(tracks)

# Armado de carton HTML
options = {
    "orientation":"Landscape",
    'page-height': '25cm',
    'page-width': '20cm',
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
                    color: #cf34eb;
                    align-items:center
                }

                td {
                    border: 2px solid;
                    width:140px;
                    height:140px;
                    padding: 10px;
                }

                .empty {
                    background-color: #cf34eb;
                }

                .filled {
                    text-align:center;
                    font-weight: bold;
                    font-size: 20px;
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

        html_code += "<h2>Cartón nro: %s</h2> <table> " % (str(n_carton).zfill(3))

        nros = sorted(list(np.random.choice(range(0,q), 12, replace=False)))
        pos1 = list(np.random.choice([0,3,6,9,12,15], 4, replace=False))
        pos2 = list(np.random.choice([1,4,7,10,13,16], 4, replace=False))
        pos3 = list(np.random.choice([2,5,8,11,14,17], 4, replace=False))

        pos = sorted([*pos1, *pos2, *pos3])
        cartones[n_carton] = nros
        row1 = "<tr>"
        row2 = "<tr>"
        row3 = "<tr>"
        for nCol in range(0,6):
            n = [0,0,0]
            for nRow in range(0,3):
                p = 3*nCol + nRow
                if p in pos:
                    inner_html = str(tracks[nros[0]][0] + " - " + tracks[nros[0]][1])
                    if p % 3 == 0:
                        n[0] += 1
                        row1 += "<td class='filled'>{}</td>".format(inner_html)
                    elif p % 3 == 1:
                        n[1] += 1
                        row2 += "<td class='filled'>{}</td>".format(inner_html)
                    else:
                        n[2] += 1
                        row3 += "<td class='filled'>{}</td>".format(inner_html)
                    nros = nros[1:]
            if n[0] == 0:
                row1 += "<td class='empty'></td>"
            if n[1] == 0:
                row2 += "<td class='empty'></td>"
            if n[2] == 0:
                row3 += "<td class='empty'></td>"
                
        row1 += "</tr>"
        row2 += "</tr>"
        row3 += "</tr>"

        html_code += row1
        html_code += row2
        html_code += row3

        html_code += """    
        </table>
        <p>Accedé a la playlist en <a href="https://open.spotify.com/playlist/4jSsyCe6DEXHiAwTFRflgJ?si=02d15bcb6f754225">Spotify</a></p>
        <p class="footer">Made with ❤️ by <a href="https://github.com/yagopajarino/mag-Bingo">yagopajarino</a></p>
        </body>
        </html>
        """
        nombre_carton = "./cartones/musical_{}.pdf".format(str(n_carton).zfill(3))
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

cant = int(input("Nro de cartones: "))
cartones = print_cartones(cant)
print(check_duplicados(cartones))
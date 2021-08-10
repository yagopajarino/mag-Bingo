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
    
# Armado de carton HTML

options = {
    "orientation":"Landscape",
    'page-size': 'Letter',
    'encoding': "UTF-8",
    'quiet': '',
}


# Iniciar aca loop de cartones

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
        <h1>Bingo musical MAG</h1>
        <h2>Cartón nro: 00</h2>
        <table>
"""

nros = np.random.choice(range(1,70), 15, replace=False)
pos = np.random.choice(range(0,28), 15, replace=False)

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

pdfkit.from_string(html_code, 'out.pdf', options=options)
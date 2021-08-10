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
            color: red;
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
            background-color: red;
        }

        .filled {
            text-align:center;
            font-weight: 200;
        }
    </style>
    <body>
        <h1>Bingo musical MAG</h1>
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
</body>
</html>
"""

pdfkit.from_string(html_code, 'out.pdf', options=options)
import json
import pandas as pd


df = pd.read_excel("songs.xlsx")

tablero = open("tablero_musical.html", "w")

html = """
<!DOCTYPE html>
<html>
    <head>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <div id="salidos">
                <h2>Últimas 10 canciones</h2>
        </div>\n"""

df["wrap"] = df["Canción"] + " - " + df["Artista"]
df["wrap"].replace("¡Corre! - Jesse & Joy", "Corre! - Jesse & Joy", inplace=True)
canciones = list(df["wrap"].sort_values())[:-1]

html += "       <select class='canciones' name='canciones'>\n"

for x in canciones:
    html += "           <option class='songSelector' value='{}'>{}</option>\n".format(x,x)

html += "       </select>"

html += """
    </body>
    <script src="script.js" type="text/javascript"></script>
</html>"""

tablero.write(html)
tablero.close()

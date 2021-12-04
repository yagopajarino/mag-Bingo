import os

tablero = open("numerico/tablero.html", "w")

source = """<html>
        <head>
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&display=swap" rel="stylesheet">
            <link href="formato.css" rel="stylesheet">
        </head>
        <body>
            <table>
"""

totalN = int(input("Cantidad de números: "))
while totalN % 10 != 0:
    totalN = int(input("Cantidad de números: "))


for y in range(1,11):
    source += "                 <tr>\n"
    for x in range(0,totalN,10):
        source += "                     <td class='nosel'>{}</td>\n".format(str(x+y).zfill(2))
    source += "                 </tr>\n"

source += """ 
        </table>
    </body>
    <script type='text/javascript' src='scripts.js'></script>
</html>"""

tablero.write(source)
tablero.close()
print("Tablero creado")
    
        
        
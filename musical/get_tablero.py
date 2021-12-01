import json
import pandas as pd


df = pd.read_excel("songs.xlsx")

tablero = open("tablero_musical.html", "w")

df["wrap"] = df["Cancion"] + " - " + df["Artista"]
canciones = list(df["wrap"].sort_values())
file = open("canciones.txt", "w")
file.write(",".join(canciones))

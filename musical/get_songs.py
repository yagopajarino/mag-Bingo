import pandas as pd
import json

j = open("tracks.json","r")
data = json.load(j)

songs = []
artists = []
for x in data["items"]:
    song = x["track"]["name"]
    artist = x["track"]["album"]["artists"][0]["name"]
    songs.append(song)
    artists.append(artist)

df = pd.DataFrame(artists,columns=["Artista"])
df["Cancion"] = songs

df.to_excel("songs.xlsx", index=False)

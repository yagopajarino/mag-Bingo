import smtplib, ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import pandas as pd
import os

from pandas.core import indexing

def send_mail(asunto, destinatarios):
    msg = MIMEMultipart('alternative')
    msg['Subject'] = asunto
    msg['From'] = "Misioneros MAG"
    msg["To"] = "movimientoapostoladoguadalupe@gmail.com"
    html = open("mailing.html","r").read()
    part1 = MIMEText(html, 'html')
    msg.attach(part1)

    s = "Smtp.gmail.com"
    p = 465
    ssl_context = ssl.create_default_context()
    server = smtplib.SMTP_SSL(s, p, context=ssl_context)
    server.login(os.environ.get("user"),os.environ.get("pwd"))
    print("sesion iniciada")

    server.sendmail("movimientoapostoladoguadalupe@gmail.com", destinatarios, msg.as_string())
    print("mail enviado")
    server.quit()

def get_emails(csv_path):
    cont = pd.read_csv(csv_path)
    emails = cont["E-mail 1 - Value"]
    emails.drop_duplicates(inplace=True)
    if os.path.exists("emails.csv"):
        listado = pd.read_csv("emails.csv")['E-mail 1 - Value']
        listado = listado.append(emails)
        listado.drop_duplicates(inplace=True)
        listado.to_csv("emails.csv", index=False)
        return list(listado)
    else:
        emails.to_csv("emails.csv", index=False)
        return list(emails)

if __name__ == "__main__":
    destinatarios= get_emails("contacts.csv")
    destinatarios = destinatarios[100:]
    send_mail("Bingo Virtual MAG", destinatarios)
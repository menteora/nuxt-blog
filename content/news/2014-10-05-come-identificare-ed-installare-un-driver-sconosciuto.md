---
layout:       post
title:        Come identificare ed installare un driver sconosciuto su Windows
description:  Vediamo come installare un driver non riconosciuto dal sistema operativo senza usare programmi esterni
author:       menteora
category:     web
tags:         [driver, windows 7, windows xp]
comments:     true
share:        true
modified:     2014-10-05
jekyll_permalink:    /come-identificare-ed-installare-un-driver-sconosciuto
image:
  feature:    cpu.jpg
  preview:    cpu-thumb.jpg
  credit:     PublicDomainPictures
  creditlink: pixbay.com
---

Se dobbiamo installare un driver di cui conosciamo il nome, il modello ed il produttore non ci sono molti problemi.

Se invece ci troviamo di fronte **"unknown device"**, un driver che non viene riconosciuto dal sistema operativo e di cui sappiamo poco o niente, la cosa si complica.

![Device Manager](/images/device-manager.png)

Prima di installare applicazioni poco convincenti che ci promettono di trovare magicamente i driver non riconosciuti dal nostro sistema operativo, proviamo nel modo più semplice, partiamo con le informazioni che abbiamo già a disposizione.

## Procedura (valida sia per Windows 7 / Xp)

Su Windowx 7 andiamo in **Pannello di Controllo > Sistema > Gestione Dispositivi** 

Su Windows Xp andiamo in **Pannello di Controllo > Sistema > Hardware > Gestione periferiche**

Selezioniamo il device sconosciuto con il tasto destro ed andiamo in **Proprietà** dove scegliamo la voce **"Dettagli"**

![Dettaglio Driver](/images/driver-detail.png)

Qui possiamo trovare già molti indizi:

- **VEN_ :** le cifre successive a questa sigla identificano il vendor, il produttore del nostro device.
- **DEV_ :** le cifre successive a questa sigla identificano il device.

Naturalmente i caratteri **&** sono esclusi.

La combinazione di queste due informazioni ci permetterà di trovare il nostro driver sul sito [pcidatabase.com](http://www.pcidatabase.com)

Nella prima pagina possiamo scrivere la sigla del device in **device search**.
A questo punto vedremo qualcosa di simile.

![PciDatabase Device Search](/images/device-search.png)

Nel caso in cui dovessimo avere più righe, dovremmo scegliere quella che ha il **"Vendor Id"** uguale al nostro.

Ora sappiamo come si chiama il device per esteso.
Non resta che collegarci al sito del produttore e scaricare il driver che ci interessa.

## Alcune raccomandazioni

- Potrebbero esserci due versioni dello stesso driver per i sistemi operativi a 32 e 64 bit.
- Dovremmo evitare di cercare il driver su internet, la maggior parte dei risultati potrebbero non essere ufficiali, ma solo il traghetto verso qualche installazione spazzatura, quindi affidiamoci al sito del produttore (anche se magari sarà un pò più ostico da consultare).
- Evitiamo di installare applicazioni che ci promettono magicamente di trovare tutti i driver di cui abbiamo bisogno. A meno che non ci sia stato consigliato da un nostro amico esperto non installiamo niente, la maggiorparte delle applicazioni di questo tipo sono a pagamento e non risolvono il nostro problema.

---
layout:       post
title:        Come diventare un mago di JavaScript con CodeCombat
description:  Sarai un mago con la possibilità di manipolare il tempo in un gioco di ruolo OpenSource dove il tuo potere è JavaScript. Comanderai i tuoi eroi e vincerai la tua battaglia per imparare questo linguaggio?
author:       menteora
category:     web
tags:         [javascript, codecombat, programmare, gioco di ruolo, web]
comments:     true
share:        true
modified:     2014-06-15
permalink:    /come-diventare-un-mago-di-javascript-con-codecombat
image:
  feature:    codecombat-wallpaper.png
  preview:    codecombat-wallpaper-thumb.png
  credit:     CodeCombact.com
  creditlink: http://www.codecombact.com
---

Qualche settimana fa abbiamo visto come imparare a programmare per il web semplicemente divertendoci, superando livelli e sopratutto ["scrivendo codice" con CodeSchool](/news/come-imparare-nuovi-linguaggi-web-semplicemente-divertendosi).

Oggi invece parliamo di un vero e proprio **gioco di ruolo**: [CodeCombat](http://www.codecombat.com), per imparare a programmare in JavaScript.

## La logica di gioco

Molto semplice.

![CodeCombat Gameplay](/images/codecombat-gameplay-simplified.png)

Selezioniamo il personaggio da controllare, diamo gli ordini e vediamo il risultato sullo schermo.

Lo schermo è diviso in questo modo: 

- la parte *sinistra* dove vediamo i personaggi combattere e interagire con l'ambiente circostante,
- la parte *destra* dove possiamo scrivere le righe di codice.

### Un esempio

Vediamo un esempio tratto dal **livello 4**.
In questo livello abbiamo già imparato a muovere il nostro eroe, dobbiamo liberare la visuale al nostro arciere, muovere l'eroe per attirare l'attenzione dell'orco e farlo colpire dall'arciere.

```javascript
    // Facciamo muovere il nostro eroe a destra
    this.moveRight();
    // Gli facciamo rompere la porta
    this.bustDownDoor();
    // Lo facciamo muovere nuovamente verso destra verso l'orco
    this.moveRight();
    // Lo attiriamo per farci inseguire
    this.say("Hey there!");
    // Scappiamo verso sinistra
    this.moveLeft();
    this.moveLeft();
    // Comandiamo all'arciere di scoccare la freccia
    this.say("Attack!");
```

Vediamo uno screenshot del risultato:

![CodeCombat Gameplay](/images/codecombat-gameplay-characters.png)

## Modalità Campagna e Multiplayer

Con la **modalità Campagna** possiamo prendere dimestichezza con i comandi e avanzare nelle missioni, è adatta alle persone che si avvicinano per le prime volte al linguaggio e al gioco.

Con la **modalità Multiplayer** possiamo sfidare direttamente altri giocatori esperti sfruttando il login dei nostri social preferiti.

## Un gioco completamente OpenSource

### Dove puoi contribuire

Uno degli aspetti davvero interessanti di questo gioco non è solo l'idea e la realizzazione, ma anche il fatto che sia open source, rilasciato sotto licenza MIT e di conseguenza la possibilità che abbiamo di [contribuire al gioco scegliendo il ruolo più in linea i nostra preparazione tecnica](https://codecombat.com/contribute).

### Dove potresti trovare un lavoro

Nelle impostazioni del nostro account possiamo anche valutare se ricevere proposte lavorative, legate alla nostra bravura nel gioco.

Questi dettagli rendono questo gioco una piccola rivoluzione sia come approccio verso l'apprendimento e sia come veicolo verso un lavoro vero.

## Il mio test e i miei consigli

### Chrome e Firefox

Al momento del mio test ho usato solo Chrome *(Versione 35.0.1916.153 m)* perché non sono riuscito a farlo partire sotto Firefox *(Versione 30.0)*, non escludo che sia un mio problema locale, ma se avete dei problemi consiglio di optare per Chrome.

### Zoom

Su Chrome ho verificato un issue fastidiosa, ma risolvibile con poco.
Lo zoom iniziale non fa vedere i personaggi, questo renderebbe il gioco totalmente ingiocabile se non fosse che aumentando di poco lo zoom con il pulsante dentro al gioco *(**Attenzione:** non quello del browser)* il problema si risolve semplicemente.

### Certificato

Alcuni Javascript potrebbero non essere accettati al caricamento, quindi consiglio di caricarli come nella seguente immagine.

![CodeCombat Security Check](/images/codecombat-security.png)

## Conclusioni

L'idea, la realizzazione e le potenzialità di questo gioco superano altamente i difetti, speriamo che questo gioco cresca come la cultura di "saper" programmare!
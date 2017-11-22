---
layout:       post
title:        Tutti pronti per Drupal 8? (Parte 1)
description:  Drupal 8 sta per arrivare, cosa ci riserverà di nuovo?
author:       darthdrupal
category:     web
tags:         [cms, web, drupal, symfony]
comments:     true
share:        true
modified:     2015-08-03
image:
  feature:    drupal8.jpg
  preview:    drupal8-thumb.png
  credit:     Amazee Labs
  creditlink: http://www.amazeelabs.com/en/blog/fun-potatoes-other-wallpapers
---

Drupal 8 sta per uscire e porta con se un gran numero di migliorie sotto tutti gli aspetti. Che tu sia un Site Builder, uno sviluppatore di moduli o di temi oppure un semplice utilizzatore, Drupal 8 ha una valanga di novità per te.

Con questo iniziamo una serie di articoli per illustrare le novità del nostro CMS preferito.

## Authoring Experience
Uno dei principali aspetti su cui si sono focalizzati gli sviluppatori di Drupal è quello di rendere migliore l'uso della piattaforma a chi per mestiere crea contenuti. In poche parole coloro che effettivamente utilizzano un sito Drupal ogni giorno!

### WYSISYG!
Drupal 8 contiene già al suo interno un editor [WYSIWYG](http://it.wikipedia.org/wiki/WYSIWYG), nello specifico è stato scelto [CKEditor](http://ckeditor.com/).

### In-place Editing
Adesso è possibile anche modificare un contenuto live senza necessariamente passare dal form in backend. Una funzionalità molto utile in quei casi in cui sono necessarie piccole correzioni come un immagine mancante o una digitazione errata. Questa caratteristica è utilizzabile non solo sui contenuti ma anche sui profili utente, blocchi e altro!

Da notare che è stato realizzato un modulo ([Quick Edit](https://drupal.org/project/quickedit)) che rende disponibile questa feature anche su Drupal 7.

### Pagina di creazione contenuti ridisegnata
La pagina di creazione dei contenuti adesso è formata da due colonne una per i campi principali che riguardano l'effettivo contenuto e una per le impostazioni extra. Questa divisione dovrebbe permettere l'autore del contenuto a concentrarsi di più sul suo lavoro effettivo senza avere sott'occhio anche altre impostazioni.

## Mobile First!

Tutto quanto in Drupal 8 è stato pensato per essere utilizzato da dispositivi mobile. Tutti i temi presenti all'interno del core sono responsive. Esiste anche un supporto nativo per il ridimensionamento delle immagini.

Viene provveduto un supporto nativo anche per rendere responsive le tabelle. Ad esempio è possibile dichiarare l'importanza di determinate colonne (high, medium, low) per far si che al diminuire della dimensione dello schermo vengano automaticamente nascoste per far rientrare comunque la tabella all'interno della schermata. Questa API è inclusa anche all'interno di Views (che per inciso è stato incluso nel core)!

La toolbar di amministrazione è stata totalmente rinnovata ed è anch'essa responsive.

Molto lavoro è stato fatto anche per diminuire il più possibile l'impatto che ha la parte front-end sulle performance. Ad esempio per i visitatori anonimi Drupal 8 non carica nessun javascript, inoltre caratteristiche che facevano uso massivo di javascript, come il modulo overlay, sono state rimosse in favore di alternative più light e mobile friendly.

Ti è venuta un pò di acquolina in bocca? Leggi [il prossimo articolo](/news/le-novita-di-drupal8-part2) per scoprire tutte le altre novità su Drupal 8.

Fonte: [The Ultimate Guide to Drupal 8](https://www.acquia.com/resources/ebooks/ultimate-guide-drupal-8)
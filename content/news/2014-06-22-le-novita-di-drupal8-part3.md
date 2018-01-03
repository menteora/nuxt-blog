---
layout:       post
title:        Tutti pronti per Drupal 8? (Parte 3)
description:  Drupal 8 sta per arrivare, quali novità ci riserverà?
author:       darthdrupal
category:     web
tags:         [cms, web, drupal, multilingual]
comments:     true
share:        true
modified:     2015-08-03
jekyll_permalink:    /le-novita-di-drupal8-part3
image:
  feature:    drupal-8-potato.jpg
  preview:    drupal-8-potato-thumb.jpg
  credit:     Amazee Labs
  creditlink: http://www.amazeelabs.com/en/blog/fun-potatoes-other-wallpapers
---

Drupal 8 sta per uscire e porta con se un gran numero di migliorie sotto tutti gli aspetti. Che tu sia un Site Builder, uno sviluppatore di moduli o di temi oppure un semplice utilizzatore, Drupal 8 ha una valanga di novità per te.

Con [l'articolo precedente](/news/le-novita-di-drupal8-part2) abbiamo illustrato le novità per i Site Builders.

Oggi invece ci concentreremo sulle novità della parte Multilingua di Drupal 8.

## D8MI

Il sistema di gestione multilingua in Drupal 8 è stato totalmente rinnovato. L'[iniziativa relativa](http://www.drupal8multilingual.org/) (D8MI Drupal 8 Multilingual Initiative) guidata da [Gábor Hojtsy](https://www.acquia.com/about-us/team/g-bor-hojtsy) di Acquia ha visto coinvolti più di 1000 contributori.

Per conoscere in dettaglio cosa è stato sviluppato relativamente al multilingua potete fare riferimento al sito dell'[iniziativa](http://www.drupal8multilingual.org/) oppure alla relativa sezione sul [sito di Gábor](http://hojtsy.hu/multilingual-drupal8).

## Multilingual Ready!

Già dall'installer riscontriamo delle novità. Drupal 8 rileverà automaticamente la lingua dal browser e selezionerà la relativa voce nel menu drop down con la lista delle lingue utilizzabili.

Inoltre se viene selezionata una lingua diversa dall'inglese verrà **automaticamente scaricata** l'ultima versione disponibile del relativo file di traduzione dal portale [Localize](https://localize.drupal.org).

La lingua inglese non è più considerata "speciale". Se viene selezionata una lingua diversa, la lingua inglese viene disabilitata e quindi non è più necessario configurarla per far funzionare correttamente il sito. Di conseguenza è stata resa anche ["traducibile"](http://hojtsy.hu/blog/2013-aug-20/drupal-8-multilingual-tidbits-12-english-can-now-be-translated), cioè è possibile avere versioni custom della stessa lingua così da poter modificare alcune stringhe dell'interfaccia utente (ad esempio alcuni potrebbero volere Sign In/Sign Out invece di Log in/Log out).

## Meno moduli aggiuntivi

Fino a Drupal 7 per la realizzazione di un sito multilingua erano necessari circa 30 moduli aggiuntivi e un bel pò di configurazione. In Drupal 8 tutte queste funzionalità (e più!) sono state concentrate in **soli quattro moduli**:

**Language** - Il modulo base da cui dipendono gli altri moduli.

**Configuration Translation** - Rende cose come i blocchi, i menu, le viste, ecc. "traducibili"(simile al modulo [i18n](http://drupal.org/project/i18n) in Drupal 7).

**Content Translation** - Rende cose come i nodi, termini di tassonomia e commenti "traducibili" (da non confondere con l'omonimo modulo core di Drupal 7, piuttosto è analogo al modulo [Entity Translation](https://drupal.org/project/entity_translation)).

**Interface Translation** - Rende l'interfaccia utente "traducibile" (simile al modulo Locale presente nel core di Drupal 7).

La divisione delle feature in quattro moduli distinti serve a lasciare al site builder di turno la libertà di scegliere la combinazione più adatta alle sue necessità.

## Selezione della lingua ovunque!

Tutto è stato "traducibile", dalle impostazioni di sistema, ai componenti del sito come blocchi, viste e menu, ai valori dei singoli campi di un contenuto.

Per le entità come i nodi, i commenti, i termini di tassonomia, gli utenti esistono anche più opzioni, come la possibilità di visualizzare o meno il selettore della lingua, di assegnare ai nuovi contenuti una lingua di default che può essere quella globale del sito, quella preferita dell'autore o qualsiasi altra viene specificata.

## Interfacce per le traduzioni più efficienti

Notevoli sforzi sono stati fatti per incrementare la user experience delle funzionalità multilingua di Drupal 8. Vedrete interfacce utente più efficienti e integrate in modo migliore.

![Drupal8 Translation UI](/images/drupal8translationform.jpg)

## Transliteration nel core

Il modulo [Transliteration](https://drupal.org/project/transliteration) è stato aggiunto al core di Drupal 8! Per chi non lo sapesse tramite questo modulo i caratteri speciali come "ç" e "ü" vengono convertiti automaticamente in "c" e "u" per essere utilizzati in machine names, file upload, paths e risultati di ricerca.

## ...Inoltre

Per i site builders alcuni altri aspetti interessanti sono:

Molte pagine incluse nel core realizzate con Views possono essere personalizzate in base alla lingua più facilmente rispetto a prima, specialmente per quanto riguarda le viste amministrative.

Il modulo Content Translation di Drupal 8 si integra molto bene con Search e le sue API.

E' stato aggiunto il supporto per la lingua di amministrazione per consentire una gestione più semplice dei siti multilingua da parte dell'amministratore.

Seguici ancora e nelle prossime settimane illustreremo [altre novità](/news/le-novita-di-drupal8-part4) in arrivo su Drupal 8!

Fonte: [The Ultimate Guide to Drupal 8](https://www.acquia.com/resources/ebooks/ultimate-guide-drupal-8)
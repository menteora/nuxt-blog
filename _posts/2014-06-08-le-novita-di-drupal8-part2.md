---
layout:       post
title:        Tutti pronti per Drupal 8? (Parte 2)
description:  Drupal 8 sta per arrivare, quali novità ci riserverà?
author:       darthdrupal
category:     web
tags:         [cms, web, drupal, symfony]
comments:     true
share:        true
modified:     2015-08-03
image:
  feature:    drupal8-p2.jpg
  preview:    drupal8-p2-thumb.png
  credit:     Rob Bayliss
  creditlink: https://lastcallmedia.com/drupal-8-lessons-for-developers
---

Drupal 8 sta per uscire e porta con se un gran numero di migliorie sotto tutti gli aspetti. Che tu sia un Site Builder, uno sviluppatore di moduli o di temi oppure un semplice utilizzatore, Drupal 8 ha una valanga di novità per te.

Con [l'articolo precedente]({% post_url 2014-05-25-tutti-pronti-per-drupal8-part1 %}) abbiamo illustrato le novità in merito di Authoring e Mobile.
Oggi invece parleremo delle principali novità per i Site Builders, coloro che plasmano abilmente Drupal per soddisfare le richieste dei propri clienti.

## Views nel Core!
Per chi ancora non lo sapesse finalmente il modulo più utilizzato in assoluto è finalmente stato incluso all'interno del core di Drupal.

Con la sua inclusione molti blocchi di default (Content, People, Files, RSS Feeds) e la stessa home page sono state convertiti in viste e di conseguenza il livello di personalizzazione è cresciuto notevolmente.

Ovviamente sono stati fatti alcuni improvements come la possibilità di creare tabelle responsive oppure la possibilità di esportare l'output di una vista in formato JSON che può essere utilizzato da applicazioni mobile o altri servizi esterni.

## Blocchi migliorati
Per cominciare molti componenti che prima risiedevano direttamente nel codice adesso sono stati trasformati in blocchi (ad esempio i breadcrumb, il site name, lo slogan), così da permettere una migliore organizzazione dell'interfaccia utente.

Inoltre adesso è possibile utilizzare lo stesso blocco in più regioni contemporaneamente senza dover ricorrere a moduli esterni.

E' possibile creare blocchi di tipo diverso esattamente come avviene per i tipi di contenuto. Questo permette un controllo più granulare per quanto riguarda lo stile, campi aggiuntivi diversi, ecc.

## Nuovi Field Types disponibili

Drupal 8 porta con se alcuni nuovi field types da poter usare nelle nostre entity. Tra questi ci sono Entity Reference, Date, Phone, E-mail e Link.

Anche l'impostazione che rende "commentabile" una entity è stata trasformata in un field type.

## Form modes

In Drupal 7 era stata introdotta la possibilità di gestire diverse visualizzazioni in base al contesto (l'esempio tipico è quello di mostrare la thumbnail nella visualizzazione teaser del nostro contenuto e invece visualizzare l'immagine a dimensione normale nella visualizzazione di default).

Questo meccanismo è stato introdotto in Drupal 8 anche per i form. Ad esempio potremmo decidere di snellire al massimo il form che un utente deve compilare in fase di registrazione, magari mostrando solo i campi nome utente e password nascondendo tutti gli altri.

## Less (modules) is more

Drupal 8 è stato snellito di parecchi moduli, Blog, Dashboard, Overlay, giusto per citarne alcuni.
[Questo articolo](https://www.acquia.com/blog/tutorial-drupal-8-site-building-preview-less-more) nel blog di Acquia illustra in dettaglio quali moduli il core di Drupal 8 ha reso obsoleti.

Bisogna sottolineare che per la prima volta Drupal avrà già all'interno del suo core le funzionalità necessarie per costruire un sito web discretamente complicato senza dover ricorrere all'installazione di 30 e più moduli aggiuntivi!

## Take a Tour

Il nuovo modulo Tour aiuterà i site builders con una serie di consigli utili che appariranno contestualmente all'attività che si sta svolgendo per fornire una panoramica dell'interfaccia di amministrazione, introdurre le nuove terminologie, seguire passo passo nella configurazione di determinate componenti del sito.

Seguici ancora e tra due settimane illustreremo [altre novità]({% post_url 2014-06-22-le-novita-di-drupal8-part3 %}) in arrivo su Drupal 8!

Fonte: [The Ultimate Guide to Drupal 8](https://www.acquia.com/resources/ebooks/ultimate-guide-drupal-8)
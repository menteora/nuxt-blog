---
layout:       post
title:        Sotto il cofano di Dinamicamente - Jekyll e Markdown
description:  Due strumenti per la gestione documentale con quel tocco magico che trasforma tutto in blog.
author:       darthdrupal
category:     jekyll
tags:         [jekyll, markdown, md, informatica, blog]
comments:     true
share:        true
modified:     2014-04-12
image:
  feature:    under-the-hood-opt.jpg
  preview:    under-the-hood-opt-thumb.jpg
  credit:
  creditlink:
---

Io e il mio socio avevamo una necessità: un wiki affidabile che ci permettesse di **trovare facilmente** le informazioni che ci occorrono e allo stesso tempo la possibilità di **condividerle con il pubblico**, ma soprattutto doveva essere **portabile** con la stessa facilità con cui si copia e incolla un banale **file di testo** e possibilmente anche **versionabile**.

Nel frattempo il nostro blog stava invecchiando e necessitava un restyling totale.

Come abbiamo accennato nell'[articolo precedente](/news/dinamicamente-org-cambia-volto), cercando di risolvere contemporaneamente le due necessità abbiamo scelto un metodo che ci permette di **scrivere documentazione** in modo rapido ed efficace (Markdown) e allo stesso tempo di pubblicare questi file sottoforma di **blog** ([Jekyll](http://jekyllrb.com/)).

In tutto ciò non bisogna dimenticare la comodità straordinaria di avere tutta la piattaforma sotto controllo di versione tramite **Git**.

Andiamo a scoprire rapidamente che cosa abbiamo messo sotto il cofano.

## Markdown & Jekyll

Markdown è un sistema di formattazione del testo che consente di **convertire facilmente** un file plain text in qualsiasi altro formato supportato (ad es. HTML, PDF, RTF, and more!).

## Perchè usarlo?

A differenza dei classici meta linguaggi Markdown risulta più **leggibile** e permette una **rapida stesura del testo** formattato (ad esempio basta digitare un # all'inizio di una frase per creare titolo invece di racchiuderlo tra tag `<h1></h1>`, oppure si può creare un lista semplicemente aggiundo il carattere * all'inizio di ogni elemento piuttosto che scrivere tutta la struttura di tag ul li.)

## Here comes the magic!

Come dare un senso logico a tutto questo ammasso di file plain text? Facile, con Jekyll!

[Jekyll](http://jekyllrb.com/) è un software sviluppato in ruby che permette di generare **siti statici** utilizzando dei template e dei file markdown. E' una soluzione molto completa in quanto contiene già a default tutto quello che occorre per la **gestione di un blog** (tag, categorie, permalink).

Installarlo è semplicissimo, bastano [Ruby](http://www.ruby-lang.org/en/downloads/), [RubyGems](http://rubygems.org/pages/download) e il comando:

```bash
gem install jekyll
```

Quindi possiamo creare la base per il nostro nuovo blog con il comando:

```bash
jekyll new /cartella/di/destinazione
```

I nostri file md vanno copiati all'interno della cartella **_posts** modificando il nome file utilizzando questa convenzione

```bash
YYYY-MM-DD-title-of-the-post.md
```

Se volessimo modificare invece la grafica del nostro blog bisogna intervenire sui file di layout presenti all'interno della cartella **_layouts**.

Possiamo osservare il risultato finale utilizzando il comando:

```bash
jekyll serve
```

Il nostro nuovo blog si troverà all'interno della cartella **_site** che verrà generata da Jekyll in fase di building, e non servirà altro se non effettuare il deploy dei file sul nostro hosting.

La [documentazione di Jekyll](http://jekyllrb.com/docs/home/) è veramente esaustiva e fornisce tutto il necessario per partire e per personalizzare in ogni sua parte il nostro nuovo blog.

Il risultato dell'utilizzo di questo strumento è un blog che ha tutti i **vantaggi di un sito statico**: velocità, poche pretese in materia di risorse (non è più necessario un database per il cms), dimensioni ridotte (si è passati dai circa 40MB a meno di 7MB)). Inoltre abbiamo raggiunto la **comodità** di poter gestire tutto tramite semplici file plain text versionabili.

Stai pensando di convertire il tuo blog in un sito statico? Sapevi che Jekyll dispone già di **strumenti** in grado di convertire gli articoli del tuo blog esistente? Nei [prossimi articoli](/news/migrare-un-blog-a-jekyll-da-altre-piattaforme) parleremo di questo.

Lascia un commento, facci sapere se ti interessa.
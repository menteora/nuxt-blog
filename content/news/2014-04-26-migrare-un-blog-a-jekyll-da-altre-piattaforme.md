---
layout:       post
title:        Migrare un blog a Jekyll da altre piattaforme
description:  Come migrare automaticamente un blog da piattaforme standard a Jekyll.
author:       darthdrupal
category:     jekyll
tags:         [jekyll, markdown, cms, drupal, migrazione, blog]
comments:     true
share:        true
modified:     2014-04-26
image:
  feature:    migrate-to-jekyll.jpg
  preview:    migrate-to-jekyll-thumb.jpg
  credit:     Caroline Gutman
  creditlink: http://www.carolinegutman.com/home
---

Dopo aver letto il nostro [articolo precedente](/news/sotto-al-cofano-di-dinamicamente-jekyll-e-markdown) sentite anche voi il bisogno irrefrenabile di migrare il vostro blog a [Jekyll](http://jekyllrb.com/)?

Nessun problema, Jekyll mette a disposizione una serie di importers che consentono la migrazione del proprio blog dai CMS più conosciuti e oltre.

## Come fare?

Inutile dire che il procedimento è estremamente semplice.

Il primo passo è installare lo strumento jekyll-import:

```bash
gem install jekyll-import
```

Una volta installato basta impostare il comando di migrazione in base alla piattaforma dalla quale vogliamo estrarre gli articoli da migrare, nel nostro caso specifico si trattava di Drupal7. Basta creare uno script con all'interno il comando:

```bash
ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::Drupal7.run({
        "dbname"   => "name",
        "user"     => "myuser",
        "password" => "mypassword",
        "host"     => "myhost",
        "prefix"   => "mytableprefix"
    })'
```

Jekyll import estrarrà gli articoli presenti nel database e li inserirà nella cartella **_posts** rinominandoli già secondo la convenzione:

```bash
YYYY-MM-DD-title-of-the-post.md
```

Per quanto riguarda gli URL dei post pre migrazione è possibile mantenerli uguali impostando correttamente il parametro **permalink** all'interno del file **_config.yml**.

La [documentazione ufficiale](http://import.jekyllrb.com/docs/home/) è un punto di riferimento essenziale per approfondire i meccanismi di migrazione e, perchè no, contribuire a migliorarli.

Sei interessato ad approfondire altri aspetti riguardanti Jekyll? Lascia un commento e facci sapere!
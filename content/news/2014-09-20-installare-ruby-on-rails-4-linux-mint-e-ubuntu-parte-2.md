---
layout:       post
title:        Torniamo sui binari dello sviluppo Agile con Rails 4 (Parte 2)
description:  In questo episodio impariamo ad installare Ruby on Rails 4 su Linux Mint e Ubuntu
author:       menteora
category:     web
tags:         [ruby, rails 4, agile, web, programmazione, installazione, ubuntu, linux mint]
comments:     true
share:        true
modified:     2014-09-20
jekyll_permalink:    /installare-ruby-on-rails-4-linux-mint-e-ubuntu-parte-2
image:
  feature:    railroad-rails.jpg
  preview:    railroad-rails-thumb.jpg
  credit:     44833
  creditlink: http://pixabay.com/en/railroad-rails-tracks-train-166535/
---

Prima delle ferie abbiamo visto [perché scegliere Ruby on Rails](/news/introduzione-a-ruby-on-rails-4-parte-1). Oggi lo installiamo sul nostro sistema Ubuntu/Linux Mint.

## RVM

RVM è un acronimo di Ruby Version Manager e ci permette avere varie installazioni di Ruby contemporaneamente nel nostro sistema operativo.

```bash
curl -sSL https://get.rvm.io | bash -s stable  
```

Seguiamo le eventuali indicazioni che ci presenta questo comando. Nel mio caso devo digitare:

```bash
source /home/menteora/.rvm/scripts/rvm
```

Grazie a questo, posso di usare un nuovo comando: `rvm`. Per gli utenti Ubuntu nel caso in cui il comando non venga riconosciuto seguire questa [guida ufficiale](https://rvm.io/integration/gnome-terminal).

Guardiamo la versione che abbiamo appena installato:

```bash
rvm version

rvm 1.25.30 (stable) by Wayne E. Seguin <wayneeseguin@gmail.com>, 
Michal Papis <mpapis@gmail.com> [https://rvm.io/]
```

## Ruby

Installiamo Ruby:

```bash
rvm requirements --autolibs=enable`
```

Temporaneamente diamo il comando a rvm di scaricarsi le dipendenze con il comando [--autolibs=true](http://rvm.io/rvm/autolibs).

A questo punto se vogliamo installare l'ultima versione di Ruby:

```bash
rvm install ruby
```

Se, invece, desideriamo installare una versione specifica di Ruby:

```bash
rvm install 2.1.2
```

Possiamo anche decidere quale versione di Ruby usare e quale mettere come default, per esempio:

```bash
rvm use 2.1.2
rvm --default 2.1.2
```

Nel nostro caso ne abbiamo installata solo una, non sono necessari questi due comandi.
Se volessimo sapere lo stato attuale delle nostre modifiche:

```bash
rvm list

rvm rubies
=* ruby-2.1.2 [ x86_64 ]
# => - current
# =* - current && default
#  * - default
```

oppure possiamo già usare il comando:

```bash
ruby -v

ruby 2.1.2p95 (2014-05-08 revision 45877) [x86_64-linux]
```

## Rails

Ora possiamo installare nuove gemme e installare Rails.

```bash
gem install rails --no-ri --no-rdoc
```

Con l'opzione **--no-ri --no-rdoc** evitiamo di installare la documentazione, visto che è facilmente consultabile via web ed occupa spazio inutile.

Controlliamo la versione appena installata:

```bash
rails -v

Rails 4.1.6
```

Se volessimo aggiornare la versione di rails:

```bash
gem update rails
```

Se vogliamo invece visualizzare le gemme locali:

```bash
gem list local rails

*** LOCAL GEMS ***

*** LOCAL GEMS ***

rails (4.1.6)
sprockets-rails (2.1.4)
```

Anche in questo caso possiamo decidere quale versione usare.
Se vogliamo usare una versione specifica di Rails dobbiamo usare questo comando:

```bash
rails _4.1.6_ --version
```

Sicuramente avere la possibilità di installare varie versioni del nostro ambiente di sviluppo è molto efficace, ci permette di essere molto flessibili in fase di sviluppo e questo è sicuramente un altro punto a favore di Rails.

Buon divertimento!
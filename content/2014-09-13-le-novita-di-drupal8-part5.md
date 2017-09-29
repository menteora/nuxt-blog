---
layout:       post
title:        Tutti pronti per Drupal 8? (Parte 5)
description:  Drupal 8 sta per arrivare, quali novità ci riserverà?
author:       darthdrupal
category:     web
tags:         [cms, web, drupal, backend]
comments:     true
share:        true
modified:     2015-08-03
permalink:    /le-novita-di-drupal8-part5
image:
  feature:    drupal8-p5.jpg
  preview:    drupal8-p5-thumb.jpg
  credit: 
  creditlink:
---

Drupal 8 sta per uscire e porta con se un gran numero di migliorie sotto tutti gli aspetti. Che tu sia un Site Builder, uno sviluppatore di moduli o di temi oppure un semplice utilizzatore, Drupal 8 ha una valanga di novità per te.

Con [l'articolo precedente]({% post_url 2014-07-13-le-novita-di-drupal8-part4 %}) abbiamo illustrato le novità relativamente al frontend.

Oggi invece ci concentreremo sulle novità della parte Backend di Drupal 8.

## Nuovo configuration system

Fino a Drupal 7 sia i contenuti che la configurazione venivano salvati nel database, rendendo difficoltoso il deploy di nuove configurazione tra ambienti differenti. Per risolvere questo problema sono stati creati vari workaround come l'[hook_update_N()](https://api.drupal.org/api/drupal/modules!system!system.api.php/function/hook_update_N/7) o il modulo [Features](https://drupal.org/project/features).

In Drupal 8 tutta la configurazione passa attraverso la nuova [Configuration API](https://api.drupal.org/api/drupal/core%21modules%21system%21core.api.php/group/config_api/8). Ogni ambiente ha sia un "active" store che contiene la configurazione corrente sia uno "staging" store che contiene i cambiamenti di configurazione importati da altri ambienti in attesa di revisione. Per una questione di performance l'active store è contenuto nella tabella "config" del database (analoga alla tabella "variables" di Drupal7) anche se è possibile modificare la posizione di salvataggio. Ad esempio il modulo [Configuration Development](https://www.drupal.org/project/config_devel) scrive la active configuration su file YAML, come fa il core per lo staging store.

Drupal 8 ha già un'interfaccia grafica basilare per importare/esportare singole porzioni o l'intera configurazione. E' possibile utilizzare anche il set di comandi Drush `config-*` utili quando si utilizza un sistema di versionamento come git.

Il workflow tipico quando si effettuano delle modifiche in dev e bisogna riportarle in produzione è illustrato dalla seguente immagine

![Drupal8 Config Workflow]({{ site.url }}/images/d8-config-workflow.jpg)

  1. sul sito dev esportare la active configuration sotto forma di archivio tar contenente parecchi file YAML
  2. sul sito di produzione importare il file che verrà salvato nella staging area
  3. nell'interfaccia grafica verrà visualizzata una lista dei parametri di configurazione che sono cambiati e si ha la possibilità di visionare un diff delle modifiche
  4. se le modifiche ci soddisfano possiamo sincronizzarle rimpiazzando il contenuto dell'active store con quello dello staging store.

Ovviamente ci sono parametri di configurazione specifici di un determinato ambiente che non vorremmo propagare altrove. Ad esempio il timestamp dell'ultima volta che ha il servizio cron è stato eseguito. Per questi parametri esiste una API parallela chiamata [State API](https://api.drupal.org/api/drupal/core%21modules%21system%21core.api.php/group/state_api/8)

## Content Deployment

Nonostante Drupal 8 non abbia attualmente un supporto nativo per la migrazione di contenuti (non è escluso che venga introdotta nelle future release) si può trarre vantaggio sotto questo aspetto dall'introduzione degli UUID (Universally unique identifiers) a tutto ciò che è "contenuto". Questi UUID permettono di determinare se uno specifico contenuto esiste o meno all'interno di un sito, ignorando eventuali conflitti tra id numerici (nid), rendendo l'importazione/esportazione di contenuti molto più facile. E' possibile ottenere un comportamento simile anche su Drupal 7 utilizzando il modulo [Universally Unique IDentifier](http://drupal.org/project/uuid).

## Entity ovunque!

Le entity sono un nuovo concetto chiave introdotto già in Drupal 7, che permettono di aggiungere campi ad altri tipi di contenuto oltre ai nodi, come utenti e termini di tassonomia. Le API del core di Drupal 7 però erano molto limitate sotto questo aspetto ed era richiesto l'utilizzo di moduli esterni come [Entity API](https://www.drupal.org/project/entity) per aggiungere ulteriori funzionalità come salvare o eliminare le entity.

In Drupal 8 le Entity API sono state notevolmente migliorate. Tutte le entity adesso sono oggetti di specifiche classi che implementano un'interfaccia standard ([EntityInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityInterface.php/interface/EntityInterface/8)). Ecco un piccolo esempio di prima e dopo:

{% highlight php %}
{% raw %}

<?php
# Drupal 7 code.
$node->title
$node->body[$langcode][0]['value']

# Drupal 8 code.
$node->get('title')->value
$node->get('body')->value
?>

{% endraw %}
{% endhighlight %}

Esistono due tipi di entity: Config Entity e Content Entity. Che differenze ci sono tra i due?

| Content Entities								| Config Entities										|
|-----------------------------------------------|-------------------------------------------------------|
| * E' possibile personalizzare i campi			| * E' possibile fare il deploy su ambienti differenti	|
| * Salvati nelle tabelle del db (di default)	| * Salvati nel configuration system					|
| * Solitamente create nel frontend				| * Solitamente create nel backend 						|

| Esempi               							| Esempi 												|
|-----------------------------------------------|-------------------------------------------------------|
| * Nodi    									| * Tipi di contenuto									|
| * Blocchi Custom    							| * Tipi di blocco custom								|
| * Utenti    									| * Ruoli utente										|
| * Commenti    								| * Viste												|
| * Termini di tassonomia    					| * Vocabolari											|
| * Menu Link    								| * Menu												|
| * Aggregatori Feeds/Items 					| * Stili di immagine 									|

Nelle Content Entities sono state introdotte le revisioni e la possibilità di aggiungere commenti a qualsiasi content entity.

## E l'hook_schema()?

Praticamente con l'introduzione delle Entity API e delle Config/State API non c'è più nessun motivo per realizzare e gestire tabelle custom a mano in Drupal 8. Usando queste API standard si eviterà di scrivere codice instabile e si avranno dei benefici anche sotto l'aspetto della portabilità verso altri database come MongoDB.

## Web Services

Drupal 8 contiene anche una API Rest nativa grazie all'adozione della suite di moduli [RESTful Web Services](https://drupal.org/documentation/modules/rest). Questo è stato fatto per facilitare la creazione di applicazioni mobile basate su Drupal, per la comunicazione tra siti e per integrare al meglio risorse di terze parti.

E' possibile configurare nel dettaglio quali risorse si vogliono rendere disponibili (nodi, tassonomie, utenti, ecc.), quali metodi http sono permessi per determinate risorse (ad es. GET, POST, PATCH, DELETE...), e quali formati e autenticazioni devono essere usate per accedere alle risorse. Il modulo contrib [REST UI](https://www.drupal.org/project/restui) provvede un interfaccia grafica per queste configurazioni.

Successivamente è possibile impostare dei permessi specifici su determinati ruoli per ogni metodo HTTP consentito. Queste permette ad esempio di consentire solo il metodo GET per gli utenti anonimi mentre gli amministratori potrebbero effettuare anche delle chiamate POST.

Una volta che i moduli RESTFul sono stati configurati a dovere sarà possibile ottenere dati dal sito in formato machine-readable, come questi:

{% raw %}
	...
   	[title] => Array
    	(
        	[0] => Array
            	(
                	[value] => Hello, world!
                	[lang] => en
            	)

    	)
	...
	[body] => Array
    	(
        	[0] => Array
            	(
                	[value] => <p>This is my <strong>awesome</strong> article.</p>
                	[format] => basic_html
                	[summary] =>
            	)

	    )
	...
{% endraw %}

Qual è il vantaggio? Ad esempio quello di poter ottenere da Drupal 8 dati in formato JSON per poi visualizzarli in una app [JQuery Mobile standalone](https://github.com/webchickenator/d8ws)!

Drupal 8 contiene anche una nuova libreria di nome [Guzzle](http://guzzle.readthedocs.org/en/latest/) che consente di prelevare/postare dati da siti Drupal oppure da Web Service di terze parti come Twitter e Github.

Un altra feature offerta dai moduli RESTful WebServices è la possibilità di aggiungere una visualizzazione di tipo "REST export" a qualsiasi vista.

![Drupal8 Rest Export]({{ site.url }}/images/d8-rest-export.png)

## Caching migliorato

Una nota finale è che il sistema di caching di Drupal 8 è stato notevolmente migliorato.

* Il modulo [Entity Cache](https://www.drupal.org/project/entitycache) è stato incluso nel core
* I [Cache Tags](https://www.drupal.org/node/1884800) permettono di pulire la cache in modo più granulare quando il contenuto o le impostazioni vengono aggiornate
* Tutte le funzionalità di caching come l'aggregazione JS/CSS sono attive di default, rendendo Drupal 8 veloce fin da subito

Queste nuove caratteristiche dovrebbero già migliorare di molto il caricamento delle pagine. Si sta comunque lavorando sodo per [migliorare ulteriormente le performance di Drupal 8](https://www.drupal.org/node/1744302).

Seguici e nelle prossime settimane illustreremo [altre novità]({% post_url 2014-09-29-le-novita-di-drupal8-part6 %}) in arrivo su Drupal 8!

Fonte: [The Ultimate Guide to Drupal 8](https://www.acquia.com/resources/ebooks/ultimate-guide-drupal-8)
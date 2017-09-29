---
layout: 		post
title: 			Dinamicamente si aggiorna!
description: 	Aggiornare un sito da Drupal 6 a Drupal 7
author: 		darthdrupal
category: 		dinamicamente.org
tags: 			[drush, drupal7 drush, command-line]
comments: 		true
share: 			true
image:			
  preview:      DarthDrupal.jpg
created: 		1330447182
permalink:		/blog/dinamicamente-si-aggiorna
---

<p>Finalmente dopo una lunga attesa siamo riusciti a migrare il nostro piccolo sito alla nuova major version del nostro CMS preferito: Drupal 7!!</p><p><!--break-->Il processo di upgrade tra major version è una delle operazioni più delicate da compiere su un installazione drupal. Ci sono vari aspetti da valutare, tra cui:</p><ul><li>se è già stato fatto il porting di tutti i moduli e temi che utilizziamo</li><li>se abbiamo fatto delle customizzazioni a livello di temi o moduli, bisogna verificare che siano applicabili anche nelle nuove versioni degli stessi</li><li>se abbiamo creato dei moduli custom bisogna che vengano aggiornati in base alle nuove API</li><li>bisogna accertarsi che l'hosting che ospita la nostra installazione drupal attuale abbia i <a href="http://drupal.org/requirements">requisiti minimi</a> per ospitare la nuova versione</li></ul><p>Una volta che ci siamo accertati di avere tutto l'occorrente, si può procedere all'upgrade. Questo può essere eseguito in modo manuale seguendo la <a href="http://drupal.org/documentation/upgrade/6/7">guida ufficiale</a>&nbsp;oppure possiamo utilizzare uno strumento molto potente per cercare di farlo in modo più automatico: Drush</p><p><big>Drush site-upgrade</big></p><p>Il comando per effettuare un upgrade di versione è site-upgrade. Il principio di funzionamento è quello di creare una nuova installazione Drupal partendo da quello corrente.</p><p>Gli step da compiere sono:</p><ul><li>Fare il backup del proprio sito</li><li>Importarne una copia in locale e ripristinarla</li><li>Creare un alias relativo al nostro nuovo sito aggiornato. Per farlo bisogna creare un file così composto: nomesito.alias.drushrc.php.</li><li>Inserire all'interno del file appena creato il codice php relativo al nostro alias, così da permettere a drush di individuare i parametri del nuovo sito:</li></ul>
<pre language="php">&lt;?php


$aliases['dinamicamente7'] = array(

  'uri' =&gt; 'localhost',

  'root' =&gt; '/home/darthdrupal/www/dinamicamente7',

  'db-url' =&gt; 'mysql://user:pass@localhost/nomedb',

);</pre>
<ul><li>portarsi all'interno della cartella del sito da aggiornare e avviare l'upgrade con il seguente comando (NB: @dinamicamente7 è l'alias che abbiamo creato al punto precedente):</li></ul>
<pre language="bash">drush site-upgrade @dinamicamente7

</pre>
<p>Una volta completata la procedura bisogna cominciare a verificare se sono stati scaricati e abilitati&nbsp;tutti i moduli corretti e successivamente si passa a verificare che tutte le funzionalità del nostro sito sono rimaste inviariate ed eventualmente riapplicare tutte le modifiche necessarie.</p><p>Questa è la nostra esperienza con un site upgrade, se qualche lettore ha utilizzato altri metodi e vuole condividerli è libero di commentare :)</p><p>Buona navigazione!</p>

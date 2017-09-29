---
layout: 		post
title: 			Creare un sito alla velocità della luce! ... con Drupal
description: 	Creare un sito con Drupal e Drush
author: 		menteora
category: 		drupal
tags: 			[drush, drupal7 drush, command-line]
comments: 		true
share: 			true
image:			
  preview:      menteora.png
created: 		1332144082
permalink:		/blog/creare-un-sito-alla-velocit%C3%A0-della-luce-con-drupal
---

<p>Se vogliamo creare un sito, farlo velocemente e usare uno strumento che per darci questo beneficio non scenda a compromessi con la qualità e la solidità del prodotto stesso, possiamo scegliere tranquillamente uno dei più famosi cms, Drupal e il suo fantastico tool a riga di comando, <strong>Drush</strong>.</p><p>Nel corso dell'ultimo <a href="http://bologna.grusp.org/66-fare-drupal-da-linea-di-comando" target="_blank">PUGBO</a> <em>(Php User Group di Bologna)</em> abbiamo avuto il piacere di presentare Drupal sotto una veste diversa... quella della velocità! L'ampia comunità internazionale che collabora con questo progetto permette a questo <a href="http://it.wikipedia.org/wiki/Content_management_system" target="_top">CMS</a> <em>(Sistema di Gestione di Contenuti)</em> di essere sempre all'avanguardia ed evolversi con le esigenze degli utenti.</p><p>Di seguito le slide presentate e la trascrizione del loro contenuto:</p><div id="__ss_11815662" style="width:510px"><strong style="display:block;margin:12px 0 4px"><a href="http://www.slideshare.net/dinamicamente/presentazione-pug" target="_blank" title="Fare Drupal a linea di Comando">Fare Drupal a linea di Comando</a></strong><iframe marginheight="0" marginwidth="0" src="http://www.slideshare.net/slideshow/embed_code/11815662" frameborder="0" height="426" scrolling="no" width="510"></iframe><div style="padding:5px 0 12px">Guarda le altre <a href="http://www.slideshare.net/" target="_blank">presentazioni</a> di <a href="http://www.slideshare.net/dinamicamente" target="_blank">DinamicaMente.org</a></div><div style="padding: 5px 0pt 12px;">&nbsp;</div></div><h2><img alt="" dir="ltr" src="/images/disclaimer.png" style="width: 90px; height: 90px; float: left;"></h2><h2>DISCLAIMER: Attenzione!</h2><p>Drush sta a Drupal come StarWars sta ad un Geek, quindi attenzione! Drush una volta scoperto può diventare uno strumento indispensabile e causare dipendenza!</p><p>&nbsp;</p><p><img alt="" src="/images/drush_geek.png" style="width: 617px; height: 120px;"></p><h2>Cos'è Drush?</h2><p>Drush è un interfaccia command-line per Drupal che ci permette di fare attività di mantenimento e di installazione sul nostro sito senza usare l'interfaccia web. Questo ci permette di evitare tutta la parte noiosa dell'installazione di Drupal e di velocizzarla enormemente grazie a comandi semplici fino ad arrivare, volendo, all'uso di script complessi.</p><h2>Drush:come si installa</h2><blockquote><p><em>" Aggiornato 3 Aprile 2012 alla versione 5</em> "</p></blockquote>
<pre language="bash">cd $HOME
wget http://ftp.drupal.org/files/projects/drush-7.x-5.0.tar.gz
tar xzf drush-7.x-5.0.tar.gz
cd /usr/local/bin
ln -s /path/to/drush/drush_executable drush
drush status</pre>
<h2>Drush Make: che cos'è e come si installa</h2><p>Drush Make rappresenta un'ulteriore automazione dei processi creati con Drush, con questo add-on possiamo creare degli script che scarichino in automatico Drupal e tutti i moduli che desideriamo, con una sola riga di comando.</p><p>Per chi ha avuto a che fare con l'installazione di Drupal sa sicuramente che i moduli utili fin dall'installazione possono essere svariati, con questo tool ovviamo al problema di doverli scaricare uno alla volta.</p>
<pre language="bash">mkdir $HOME/.drush &amp;&amp; cd $HOME/.drush
wget http://ftp.drupal.org/files/projects/drush_make-6.x-2.3.tar.gz
tar xzf drush_make-6.x-2.3.tar.gz</pre>
<h2>Installazione Drupal con Drush e Makefile (versione semplice)</h2><p>Grazie a questo sito, possiamo crearci il nostro file make e senza conoscere minimante la sintassi del file potremo scegliere tra tutti i principali moduli. Basterà marcare quelli di nostro interesse e scaricare il file che il sito creerà per noi.</p><p><a href="http://drushmake.me/" target="_blank">http://drushmake.me/</a></p><p>Ecco come procedere con l'installazione del nostro primo sito, naturalmente in Drupal 7.</p>
<pre language="bash">drush make pugbo.make pugbo
drush si standard --site-name="Drupal 7 PugBO" \ 
--db-url=mysql://root:root@localhost/testpugbo</pre>
<h2>Installazione e abilitazione moduli</h2><p>Non sarà difficile ricordare questi comandi:</p>
<pre language="bash">drush dl token &amp;&amp; drush en token

</pre>
<p>Oppure</p>
<pre language="bash">drush dl token --select

</pre>
<h2>Disabilitazione e disinstallazione moduli</h2><p>Se vogliamo disabilitare un modulo, quindi non usarlo più, ma lasciare le sue tabelle sul nostro sito per riabilitarlo eventualmente in futuro possiamo usare questo comando:</p>
<pre language="bash">drush dis token
</pre>
<p language="bash">Se vogliamo disinstallarlo e quindi rimuovere le sue tabelle dal nostro sito, naturalmente prima dobbiamo disabilitarlo e poi eseguire questo comando:</p>
<pre language="bash">drush pm-uninstall token

</pre>
<p>Cos'altro possiamo fare con drush?</p><h2>Aggiornamento moduli</h2>
<pre language="bash">drush up

</pre>
<h2>Backup Sito</h2>
<pre language="bash">drush archive-dump default

</pre>
<h2>Restore Sito</h2>
<pre language="bash">drush archive-restore  ./m29511d1.20120208_095943.tar.gz \
--destination=/home/darthdrupal/www/dinamicamente \
--db-url=mysql://root:root@localhost/dinamicamente</pre>

---
layout:       	post
title:        	! 'Drupal e Multilingua: Come rendere poliglotta il vostro sito'
description:    Come gestire l'internazionalizzazione su Drupal 6
author:       	darthdrupal
category:     	drupal
tags:         	[multilingua, i18n, tutorial]
comments:     	true
share:        	true
image:			
  preview:      DarthDrupal.jpg
created:      	1304333402
jekyll_permalink:		/blog/drupal-e-multilingua-come-rendere-poliglotta-il-vostro-sito
---
<p>
	Uno dei problemi che spesso si presentano a chi sviluppa un sito multilingua con Drupal &egrave; quello di trovare il giusto tuning tra i vari moduli che occorrono allo scopo.</p>
<p>
	Avendo affrontato approfonditamente questo problema, vorrei fornire con questo post un breve &quot;how-to&quot; per riuscire a configurare in modo rapido il nostro Drupal (questa guida si riferisce alla <strong>versione 6 di Drupal</strong>).</p>
<!--break-->
<h2>
	&nbsp;</h2>
<h2>
	<strong>La lista della spesa</strong></h2>
<p>
	Tanto per cominciare dobbiamo installare i moduli occorrenti:</p>
<ul>
	<li>
		<strong><a href="http://drupal.org/project/i18n">Internationalization</a></strong> (il modulo principale che ci occorre; estende le funzioni multilingua del core)</li>
	<li>
		<strong><a href="http://drupal.org/project/languageicons">Language Icons</a></strong> (per avere le icone con le bandiere del paese sul blocco di switch della lingua)</li>
	<li>
		<strong><a href="http://drupal.org/project/pathauto">Pathauto</a></strong> (crea automaticamente degli url alias per le nuove pagine del sito, in base al titolo della pagina stessa; molto SEO Friendly)</li>
</ul>
<p>
	A questo punto non resta che installarli e procedere alla configurazione.</p>
<h2>
	<strong>Le mani in pasta!</strong></h2>
<p>
	Cominciamo impostando un prefisso del percorso per ogni lingua che abbiamo sul nostro sito (per intenderci stiamo parlando del path prefix, ossia le due lettere all&#39;inizio del path di drupal che identificano la lingua che si sta usando, <em>ad es. it/mia-pagina, en/my-page, de/mein-seite</em>). Facciamo questo portandoci nella pagina che elenca tutte le lingue disponibili (<strong>miosito/admin/settings/language</strong>) e modificandole una per una impostando il corretto prefisso per ognuna di esse.</p>
<p>
	<img alt="" src="/images/lingue__nylux_-_mozilla_firefox.jpg" style="width: 677px; height: 152px;" /></p>
<p>
	<img alt="" src="/images/modifica_lingua.jpg" style="width: 460px; height: 334px;" /></p>
<p>
	Successivamente portiamoci all&#39;url <strong>miosito/admin/settings/language/i18n</strong> e selezioniamo, all&#39;interno del fieldset <strong>Content selection</strong>, l&#39;opzione <strong>Current language and language neutral</strong></p>
<p>
	<img alt="" src="/images/content_selection.jpg" style="width: 583px; height: 245px;" /></p>
<p>
	In questo modo diciamo a drupal di far visualizzare solamente i contenuti assegnati alla lingua correntemente attiva sul sito e tutti i contenuti a cui non &egrave; stata assegnata alcuna lingua specifica.</p>
<p>
	Portiamoci adesso all&#39;url <strong>miosito/admin/settings/language/configure</strong> e selezioniamo l&#39;opzione <strong>Prefisso del percorso con lingua di ripiego</strong> (&quot;<em>Path prefix with language fallback</em>&quot; se non avete tradotto la vostra installazione drupal in italiano).</p>
<p>
	<img alt="" src="/images/pathprefix.jpg" style="width: 302px; height: 132px;" /></p>
<p>
	In questo modo Drupal valuter&agrave; quale lingua utilizzare controllando in sequenza:</p>
<ol>
	<li>
		il path prefix (<em>ad es. it/node/13</em> o <em>it/mia-pagina</em>)</li>
	<li>
		se non &egrave; stato trovato nessun path prefix verr&agrave; controllata la lingua preferita dell&#39;utente (<em>$user-&gt;language</em>)</li>
	<li>
		se l&#39;utente corrente non ha nessuna lingua preferita verr&agrave; controllato l&#39;header <em>Accept-language</em> della richiesta http del browser</li>
	<li>
		se anche in questo caso non viene trovata nessuna lingua da impostare verr&agrave; utilizzata la <em>lingua di default del sito</em>.</li>
</ol>
<h3>
	<strong>Traduzione dei contenuti</strong></h3>
<p>
	A questo punto non ci rimane che impostare i tipi di contenuto in modo che:</p>
<ul>
	<li>
		ogni contenuto abbia il suo corrispettivo nella propria lingua</li>
	<li>
		quando si effettua lo switch tra le varie lingue, drupal sappia quale traduzione del contenuto corrente presentarci</li>
</ul>
<p>
	Cominciamo!</p>
<p>
	Portiamoci all&#39;url di edit del tipo di contenuto che intendiamo utilizzare (<strong>miosito//admin/content/node-type/miotipodicontenuto</strong>) e, all&#39;interno del fieldset <strong>Multilanguage options</strong>, selezioniamo le opzioni <strong>Set current language as default for new content</strong> e <strong>Lock language (Cannot be changed)</strong>.</p>
<p>
	<img alt="" src="/images/multilanguage_options_-_mozilla_firefox.jpg" style="width: 447px; height: 212px;" /></p>
<p>
	In questo modo ogni volta che creeremo un nuovo contenuto di quel tipo, gli sar&agrave; assegnata la lingua corrente.</p>
<p>
	E per avere il suo corrispettivo nelle altre lingue del nostro sito?</p>
<p>
	Sempre nella pagina di edit del tipo di contenuto (<strong>miosito//admin/content/node-type/miotipodicontenuto</strong>) sotto il fieldset <strong>Impostazioni del flusso di lavoro</strong> (o &quot;<em>Workflow settings</em>&quot; se avete l&#39;interfaccia in english) selezioniamo l&#39;opzione Supporto multilingua: Abilitato, traduzione inclusa (o in english &quot;<em>Multilingual support: Enabled, with translation</em>&quot;)</p>
<p>
	<img alt="" src="/images/flusso_di_lavoro_-_mozilla_firefox.jpg" style="width: 318px; height: 355px;" /></p>
<p>
	Adesso baster&agrave; andare in visualizzazione di uno qualsiasi dei contenuti che avete creato, cliccare sul tab <strong>Traduci</strong> e cliccare su <strong>Aggiungi traduzione</strong> in corrispondenza della lingua per la quale volete tradurre quel contenuto.</p>
<p>
	<img alt="" src="/images/tab_traduci.jpg" style="width: 432px; height: 80px;" /></p>
<p>
	<img alt="" src="/images/add_traduzione.jpg" style="width: 593px; height: 155px;" /></p>
<h2>
	<strong>Riassunto</strong></h2>
<p>
	Quindi, ricapitolando, abbiamo:</p>
<ul>
	<li>
		indicato un prefisso di percorso per ogni lingua</li>
	<li>
		indicato a Drupal quali contenuti visualizzare in base alla lingua</li>
	<li>
		indicato a Drupal quali passaggi deve intraprendere per decidere quale lingua utilizzare</li>
	<li>
		impostati i tipi di contenuto in modo da avere una traduzione per ogni contenuto, da presentare all&#39;utente in caso di switch della lingua</li>
</ul>
<p>
	A questo punto non mi rimane che augurare Buona Traduzione a tutti!</p>

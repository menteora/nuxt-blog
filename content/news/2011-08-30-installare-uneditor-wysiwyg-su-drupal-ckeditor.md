---
layout:			post
title:			Installare un'editor WYSIWYG su Drupal (CKeditor)
description:    Come installare CKeditor su drupal 6
author:			menteora
category:		drupal
tags:			[wysiwyg, ckeditor, editor html]
comments:		true
share:			true
image:			
  preview:      menteora.png
created:		1314693344
jekyll_permalink:		/blog/installare-uneditor-wysiwyg-su-drupal-ckeditor
---
<p>
	Uno dei problemi classici che si trovano ad affrontare prima o poi quasi tutti i manutentori dei siti Drupal &egrave; l&#39;installazione del WYSIWYG.</p>
<p>
	Se abbiniamo il fatto che magari si &egrave; nuovi nello studio di questo CMS alla poca dimestichezza con l&#39;inglese, il primo impatto potrebbe essere ostico.</p>
<p>
	Innanzitutto chiariamo, <strong>che cos&#39;&egrave; un WYSIWYG?</strong></p>
<blockquote>
	<p>
		<em>Wikipedia</em> ci aiuta: <b>WYSIWYG</b> &egrave; l&#39;acronimo che sta per l&#39;inglese <b>What You See Is What You Get</b> (&quot;quello che vedi &egrave; quello che &egrave;&quot; o &quot;ottieni quanto vedi&quot;).</p>
	<p>
		Nel nostro caso &egrave; un editor HTML incorporato nelle pagine web che permette di modificare le pagine web non dal codice, bens&igrave; come da un normale word processor.</p>
</blockquote>
<p>
	Oggi affrontiamo l&#39;installazione di <strong>CKeditor</strong>.</p>
<h2>
	Installazione sorgenti</h2>
<ul>
	<li>
		Da drupal.org possiamo scaricare il modulo: http://drupal.org/project/ckeditor (<strong>Nota: </strong>non ci stiamo rifererendo al progetto Wysiwyg).</li>
	<li>
		La cartella Ckeditor che troviamo nello zip la decomprimiamo e la spostiamo dentro <strong>sites/all/modules</strong> .</li>
	<li>
		Dal sito http://ckeditor.com/download scarichiamo il pacchetto con le librerie ckeditor.</li>
	<li>
		Lo scompattiamo e cancelliamo al suo interno le cartelle &quot;_samples&quot; e &quot;_source&quot;</li>
	<li>
		Ora possiamo spostare il contenuto della cartella dentro <strong>sites/all/modules/ckeditor/ckeditor </strong>oppure <strong>sites/all/libraries/ckeditor</strong>, personalmente consiglio la seconda opzione.</li>
	<li>
		Ora possiamo abilitare il modulo in <strong>tuosito/admin/build/modules</strong></li>
</ul>
<h2>
	Permessi e Configurazione</h2>
<ul>
	<li>
		Abilitiamo i permessi a seconda delle nostre esigenze, in questo caso ho dato l&#39;accesso per vedere l&#39;editor agli utenti autenticati</li>
</ul>
<p>
	<img alt="" src="/images/wysiwyg_permission.png" /></p>
<ul>
	<li>
		Raggiungendo il link<strong> </strong><strong>tuosito/</strong><strong>admin/settings/ckeditor</strong> &egrave; possibile modificare le impostazioni di ckeditor:</li>
</ul>
<p class="rtecenter">
	<img alt="" src="/images/wysiwyg_profiles.png" /></p>
<ul>
	<li>
		Personalmente consiglio di settare nella pagina di impostazioni dei filtri (<strong>tuosito/admin/settings/filters) </strong>il <strong>&quot;Full Html&quot;</strong> come formato predefinito, almeno per vedere l&#39;installazione conclusa correttamente.</li>
</ul>
<p class="rteindent1">
	<strong>NOTA:</strong> Se non siamo sicuri delle persone che andranno ad utilizzare l&#39;intefaccia Wysiwyg, potrebbe non essere consigliabile abilitare come predefinito il filtro &quot;Full HTML&quot;, ma creare uno ad hoc, nel quale mettiamo i singoli tag HTML che vogliamo vengano usati. A questo scopo si potrebbero sfruttare i moduli gi&agrave; creati a tale scopo:</p>
<p class="rteindent1">
	<strong>&nbsp;- WYSIWYG Filter </strong>- facile da installare ( http://drupal.org/project/wysiwyg_filter )<br />
	&nbsp;<strong>- HTML Purifier </strong>- pi&ugrave; popolare, alcuni ne lamentano la lentezza ( http://drupal.org/project/htmlpurifier )<br />
	&nbsp;<strong>- htmLawed </strong>- alternativa meno popolare ( http://drupal.org/project/htmLawed )</p>
<ul>
	<li>
		Gli autori del modulo consigliano di disabilitare l&#39;opzione <strong>&quot;Convertitore a capo (line break)</strong>&quot; nelle impostazioni del filtro scelto (in questo caso Full Html)</li>
	<li>
		Se avete un tema particolare consiglio di utilizzare quello predefinito di CKeditor per evitare che la textbox risulti incomprensibile. Le impostazioni si trovano sotto ogni profilo:</li>
</ul>
<p class="rtecenter">
	<img alt="" src="/images/wysiwyg_css.png" /></p>
<ul>
	<li>
		A seconda del fatto che abbiamo messo nelle impostazioni generali se vogliamo includere o escludere gli elementi, potremmo avere alcuni punti del nostro sito in cui ckeditor non si visualizza e si dovrebbe visualizzare o viceversa, a questo punto ci viene in aiuto la scritta sotto ogni textbox, riporto un esempio:</li>
</ul>
<pre>
CKEditor: the ID for excluding or including this element is <em>blog@node/14/edit.edit-body</em>.

</pre>
<p class="rteindent1">
	Se si clicca sul link <em>&quot;excluding or including&quot;</em> &egrave; possibile aggiungere l&#39;elemento preciso o tutti gli elementi dello stesso tipo, per esempio cosi si permette a tutti i nodi di tipo blog, in modalit&agrave; editing di visualizzare ckeditor:</p>
<pre>
blog@node/*/edit.edit-body
</pre>
<p class="rteindent1">
	Le opzioni di inclusione ed esclusione possono essere globali e per ogni profilo che abbiamo scelto. Inizialmente per prendere dimestichezza con questo editor e la sua configurazione consiglio di utilizzare quello globale riportato nel link sotto ogni textbox.</p>
<h2>
	Risoluzione Problemi</h2>
<ul>
	<li>
		Se cambia il filtro di default, tutti i contenuti preesistenti rimarranno con il filtro impostato precedentemente. Quindi &egrave; necessario controllare il filtro impostato sotto la voce Body del contenuto che non visualizziamo correttamente. ( <em>Aggiornato il 31/08/2011, grazie al contributo di <a href="http://www.drupalitalia.org/user/8713">paolosil</a></em> )</li>
</ul>

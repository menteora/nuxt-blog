---
layout:       post
title:        Come modificare i form in drupal 6
description:  Non è difficile modificare l'aspetto dei form in Drupal 6, vediamo nel dettaglio come poterlo fare
author:       darthdrupal
category:     drupal
tags:         [form, hook alter]
comments:     true
share:        true
image:        
  preview:    DarthDrupal.jpg
created:      1310315483
jekyll_permalink:    /blog/come-modificare-i-form-drupal-6
---
<p>Dopo alcune lotte tra form_id e <a href="http://api.drupal.org/api/drupal/developer--hooks--core.php/function/hook_form_alter/6">hook_form_alter</a> cercherò di illustrare come riuscire a modificare qualsiasi form all'interno di Drupal (questo how-to si riferisce alla<strong> versione 6 di Drupal</strong>)</p><p><!--break--></p><h2><strong>Due moduli essenziali</strong></h2><p>Prima di cominciare ad applicare qualsiasi modifica è essenziale installare i moduli&nbsp;<a href="http://drupal.org/project/devel">Devel</a>&nbsp;e <a href="http://drupal.org/project/devel_themer">Devel Themer</a>, i quali forniscono una serie di tool e funzioni che rendono la vita dello sviluppatore mooooolto più semplice.</p><h2><strong>Identifichiamo il target</strong></h2><p>Per poter modificare un form all'interno di Drupal, la prima cosa da fare è identificare il suo id. Per fare ciò bisogna ispezionare il sorgente della pagina alla ricerca di uno speciale elemento nascosto che ha come attributo <strong>name = "form_id"</strong>. Una volta trovato, la stringa che ci interessa si trova all'interno dell'attributo <strong>value </strong>(nell'esempio che seguirà ci riferiremo al form di inserimento di un nuovo termine di tassonomia, in questo caso il form_id di cui abbiamo bisogno è <strong>taxonomy_form_term</strong>.</p><p><strong>NB</strong>: il browser <strong>Chrome</strong> ha già integrati i Developer Tools che è possibile attivare cliccando con il tasto destro sulla pagina e selezionando <strong>Ispeziona elemento</strong>. Si aprirà una nuova finestra dalla quale sarà possibile cercare il form_id che ci interessa.</p><p><img alt="" src="/images/form_id-chrome.jpg" style="width: 590px; height: 323px; "></p><p>Se invece utilizziamo firefox abbiamo a disposizione il fantastico Firebug. Il concetto è identico: cerchiamo la stringa form_id nella casella di ricerca e tra i risultati identifichiamo quello che ci interessa.</p><p><img alt="" src="/images/form_id-firefox.jpg" style="width: 590px; height: 248px; "></p><h2><strong>Modifichiamo con l'hook_form_alter()</strong></h2><p>Adesso che abbiamo il form_id dobbiamo semplicemente implementare l'<a href="http://api.drupal.org/api/drupal/developer--hooks--core.php/function/hook_form_alter/6">hook_form_alter</a> per (1) visualizzare l'array $form per sapere dove agire per attuare la modifica che ci serve, e (2) andare a modificare &nbsp;effettivamente l'array nel punto che ci interessa.</p><h3><strong>(1) Visualizzare l'array $form</strong></h3><p>All'interno del nostro modulo (nel file .module ovviamente) implementiamo l'<a href="http://api.drupal.org/api/drupal/developer--hooks--core.php/function/hook_form_alter/6">hook_form_alter</a> in questo modo:</p>
<pre language="php">function MIOMODULO_form_alter(&amp;$form, $form_state, $form_id) {
  switch ($form_id) {
    case 'taxonomy_form_term':
      dpm($form);
      break;
  }
}</pre>
<p>Adesso caricando la pagina di inserimento di un nuovo termine di tassonomia (miosito/admin/content/taxonomy/id_vocabolario/add/term) dovrebbe apparire, nella sezione di pagina dedicata alla visualizzazione dei messaggi di sistema, l'array $form. Questo grazie alla funzione <a href="http://api.lullabot.com/dpm">dpm()</a> messa a disposizione dal modulo Devel, la quale presenta un output molto più leggibile rispetto, ad esempio, a un print_r.</p><h3><strong>(2) Modificare l'array $form</strong></h3><p>Ora che possiamo vedere com'è strutturato l'array che compone il form che vogliamo modificare, non ci resta che individuare l'elemento che ci interessa e provvedere alla modifica.</p><p>Se per esempio avessimo la necessità di cambiare la destination a cui deve puntare il sistema dopo aver effettuato il submit del form, potremmo agire sull'elemento destination dell'array.</p><p class="rtecenter"><img alt="" src="/images/addterm_2.jpg" style="width: 480px; height: 491px; "></p><p class="rteleft">Di conseguenza aggiorniamo la nostra implementazione dell'<a href="http://api.drupal.org/api/drupal/developer--hooks--core.php/function/hook_form_alter/6">hook_form_alter</a> in questo modo:</p>
<pre language="php">function MIOMODULO_form_alter(&amp;$form, $form_state, $form_id) {
  switch ($form_id) {
    case 'taxonomy_form_term':
      $form['destination']['#value'] = 'node/add/page';
      break;
  }
}</pre>
<p>Con questa modifica ogni volta che verrà salvato un nuovo termine verremo ridirezionati alla pagina di creazione del contenuto di tipo page.</p><h2>Riassunto</h2><p>Quindi ricapitolando abbiamo:</p><ul><li>Identificato l'id del form che vogliamo modificare</li><li>Visualizzato, tramite l'<a href="http://api.drupal.org/api/drupal/developer--hooks--core.php/function/hook_form_alter/6">hook_form_alter</a>, l'array $form per sapere esattamente quale elemento modificare</li><li>Applicata la modifica all'elemento sempre tramite l'<a href="http://api.drupal.org/api/drupal/developer--hooks--core.php/function/hook_form_alter/6">hook_form_alter</a>.</li></ul>

---
layout:       post
title:        Tutti pronti per Drupal 8? (Parte 4)
description:  Drupal 8 sta per arrivare, quali novità ci riserverà?
author:       darthdrupal
category:     web
tags:         [cms, web, drupal, frontend]
comments:     true
share:        true
modified:     2015-08-03
permalink:    /le-novita-di-drupal8-part4
image:
  feature:    drupal8-p4.jpg
  preview:    drupal8-p4-thumb.jpg
  credit: 
  creditlink:
---

Drupal 8 sta per uscire e porta con se un gran numero di migliorie sotto tutti gli aspetti. Che tu sia un Site Builder, uno sviluppatore di moduli o di temi oppure un semplice utilizzatore, Drupal 8 ha una valanga di novità per te.

Con [l'articolo precedente]({% post_url 2014-06-22-le-novita-di-drupal8-part3 %}) abbiamo illustrato le novità relativamente al multilingua.

Oggi invece ci concentreremo sulle novità della parte Frontend di Drupal 8.

## HTML5

Tutto l'output prodotto da Drupal 8 è stato convertito in HTML5. Questo significa che troverai tag come `<nav>`, `<header>`, `<main>`, `<section>`.

HTML5 introduce anche i nuovi form input types come `date`, `tel`, `email` che agevolano l'inserimento di dati su dispositivi mobile visualizzando tipi di tastiera differenti (ad esempio visualizzare la tastiera numerica nel caso di inserimento di numeri di telefono). Ovviamente tutto questo è stato integrato nelle nuove Form API.

## Nuove librerie di frontend e helpers

Drupal 8 include nel core librerie per il frontend come [Modernizr](http://modernizr.com/) (che permette di identificare se un browser ha il supporto touch o a determinate caratteristiche HTML5/CSS3), [Underscore.js](http://underscorejs.org/), [Backbone.js](http://backbonejs.org/) (un framework javascript MVC). Queste librerie permettono la creazione di applicazioni frontend mobile friendly e sono utilizzate da molte delle nuove caratteristiche introdotte dalla nuova Authoring Experience e dall'iniziativa per il miglioramento della parte Mobile.

## Supporto a Schema.org nativo

Il modulo RDFa di Drupal 8 adesso produce markup secondo gli standard di [schema.org](http://schema.org/). In questo modo i motori di ricerca possono estrarre i dati strutturati per migliorare la visualizzazione dei risultati di ricerca.

Drupal 8 fa largo uso degli [attributi WAI-ARIA](http://www.w3.org/WAI/intro/aria) per dare significato alle applicazioni rich front-end come l'in-place editor e la responsive toolbar. Lato backend, Drupal 8 mette a disposizione [nuovi tool Javascript per l'Accessibilità](https://drupal.org/node/1973218), che permetteranno agli sviluppatori di creare applicazioni accessibili. Sono in corso anche ulteriori sviluppi per l'introduzione di [test automatici per le funzionalità di accessibilità tramite la libreria Quail](https://www.acquia.com/resources/podcasts/acquia-podcast-98-meet-kevin-miller-accessibility-quail).

## Twig come nuovo sistema di theming

Twig ha preso il posto del sistema di theming di default presente in Drupal 7 basato su PHPTemplate. Twig permette ai designer che non sono esperti di PHP, di modificare il markup senza sforzi eccessivi.

Ad esempio invece di imparare la differenza tra array multidimensionali e oggetti e quando usare uno o l'altro basta utilizzare la sintassi `{% raw %}{{ foo.bar }}{% endraw %}`. Semplici condizioni e loop possono essere inseriti all'interno dei tag `{% raw %}{% ... %}{% endraw %}`.

Di seguito riporto un estratto dal page.html.twig (l'equivalente del page.tpl.php in Drupal 7) che mostra alcune caratteristiche di twig, dei nuovi tag html5 e il supporto nativo ARIA:

{% highlight php %}
{% raw %}
    
<?php
<main role="main">
  <a id="main-content"></a>{# link is in html.html.twig #}
  
  <div class="layout-content">
    {{ page.highlighted }}
    
    {{ title_prefix }}
    {% if title %}
      <h1>{{ title }}</h1>
    {% endif %}
  {{ title_suffix }}
  
  {{ tabs }}
  
  {% if action_links %}
    <nav class="action-links">{{ action_links }}</nav>
  {% endif %}
  
  {{ page.content }}
  
  {{ feed_icons }}
  </div>{# /.layout-content #}
  
  {% if page.sidebar_first %}
    <aside class="layout-sidebar-first" role="complementary">
      {{ page.sidebar_first }}
    </aside>
  {% endif %}
  
  {% if page.sidebar_second %}
    <aside class="layout-sidebar-second" role="complementary">
      {{ page.sidebar_second }}
    </aside>
  {% endif %}
  
</main>
?>
  
{% endraw %}
{% endhighlight %}

Per rendere disponibili le variabili all'interno del template bisogna utilizzare le funzioni `THEME_preprocess_HOOK()` come hai sempre fatto fino ad ora con l'unica differenza che adesso andranno scritte all'interno di un file chiamato `THEME.theme` invece del `template.php`.

Twig costringe gli sviluppatori a separare la parte di presentazione da quella di logica, cosa che dovrebbe rendere i temi più mantenibili e sicuri.

Un'altra nota positiva è la possibilità di attivare la modalità debug aggiungendo la riga `$settings['twig_debug'] = TRUE;` nel nostro file `settings.php`. In questo modo verranno visualizzati degli utili commenti nel markup generato da drupal che indicano dove possiamo trovare il template relativo al codice che vogliamo modificare e quali "theme suggestion" è stata utilizzata per produrre il markup. Ad esempio:

{% highlight php %}
{% raw %}

<?php
<div class="content">

<!-- THEME DEBUG -->
<!-- CALL: _theme('node') -->
<!-- FILE NAME SUGGESTIONS:
   * node--1--full.html.twig
   * node--1.html.twig
   * node--article--full.html.twig
   * node--article.html.twig
   * node--full.html.twig
   x node.html.twig
-->
<!-- BEGIN OUTPUT from 'core/themes/bartik/templates/node.html.twig' -->
<article class="node node--type-article node--promoted node--view-mode-full contextual-region clearfix quickedit-processed" data-history-node-id="1" data-quickedit-entity-id="node/1" role="article" about="/node/1" typeof="schema:Article" data-quickedit-entity-instance-id="0">
    ...
</article>

<!-- END OUTPUT from 'core/themes/bartik/templates/node.html.twig' -->

</div>
?>

{% endraw %}
{% endhighlight %}

## Veloce fin da subito!

Drupal 8 attiva di default tutte le impostazioni per il miglioramento delle performance, ad esempio l'aggregazione dei CSS e JS.

Ma questo significa che dobbiamo diventare scemi per disattivare tutte queste funzionalità prima di iniziare a sviluppare temi?

No! Drupal 8 ha un file `sites/example.settings.local.php` proprio per questo scopo. Questo file disattiva le impostazioni per le performance per l'utilizzo in ambiente di sviluppo. Per utilizzarlo basta semplicemente copiarlo e rinominarlo `sites/default/settings.local.php` e decommentare le seguenti righe nel file `settings.php`:

{% highlight php %}
{% raw %}

<?php
# if (file_exists(__DIR__ . '/settings.local.php')) {
#   include __DIR__ . '/settings.local.php';
# }
?>

{% endraw %}
{% endhighlight %}

All'interno del file `settings.local.php` ci sono anche delle impostazioni relative a twig che rendono il theming più semplice. Ad esempio l'attivazione del debug o la disattivazione della cache in modo da vedere immediatamente eventuali modifiche apportate ai template.

Drupal 8 consente anche un esperienza utente più veloce in quanto è stato fatto parecchio lavoro in tema di ottimizzazione frontend. Ad esempio per gli utenti anonimi non vengono caricati script JS!

## Nuovi elementi di interfaccia utente

Sono stati introdotti diversi elementi UI che in Drupal 7 facevano parte del modulo [Chaos tool suite (ctools)](http://drupal.org/project/ctools), come le finestre modali e i drop buttons. E' stato introdotto anche il concetto di "button types" che consente di assegnare uno stile differente ai pulsanti in base alla funzione che hanno. Ad esempio il tipo "primary" è la visualizzazione di default (di colore blu nel tema Seven) mentre il tipo "danger" viene visualizzato come un link di colore rosso, questo aiuta l'utente nella scelta dell'azione da eseguire.

![Drupal8 Button Types]({{ site.url }}/images/d8-buttons.png)

## Responsive Theming

In Drupal 8 sarà possibile dichiarare dei [Breakpoints](https://drupal.org/node/1813914) all'interno dei nostri temi (valori di altezza, larghezza, risoluzione per i quali il nostro design deve modificarsi per adattarsi al browser che lo sta visualizzando). Questa funzionalità non è ancora del tutto definitiva perché è in cantiere una [patch](https://drupal.org/node/2271529) che potrebbe modificarne l'esatta implementazione.

Drupal 8 supporterà anche il nuovo [elemento `<picture>`](http://picture.responsiveimages.org/) che comincerà ad essere supportato nei browser da questo autunno. Questo migliorerà ulteriormente l'aspetto performance della parte frontend in quanto permetterà di fornire la giusta immagine in base allo schermo che visualizza il sito (piccole immagini per piccoli schermi, ecc.).

## Nuovo metodo per aggiungere JS/CSS alla pagina

Dite addio alle funzioni `drupal_add_css` e `drupal_add_js`! Da adesso basta utilizzare proprietà `#attached` di un qualsiasi array renderizzabile. Ad esempio:

**seven.theme**

{% highlight php %}
{% raw %}

function seven_form_node_form_alter(&$form, &$form_state) {
...
  $form['#attached'] = array(
    'css' => array(drupal_get_path('module', 'node') . '/css/node.module.css'),
  );
...
}

{% endraw %}
{% endhighlight %}

Quanto sopra va bene per l'aggiunta spot di determinati asset che non hanno dipendenze. L'approccio raccomandato invece è quello di registrare uno o più JS/CSS, e le loro dipendenze, come librerie nel file `MODULE/THEME_libraries.yml` e quindi aggiungere il riferimento a queste librerie nella proprietà `#attached`. Ad esempio:

**seven.libraries.yml**

{% highlight php %}
{% raw %}

maintenance-page:
  version: VERSION
  js:
    js/mobile.install.js: {}
  css:
    theme:
      maintenance-page.css: {}
  dependencies:
    - system/maintenance

install-page:
  version: VERSION
  js:
    js/mobile.install.js: {}
  css:
    theme:
      install-page.css: {}
  dependencies:
    - system/maintenance

drupal.nav-tabs:
  version: VERSION
  js:
    js/nav-tabs.js: {}
  dependencies:
    - core/matchmedia
    - core/jquery
    - core/drupal
    - core/jquery.once
    - core/jquery.intrinsic

{% endraw %}
{% endhighlight %}

**seven.theme**

{% highlight php %}
{% raw %}

<?php
function seven_preprocess_install_page(&$variables) {
  // ...
  $libraries = array(
    '#attached' => array(
      'library' => array(
        'seven/maintenance-page',
        'seven/install-page',
      ),
    ),
  );
  drupal_render($libraries);
}
?>

{% endraw %}
{% endhighlight %}

Sebbene questo approccio non è immediato come chiamare una semplice funzione `drupal_add_QUALCOSA()`, ci da però la possibilità di cachare questi asset per migliorare le performance, e sono facilmente riutilizzabili all'interno dello stesso codice.

## Bye bye IE 6,7 e anche 8

I web designer di tutto il mondo hanno esultato alla notizia che finalmente il core di Drupal 8 ha soppresso il supporto alle versioni 6,7 e 8 di Internet Explorer, consentendo l'utilizzo di JQuery 2.0 e altre librerie supportate dai moderni browser HTML5/CSS3 (si parla anche di [rimuovere il supporto ad Android 2.3 e inferiori](https://drupal.org/node/2286601) per lo stesso motivo).

Comunque è stato incluso nel core la libreria [html5shiv](https://github.com/aFarkas/html5shiv) (che permette ai browser più datati di supportare gli elementi html5) per evitare che browser come IE8 e inferiori crollino miseramente al caricamento di un sito Drupal8. Esiste anche un modulo [IE8](https://drupal.org/project/ie8) per coloro che hanno assoluta necessità di supportarlo.

Per tutti gli altri che invece guardano avanti verso esperienze frontend strabilianti non si dovranno più preoccupare delle limitazioni di vecchi browser!

Ne vuoi ancora?? Seguici e nelle prossime settimane illustreremo [altre novità]({% post_url 2014-09-13-le-novita-di-drupal8-part5 %}) in arrivo su Drupal 8!

Fonte: [The Ultimate Guide to Drupal 8](https://www.acquia.com/resources/ebooks/ultimate-guide-drupal-8)
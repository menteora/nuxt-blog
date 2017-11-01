---
layout:       post
title:        Tutti pronti per Drupal 8? (Parte 6)
description:  Drupal 8 sta per arrivare, quali novità ci riserverà?
author:       darthdrupal
category:     web
tags:         [cms, web, drupal, coding]
comments:     true
share:        true
modified:     2015-08-03
permalink:    /le-novita-di-drupal8-part6
image:
  feature:    drupal8-p6.jpg
  preview:    drupal8-p6-thumb.jpg
  credit: 
  creditlink:
---

Drupal 8 sta per uscire e porta con se un gran numero di migliorie sotto tutti gli aspetti. Che tu sia un Site Builder, uno sviluppatore di moduli o di temi oppure un semplice utilizzatore, Drupal 8 ha una valanga di novità per te.

Con [l'articolo precedente]({% post_url 2014-09-13-le-novita-di-drupal8-part5 %}) abbiamo illustrato le novità relativamente al backend.

Oggi proseguiremo in ambito coding illustrando alcuni importanti cambiamenti per gli sviluppatori Drupal. Tramite esempi pratici vedremo le differenze tra l'approccio allo sviluppo utilizzato fin'ora e quello a cui dovremmo abituarci con Drupal 8. **ATTENZIONE: E' sconsigliata la lettura di questo articolo agli sviluppatori nostalgici!** :)

## Cambia la filosofia

Gli sviluppatori del core di Drupal hanno deciso di cambiare filosofia: invece di creare codice custom e specifico solo per l'ambito drupal hanno pensato di cercare lo strumento migliore già esistente per svolgere una determinata funzione e incorporarlo nel core.

Questo cambio di filosofia è già evidente in molti aspetti di Drupal 8. Ad esempio tra le librerie che sono state introdotte nel core ci sono:

* [PHPUnit](http://phpunit.de/) per i test unitari
* [Guzzle](http://guzzle.readthedocs.org/en/latest/) per le richieste HTTP (webservice)
* una serie di componenti [Symfony](http://symfony.com/)
* [Composer](https://getcomposer.org/) per la gestione delle dipendenze esterne e l'autoloading delle classi
* e molto altro

Ma questo cambio di filosofia si nota anche nel codice di base stesso. Sono stati fatti [enormi cambiamenti architetturali](http://buytaert.net/why-the-big-architectural-changes-in-drupal-8) per adeguarsi al modo in cui il resto del mondo scrive codice: disaccoppiato, object oriented, e adottando le nuove feature di PHP come i namespace e i traits.

Analizzeremo alcuni esempi per illustrare in cosa consiste concretamente questo cambio di filosofia.

## Info files

Tutti i moduli Drupal hanno bisogno di un file `.info` per essere registrati dal sistema. Ecco un esempio di file info di un modulo sviluppato per Drupal 7:

### Drupal 7: example.info

{% highlight php %}
{% raw %}

name = Example
description = An example module.
core = 7.x
files[] = example.test
dependencies[] = user

{% endraw %}
{% endhighlight %}

Il formato è in stile file INI ma adotta alcuni "Drupalismi" come la sintassi per gli `array[]`. La voce `files[]`, che innesca il class autoloader custom di Drupal 7, è tipica di Drupal e chi sviluppa moduli a oggetti deve aggiungere una riga `files[]` per ogni file in cui è definita una classe, e in alcuni casi questo può portare a vedere [cose un po' folli](http://drupalcode.org/project/views.git/blob/refs/heads/7.x-3.x:/views.info).

In Drupal 8 i file info sono semplici file YAML, uguali a quelli utilizzati da altri framework e linguaggi. Ecco un esempio:

#### Drupal 8: example.info.yml

{% highlight php %}
{% raw %}

name: Example
description: An example module.
core: 8.x
dependencies:
  - user
# Note: New property required as of Drupal 8!
type: module

{% endraw %}
{% endhighlight %}

La sintassi è simile, e di conseguenza la leggibilità e la semplicità di stesura dei file info rimane inviariata. La voce `files[]` è sparita in favore degli standard [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md) per l'autoloading delle classi, via Composer. Quindi se seguiamo una convenzione specifica nel nominare le classi e le cartelle (modules/example/src/ExampleClass.php) Drupal è in grado di caricare codice object oriented automaticamente senza nessun intervento manuale.

## Hook_menu e routing

In Drupal 7 l'hook_menu viene utilizzato per definire determinate url e le callback che devono essere innescate:

### Drupal 7: hook_menu()

**example.module**

{% highlight php %}
{% raw %}

<?php
/**
 * Implements hook_menu().
 */
function example_menu() {
  $items['hello'] = array(
    'title' => 'Hello world',
    'page callback' => '_example_page',
    'access callback' => 'user_access',
    'access arguments' => 'access content',
    'type' => MENU_CALLBACK,
  );
  return $items;
}

/**
 * Page callback: greets the user.
 */
function _example_page() {
  return array('#markup' => t('Hello world.'));
}
?>

{% endraw %}
{% endhighlight %}

L'esempio sopra è un tipico modulo hello world per Drupal 7. Viene definita un'URL `/hello` che verifica se l'utente ha i permessi per accedere ai contenuti prima di innescare una callback (`_example_page()`) che stampa "Hello world" in una pagina.

Il modo in cui viene scritto un hook_menu è noto come ArrayPI, un pattern comune in Drupal 7 e precedenti. Il problema delle ArrayPI è che sono complicate da utilizzare senza commettere errori (vi sarà capitato di perdere tempo a cercare di capire il motivo di un comportamento anomalo per poi scoprire che vi eravate semplicemente dimenticati un `return $items`....), non esiste un IDE che abbia l'autocompletion delle proprietà disponibili e la documentazione deve essere aggiornata manualmente quando vengono aggiunti o modificati dei valori. Inoltre come si può vedere dalla relativa [pagina di documentazione](https://api.drupal.org/api/drupal/modules!system!system.api.php/function/hook_menu/7) l'hook_menu si occupa di un po' troppe cose: è usato per definire path e relative callback, ma anche per esporre link nell'interfaccia grafica in molti modi diversi, modificare il tema attivo e molto altro.

Drupal 8 adotta invece un nuovo [sistema di routing](https://drupal.org/developing/api/8/routing):

### Drupal 8: Routes + Controllers

**example.routing.yml**

{% highlight php %}
{% raw %}

example.hello:
  path: '/hello'
  defaults:
    _content: '\Drupal\example\Controller\Hello::content'
  requirements:
    _permission: 'access content'

{% endraw %}
{% endhighlight %}

**src/Controller/Hello.php**

{% highlight php %}
{% raw %}

<?php
namespace Drupal\example\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Greets the user.
 */
class Hello extends ControllerBase {
  public function content() {
    return array('#markup' => $this->t('Hello world.'));
  }
}
?>

{% endraw %}
{% endhighlight %}

Come si vede dall'esempio sopra adesso i path e la verifica degli accessi risiedono in un file YAML, e si utilizza la stessa sintassi del sistema di routing di [Symfony](http://symfony.com/doc/current/book/routing.html). La callback adesso risiede in una classe "Controller" (secondo il pattern [MVC](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)) contenuta a sua volta in una cartella nominata in modo specifico, come vuole lo standard PSR-4. La classe Controller viene dichiarata nel "namespace" del modulo specifico così da evitare conflitti tra i nomi di classi di altri moduli. Infine viene resa disponibile la logica della classe [ControllerBase](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Controller!ControllerBase.php/class/ControllerBase/8), tramite l'istruzione `use`, che la nostra classe custom estenderà. In questo modo all'interno della classe controller `Hello` sarà possibile utilizzare tutti i metodi della classe ControllerBase, come `$this->t()` (il modo object oriented di richiamare la funzione `t()`). Inoltre dato che ControllerBase è una classe PHP standard, tutte le sue proprietà e metodi verranno autocompletati negli IDE.

## Ehi non finisce qui

Tenete le mandibole serrate, questo era solo un assaggio! Seguiteci e tra due settimane illustreremo [altre novità]({% post_url 2014-10-11-le-novita-di-drupal8-part7 %}) in ambito coding in arrivo su Drupal 8! Se proprio non ce la fate ad aspettare potete proseguire la lettura nell'[articolo originale](https://www.acquia.com/blog/ultimate-guide-drupal-8-episode-7-code-changes-drupal-8) in inglese sul blog di Acquia.

Fonte: [The Ultimate Guide to Drupal 8](https://www.acquia.com/resources/ebooks/ultimate-guide-drupal-8)
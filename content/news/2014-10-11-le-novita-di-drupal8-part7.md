---
layout:       post
title:        Tutti pronti per Drupal 8? (Parte 7)
description:  Drupal 8 sta per arrivare, quali novità ci riserverà?
author:       darthdrupal
category:     web
tags:         [cms, web, drupal, coding]
comments:     true
share:        true
modified:     2015-08-03
permalink:    /le-novita-di-drupal8-part7
image:
  feature:    drupal8-p7.jpg
  preview:    drupal8-p7-thumb.jpg
  credit: 
  creditlink:
---

Drupal 8 sta per uscire e porta con se un gran numero di migliorie sotto tutti gli aspetti. Che tu sia un Site Builder, uno sviluppatore di moduli o di temi oppure un semplice utilizzatore, Drupal 8 ha una valanga di novità per te.

Con [l'articolo precedente](/news/le-novita-di-drupal8-part6) abbiamo iniziato ad illustrare le novità in ambito coding.

Oggi proseguiremo in quest'ambito illustrando ulteriori cambiamenti importanti per gli sviluppatori Drupal. **ATTENZIONE: E' sconsigliata la lettura di questo articolo agli sviluppatori nostalgici!** :)

## Plugins

In Drupal 7 per definire elementi da collegare al resto del sistema (ad esempio blocchi, effetti per le immagini, formati per i testi, ecc.) bisogna utilizzare un qualche hook `_info()`, oltre ad una serie di altri hook per eseguire ulteriori operazioni (visualizzare, applicare, configurare, ecc.). Ecco un esempio di quanto detto, nel caso specifico dei blocchi:

### Drupal 7: hook_block_X()

**block.module**

```php
<?php
/**
 * Implements hook_block_info().
 */
function example_block_info() {
  $blocks['example'] = array(
    'info' => t('Example block'),
  );
  return $blocks;
}

/**
 * Implements hook_block_view().
 */
function example_block_view($delta = '') {
  $block = array();
  switch ($delta) {
    case 'example':
      $block['subject'] = t('Example block');
      $block['content'] = array(
        'hello' => array(
          '#markup' => t('Hello world'),
        ),
      );
      break;
  }
  return $block;
}
?>
```

In questo caso oltre alle [già menzionate ArrayPI](/news/le-novita-di-drupal8-part6) troviamo anche definizioni di hook che fanno parte di un'API sconosciuta a meno che non si studi uno per uno i file [`.api.php`](https://api.drupal.org/api/drupal/modules!block!block.api.php/7) dei singoli moduli (sempre ammesso che ci siano). Solo così è possibile capire quale hook bisogna implementare per ottenere questo o quel comportamento specifico. Inoltre alcuni sono da definire obbligatoriamente e altri no... Una documentazione dettagliata è indispensabile in questi casi.

In Drupal 8 è stato introdotto un [sistema di Plugin](https://drupal.org/developing/api/8/plugins) che trasforma l'esempio precedente in questo:

### Drupal 8: Blocchi (e molte altre cose) come Plugins

**src/Plugin/Block/Example.php**

```php
<?php
namespace Drupal\example\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides the Example block.
 *
 * @Block(
 *   id = "example",
 *   admin_label = @Translation("Example block")
 * )
 */
class Example extends BlockBase {
  public function build() {
    return array('hello' => array(
      '#markup' => $this->t('Hello world.')
    ));
  }
}
?>
```

Il codice sopra è molto simile all'esempio relativo alla classe Controller illustrato nell'[articolo precedente](/news/le-novita-di-drupal8-part6). Un plugin è una classe che ne estende un altra di base ([BlockBase](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Block%21BlockBase.php/class/BlockBase/8)) la quale si occupa già autonomamente di alcune cose per noi. La Block API stessa risiede nella [BlockPluginInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Block%21BlockPluginInterface.php/interface/BlockPluginInterface/8) che la classe `BlockBase` implementa.

Uno dei vantaggi dell'utilizzo delle interfacce è che espongono e allo stesso tempo documentano le varie API che contengono, oltre a essere rilevabili dal sistema e dagli IDE che utilizziamo. Un ottimo modo per imparare le nuove API di Drupal 8 è appunto studiare le varie interfacce.

I commenti che precedono la classe sono chiamate [annotazioni](http://docs.doctrine-project.org/projects/doctrine-common/en/latest/reference/annotations.html). Inizialmente può sembrare strano che in PHP i commenti vengano utilizzati per contenere meta data specifici che influiscono nella logica del software, ma ormai è una pratica largamente utilizzata da molte librerie PHP moderne e condivisa dalla stessa comunità di sviluppatori. Uno dei benefici è che i metadata della classe sono presenti nello stesso file che contiene la definizione della classe stessa.

## Hooks vs Eventi

In Drupal 7 e precedenti il meccanismo per estendere il sistema si basa sul concetto di [hook](https://api.drupal.org/api/drupal/includes!module.inc/group/hooks/7). E' possibile dichiarare un proprio hook usando funzioni come `module_invoke_all()`, `module_implements()`, `drupal_alter()`, ecc. Ad esempio:

### Drupal 7: Hooks

```php
<?php
  // Compile a list of permissions from all modules for display on admin form.
  foreach (module_implements('permission') as $module) {
    $modules[$module] = $module_info[$module]['name'];
  }
?>
```

Se un modulo volesse rispondere a questo evento, dovrebbe creare una funzione chiamata `modulo_nomehook` e provvedere un output compatibile con ciò che l'hook implementato si aspetta. Ecco un esempio:

```php
<?php
/**
 * Implements hook_permission().
 */
function menu_permission() {
  return array(
    'administer menu' => array(
      'title' => t('Administer menus and menu items'),
    ),
  );
}
?>
```

Questo meccanismo di hook è rimasto invariato nel corso del tempo (Drupal è nato nel 2001, quando la versione corrente di PHP era la 3 e non esisteva nessun supporto al codice object oriented) e oggi il peso degli anni comincia a farsi sentire:

* Il fatto di dover nominare le funzioni in modi specifici per estendere il codice è una caratteristica tipica di Drupal e gli sviluppatori che vi si avvicinano per la prima volta fanno fatica a entrare in quest'ottica.
* Ci sono almeno quattro funzioni diverse che possono innescare un hook: `module_invoke()`, `module_invoke_all()`. `module_implements()`, `drupal_alter()`, ecc. Questa frammentazione rende difficile trovare tutti i punti del sistema in cui è possibile aggianciare il proprio codice.
* Non è sempre chiaro capire quale input un hook si aspetta e che output fornisce, se non si legge la documentazione relativa. Alcuni sono hook di tipo "info" che richiedono un array (a volte un array di array di array ecc.), altri invece sono hook che rispondono a eventi specifici nel sistema (ad esempio l'esecuzione del cron, il salvataggio di un nodo, ecc.).

Nonostante in Drupal 8 gli hook siano ancora presenti per molti comportamenti basati su eventi (gli hook di tipo "info" invece sono stati convertiti in file YAML o annotazioni) quelle parti di codice che sono state allineate a Symfony (ad esempio il bootstrap e il sistema di routing) sono state convertite in modo da poter utilizzare l'[Event Dispatcher system](http://symfony.com/doc/current/components/event_dispatcher/introduction.html) di Symfony. Tramite questo sistema gli eventi vengono scatenati a runtime al verificarsi di determinate condizioni, e i moduli possono sottoscrivere le proprie classi agli eventi a cui vogliono reagire.

A dimostrazione di questo diamo un occhiata alla configuration API di Drupal 8, che risiede nel file [core/lib/Drupal/Core/Config/Config.php](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Config%21Config.php/class/Config/8). In essa sono definiti vari metodi per le operazioni "CRUD" come `save()`, `delete()` ecc. Ognuno di essi, finito il proprio lavoro, scatena un evento al quale possono reagire gli altri moduli. Prendiamo ad esempio il metodo `Config::save()`:

```php
<?php
  public function save() {
    // <snip>Validate the incoming information.</snip>

    // Save data to Drupal, then tell other modules this was just done so they can react.
    $this->storage->write($this->name, $this->data);
    // ConfigCrudEvent is a class that extends from Symfony's "Event" base class.
    $this->eventDispatcher->dispatch(ConfigEvents::SAVE, new ConfigCrudEvent($this));
  }
?>
```

Prendiamo il caso in cui il parametro di configurazione modificato sia la lingua di default del sito. In questo caso il modulo Language deve cancellare i file PHP compilati per rendere effettive le modifiche. Per ottenere questo il modulo Language deve fare tre cose:

* Sottoscrivere una classe all'evento registrandola nel proprio file language.services.yml (questo tipo di file di configurazione serve al [Service Container](http://symfony.com/doc/current/book/service_container.html) di Symfony per registrare codice riutilizzabile):

```yaml
language.config_subscriber:
    class: Drupal\language\EventSubscriber\ConfigSubscriber
    tags:
      - { name: event_subscriber }
```

* Nella [classe indicata](https://api.drupal.org/api/drupal/core%21modules%21language%21src%21EventSubscriber%21ConfigSubscriber.php/class/ConfigSubscriber/8) bisogna implementare l'interfaccia [EventSubscriberInterface](http://api.symfony.com/2.4/Symfony/Component/EventDispatcher/EventSubscriberInterface.html) e dichiarare il metodo `getSubscribedEvents()`, che stabilisce a quali eventi bisogna reagire e indica una o più callback che devono essere eseguite al verificarsi dell'evento. Oltre a questo viene indicato un "peso" (o priorità) che permette a certi moduli di eseguire le proprie callback secondo un ordine specifico (**Attenzione:** il modo in cui vengono valutati i pesi in Symfony è opposto a quello di Drupal! Pesi maggiori hanno la precedenza su quelli minori):

```php
<?php
class ConfigSubscriber implements EventSubscriberInterface {
  static function getSubscribedEvents() {
    $events[ConfigEvents::SAVE][] = array('onConfigSave', 0);
    return $events;
  }
}
?>
```

* Definire la callback contenente il codice da eseguire una volta salvata la configurazione:

```php
<?php
  public function onConfigSave(ConfigCrudEvent $event) {
    $saved_config = $event->getConfig();
    if ($saved_config->getName() == 'system.site' && $event->isChanged('langcode')) {
      // Trigger a container rebuild on the next request by deleting compiled
      // from PHP storage.
      PhpStorageFactory::get('service_container')->deleteAll();
    }
  }
?>
```

In questo modo un singolo modulo può sottoscrivere più classi a specifici eventi. Questo permette di evitare l'utilizzo di costrutti switch/case all'interno della definizione di hook, oppure di ritrovarsi pezzi di codice non correlati tra loro in un singolo blocco di codice. Il nuovo sistema invece ci costringe a sviluppare l'abilità nel separare la logica in classi distinte. Questo significa anche che il nostro codice verrà caricato solo quando necessario (lazy loading), senza occupare memoria inutilmente.

Fare il debugging degli eventi e risalire alla loro implementazione diventa più semplice. Infatti l'Event Dispatcher viene utilizzato in tutto il sistema. Per trovare le classi sottoscritte a un evento basta semplicemente eseguire un `grep` cercando la giusta costante, ad esempio `ConfigEvents::SAVE`.

Ovviamente questo nuovo sistema a eventi fornisce un contributo sostanzioso alla transizione verso l'approccio object oriented. I file YAML hanno preso il posto di molti vecchi sistemi di registrazione (info file, hook_menu, ecc.) e il sistema a eventi può essere utilizzato al posto dei vecchi hook specifici e introduce la possibilità di estendere in modo potente varie parti del core tramite il metodo delle sottoscrizioni.

## Molto altro ancora!

Un ottima introduzione alle nuove API di Drupal 8 e ai cambiamenti che sta apportando potete trovarla nella home page del relativo sito web: [api.drupal.org](https://api.drupal.org/api/drupal/8).

Esiste anche un lista "completa" dei cambiamenti nelle API tra Drupal 7 e 8 che potete trovare all'indirizzo [https://drupal.org/list-changes](https://drupal.org/list-changes). Ogni record include degli esempi di prima e dopo per agevolarci nella migrazione, e anche eventuali segnalazioni di quali problemi sono stati introdotti e perchè. A questa lista è collegato anche un account twitter dedicato ([@drupal8changes](https://twitter.com/drupal8changes)) che pubblica continuamente i nuovi cambiamenti.

## E il digitar m'è dolce in questo mare (di codice)

E' vero, passare dall'approccio procedurale a quello OOP può significare dover scrivere più codice. Un aiuto in questo senso possono fornircelo i seguenti progetti:

* [Drupal module upgrader](https://www.drupal.org/project/drupalmoduleupgrader): facilita la migrazione dei nostri moduli verso Drupal 8. Ci indica cosa dovremmo modificare (con link alla relativa modifica nella [lista dei cambiamenti](https://drupal.org/list-changes)) oppure converte il nostro codice automaticamente quando è possibile. Se masticate un pò l'inglese potete imparare di più in merito a questo progetto ascoltando l'[intervista in podcast](https://www.acquia.com/resources/podcasts/acquia-podcast-154-help-build-drupal-8-module-upgrader) allo sviluppatore che lo mantiene.
* [Console](https://www.drupal.org/project/console): utile per la realizzazione di moduli da zero. Realizza automaticamente lo scaffolding di un nuovo modulo Drupal 8 generando i file .module/.info, la struttura delle directory secondo lo standard PSR-4, file YAML e registrazione delle classi per il routing, ecc.!
* [PHPStormIDE](http://www.jetbrains.com/phpstorm/): Molti sviluppatori si trovano bene con questo ide, soprattutto perchè l'ultima versione contiene [varie feature](http://confluence.jetbrains.com/display/PhpStorm/Drupal+Development+using+PhpStorm) dedicate agli sviluppatori Drupal. L'unica nota negativa in questo caso è che bisogna acquistare una licenza per utilizzarlo. Per chi usa Drupal in ambito lavorativo l'investimento non è folle, mentre per chi, come me, ha a che fare con Drupal più che altro per hobby l'opzione Eclipse continua ad essere molto valida :) PS: se mantenete un qualsiasi progetto Open Source potete provare a fare [richiesta per una licenza gratuita](http://www.jetbrains.com/phpstorm/buy/choose_edition.jsp?license=OPEN_SOURCE).

Seguici e nelle prossime settimane pubblicheremo l'ultimo articolo di questa serie sulle novità di Drupal 8!

Fonte: [The Ultimate Guide to Drupal 8](https://www.acquia.com/resources/ebooks/ultimate-guide-drupal-8)
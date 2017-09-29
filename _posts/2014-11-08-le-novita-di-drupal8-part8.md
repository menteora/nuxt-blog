---
layout:       post
title:        Tutti pronti per Drupal 8? (Parte 8)
description:  Drupal 8 sta per arrivare, quali novità ci riserverà?
author:       darthdrupal
category:     web
tags:         [cms, web, drupal, faq]
comments:     true
share:        true
modified:     2015-08-03
permalink:    /le-novita-di-drupal8-part8
image:
  feature:    drupal8-p8.jpg
  preview:    drupal8-p8-thumb.jpg
  credit:
  creditlink:
---

Drupal 8 sta per uscire e porta con se un gran numero di migliorie sotto tutti gli aspetti. Che tu sia un Site Builder, uno sviluppatore di moduli o di temi oppure un semplice utilizzatore, Drupal 8 ha una valanga di novità per te.

Con [l'articolo precedente]({% post_url 2014-10-11-le-novita-di-drupal8-part7 %}) abbiamo illustrato le novità in ambito coding, e mentre il **decollo** dell'ottava versione di Drupal si avvicina, con quest'ultimo articolo risponderemo ad alcune **domande comuni**.

## Perchè dovrei prendere in considerazione Drupal 8?

Inizialmente Drupal fu pensato per essere uno strumento per sviluppatori provvedendo un set di API per la realizzazione di elementi come form per l'inserimento di contenuti, pagine di amministrazione e blocchi per sidebar. Nelle versioni successive, in particolare nella versione 7, sono stati fatti particolari sforzi per rendere Drupal più avvicinabile anche da utenti meno "tecnici" introducendo interfacce grafiche per compiti come installazione, data modeling, architettura delle informazioni, landing page, ecc. In molti siti Drupal inoltre sono presenti moduli aggiuntivi che permettono ad esempio di avere un editor WYSIWYG, oppure il modulo Views che consente di visualizzare i contenuti del sito estraendoli dal database e personalizzandoli sotto molti aspetti. Attualmente molti [siti web importanti](http://www.drupalshowcase.com/) utilizzano una combinazione di core e moduli aggiuntivi Drupal.

Partendo da questi ottimi presupposti presenti in Drupal 7 è stato costruito Drupal 8 aggiungendo ulteriori tasselli, ad esempio miglioramenti relativamente alla [authoring experience]({% post_url 2014-05-25-tutti-pronti-per-drupal8-part1 %}), uno [strato multilingua]({% post_url 2014-06-22-le-novita-di-drupal8-part3 %}) nettamente migliorato, e numerose [nuove feature per site builder]({% post_url 2014-06-08-le-novita-di-drupal8-part2 %}). Drupal 8 è anche più in linea con il panorama web odierno con il suo approccio [mobile first]({% post_url 2014-05-25-tutti-pronti-per-drupal8-part1 %}) e il [front-end rinnovato]({% post_url 2014-07-13-le-novita-di-drupal8-part4 %}). Non sono stati tralasciati gli sviluppatori ovviamente, a loro vengono offerte numerose [feature di back-end]({% post_url 2014-09-13-le-novita-di-drupal8-part5 %}) e un [code base rimodernizzato e object oriented]({% post_url 2014-09-29-le-novita-di-drupal8-part6 %}). Sono state poste le basi per uno strumento solido e al passo con i tempi!

Detto questo Drupal 7 rimane una piattaforma stabile, robusta e che verrà mantenuta ancora per molti anni. E molte feature già presenti in Drupal 8 sono disponibili anche per la versione 7. In sostanza Drupal 8 sarà un grande strumento, ma Drupal 7 lo è altrettanto se non volete aspettare. In ogni caso cominciare fin da subito a conoscere Drupal 8 può essere un ottima idea, così saremo già preparati quando dovremo utilizzarlo per eventuali nuovi progetto.

## Drupal 8 è fantastico! Ma a che punto siamo con il rilascio?

Una volta che tutti i bug e task critici sono stati risolti verrà creata una release candidate di Drupal 8. Quando la RC sarà stata rilasciata e non saranno riportate ulteriori criticità verrà rilasciato Drupal 8.0.0!

Se avete un account su drupal.org potete vedere in qualsiasi momento a che punto si trova la risoluzione dei bug aggiungendo alla vostra dashboard il blocco **"Contributor Links"**.

![Drupal8 Contrib Links]({{ site.url }}/images/drupal8-p8-contrib-links.png)

## Cosa succederà al rilascio di Drupal 8?

Ovviamente tantissimi release party in giro per il mondo!

Inoltre a cominciare dalla release 8.0.0, il progetto Drupal verrà gestito tramite un [nuovo ciclo di rilasci](https://www.drupal.org/node/2135189) che oltre agli standard bug fix e security release mensili (8.0.1,8.0.2..) introduce delle "minor" release semestrali del core (8.1.0,8.2.0..). In quest'ultimo caso potrebbero essere incluse nuove funzionalità, miglioramenti nelle API, ecc. Dopo un certo numero di minor version verrà creata una release LTS (Long-Term Support) di Drupal e inizierà lo sviluppo della versione 9.

Questo significa che non bisognerà più aspettare un tot di anni prima di avere all'interno del core nuove funzionalità perchè ci saranno iterazioni più frequenti sulle feature e sulle API fino a raggiungere la maturità della piattaforma. In questo modo coloro che preferiscono non correre rischi e vogliono lavorare su una versione stabile piuttosto che avere nuove funzionalità, possono continuare ad usare la versione LTS e aggiornare solo al rilascio della successiva LTS, anche saltando una o più major version.

## Quando dovrei iniziare a usare Drupal 8?

La risposta a questa domanda dipende dalle nostre competenze:

* Se sei uno sviluppatore dovresti iniziare a studiare la nuova versione **subito**. E' ancora possibile fornire feedback relativamente alle API e così assicurarsi che Drupal 8 venga rilasciato con tutto ciò di cui abbiamo bisogno. Bisogna tenere a mente però che alcune API potrebbero essere ulteriormente modificate per risolvere eventuali problemi critici, quindi potreste comunque aver bisogno di fare piccoli aggiustamenti post RC.

* Se ti occupi di redigere documentazione, di fare traduzioni o sei un designer tieni presente che l'interfaccia utente di Drupal 8 insieme al testo che ne fa parte e il markup non saranno definitivi fino all'uscita della release candidate, quindi è meglio aspettare almeno fino alla RC1 per contentrarsi massivamente su questi aspetti (ovviamente i più avventurosi possono già farlo e fornire dei feedback adesso che la fase di fixing non è ancora terminata).

* Se sei un utente Drupal da poco e hai degli sviluppatori nel tuo staff che non hanno problemi a migrare moduli e fare bug fix del core a progetto inoltrato e la data di rilascio del tuo progetto è fine 2015 o 2016 potrebbe essere una buona idea cominciare lo sviluppo con la release beta di Drupal 8 o con la prossima RC1, soprattutto se sai già di aver bisogno di alcune caratteristiche presenti in Drupal 8.

* Nella maggior parte dei casi è meglio iniziare a utilizzare Drupal 8 qualche mese dopo il suo rilascio, dopo che vari moduli sono stati migrati. Può essere utile tenere d'occhio il [grafico di utilizzo](https://www.drupal.org/project/usage/drupal) di Drupal. Quando le linee D7 e D8 si incroceranno potrebbe essere il momento giusto per fare il salto visto che ci saranno molti più utilizzatori di Drupal 8 e la parte più sporca del lavoro è già stata fatta.

## Ok, cosa dovrei fare quindi nel frattempo?

Usa Drupal 7! E' stabile, maturo, robusto, potente e ben supportato. Verrà mantenuto con bug fix fino alla versione LTS di Drupal 8 e con security fix fino alla versione LTS di Drupal 9 (ancora per molto tempo quindi :))

Inoltre molte funzionalità di Drupal 8 sono già disponibili per Drupal 7 utilizzando moduli contrib:

| Drupal 8 Core Feature       | Drupal 7 Contrib Module                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| WYSIWYG                     | [CKEditor](https://drupal.org/project/ckeditor)                         |
| In-place Editing            | [Quick Edit](https://drupal.org/project/quickedit)                      |
| Responsive Toolbar          | [Mobile Friendly Navigation Toolbar](https://drupal.org/project/navbar) |
| Temi Responsive             | Omega, Zen, Adaptive, Aurora, etc. base themes                          |
| Temi admin Responsive       | [Ember](https://drupal.org/project/ember)                               |
| Immagini Responsive         | [Picture](https://drupal.org/project/picture)                           |
| Tabelle Responsive          | [Responsive Tables](https://drupal.org/project/responsive_tables)       |
| Overlay Semplificato        | [Escape Admin](https://drupal.org/project/escape_admin)                 |
| Multilingua                 | [Internationalization](https://drupal.org/project/i18n), [Entity Translation](https://drupal.org/project/entity_translation) |
| Blocchi migliori            | [Bean](https://drupal.org/project/bean)                                 |
| Config Management           | [Features](https://drupal.org/project/features)                         |
| Web Services                | [RESTful Web Services](https://drupal.org/project/restws)               |

## Che dire del processo di migrazione?

* Per i contenuti (utenti, articoli, ecc.) e molte impostazioni di configurazione (variabili, impostazioni dei blocchi, ecc.) Drupal 8 fornisce un processo di migrazione sia da Drupal 6 (già presente nel core) che da Drupal 7 (in fase di sviluppo) per quel che riguarda i moduli del core (per i moduli contrib bisognerebbe svilupparne uno apposito per ognuno). In sostanza si mantiene il proprio sito Drupal 6/7 online mentre si sviluppa il nuovo sito in Drupal 8 e infine si avvia uno script simile all'update.php per migrare i contenuti dal vecchio sito al nuovo. Se tutto ha funzionato correttamente basterà cambiare la web root e puntare al nuovo sito. "Teoricamente" senza nessun downtime.

* Per i moduli contrib installate il modulo [Upgrade Status](https://drupal.org/project/upgrade_status) che vi fornirà una panoramica dei moduli utilizzati nella vostra installazione e a che punto è il loro porting a D8.

* Per i vostri moduli custom dovrete pensarci voi. Il progetto [Drupal Module Upgrader](https://drupal.org/project/drupalmoduleupgrader) può darvi una mano ad automatizzare una parte di questo processo e generare un report delle altre cose da cambiare (tenete conto che questo progetto è ancora sotto attivo sviluppo, e prima del rilascio di Drupal 8 coprirà molte più API di quanto già non faccia adesso. In ogni caso non è onnisciente quindi dovrete fixare delle parti di codice a mano).

* Per i propri temi custom che devono essere convertiti a Twig potete provare il progetto [Twigifier](https://drupal.org/sandbox/forest/1965070) che si pone l'obiettivo di automatizzare buona parte di questo processo.

In sostanza il processo di migrazione dipende molto da come è composto il vostro sito. In generale sarà più semplice passare alla nuova versione di Drupal se si utilizzano moduli ben sviluppati invece di codice custom.

Per altri consigli su come preparare i propri siti Drupal 6/7 per la migrazione alla versione 8 date un occhiata a [questo articolo](https://www.acquia.com/blog/getting-your-site-ready-drupal-8)

## Come posso dare una mano?

* La strada più diretta è aiutando a [correggere i problemi critici](https://drupal.org/project/issues/search/drupal?status[]=Open&priorities[]=400&categories[]=1&categories[]=2&version[]=8.x&issue_tags_op=%3D). Tenete spesso d'occhio la pagina [Drupal Core Updates](https://groups.drupal.org/core/twidc) che illustra le ultime novità che necessitano particolare attenzione.

* Se ti stai avvicinando da poco allo sviluppo su Drupal o vuoi alcuni consigli su cui lavorare da una persona reale, esiste il [Core contribution mentoring](https://www.drupal.org/core-office-hours) su IRC due volte alla settimana.

* Vuoi dare una mano con i processi di migrazione a Drupal 8? Vai sulla pagina del team [IMP (Migrate in core)](https://groups.drupal.org/imp) per avere più informazioni.

* Vuoi dare una mano con la documentazione? Controlla quali sono le priorità al riguardo nell'[apposita pagina](https://drupal.org/node/1005304).

* Vuoi imparare le API di Drupal 8 e aiutare altri sviluppatori a fare altrettanto? Aiuta a migrare il modulo [Examples for Developers](https://drupal.org/project/examples) a Drupal 8.

* Vuoi aiutare te ed altri nella migrazione dei propri moduli a Drupal 8? Contribuisci alla realizzazione del progetto [Drupal Module Upgrader](https://drupal.org/project/drupalmoduleupgrader).

Ci sono molti modi per contribuire alla realizzazione di Drupal 8. Aggiungiti agli [oltre 2300 contributori](http://ericduran.github.io/drupalcores/) che hanno già dato una mano!

## Ehi la prossima settimana c'è il DrupalDay!

Il modo migliore per imparare è confrontarsi con professionisti e aziende che si occupano quotidianamente di Drupal. Venerdì e Sabato prossimi (14-15/11) si terrà a Milano il quarto [DrupalDay](http://www.drupalday.it/), una due giorni di conferenze e corsi incentrati su Drupal. Vai sul sito e controlla se sono ancora disponibili dei posti!

Fonte: [The Ultimate Guide to Drupal 8](https://www.acquia.com/resources/ebooks/ultimate-guide-drupal-8)

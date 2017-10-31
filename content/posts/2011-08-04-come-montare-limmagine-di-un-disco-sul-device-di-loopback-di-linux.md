---
layout:			post
title:			Come montare l'immagine di un disco sul device di loopback di Linux
description:    Se vogliamo visualizzare il contenuto di un file immagine la procedura è semplice 
author:			darthdrupal
category:		tips&tricks
tags:			[linux, lopback]
comments:		true
share:			true
image:			
  preview:      DarthDrupal.jpg
created:		1312454518
permalink:		/blog/come-montare-limmagine-di-un-disco-sul-device-di-loopback-di-linux
---
<p>In questo articolo spiegheremo come utilizzare il device di loopback dei sistemi operativi linux per montare l'immagine di un disco fisso (o di una pendrive o di un sd o di qualsiasi altro tipo di storage).</p><p><!--break--></p>
<h2>
	<strong>Creare l&#39;immagine</strong></h2>
<p>
	Per creare l&#39;immagine di un qualsiasi dispositivo di storage basta utilizzare il comando <a href="http://ss64.com/bash/dd.html">dd</a> di linux in questo modo:</p>
<pre language="bash">
darthdrupal:~$ dd if=/dev/sde of=/immagine_disco.img
</pre>
<p>
	dove per <strong>if</strong> si intende l&#39;<strong>input file </strong>e per <strong>of</strong> l&#39;<strong>output file</strong>.</p>
<h2>
	<strong>Montare l&#39;immagine</strong></h2>
<p>
	Una volta ottenuta l&#39;immagine abbiamo bisogno di alcune informazioni aggiuntive che ci pu&ograve; fornire fdisk, ad esempio la tabella delle partizioni:</p>
<pre language="bash">
darthdrupal:~$ fdisk -ul sd_ripristino_image/sd_ripristino.img
Disco sd_ripristino_image/sd_ripristino.img: 0 MB, 0 byte
255 heads, 63 sectors/track, 0 cylinders, totale 0 settori
Units = settori of 1 * 512 = 512 bytes
Disk identifier: 0x00061f3d

                           Dispositivo Boot      Start         End      Blocks   Id  System
sd_ripristino_image/sd_ripristino.img1              63      208844      104391   83  Linux
sd_ripristino_image/sd_ripristino.img2          208845      401624       96390   83  Linux
sd_ripristino_image/sd_ripristino.img3          401625     3775274     1686825   83  Linux</pre>
<div>
	Adesso che sappiamo la struttura delle partizioni all&#39;interno dell&#39;immagine del disco possiamo montare la partizione che ci interessa specificando il valore di offset nell&#39;istruzione di mount. Ad esempio se volessi montare la terza partizione devo specificare come valore di offset il settore di start moltiplicato per la dimensione di un singolo settore in byte, ossia 512. Entrambi i valori sono reperibili tramite il comando fdisk -ul indicato sopra, precisamente:</div>
<div>
	<pre language="bash">
Units = settori of 1 * 512 = 512 bytes
                           Dispositivo Boot      Start         End      Blocks   Id  System
sd_ripristino_image/sd_ripristino.img3          401625     3775274     1686825   83  Linux</pre>
</div>
<div>
	Quindi costruiamo il comando di mount in questo modo:</div>
<pre language="bash">
darthdrupal:~$ sudo mount -o loop,offset=$((512*401625)) sd_ripristino_image/sd_ripristino.img punto_di_mount/</pre>
<p>
	a questo abbiamo accesso ai file presenti nella partizione del file immagine:</p>
<pre language="bash">
darthdrupal:~$ ls -al punto_di_mount/
totale 70196
drwxr-xr-x  6 root root     4096 2011-07-17 05:16 .
drwxr-xr-x  7 ark  ark      4096 2011-08-03 17:46 ..
-rwxrwxrwx  1 root root      276 2008-12-18 08:13 backup.sh
drwxrwxrwx  3 root root     4096 2008-12-31 11:45 data
-rwxrwxrwx  1 root root      345 2009-02-15 01:27 factory_defaults.sh
drwxr-xr-x  5 root root     4096 2011-07-17 05:16 flash
-rwxrwxrwx  1 root root     2183 2011-03-03 14:32 README
-rwxrwxrwx  1 root root      183 2011-05-10 14:13 restore.sh
drwxr-xr-x 14 root root     4096 2011-06-16 14:40 RFS2
-rw-r--r--  1 root root 71761920 2011-07-05 14:00 RFS2.tar
drwxr-xr-x  2 root root     4096 2011-06-22 14:43 SourcesSDRestore</pre>
<h2>
	<strong>Riassunto</strong></h2>
<p>
	Quindi riassumendo abbiamo:</p>
<ul>
	<li>
		Creato un immagine tramite il comando <a href="http://ss64.com/bash/dd.html">dd</a></li>
	<li>
		Identificato le partizioni all&#39;interno dell&#39;immagini</li>
	<li>
		Montato l&#39;immagine che ci interessa utilizzando il device di loopback</li>
</ul>

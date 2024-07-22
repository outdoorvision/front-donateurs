---
title: Foire aux questions plateforme
---

## Les données intégrées dans la plateforme

### Les traces GPS recueillies sont-elles instantanément intégrées dans la plateforme ?
D'une part, en fonction des modes de collecte des données (par API ou livraison de données brutes) et des fournisseurs, les temporalités de recueil des traces GPS sont différentes. [En savoir plus](/partenaires) <br>
D'autre part, une fois les données brutes recueillies, un processus d'agrégation, de nettoyage et de filtrage est nécessaire avant l'intégration dans la plateforme. 
Ainsi, les données recueillies ne sont pas instantanément visualisables dans la plateforme. Les deux dernières intégrations de données réalisées dates de mai et septembre 2022.

---

### Comment se fait la distinction entre les activités ?
Cette distinction s'appuie sur l'activité déclarée par le pratiquant lors de l'enregistrement de sa trace. Toutefois, des correctifs sont appliqués si l'algorithme identifie des incohérences. Par exemple, un pratiquant ayant déclaré sa trace en "course à pied" alors que la vitesse moyenne enregistrée est de 24km/h, sa trace sera rattachée à la famille d'activités "Pédaler". <br>

---

### La fréquence de mise à jour des données Suricate est-elle la même que l'intégration des données GPS agrégées ?
L'intégration des données Suricate est indépendante de l'intégration de données agrégées. La base de données Suricate est gérée au Pôle ressources national sports de nature, qui intègre manuellement les nouveaux signalements enregistrés. Pour l'intégration des données GPS, c'est le prestataire Makina Corpus qui se charge de réaliser cette opération. <br>

---

## L’interface

### Quelle est la différence entre échelle fixe et échelle dynamique ?
En choisissant l’échelle fixe, les valeurs minimales sont fixes. La valeur minimale étant 1 passage (ou 1 pratiquant), et la valeur maximale 40. Ainsi, les segments comptabilisant au minimum 40 passages s’affichent en rouge. <br>
En choisissant l’échelle dynamique, les valeurs minimale et maximale s’ajustent en fonction du niveau de zoom et de la zone de visualisation. Ici, la valeur maximale est de 733 passages. Les segments comptabilisant au minimum 733 passages s’affichent alors en rouge. <br>
![Echelle](/medias/faq-plateforme/Echelle.jpg)

---

### Quelle est la différence entre passages et pratiquants ? 
Il est possible d’afficher soit les flux de passages soit les flux de pratiquants. <br>
![Unite](/medias/faq-plateforme/Unite.jpg) <br>
Ainsi, les segments se colorisent en fonction soit du volume de pratiquants, soit du volume de passages. <br>
![Unite2](/medias/faq-plateforme/Unite2.jpg)

---

## Le réseau de segments

### Qu’est-ce qu’un segment ?
La plateforme Outdoorvision agrège des millions de traces GPS et les restitue sous forme d’un réseau de segments. Ces segments correspondent à des traces traversant les mêmes carrés d’une grille. Ce choix d’algorithme permet d’identifier les passages hors-sentiers ou voirie existante. 

---

### Pourquoi les segments proches ne sont-ils pas fusionnés, notamment lorsqu’il s’agit d’un itinéraire unique ?
Des segments parallèles peuvent apparaître, alors que les traces enregistrées ont certainement emprunté les mêmes tronçons ou sentiers. Les sens de passage ne sont pas indiqués, ce qui peut expliquer cette juxtaposition de segments. <br>
![Segment](/medias/faq-plateforme/Segments.jpg)

---

### Comment expliquer les discontinuités dans le réseau de segments ?
Des discontinuités peuvent apparaître dans le réseau de segments en raison de l’algorithme choisi. <br>
D’une part, l’algorithme recrée un réseau de segments à partir d’un pas de grille défini. Les traces traversant l’une des cases du pas de grille sont agrégées sous la forme d’un même segment. Ainsi, en fonction de la qualité des traces enregistrées, des correctifs qui ont été appliqués, ou encore du niveau de précision des appareils GPS, ce réseau peut présenter certaines discontinuités. <br> 
D’autre part, des seuils de passages sont appliqués. Ainsi, sont affichés les segments comptabilisant au moins 5 passages et 3 pratiquants. Certaines traces peuvent donc passer sous ce seuil et ne pas apparaître sur la plateforme. <br>
![Discontinuites](/medias/faq-plateforme/Discontinuites.jpg)

---

### Pourquoi est-ce que des traces apparaissent quand je sélectionne plusieurs activités alors que si je n’en sélectionne qu’une, aucune trace n’apparaît ?
Des seuils sont appliqués pour garantir la protection des données. Ainsi il n’est pas possible d’afficher les segments de moins de 5 passages et de moins de 3 pratiquants. <br> 
Si toutes activités confondues, un segment enregistrant 6 passages apparaît. Si ces traces sont issues de plusieurs familles d’activités, il se peut que selon l’activité le segment n’apparaisse pas. <br> 
Par exemple, si parmi ces 6 passages on compte 5 passages ‘vélo’ et 1 passage ‘course à pied’, le passage ‘course à pied’ n’apparaîtra pas (voir illustrations ci-dessous). <br>
![Seuil1](/medias/faq-plateforme/Seuil1.jpg) <br>
![Seuil2](/medias/faq-plateforme/Seuil2.jpg) <br>
![Seuil3](/medias/faq-plateforme/Seuil3.jpg)

---

## Les fonctionnalités

### Sur les fonctions de flux, pourquoi ne puis-je pas visualiser les données à certaines échelles ?
Lorsque vous souhaitez visualiser les flux sur l'ensemble de votre territoire, il se peut que la fenêtre bleue en haut à droite de l'interface indique "Zoomez pour voir les données". Effectivement, selon le niveau de zoom, des seuils minimum d'affichage s'appliquent. Ainsi, il n'est pas possible de visualiser l'ensemble des flux à une échelle macroscopique, il est nécessaire de zoomer pour identifier les passages.

---

### A quoi correspondent les zones de départs et d’arrivées ?
Les zones de départs et d’arrivées sont représentées sous forme de clusters. Ces clusters agrègent des points GPS géographiquement proches, enregistrés à partir des traces des pratiquants. 

---

### A quoi correspondent les zones de pauses ?
Les zones de pauses sont représentées sous forme de clusters, comme pour la fonction départs et arrivées. Ces zones de pauses correspondent aux endroits sur lesquels aucun point GPS n’a été enregistré pendant au moins 15 minutes, ou qu’il y a une concentration de points GPS très proches les uns des autres. 

---

### Comment interpréter la représentation de ces zones de pauses ?
Un polygone est créé à partir de plusieurs zones de pauses. Chaque polygone regroupe différentes zones de pauses, enregistrées à partir des traces GPS par les pratiquants sports de nature. <br> 
Ces polygones sont catégorisés selon trois couleurs, correspondant à la durée moyenne des pauses enregistrées. <br> 
Par exemple, les polygones en orange représentent les zones de pauses des pratiquants ayant une durée comprise entre 30min et 1h.

---

### Quels itinéraires sont actuellement intégrés dans le catalogue par défaut de la plateforme ?
Les itinéraires intégrés actuellement dans la plateforme sont les GR, GRP et PR labellisés par la Fédération Française de Randonnée Pédestre, ainsi que les sites VTT et Espaces Cyclosport de la Fédération Française de Cyclisme. Vous pouvez désormais intégrer vous-même des itinéraires, dans votre catalogue local. Vous pouvez retrouvez ce catalogue dans la fonctionnalité "Itinéraire défini" afin de mesurer la fréquentation sur ces itinéraires.

---

### Quelles emprises territoriales sont actuellement intégrées dans le catalogue par défaut de la plateforme ?
Les emprises territoriales actuellement dans la plateforme sont : les périmètres administratifs (régions, départements, intercommunalités, communes), les limites des Parcs Nationaux et Parcs Naturels Régionaux, les limites de réserves, les Zones Natura 2000, ainsi que les forêts publiques. Ces données sont requêtées directement auprès du Geoportail de l'IGN. Vous pouvez désormais intégrer vous-même des emprises, via votre catalogue local. 

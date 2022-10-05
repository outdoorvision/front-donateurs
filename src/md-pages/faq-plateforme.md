---
title: Foire aux questions plateforme
---

# Les données intégrées dans la plateforme

## Les traces GPS recueillies sont-elles instantanément intégrées dans la plateforme ?
D'une part, en fonction des modes de collecte des données (par API ou livraison de données brutes) et des fournisseurs, les temporalités de recueil des traces GPS sont différentes. [En savoir plus](/partenaires) <br>
D'autre part, une fois les données brutes recueillies, un processus d'agrégation, de nettoyage et de filtrage est nécessaire avant l'intégration dans la plateforme. 
Ainsi, les données recueillies ne sont pas instantanément visualisables dans la plateforme. Les deux dernières intégrations de données réalisées dates de mai et septembre 2022.

---

# L’interface

## Quelle est la différence entre échelle fixe et échelle dynamique ?
En choisissant l’échelle fixe, les valeurs minimales sont fixes. La valeur minimale étant 1 passage (ou 1 pratiquant), et la valeur maximale 40. Ainsi, les segments comptabilisant au minimum 40 passages s’affichent en rouge. En choisissant l’échelle dynamique, les valeurs minimale et maximale s’ajustent en fonction du niveau de zoom et de la zone de visualisation. Ici, la valeur maximale est de 733 passages. Les segments comptabilisant au minimum 733 passages s’affichent alors en rouge. <br>
![Echelle](/medias/faq-plateforme/Echelle.jpg) <br>

---

## Quelle est la différence entre passages et pratiquants ? 
Il est possible d’afficher soit les flux de passages soit les flux de pratiquants. <br>
![Unite](/medias/faq-plateforme/Unite.jpg) <br>
Ainsi, les segments se colorisent en fonction soit du volume de pratiquants, soit du volume de passages. <br>
![Unite2](/medias/faq-plateforme/Unite2.jpg) <br>

---

# Le réseau de segments

## Qu’est-ce qu’un segment ?
La plateforme Outdoorvision agrège des millions de traces GPS et les restitue sous forme d’un réseau de segments. Ces segments correspondent à des traces traversant les mêmes carrés d’une grille. Ce choix d’algorithme permet d’identifier les passages hors-sentiers ou voirie existante. 

---

## Pourquoi les segments proches ne sont-ils pas fusionnés, notamment lorsqu’il s’agit d’un itinéraire unique ?
Des segments parallèles peuvent apparaître, alors que les traces enregistrées ont certainement empruntés les mêmes tronçons ou sentiers. Les sens de passage ne sont pas indiqués, ce qui peut expliquer cette juxtaposition de segments. <br>
![Segment](/medias/faq-plateforme/Segments.jpg) <br>

---

## Comment expliquer les discontinuités dans le réseau de segments ?
Des discontinuités peuvent apparaître dans le réseau de segments en raison de l’algorithme choisi. D’une part, l’algorithme recrée un réseau de segments à partir d’un pas de grille défini. Les traces traversant l’une des cases du pas de grille sont agrégées sous la forme d’un même segment. Ainsi, en fonction de la qualité des traces enregistrées, des correctifs qui ont été appliqués, ou encore du niveau de précision des appareils GPS, ce réseau peut présenter certaines discontinuités. D’autre part, des seuils de passages sont appliqués. Ainsi, sont affichés les segments comptabilisant au moins 5 passages et 3 pratiquants. Certaines traces peuvent donc passer sous ce seuil et ne pas apparaître sur la plateforme. <br>
![Discontinuites](/medias/faq-plateforme/Discontinuites.jpg) <br>

---

## Pourquoi est-ce que des traces apparaissent quand je sélectionne plusieurs activités alors que si je n’en sélectionne qu’une, aucune trace n’apparaît ?
Des seuils sont appliqués pour garantir la protection des données. Ainsi il n’est pas possible d’afficher les segments de moins de 5 passages et de moins de 3 pratiquants. Si toutes activités confondues, un segment enregistrant 6 passages apparaît. Si ces traces sont issues de plusieurs familles d’activités, il se peut que selon l’activité le segment n’apparaisse pas. Par exemple, si parmi ces 6 passages on compte 5 passages ‘vélo’ et 1 passage ‘course à pied’, le passage ‘course à pied’ n’apparaîtra pas. <br>
![Seuil1](/medias/faq-plateforme/Seuil1.jpg) <br>
![Seuil2](/medias/faq-plateforme/Seuil2.jpg) <br>
![Seuil3](/medias/faq-plateforme/Seuil3.jpg) <br>
---

# Les fonctionnalités

## A quoi correspondent les zones de départs et d’arrivées ?
Les zones de départs et d’arrivées sont représentées sous forme de clusters. Ces clusters agrègent des points GPS géographiquement proches, enregistrés à partir des traces des pratiquants. 

---

## A quoi correspondent les zones de pauses ?
Les zones de pauses sont représentées sous forme de clusters, comme pour la fonction départs et arrivées. Ces zones de pauses correspondent aux endroits sur lesquels aucun point GPS n’a été enregistré pendant au moins 15 minutes, ou qu’il y a une concentration de points GPS très proches les uns des autres. 

---

## Comment interpréter la représentation de ces zones de pauses ?
Un polygone est créé à partir de plusieurs zones de pauses. Chaque polygone regroupe différentes zones de pauses, enregistrées à partir des traces GPS par les pratiquants sports de nature. Ces polygones sont catégorisés selon trois couleurs, correspondant à la durée moyenne des pauses enregistrées. Par exemple, les polygones en orange représentent les zones de pauses des pratiquants ayant une durée comprise entre 30min et 1h.

---

## Comment afficher deux cartes côte à côte dans la fonction "Comparaison temporelle" ?
Avec la fonction "Comparaison temporelle", il est possible d’afficher la variation des flux de fréquentation sur une même carte, ou sur deux cartes côte-à-côte.
Par défaut, une seule carte s’affiche avec les segments colorisés en fonction des variations de la fréquentation entre les périodes choisies. Il est également possible d’afficher la fréquentation sur ces deux périodes sur deux cartes en miroir. Pour cela, il vous faut aller dans le « i » le menu de gauche, puis cliquer sur "Comparer deux cartes". La carte de gauche correspond à la première période choisie (Période 1 – Base), et la carte de droite à la deuxième période (Période 2 - Observation). <br>
![Comparaisontemporelle](/medias/faqp-lateforme/Comparaisontemporelle.jpg) <br>
![Comparaisontemporelle2](/medias/faqp-lateforme/Comparaisontemporelle2.jpg) <br>
![Comparaisontemporelle3](/medias/faqp-lateforme/Comparaisontemporelle3.jpg) <br>

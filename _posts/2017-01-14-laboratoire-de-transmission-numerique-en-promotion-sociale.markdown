---
layout: post
title: "Laboratoire de transmission numérique en promotion sociale"
date: 2017-01-14 19:27:12 +0200
categories: enseignement, pédagogie
---

Aujourd'hui, je rejoins de nouveau l'équipe des enseignants de l'<a
href="http://www.cardinalmercier-promotionsociale.be/spip2012/index.php">
Institut Technique Supérieur Cardinal Mercier</a> (ITSCM), embarquant mon
collègue Jonathan Verlant-Chenet avec moi, pour encadrer un tout nouveau
laboratoire pour l'UE de _transmission numérique_. L'ITSCM est un **institut
de promotion sociale**, institution proposant une offre de formation
principalement destinée à des adultes, leur permettant de cumuler
études et emploi, grâce à des aménagements tels qu'un horaire décalé [1].

Le **premier défi** consiste donc à mettre en place une activité pour ce public
particulier, différent de celui auquel on est habitué. En effet, les étudiants
en promotion sociale sont généralement plus âgés, sont déjà dans la vie
active et ont généralement un travail et une famille. De plus, ils possèdent
une motivation, une attention, une discipline et un respect bien plus grand que
les jeunes d'à peine 18 ans que l'on accueille en première année de bachelier à
l'ECAM, où nous sommes tout deux enseignants.

<figure>
  <img src="/images/blog/labo-transmission-numerique-prof.jpg" width="800"
  height="450" alt="Prof qui prépare un document" />
  <figcaption>L'un des enseignants en train d'envoyer la composition
  des groupes, qui vient d'être finalisée, aux étudiants.</figcaption>
</figure>

## Le projet

Dans le cadre de ce laboratoire, les étudiants doivent réaliser, en groupes,
un **projet original** exploitant les _techniques de transmission numérique_
vues dans un cours qui a commencé au quadrimestre précédent et
mobilisant plusieurs compétences acquises lors de leurs deux premières années
de bachelier.

L'idée que l'on a mise en place consiste à imaginer un produit, à développer et
commercialiser, qui, utilisant une batterie de **senseurs**, offre un service se
basant sur une **collecte et analyse de données** provenant de ces senseurs. Ça,
c'est _le rêve_, qui joue le rôle de contexte motivant pour les étudiants.

Partant de ce rêve, les étudiants vont travailler, en **équipes mixtes**, à la
réalisation d'un **prototype fonctionnel** de leur idée, qui sera défendue à
la fin de l'année. Le projet sera développé à l'aide de technologies modernes,
et comporte à la fois des aspects électroniques et informatiques. Partant de
senseurs qui vont capturer des données qui seront collectées par des
_Arduinos_, l'application développée présentera une ou plusieurs vues de ces
données dans une interface graphique, après stockage dans une base de données
et analyse sur un serveur, tout deux exécutés sur une _Raspberry Pi_. Comme le
résume la figure ci-dessous, le projet se compose de deux parties qui doivent
**collaborer** pour mener à l'application finale [2]. Ça, c'est _la mise en
œuvre_ d'une partie du rêve, leur prouvant qu'ils ont acquis énormément de
compétences depuis le début de leurs études.

<figure>
  <img src="/images/blog/labo-transmission-numerique-vue-globale.png"
  width="677" height="435" alt="Vue globale du projet" />
  <figcaption>Le projet consiste à développer des senseurs qui vont
  capturer des données qui seront ensuite collectées et analysées.</figcaption>
</figure>

Point de vue technique, les _électroniciens_ vont devoir **concevoir un
senseur**, à partir de briques élémentaires telles que des résistances,
condensateurs, transistors... et organiser la collecte de données vers
l'Arduino à l'aide d'un protocole de communication physique tel que I2C, CAN,
Modbus... Les _informaticiens_ vont devoir concevoir une **base de données**,
qui sera peuplée des données provenant  de l'Arduino, hébergée sur une
Raspberry Pi sur laquelle tournera également un serveur permettant d'**analyser
et visualiser** ces données.

L'**échange d'information** entre l'Arduino et la Raspberry Pi sera assuré par
une communication de haut niveau de type WiFi ou Bluetooth. _Il s'agira de la
pierre angulaire de l'application qui, comme lorsque deux tunneliers percent une
montagne depuis deux côtés opposés, sera témoin de la bonne collaboration des
deux équipes, lorsque arrivés sous la montagne, les deux galleries creusées se
retrouvent parfaitement alignées._

## La pédagogie

Le **deuxième défi** vient du fait que ce laboratoire est dispensé en 
dernière année (troisième année de bachelier) à deux finalités différentes :

- bachelier en informatique et système : _réseaux et télécommunications_ ;
- et bachelier en électronique : _électronique appliquée_.

Ce défi est très intéressant, en ce sens que le projet à développer dans le
cadre de ce laboratoire a pour but de faire travailler ensemble des étudiants
des deux finalités, dans un même projet, chacun apportant son ensemble de
compétences pour la réalisation de ce dernier. Ces spécificités nous ont 
conduit à différents choix pédagogiques pour l'organisation du laboratoire :

- Tout d'abord, les étudiants sont l'**acteur principal**, c'est-à-dire que
  sont eux qui vont choisir leur application et effectuer des choix techniques,
  tant au niveau électronique qu'informatique. Les deux enseignants jouent,
  quant à eux, le rôle d'**experts** auprès desquels les étudiants peuvent
  recevoir des avis et conseils et le rôle de **managers** qui réalisent un
  suivi du projet.
- Ensuite, les étudiants sont très **flexibles** pour les différents choix 
  techniques qu'ils doivent réaliser. Avant de les laisser partir travailler
  dans le monde industriel, il est important qu'ils soient capables de faire un
  choix parmi plusieurs possibilités et de **justifier** ces derniers. Ils
  feront valider leurs choix par les enseignants et les défendront lors de la
  défense finale du projet.
- Enfin, ils seront amenés à **chercher de l'information** par eux-mêmes et de
  croiser des sources afin d'enrichir leurs connaissances, entre les séances
  présentielles de laboratoire, qui ont lieu une fois par mois.

Les étudiants conduisent et dirigent donc leur projet de groupe, tout en étant
coachés et conseillés par des experts. Apprendre indirectement à travailler
en groupes mixtes, à mener un projet ambitieux, apprendre à apprendre... voilà
tout ce que les étudiants apprendrons dans le cadre de ce laboratoire, avec, on
l'espère, la satisfaction d'aboutir à un prototype fonctionnel dont ils pourront
être fiers !

## Une première expérience

La mise en place de ce laboratoire est une **première expérience inédite** pour
mon collègue Jonathan et moi-même ! À la sortie de cette première séance
introductive, nous furent extrêmement satisfaits. En effet, la motivation des 
étudiants était grande et les idées proposées étaient riches et ambitieuses.
Reste maintenant à poursuivre le coaching de ces groupes, et de voir ce qu'ils
vont nous présenter en fin d'année !

<figure>
  <img src="/images/blog/labo-transmission-numerique-students.jpg" width="800"
  height="450" alt="Étudiants qui travaillent" />
  <figcaption>Les étudiants en train de travailler en groupes sur le
  projet.</figcaption>
</figure>

## Références

[1] [L'enseignement de promotion sociale (EPS)](http://www.enseignement.be/
index.php?page=27151).<br/>
[2] [Laboratoire de Transmission Numérique - Séance 1 : Présentation du
projet](http://www.slideshare.net/seb478/laboratoire-de-transmission-numrique-
prsentation-du-projet)

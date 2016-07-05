---
layout: post
title: "« Pause interactive » en cours"
date: 2014-11-14 10:31:43 +0200
categories: enseignement, pédagogie
---

Depuis septembre 2014, je suis _chargé de cours invité_ à l'Université
catholique de Louvain, en charge du **cours d'informatique** donné aux
étudiants en première année du bachelier ingénieur civil et en première année
du bachelier en sciences informatiques. Ce cours, je le connais très bien,
l'ayant suivi durant mes études en 2002, ayant été tuteur pour ce cours pendant
trois ans de 2004 à 2006, et enfin, ayant été assistant pour ce cours pendant
six ans de 2007 à 2012.

Mais ce n'est pas pour vous raconter mon expérience passée par rapport à ce
cours que j'écris aujourd'hui (bien qu'il y aurait beaucoup à dire). Ce que je
souhaite présenter ici aujourd'hui, c'est un dispositif particulier que j'ai
mis en place dans le cadre de cette charge de cours, exploitant les nouvelles
technologies modernes : un **smartphone** (en particulier sa caméra intégrée) et
des **codes-barres 2D**.

## Interactions lors d'un cours magistral

Lorsqu'on donne un cours magistral, le rendre dynamique afin de ne pas perdre
les étudiants, dont l'attention ne cesse de chuter au fur et à mesure que le
cours avance, n'est pas une tâche aisée. Il faut savoir que la **durée moyenne
d'attention** ne dépasse généralement pas la _dizaine de minutes_ [1].
L'attention commence en fait à diminuer après 10 minutes de cours et lors de la
seconde moitié d'un cours magistral standard, seuls 12% des étudiants écoutent
attentivement [2].

Une technique assez souvent utilisée pour **maintenir l'auditoire attentif**
est de leur poser des questions régulièrement, sur _ce qui vient d'être dit_
par exemple, ou alors en leur posant une question dont la réponse est en fait
apportée dans _ce qui va être dit_. Cela provoque **une pause** dans le
discours magistral de l'enseignant, et permet de faire passer les étudiants de
l'état passif à l'état actif, en leur donnant la parole. Pour ce faire,
plusieurs solutions sont envisageables comme le _vote à main levée_, ou celui
par _bourdonnement_ [3]. Ces méthodes souffrent néanmoins de plusieurs défauts :

- lors d'un vote à main levée, les étudiants peuvent voir le vote des autres,
  et ils n'osent dès lors pas forcément s'exprimer ;
- le vote par bourdonnement ne permet d'avoir qu'une tendance du nombre de
  votants entre deux questions ;
- il n'est pas facile de donner les résultats du vote rapidement aux étudiants.

Afin de pallier ces défauts, il est par exemple possible d'utiliser des
systèmes de vote avancés utilisant par exemple des boitiers de vote
électronique, ou en se basant sur une application que les étudiants doivent
installer préalablement sur leurs smartphones. Ces solutions, bien que
puissantes, s'avèrent en pratique difficiles à mettre en œuvre, et lourdes
point de vue logistique.

## Votes interactifs à l'aide de code-barres 2D

La solution que j'ai utilisée, découverte grâce au Professeur Jim Plumat cet
été, se base sur l'outil gratuit _Plickers_ [4]. Cet outil permet à l'enseignant
de collecter en temps-réel les **votes de ses étudiants**, sans que ceux-ci ne
doivent disposer de quelque appareil que ce soit. Le principe est simple, et
peut être décrit en trois étapes :

- l'enseignant crée son jeu de questions, de type **questions à choix
  multiples** avec au maximum quatre propositions, sur le site web de
  _Plickers_ ;
- L'enseignant imprime et distribue des **codes-barres 2D** à ses étudiants, et
  ceux-ci votent en orientant le code-barres dans l'un des quatre sens
  possibles, selon la réponse qu'ils sélectionnent ;
- L'enseignant **scanne** les codes-barres 2D avec son smartphone, et les
  résultats du vote s'affichent dessus en temps-réel, mais également sur le
  site web Plickers qu'il est possible de projeter aux étudiants.

<figure>
  <img src="/images/blog/plickers-demo.jpg" width="800" height="533"
  alt="Vote des étudiants dans l'auditoire" />
  <figcaption>Les étudiants votent en orientant un code-barres 2D dans
  une des quatre directions possibles.</figcaption>
</figure>

Quels sont les **avantages** de ce système ? Tout d'abord, cela est très peu
couteux point de vue logistique : les étudiants n'ont pas besoin d'appareils
particuliers, seul l'enseignant doit avoir un smartphone et il doit avoir
imprimé des codes-barres. De plus, il est possible de faire des questions avec
quatre choix possibles, et d'avoir un résultat direct et précis qui est
présentable aux étudiants. Enfin, les étudiants ne sachant pas voir ce que
votent les autres, et le vote étant complètement anonyme, ils ont moins peur de
s'engager.

<figure>
  <img src="/images/blog/plickers-scan.jpg" width="200" height="300"
  alt="Scan de l'auditoire avec l'application Plickers" />
  <figcaption>L'enseignant scanne l'auditoire avec l'application Plickers pour
  enregistrer les votes.</figcaption>
</figure>

Bien qu'il soit possible de montrer directement, en temps-réel, les votes au
fur et à mesure qu'ils sont scannés par l'enseignant, je trouve qu'il n'est pas
forcément opportun de le faire car cela risque d'influencer le vote des
étudiants. Par contre, alors que l'enseignant scanne les réponses, comme il
voit le résultat sur son smartphone, il peut tout à fait apporter des
commentaires tels que _« une tendance se dessine »_ ou encore _« il semblerait
que l'auditoire soit partagé »_, afin de combler le temps qu'il faut pour
scanner la classe. Une fois cela terminé, le résultat du vote est présenté aux
étudiants, et la réponse correcte dévoilée.

<figure>
  <img src="/images/blog/plickers-realtime-results.jpg" width="300" height="199"
  alt="Résultats des votes en temps réel" />
  <figcaption>Il est possible de projeter en temps-réel les résultats des votes
  pendant qu'ils sont enregistrés.</figcaption>
</figure>

## Utilisation pour le cours de programmation

Comment ai-je utilisé ce système dans le cadre du cours d'informatique dont
j'ai la charge cette année ? Chaque cours, d'une durée d'une heure, était
agrémenté de **quatre quizz**. Lors du premier cours, c'était évidemment une
surprise pour les étudiants, mais pour les cours suivants, ils s'y attendaient
et leur attention étaient maintenue à un niveau correct tout au long du cours
magistral, en l'attente du quizz suivant.

<figure>
  <img src="/images/blog/plickers-info-course.jpg" width="800" height="592"
  alt="Utilisation de Plickers au cours d'informatique" />
  <figcaption>Les étudiants sont en train de voter pour un quizz pendant le
  cours magistral.</figcaption>
</figure>

J'ai utilisé **deux types de questions**, chaque type ayant un but précis :

1. Le quizz pose une question par rapport à un concept qui vient tout juste
   d'être expliqué. Cela permet de vérifier que les étudiants ont été attentifs
   à ce qui vient d'être dit. Les réponses apportées à ces questions sont
   plutôt assez bonnes.
2. Le quizz pose une question contenant un _« piège »_ dans lequel les
   étudiants devraient tomber. La suite du cours a pour but de leur expliquer
   pourquoi ils ont mal répondu et leur apporter la réponse correcte. Les
   réponses apportées à ces questions sont plutôt mauvaises.

Et cela fonctionne ! En effet, les résultats enregistrés correspondent bien au
type de question. Alors que le premier type de question permet de maintenir
l'attention _avant_ l'arrivée du quizz, le second type de question va susciter
de l'attention _après_ le quizz.

<figure>
  <img src="/images/blog/plickers-quizz-results.png" width="980" height="240"
  alt="Deux types de questions pour les quizz" />
  <figcaption>Deux types de questions ont été utilisées pour les quizz,
  permettant de susciter l'attention avant ou après l'utilisation du
  quizz</figcaption>
</figure>

Bon, tout cela semble peut-être (trop) parfait. Mais y a-t-il des **défauts** à
ce système ? Évidemment qu'il y en a, et pas qu'un seul. Néanmoins, le seul
gros défaut que j'ai personnellement rencontré avec ce système est le nombre
limité de codes-barres uniques qu'il est possible d'avoir. On ne peut avoir
plus de 63 codes-barres avec la version actuelle de Plickers. Cela n'est dès
lors pas pratique à utiliser pour un auditoire de 350 étudiants. Des étudiants
ont en effet indiqué une frustration à ne pas pouvoir voter avec un code-barres
comme les autres. Rien ne les empêche évidemment de _« voter dans leur tête »_,
mais cela peut être compréhensible que ce n'est pas pareil.

Malgré cela, j'ai réellement apprécié l'utilisation de ce système, et j'ai pu
avoir des retours très positifs des étudiants. Même si tout le monde ne peut
pas voter, avec 63 votants au maximum, il est déjà possible d'avoir une bonne
tendance sur l'auditoire. Enfin, dans tous les cas, le quizz en tant que tel
permet de maintenir un niveau correct d'attention auprès des étudiants.

## Références

[1] Patrick Maddalena (2013), _La bible de la formation : 76 fiches pour
dynamiser vos formations et rendre vos stagiaires actifs_. Eyrolles. (ISBN:
978-2-2125-5508-0)<br />
[2] Markus Brauer (2011). _Enseigner à l'université: Conseils pratiques,
astuces, méthodes pédagogiques_. Armand Colin. (ISBN 978-2-2002-5458-2)<br />
[3] <https://perso.uclouvain.be/olivier.bonaventure/blog/html/2013/02/05/humming.html><br/>
[4] <https://www.plickers.com>

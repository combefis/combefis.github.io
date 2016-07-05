---
layout: post
title: "Initiation à l'intelligence artificielle à l'ECAM"
date: 2016-03-28 14:16:36 +0200
categories: enseignement
---

Vous avez très certainement entendu qu'une nouvelle étape a été récemment
franchie par _Google_ dans le domaine de l'**intelligence artificielle**. La
machine a en effet battu l'être humain au jeu de Go, jeu réputé très difficile
et pour lequel aucune intelligence artificielle n'était jusqu'à aujourd'hui
capable de battre l'être humain. Du _8 au 15 mars 2016_, **Lee Sedol**, joueur
professionnel de Go, a affronté **AlphaGo**, l'intelligence artificielle mise au
point par les ingénieurs de Google, à cinq reprises avec comme résultat final
une victoire et quatre défaites [1].

## Projet IA pour King & Assassins

Dans le cadre du laboratoire de _Projets de développement informatique_, les
étudiants en deuxième année de bachelier, pré-orientation génie électrique et
informatique, vont devoir développer une intelligence artificielle pour jouer
au jeu de plateau **King & Assassins** [2].

Après avoir fait une démonstration d'une partie aux étudiants, puis après les
avoir fait jouer entre eux, afin de leur expliquer les règles et les faire
réfléchir à des **stratégies de jeu**, ils sont maintenant prêts pour
développer une intelligence artificielle (IA). Au terme du laboratoire, les IA
des étudiants s'affronteront entre elles dans un **grand tournoi**, afin de
déterminer laquelle est la meilleure. Cette dernière recevra ensuite l'honneur
d'affronter le directeur de l'ECAM, dans _un match machine vs humain_ !

<figure>
  <img src="/images/blog/king-assassins-demo.jpg" width="768" height="576"
  alt="Démonstration d'une partie de King & Assassins" />
  <figcaption>Match démonstration entre un enseignant et un étudiant (aucun
  n'avait précédemment joué, et l'enseignant a perdu).</figcaption>
</figure>

Pourquoi King & Assassins ? Il s'agit d'un jeu très intéressant pour plusieurs
raisons. Tout d'abord, les règles sont très rapides à comprendre et les parties
sont courtes (30 minutes en moyenne). Ensuite, c'est un **jeu asymétrique**,
dans le sens où chaque joueur a un rôle différent (le roi et ses chevaliers ou
le peuple et les assassins). Une intelligence artificielle pour un des deux
joueurs doit donc prendre en compte l'autre joueur; c'est comme s'il fallait
développer deux intelligences artificielles en réalité.

<figure>
  <img src="/images/blog/king-assassins-training.jpg" width="300" height="263"
  alt="Entrainement à King & Assassins" />
  <figcaption>Même pendant les heures de fourche, les étudiants travaillent sur
  leur labo !</figcaption>
</figure>

En deux mots, le principe du jeu est simple. Le but du **roi** est d'atteindre
son château en vie, ou d'arrêter/tuer tous les assassins à l'aide de ses
**chevaliers**. Le but des **assassins**, cachés parmi le **peuple**, est de
tuer le roi ou de l'empêcher d'atteindre son château. Il s'agit d'un jeu qui se
joue par tours (15 maximum) durant lesquels chaque équipe a un maximum de
points d'action à consommer (avancer, arrêter, tuer...).

<figure>
  <img src="/images/blog/king-assassins-board.jpg" width="300" height="152"
  alt="Plateau du jeu King & Assassins" />
  <figcaption>Les assassins, cachés dans la population, doivent tuer le roi
  avant que celui-ci ne rejoigne sont château.</figcaption>
</figure>

Pourquoi de l'intelligence artificielle si tôt dans le cursus ? Le but premier
n'est pas tant de leur enseigner le fonctionnement de l'intelligence
artificielle, mais bien de les impliquer dans un **projet personnel captivant
et motivant**. Rien de tel pour cela qu'un jeu suivi d'un tournoi. Outre le
développement d'une stratégie, les étudiants vont pouvoir améliorer leurs
compétences en **programmation Python**, la manipulation de structures de
données avancées et la programmation réseau [3]. Afin de les aider, un cours
d'IA sur les _problèmes de recherche_ [4] leur a été présenté, et une _séance
commune de brainstorming_ sur les éléments à prendre en compte dans une bonne
stratégie pour le jeu a été organisée.

<figure>
  <img src="/images/blog/king-assassins-IA-brainstorming.jpg" width="300"
  height="251" alt="Brainstorming pour une IA pour le jeu King & Assassins" />
  <figcaption>Brainstorming sur des éléments de stratégie à prendre en compte
  pour King & Assassins.</figcaption>
</figure>

Pour le reste, c'est maintenant à eux de jouer ! Plein de courage à eux, et on
rediscute des résultats à la fin de l'année !

## Références

[1] [AlphaGo | Google DeepMind](https://deepmind.com/alpha-go.html).<br />
[2] [King & Assassins](https://boardgamegeek.com/boardgame/147930/
king-assassins).<br />
[3] [Squelette de base pour développer une IA pour le jeu de plateau King &
Assassins en Python](https://github.com/ECAM-Brussels/PythonAdvanced2BA/
tree/master/AIproject).<br />
[4] [Séance 7 : Algorithmique II : Techniques de recherche en intelligence
artificielle](http://fr.slideshare.net/seb478/dveloppement-informatique-
algorithmique-ii-techniques-de-recherche-en-intelligence-artificielle).
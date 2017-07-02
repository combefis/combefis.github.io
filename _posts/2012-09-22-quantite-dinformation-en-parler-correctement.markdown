---
layout: post
title: "Quantité d'information : en parler... correctement !"
date: 2012-09-22 19:47:38 +0200
categories: informatique
---

Ce post fait suite à une discussion que j'ai eue avec mon collègue de bureau.
Je rédigeais un document et sur ce dernier, il me fallait indiquer une quantité
d'information. J'avais donc écrit « 32 Ko » pour signaler une quantité de 32
kilooctets. Mon collègue m'a donc interpellé en m'indiquant que le préfixe
« kilo » est utilisé pour indiquer la puissance \\(10^3\\), à savoir 1000
octets, alors qu'ici travaillant avec des octets, je voulais indiquer
\\(2^{10}\\) octets. En réalité, une norme existe pour indiquer les multiples de puissances de 2.

## Bit, octet et byte

Pour rappel, l'unité de base est **le bit** qui peut prendre deux valeurs
possibles : 0 et 1. Son nom provient d'ailleurs de la contraction de _« binary
digit »_ (nombre binaire). On a ensuite **l'octet** qui est une suite de 8 bits
et se note par un « o » minuscule. Enfin, il reste **le byte** qui indique
simplement un ensemble de bits adjacents et se note par un « B » majuscule.

Encore une fois, tout cela peut porter à confusion. Il faut par exemple distinguer « 4 Gb » qui indique bel et bien quatre gigabits de « 4 GB » qui indique quatre gigabytes. Pour autant que dans le contexte en question, on parle de bytes de 8 bits, on pourra alors aussi écrire « 4 Go ».

## La norme CEI 60027-2

La Commission Électrotechnique Internationale (CEI) a établi une norme
permettant de noter le multiples de \\(2^{10}\\). Suivant cette norme, on
n'utilisera plus « kilo », mais « kibi ». Ainsi, pour représenter 1024 octets,
il faudra parler de « kibioctets » et noter Kio au lieu de Ko. Cet usage n'est
malheureusement pas encore assez répandu, mais il est bel et bien le seul qui
est correct. Les différents préfixes qui sont définis par la norme sont [1] :

> « kibi », « mébi », « gibi », « tébi »...

Il faut également faire attention aux mauvais usages abusifs faits dans le domaine commercial. En effet, si on vous propose par exemple un disque dur de 100 Go, il faut savoir qu'en réalité, cela correspond à une quantité de 93,13 Gio (gibioctets), ce qui pourrait biaiser l'acheteur qui pensait acheter 100 Gio.

## Usage pratique

Lorsqu'on parle de multiples de 1024, il faut utiliser Kio, Mio, Gio, Tio...
mais lorsqu'on parle bel et bien de multiples de 1000, il faut utiliser Ko, Mo,
Go, To... Ce dernier cas est notamment utilisé pour les bandes passantes. On
dira par exemple « 1 Mb/s » pour indiquer un bande passante de un mégabit à la
seconde. De plus, il ne faut faire attention à ne pas confondre « Mb » pour
mégabit avec « MB » pour mégabyte.

Toutes ces quantités d'information ne font que croitre. Il y a quelques années,
on en était encore aux disquettes dont les plus courantes avaient une capacité
de 1440 Kio. Aujourd'hui on en est avec des clés USB dont la capacité se compte
en Gio et avec des disques durs pour lesquels on utilise plutôt les Tio. Et
qu'en est-il donc de l'ordre de grandeur suivant, à savoir les Pio ? Vous
pouvez en savoir plus en lisant un article sur lequel je suis tombé en me
renseignant sur la norme CEI 60027-2 : _« Memory Sizes Explained - Gigabytes,
Terabytes & Petabytes in Layman's Terms »_ [2].

En espérant que ce post vous aura un peu éclairci les idées, je vous souhaite de parler dorénavant correctement des unités d'information et de répandre l'usage correct de la norme CEI 60027-2.

## Références

[1] <http://fr.wikipedia.org/wiki/Octet><br />
[2] <http://www.makeuseof.com/tag/memory-sizes-gigabytes-terabytes-petabytes/>

---
layout: post
title: "Ces suites de chiffres qui recèlent d'informations..."
date: 2012-11-02 22:59:21 +0200
categories: informatique
language: fr
---

On est entourés de suites de chiffres en tout genre, que ce soit sur les cartes
bancaires, les cartes d'identité, les livres, les code-barres, les numéros de
compte... Ces suites de chiffres regorgent en réalité d'informations qu'il est
tout à fait possible d'extraire. Mais le saviez-vous ? Le but de cet article
est de vous présenter quelques-unes de ces suites de chiffres et de comprendre
ce qui s'y cache.

## Des exemples de suites de chiffres

Commençons par les numéros de cartes bancaires [1]. Grâce au premier chiffre,
on peut connaitre le type d'institution qui a délivré la carte. Les 6 premiers
chiffres sont l'identifiant de l'organisme qui a émis la carte. Par exemple,
les numéros commençant par 4 sont des cartes Visa. Les chiffres suivant
correspondent au numéro de compte du client. Et enfin le dernier chiffre est
une somme de contrôle. On revient sur ce chiffre plus loin dans l'article.

Poursuivons notre enquête parmi ces suites de chiffres. Prenez par exemple
votre numéro de registre national. Les 6 premiers chiffres correspondent à
votre date de naissance à l'envers, les 3 chiffres suivants sont un compteur
journalier de naissance et est un nombre pair pour les femmes et impair pour
les hommes et enfin les 2 derniers chiffres sont une somme de contrôle.

Venons-en maintenant aux code-barres EAN [2]. Grâce aux trois premiers
chiffres, vous pouvez obtenir une information quand au pays d'où provient le
produit. Notez bien qu'il s'agit soit du pays de production, soit du pays d'un
des sièges socials du producteur. Par exemple, 54 indique une provenance de
Belgique ou du Grand-Duché du Luxembourg.

Continuons avec les billets de banque d'euro [3]. Prenez le numéro de série du
billet et regardez la première lettre de ce numéro. Elle indique le pays qui a
émis le billet. Par exemple, Z correspond à la Belgique.

Vous devez donc protéger vos suites de chiffres et ne pas les diffuser
n'importe où car elles révèlent de l'information sur vous. Un autre exemple, à
partir du numéro d'un billet électronique pour un voyage en avion, on peut
retrouver la compagnie aérienne que vous avez choisie. Et on peut évidemment
trouver encore beaucoup plus d'exemples, certains étant plus compromettant que
d'autres...

## Sommes de contrôle

Plusieurs des suites de chiffres présentées ont pour but d'être transmises.
C'est notamment le cas pour les numéros de cartes bancaires. Dans une telle
situation, afin de pouvoir faire face aux éventuelles erreurs de transmission,
on utilise une somme de contrôle (checksum en anglais). Il s'agit typiquement
d'un chiffre qui est le résultat d'un calcul sur les chiffres de la suite de
chiffres. Vérifier que ce chiffre est correct permet de s'assurer qu'aucune
erreur de transmission n'a été commise.

### Algorithme de Luhn

Un exemple d'une telle somme de contrôle est l'algorithme de Luhn [4],
notamment utilisé pour les numéros de carte bancaires. Prenons par exemple le
numéro de compte 7992739871. On va lire cette suite de chiffres en partant de
la droite, vers la gauche. Une fois sur deux, on va multiplier par deux le
chiffre lu. Ensuite, pour chaque nombre qui dépasse 10, on fait la somme de ses
chiffres. Voici les deux étapes détaillées :

$$\begin{array}{r*{10}{c}}
    \textrm{Suite initiale :} & 7 & 9 & 9 & 2 & 7 & 3 & 9 & 8 & 7 & 1 \\
    \textrm{Doublement des chiffres :} & 7 & \mathbf{18} & 9 & \mathbf{4} & 7 & \mathbf{6} & 9 & \mathbf{16} & 7 & \mathbf{2} \\
    \textrm{Somme pour les nombres :} & 7 & 9 & 9 & 4 & 7 & 6 & 9 & 7 & 7 & 2 \\
\end{array}$$

Ce qu'il faut maintenant, c'est que la somme des chiffres ainsi obtenus soit
divisible par 10. Si on fait le calcul, on tombe sur 67. Ainsi, pour obtenir un
nombre divisible par 10, il faudrait ajouter 3. Au final, on va donc produire
comme numéro de compte, la suite de chiffres suivante 7992739871_3_. Ce dernier
chiffre ajouté permet de détecter qu'une erreur de transmission a eu lieu. Il
suffit en effet de refaire le calcul présenté précédemment, en ignorant le
dernier chiffre et ensuite de vérifier que la somme de tous les chiffres (en ce
compris le chiffre de contrôle) est bien divisible par 10.

Il faut noter qu'il est tout à fait possible, mais peu probable, que plusieurs
erreurs de transmission font qu'on retombe quand même sur une suite de chiffres
valide. De plus, notez bien qu'il s'agit ici uniquement de _détection d'erreur_.
Il existe également des algorithmes permettant de _corriger_ des erreurs de
transmission, mais ce sera le sujet d'un autre article.

### Numéro ISBN

Il existe évidemment beaucoup d'autres types de sommes de contrôle. Prenons
encore un exemple simple avec l'ISBN-10 [5]. Soit le numéro suivant :
_1-446-70831-4_. Pour vérifier qu'il est bien valide, il suffit de calculer la
somme de ses chiffres, chaque chiffre étant multiplié par sa position :

$$1 \times 10 + 4 \times 9 + 4 \times 8 + 6 \times 7 + 7 \times 6 + 0 \times 5 + 8 \times 4 + 3 \times 3 + 1 \times 2 + 4 \times 1$$

Ce calcul produit **209** comme résultat. Afin de vérifier que le numéro ISBN est valide, il faut que cette somme soit divisible par 11, ce qui est bien le cas.

## Références

[1] <http://www.makeuseof.com/tag/credit-card-numbers-random-read-understand/><br />
[2] <http://fr.wikipedia.org/wiki/Code-barres_EAN><br />
[3] <http://en.wikipedia.org/wiki/Euro_banknotes><br />
[4] <http://fr.wikipedia.org/wiki/Formule_de_Luhn><br />
[5] <http://en.wikipedia.org/wiki/Check_digit>

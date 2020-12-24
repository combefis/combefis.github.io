---
layout: post
title: "Nouveau dispositif d'évaluation par compétences : un retour étudiant"
date: 2020-05-03 17:43:28 +0200
categories: enseignement, pédagogie
permalink: /fr/blog/:year/:month/:day/:title/
language: fr
---

Alors que nous sommes confinés depuis plusieurs semaines, et que mon contrat à l'_ECAM Brussels Engineering School_ (ECAM) [1] s'est terminé depuis quelques jours, suite à [ma démission](/fr/blog/2020/02/17/pourquoi-jai-demissionne-de-lecam/), je continue l'évaluation d'étudiant(e)s, en soirée et à distance, les recevant en entretien suite au nouveau [dispositif pédagogique](/fr/blog/2020/01/31/evaluation-par-competences-a-lecam-un-premier-bilan-apres-un-quadrimestre/)  d'**évaluation par compétences** que j'ai développé et mis en œuvre cette année. En cette fin de second quadrimestre, les premiers **retours d'expérience** des étudiant(e)s de la version améliorée du dispositif ont été récoltés.

Pour rappel, ce nouveau dispositif vise, notamment, à **individualiser et personnaliser** les activités d'enseignement suivies par les étudiant(e)s, à augmenter leur motivation à apprendre et s'impliquer, à leur offrir du feedback plus précis beaucoup plus rapidement. Il permet également à l'enseignant(e) d'avoir un suivi plus précis et en temps réel du progrès de sa classe et du profil d'apprentissage de ses étudiant(e)s. Enfin, il permet de transformer l'évaluation, la faisant passer d'une simple collecte de points par l'enseignant(e) en un élément-clé du processus d’apprentissage régulièrement demandé par l'étudiant(e) à l'enseignant(e).

## Témoignage

En deuxième année de bachelier, j'ai en charge un cours d'[introduction au calcul numérique](/fr/teaching/ecam/numcomp/) dispensé aux étudiants qui suivent l'orientation génie électrique. Parmi les nombreux **retours étudiants informels** déjà collectés, la grande majorité étant par ailleurs positifs, celui de _Louis-Antoine Devos_ repris ci-dessous résume bien le dispositif, son fonctionnement et ses objectifs.

> « Dans le cadre du cours de Numerical Computing, avec mon binôme, j'ai eu l'occasion de réaliser deux petits projets plutôt sympas (un filtre de couleur sélective et un générateur de graphes à partir de données sur le Covid-19).<br>
> Pour nous aider à les coder, nous avons d'abord vu la théorie lors d'un petit cours qui nous donne les bases de certains outils du calcul numérique (manipulation de matrices, affichage de graphes). Ensuite sur un site d'évaluation, il est demandé aux élèves d'accomplir des missions qui rapportent des étoiles (elles améliorent notre cote finale du cours). Ce qui est chouette, c'est que ces missions sont assez larges, mais peuvent s'appliquer à du concret ! Une fois que je découvre la consigne d'une mission, je me mets à chercher une idée précise qui répond au maximum à la question.<br>
> Puis, à partir de mes connaissances acquises au cours, je vais essayer de réaliser mon projet et souvent j'en apprends encore des tonnes en cherchant sur internet comment coder certaines parties de mon projet.<br>
> Pour finir, j'arrive à un programme dont je suis super fier de son résultat et, pour finaliser mon évaluation, je fais une démonstration en direct au prof en lui expliquant mon code. Pendant celle-ci, le prof vérifie que je réponds bien à toutes les compétences évaluées pour cette mission et enregistre les étoiles acquises sur le site d'évaluation. »<br>
> Louis-Antoine Devos, 2ème bachelier option génie-électrique.

Louis-Antoine a travaillé avec son binôme Elliott Lengelé pour trouver des pistes de sujets pour les missions et pour comprendre la matière qu'il a ensuite pu mettre en œuvre individuellement en menant à bien les missions que je proposais pour ce cours. Pendant l'un des rendez-vous de présentation des travaux, qui sont individuels et organisés à distance par Zoom suite au confinement, Louis-Antoine a pu présenter le résultat de deux missions dont il était très fier, en témoignaient **l'enthousiasme et l'énergie** qui s'entendaient à travers sa voix.

## Missions réalisées

Dans la **première mission** [2], les étudiant(e)s doivent utiliser la _librairie Numpy_ de Python, qui permet de réaliser des calculs matriciels de manière très efficace, pour réaliser un programme qui applique des transformations sur une image (qui peut se représenter par plusieurs matrices). Un petit code d'exemple fonctionnel est mis à leur disposition et, pour réussir la mission, les étudiants doivent trouver/imaginer une transformation qui peut se représenter en opérations matricielles et la programmer. Louis-Antoine est parti sur la réalisation d'un filtre sélectif permettant de retirer une couleur d'une image. Voici l'une des nombreuses photos obtenues par son programme, qu'il a fièrement présenté durant son entretien :

<figure>
  <img src="/images/blog/numcomp-mission1-devos.png" width="800" height="224" alt="Étudiant de master passant un quiz">
  <figcaption>Grâce à un filtre sélectif, seules certaines couleurs d'une image sont conservées alors que le reste passe en niveaux de gris.</figcaption>
</figure>

Dans la **deuxième mission** [3], les étudiant(e)s doivent se procurer des données de type _Open Data_ (données mises à disposition librement) mises à disposition par le fédéral [4], au choix, et réaliser une petite analyse donnant lieu à des graphiques. En pleine crise sanitaire, le choix de Louis-Antoine s'est orienté vers les données COVID-19 collectées quotidiennement. Son programme génère des graphes présentant le nombre de cas détectés de différentes manières. Il a présenté une évolution au cours du temps et un histogramme par tranches d'âges. D'autres possibilités existent et pourraient être très facilement obtenues depuis son programme.

<figure>
  <img src="/images/blog/numcomp-mission2-devos.png" width="800" height="231" alt="Étudiant de master passant un quiz">
  <figcaption>Grâce à des données libres en lien avec la crise COVID-19, l'évolution des cas au cours du temps et la répartition des cas par tranches d'âges sont analysés.</figcaption>
</figure>

## Motivation et créativité

Ce retour de Louis-Antoine montre bel et bien qu'il s'est **approprié l'évaluation** comme outil pour me démontrer qu'il a acquis de nouvelles compétences qu'il souhaite faire valider. Il montre également l'individualisation des travaux qui permet aux étudiant(e)s d'explorer des thèmes qu'ils ou elles aiment, ce qui les motivent à apprendre. Concernant Louis-Antoine, il en est aujourd'hui à 85% de maitrise des compétences de base et 27% des compétences avancées, après 6 évaluations présentées (un quiz, trois missions et deux codings), comme on peut le voir sur le **tableau de bord** ci-dessous, accessible tant par l'étudiant que par l'enseignant.

<figure>
  <img src="/images/blog/stars-system-devos.png" width="800" height="295" alt="Étudiant de master passant un quiz">
  <figcaption>Le tableau de bord de chaque cours permet aux étudiant(e)s et enseignant(e)s de voir le progrès des compétences acquises en temps réel.</figcaption>
</figure>

La prochaine grosse étape en lien avec cette nouvelle approche pédagogique sera évidemment l'**évaluation du dispositif**, de manière plus rigoureuse, tant du point de vue des étudiant(e)s que de celui des enseignant(e)s. Une enquête et évaluation plus structurée est prévue en fin d'année et je partagerai évidemment les résultats avec vous dans un prochain article !

## Références

[1] [ECAM Brussels Engineering School](https://www.ecam.be) (ECAM), institut supérieur industriel de la Fédération Wallonie-Bruxelles.<br>
[2] [Coding 1: Image transformation](/files/ucourses/numcomp/NumCompScipy-Coding1.pdf), NC301µ Introduction to Numerical Computing with SciPy, ECAM, Winter 2020.<br>
[3] [Coding 2: Presenting data](/files/ucourses/numcomp/NumCompScipy-Coding2.pdf), NC301µ Introduction to Numerical Computing with SciPy, ECAM, Winter 2020.<br>
[4] [The Belgian Open Data Initiative](https://data.gov.be/en), la plateforme fédérale d'accès aux données belges disponibles en Open Data.

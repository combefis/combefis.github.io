---
date: 2015-12-23 15:21:51 +0200
categories: enseignement, pédagogie, informatique
language: fr
---

# L'informatique pour les ingénieurs à l'ECAM

Les étudiants à l'ECAM ont tous un **cours général d'informatique** en première
et en deuxième année de bachelier. Lors de l'élaboration des nouveaux
programmes de cours, une réflexion a été mise en place pour constituer le
contenu de ces cours. En effet, ces cours étant suivis par tous les étudiants,
peu importe l'orientation qu'ils prendront en master (automatisation,
construction, électronique, géomètre, informatique ou électromécanique), ils
devront tous les suivre. Il s'agissait donc de définir un contenu qui soit
**utile dans la formation de tout ingénieur**. Cet article décrit la mise en
place de ces cours, opérée avec mon collègue Quentin Lurkin, qui ont été
dispensés **pour la première fois** cette année académique.

<figure>
  <img src="/images/blog/Python2BA-first-course.jpg" width="800"
  height="450" alt="Premier cours de Python en BAC 2" />
  <figcaption>Les étudiants de deuxième année de bachelier sont prêts à suivre leur premier cours de Python de l'année.</figcaption>
</figure>

## Contenu des cours

Étant donné que tous les étudiants seront amenés à programmer, et ce peu
importe l'orientation qu'ils choisiront, notre choix s'est porté sur la
**programmation** plutôt que de faire des cours sur des concepts liés à
l'informatique, voire sur son histoire.

La première année (_304 étudiants_) introduit à la programmation en Python et a
pour objectif final que les étudiants comprennent **la programmation
procédurale**. Au terme du cours, ils doivent entre autre être capables de
comprendre et d'utiliser les concepts suivants : variable et type de donnée,
instruction conditionnelle, instruction répétitive, fonction, récursion, chaine
de caractères, listes, itérateur et algorithmes. Les étudiants ont **7,5h** de
cours magistraux et **7,5h** d'apprentissage en e-learning via la plateforme
Pythia [1] qui leur permet de faire des exercices en ligne, avec correction
automatique.

<figure>
  <img src="/images/blog/pythia-logo-full.png" width="300"
  height="125" alt="Logo Pythia" />
</figure>

La deuxième année (_164 étudiants_) va plus loin dans l'apprentissage de la
programmation en Python et introduit à plusieurs **concepts informatiques**,
avec comme idée de faire comprendre aux étudiants des éléments informatiques
avec lesquels ils interagissent tous les jours. Point de vue programmation, les
étudiants découvrent :

- des structures de données avancées (ensemble, tuple et dictionnaire ;
- les bases de la programmation orientée objet (objet, classe, encapsulation) ;
- les interfaces graphiques et la programmation évènementielle ;
- la gestion d'erreurs et le mécanisme d'exception ;
- la lecture et l'écriture de fichiers textes et binaires ;
- la programmation web (HTML, CSS, JavaScript) ;
- le fonctionnement d'Internet et du Web ;
- l'utilisation de la librairie standard Python ;
- et la qualité de code et les conventions de codage.

Concernant les concepts informatiques, les étudiants sont sensibilisés aux
notions de : base de données (document JSON, structure et interrogation d'une
DB), design d'interface graphique (layout, gestion d'évènements), stockage et
fichier (texte et binaire, stockage et (dé)sérialisation), fonctionnement
d'Internet (modem, routeur, réseau, WiFi, cloud, internet des objets...), audit
de code (qualité et convention de codage). Les étudiants ont **15h** de cours
magistraux et **28h** de laboratoire où ils peuvent pratiquer la programmation
à l'aide de nombreux exercices.

**Les syllabus** des deux cours d'informatique se trouvent en ligne à l'adresse
suivante : <http://www.ukonline.be/cours/python/apprendre-python> (en cours de
finalisation). De plus, toutes **les ressources** utilisées dans le cadre des
deux cours sont disponibles sur la page suivante :
<http://sebastien.combefis.be/fr/teaching/ecam/python>.

<figure>
  <img src="/images/blog/book-apprendre-python.png" width="150"
  height="213" alt="Livre apprendre Python" />
</figure>

Le but de ces deux cours est donc de proposer aux étudiants une vue globale de
plusieurs aspects de l'informatique, tout en leur fournissant une solide
**formation de base en programmation**.

## Mini-projet en 2BA

En plus des cours et laboratoires, les étudiants en deuxième année doivent
travailler, en binômes, sur un **mini-projet** qui consiste à développer un
**site web**, en codant le côté client, le côté serveur et la base de données,
en Python. Les étudiants doivent également programmer une **interface
graphique** d'administration qui communique avec le serveur. Les étudiants
étaient complètement libres quant au site web à développer; ceci afin de
stimuler leur créativité.

<figure>
  <img src="/images/blog/python-mini-projet-architecture.png" width="300"
  height="146" alt="Architecture du mini-projet Python" />
</figure>

Comme vous le constatez avec les quelques exemples repris ci-dessous, les thèmes choisis sont très variés ! Ce mini-projet a permis de motiver les étudiants, et les a aidé à appliquer directement tous les concepts enseignés sur un projet réel et personnel.

<div class="slideshow">
  <div><img src="/images/blog/python-mini-projet-Broodcoorens-Lemenu-2015.png"
  width="800" height="489" alt="Jeux a boire" /><br /><b>Jeux a boire</b><br />
  <small>(par Maxime Broodcoorens et Valentin Lemenu)</small></div>
  <div><img src="/images/blog/python-mini-projet-Chagnot-Szelagowski-2015.png"
  width="800" height="489" alt="Gestion d'horaire" /><br /><b>Gestion d'horaire
  </b><br /><small>(par William Chagnot et Lucas Szelagowski)</small></div>
  <div><img src="/images/blog/python-mini-projet-Selleslagh-et-al-2015.png"
  width="800" height="489" alt="Écran d'information" /><br /><b>Écran
  d'information</b><br /><small>(par Anne De Ceuleneer, Tom Selleslagh, Clement
  Vandekerchhove, Guillaume Van den Hove d'Ertsenryck, Alexis Van Haelen et
  Benoit Wery)</small></div>
  <div><img src="/images/blog/python-mini-projet-Boucquey-DeCat-2015.png"
  width="800" height="489" alt="Liste de courses" /><br /><b>Liste de courses
  </b><br /><small>(par Francois De Cat et Antoine Boucquey)</small></div>
  <div><img src="/images/blog/python-mini-projet-Godart-Lekens-2015.png"
  width="800" height="489" alt="Scores de foot" /><br /><b>Scores de foot</b>
  <br /><small>(par Nicolas Godart et Amaury Lekens)</small></div>
  <div><img src="/images/blog/python-mini-projet-Hammoud-Troch-2015.png"
  width="800" height="299" alt="Calculateur de vis" /><br /><b>Calculateur de
  vis</b><br /><small>(par Mariam Hammoud et Gabriel Troch)</small></div>
</div>

## Pourquoi Python ?

Et pourquoi avoir choisi **Python** ? Ce n'est malheureusement pas le sujet de
cet article; mais voici néanmoins deux réponses rapides pour vous rassasier en
attendant un prochain article sur ce sujet : car il figure parmi les langages
les plus utilisés en 2015 [2] et car il est partout, même à la STIB, comme en
témoigne l'image suivante !

<figure>
  <img src="/images/blog/stib-python.jpg" width="250"
  height="333" alt="Publicité STIB avec un Python" />
</figure>

Si vous ne connaissez pas encore le langage Python, je vous invite à le découvrir, le tester et pourquoi pas l'adopter ! Il s'agit d'un langage simple et rapide à apprendre, très riche, et qui vous permettra de rapidement réaliser de nombreux types de programmes.

## Références

[1] [La plateforme Pythia](http://www.pythia-project.org/).<br />
[2] [The 2015 Top Ten Programming Languages](http://spectrum.ieee.org/computing/
software/the-2015-top-ten-programming-languages), Stephen Cass, 20 juillet 2015.

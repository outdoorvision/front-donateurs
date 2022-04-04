<h1 align="center">
  Outdoorvision
</h1>

- [Dossier des **pages** Markdown](src/md-pages/)
- [Dossier des **blocks** Markdown](src/md-blocks/)

Site construit avec GatsbyJS, Material-UI


# Tutoriel

## Configuration des blocs d'image & texte positionnés à droite ou à gauche
Dans les [pages markdwon](src/md-pages/) ou les [blocs markdown](src/md-blocks/),il est possible d'utiliser un composant **imagetextblock** pour disposer sur la même ligne une image et un texte (titre + contenu), dont la disposition est configurable.

Pour chaque bloc, il faut indiquer:
- l'attribut `title` : titre
- l'attribut `picture` : chemin de l'image relativ au dossier `/static/`
- l'attribut `swap="true"` si l'on souhaite disposer l'image à droite. Par défault l'image est disposé à gauche.
- le contenu texte au sein des balises `<imagetextblock>ici</imagetextblock>`

Exemple : 

```
<imagetextblock title="6,5 millions de traces" picture="/medias/challenge-FFC-02.jpg">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a fermentum nunc. Vestibulum et interdum nisi. Aliquam aliquet felis sit amet ligula convallis, non sodales mauris auctor. Pellentesque malesuada a sapien non consequat. Duis cursus ac erat non viverra. Phasellus pretium commodo risus sed pellentesque.
</imagetextblock>

<imagetextblock title="Challenge OUTDOORVISION" picture="/medias/challenge-FFC-02.jpg" swap="true">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a fermentum nunc. Vestibulum et interdum nisi. Aliquam aliquet felis sit amet ligula convallis, non sodales mauris auctor. Pellentesque malesuada a sapien non consequat. Duis cursus ac erat non viverra. Phasellus pretium commodo risus sed pellentesque.
</imagetextblock>
```

## Configuration des images aléatoires

Dans certaines pages, il est possible de configurer l'usage d'images aléatoire :

### Page d'accueil

Un bloc de 4 images correspondant à 4 disciplines va récupérer des images aléatoirement dans les dossiers 
- `static/medias/random-rando`
- `static/medias/random-ski`
- `static/medias/random-velo`
- `static/medias/random-course`

Pour une bonne mise en page, privilégier l'ajout d'images de même dimension.

Source : composant Discipline (`<disciplines></disciplines>`) présent dans le bloc markdown `src/md-blocks/home2.md` 

### Autres pages markdwon - bandeau sous le titre

Pour les pages définies dans `src/md-bpages`, il est possible de renseigner un dossier dans lequel l'image du bandeau (sous le titre) sera choisie aléatoirement. 

Pour cela, il faut utiliser l'attribut `randompicfolder` de la page pour spécifier quel dossier présent dans `static/medias` sera utilisé pour piocher une image aléatoire. Dans l'exemple ci-dessous, on désigner le dossier `random`.

```
---
title: Nos actualités
swap: false
randompicfolder: random
---
```

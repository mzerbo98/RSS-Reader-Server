# Serveur RSS
Ce projet consiste en un mini serveur permettant de parser des flux rss.

## Présentation
Ce mini serveur a été réalisée à l'aide de NodeJs, ExpressJs et rss-parser.
Express est un framework Nodejs dont le but est de simplifier la création de serveur web.
rss-parser est une librairie javascript qui sert à lire et parser des flux rss.

## Lancement
Pour lancer le projet, il faut suivre les étapes suivantes : 

* Avoir un environnement nodejs (avec npm) installé et prêt
* Installer les dépendances avec la commande `npm install`
* Lancer le serveur avec la commande `npm start` ou `node index.js`

**Note :** Le serveur utilise le port configuré sous la variable d'environnement **PORT** ou le **8080** si elle n'est pas définie. Veuillez vous assurez de libérer le port en question
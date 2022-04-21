const express = require('express');
const app = express();
let Parser = require('rss-parser');
let parser = new Parser();

//Definition du dossier statique pour servir les fichiers html statiques
app.use(express.static('client'));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Credentials", true);
    next();
 });

//Definition de la route rss pour récupérer le flux
app.get('/rss', (req, res) => {
    //Récupération de l'url du flux ou utilisation de l'url par defaut
    const url = req.query.url || 'https://www.lemonde.fr/rss/en_continu.xml';
    //lecture et traitement du flux à l'aide de la librairie rss-parser
    parser.parseURL(url,
    (err, feed) => {
        if (err) {
            res.send(err);
            return console.log('error reading rss', err);
        }
        //Utilisation de skip et limit pour gérer la pagination
        const skip = Number(req.query.skip);
        const limit = req.query.limit ? Number(req.query.limit) : null;
        if (limit) {
            feed.items = feed.items.slice(skip, skip+limit);
        } else {
            feed.items = feed.items.slice(skip);
        }
        //Renvoi du résultat
        console.log('retour du résultat');
        res.send(feed);
    });
});


//Démarrage du serveur sur le port définie dans les variables d'environnement ou sur 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
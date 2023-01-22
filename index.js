const express = require('express');
const app = express();
const path = require('path');

// Définir le répertoire des fichiers statiques
app.use(express.static(path.join(__dirname, 'Projet1OPCR')));

// Gérer les requêtes pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Server running on port 3000.');
});
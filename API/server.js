const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json()); // Pour analyser les données JSON

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});

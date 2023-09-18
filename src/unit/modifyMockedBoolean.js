const fs = require('fs');

// Chemin du fichier de variable
const filePath = '/variable.js';

// Charger le contenu du fichier
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Modifier la variable 'mocked' dans le contenu du fichier
const modifiedContent = fileContent.replace('mocked: false', 'mocked: true');

// Réécrire le contenu modifié dans le fichier
fs.writeFileSync(filePath, modifiedContent);

console.log('La variable a été modifiée avec succès.');
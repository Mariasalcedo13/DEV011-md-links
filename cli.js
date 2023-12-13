#!/usr/bin/env node
//Importación de la función mdLinks
const { mdLinks } = require('./index.js');
const functions = require('./function.js');
//obtener la ruta del archivo Markdown que se pasa como argumento 
const filePath = process.argv[2];
const validate = process.argv.includes("--validate");
const stats = process.argv.includes("--stats");
//Se llama a la función mdLinks
 //mdLinks("./README.md", true)
//   .then(links => console.log(links))
//   .catch(error => console.error(error));

mdLinks(filePath, validate,stats)
  .then(results => {
    //console.log(results.links); // Enlaces procesados
    console.log(results); // Estadísticas
    mdLinks("./README.md", true)
    //console.log(results.links);
  })
  .catch(error => {
    console.error(error);
  });
  
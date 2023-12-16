
const functions = require('./function.js');

const mdLinks = (path, validate ,stats) => {
    return new Promise((resolve, reject) => {
        // Verificar si la ruta es absoluta y convertirla
        const pathAbsoluto = functions.isPathAbsolute(path) ? path : functions.pathAbsolute(path);
        // Verificar si la ruta existe
    if (functions.existePath(pathAbsoluto)) {
        // Cuando la ruta existe
        functions.leerArchivo(pathAbsoluto)
        .then(content => functions.extraerLinks(content))
        .then(links => functions.processLinks(links, pathAbsoluto, validate))
        .then(processedLinks => {
          
          if (validate && stats) {
            // Si validate es verdadero, resolver con los resultados de la validación
            const combineResult = functions.validar(processedLinks);
            resolve({links:combineResult});
            

          }
          //cunado esta en stast y validate
           else if (validate){
            const validationResults = functions.validar(processedLinks);
            
      resolve({ links: processedLinks});
            

          }
          else {
            // Si validate es falso, resolver con los resultados de stats
            const statistics = functions.stats(processedLinks);
            resolve({ links:  statistics });
          }
        })
        .catch(error => {
          reject(`Error processing links: ${error.message}`);
        });
        } else {
            // Si no existe la ruta, se rechaza la promesa
            reject("La ruta no existe");
        }
    });
   
}
// .then(processedLinks => {
//     if (validate) {
//         const stats = calculateStats(processedLinks);
//         resolve({ links: processedLinks, stats });
//     } else {
//         resolve(processedLinks);
//     }
// })

module.exports = { mdLinks };

// .then (resp => {
//     resolve(resp)
// })
// const functions = require('./function.js');

// const mdLinks = (path, validate ) => {
//     return new Promise((resolve, reject) => {
//         // Verificar si la ruta es absoluta y convertirla
//         const pathAbsoluto = functions.isPathAbsolute(path) ? path : functions.pathAbsolute(path);
//         // Verificar si la ruta existe
//         if (functions.existePath(pathAbsoluto)) {
//             // Cuando la ruta existe
//             functions.leerArchivo(pathAbsoluto)
//                 .then(content => {
//                     return functions.extraerLinks(content);
//                 })
//                 .then (links => {
//                     console.log(validate, 'AAAAAA');
//                     return functions.processLinks(links, pathAbsoluto, validate)
//                 })
//                 .then (resp => {
//                     resolve(resp)
//                 })
//                 .catch(error => {
//                     reject(`Error reading the file: ${error.message}`);
//                 });
//         } else {
//             // Si no existe la ruta, se rechaza la promesa
//             reject("La ruta no existe");
//         }
//     });
   
// }

// module.exports = { mdLinks };



// const mdLinks = (path) => {
//     return new Promise((resolve, reject) => {
//         // Verificar si la ruta es absoluta y convertirla
//         const pathAbsoluto = functions.isPathAbsolute(path) ? path : functions.pathAbsolute(path);
//         // Verificar si la ruta existe
//         if (functions.existePath(pathAbsoluto)) {
//             //cuando la ruta existe
//             functions.leerArchivo(pathAbsoluto)
//                 .then(content => {
//                     const links = functions.extraerLinks(pathAbsoluto, content);
//                     resolve(links);
//                 })
//                 .catch(error => {
//                     reject(`Error reading the file: ${error.message}`);
//                 });
//         } else {
//             //si no existe la ruta se rechaza la promesa
//             reject("la ruta No existe");
//         }



//     });
// }
// module.exports = { mdLinks };

////////////////////////////////////

//const mdLinks = require('fs');
//importacion de funciones 
//const { leerArchivo, extraerLinks } = require('./function');
//definicion de mdLinks
//module.exports = function mdLinks(filePath) {
//lectura de archivo
  //const content = leerArchivo(filePath);
  //extraccion de enlaces
  //const links = extraerLinks(content);  

 // return links;

//}

//const fs = require('fs').promises;
// const path = require('path');


// function mdLinks(filePath) {
//   const absolutePath = path.resolve(filePath);

//   return fs.readFile(absolutePath, 'utf8')
//     .then(content => extractLinks(absolutePath, content))
//     .catch(error => {
//       throw new Error(`Error reading the file: ${error.message}`);
//     });
// }




// module.exports ={mdLinks} ;
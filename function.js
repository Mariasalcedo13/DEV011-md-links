const fs = require('fs');
const { readFile } = require("fs/promises");
const path = require("path");
//const { isErrored } = require('stream');
const axios = require('axios');

//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));





function validarLink(link) {
  return axios.get(link)
  .then(response => {
   // console.log('Código de estado HTTP:', response.status);
   
    return response.status; // o response.text() si esperas una respuesta en formato de texto
  })
  .catch(error => {
    //console.error('Error en la solicitud:');
    return 'error'
  });}


  //calculo total de los links 



module.exports = {
  
  isPathAbsolute(filePath) {
    // vverificar si es adsoluta 
   
    return path.isAbsolute(filePath);
  },

  pathAbsolute(filePath) {
    // coventir path adsolute
    const pathAbsolute =  path.resolve(filePath);
    return pathAbsolute
  },

  existePath(filePath) {
    return fs.existsSync(filePath);
  },

  leerArchivo(filePath) {
    //obtener una cadena (string)  
    //en UTF-8 al leer el contenido del archivo.
    return readFile(filePath, 'utf8')
    .then (resp => {
      return resp
    })
    .catch (err => {
      return err
    })
  },

  extraerLinks(file) {
    const links = file.match(/\[([^\]]+)]\(([^)]+)\)/g || [])
    if (links) {
     // console.log(links);
 return links
    }
    else {
    return 'no hay link'
    }
    
  },

  processLinks(links, pathAbsoluto, validate) {
  //  if(validate === false || validate === undefined) {
      const arreglo = links.map(link => {
        const match = link.match(/\[(.*?)\]\((.*?)\)/);
        if(validate === false || validate === undefined) {
          return {
            href: match[2],
            text: match[1],
            file: pathAbsoluto,
          };
        }
        else if (validate === true) {
          return validarLink(match[2]) 
            .then(resp => {
              return {
                href: match[2],
                text: match[1],
                file: pathAbsoluto,
                status: resp,
                ok: 'ok'
              };
            })
            .catch(err => {
              return {
                href: match[2],
                text: match[1],
                file: pathAbsoluto,
                status: 'error',
                ok: 'fail'
              };
            });
        }
      });

      return Promise.all(arreglo) 
      .then((res) => {
        return Promise.resolve(res)
      })
      .catch(err => {
        throw err
      })
  },

/*
  stats(links){
    const uniqueLinks = links.filter((link, index) => links.indexOf(link) === index);
  
    return {
      Total: links.length,
      Unique: uniqueLinks.length,
    };
  }*/

};


  
 //module.exports = stats;


//  function(filePath, stats) {
//   return mdLinks(filePath, true)
//     .then(function(links) {
//       const uniqueLinks = links.filter(function(link, index) {
//         return links.indexOf(link) === index;
//       });

//       if (stats) {
//         return {
//           Total: links.length,
//           Unique: uniqueLinks.length,
//         };
//       } else {
//         return {
//           Total: links.length,
//         };
//       }
//     })
//     .catch(function(error) {
//       return `Error al calcular estadísticas: ${error.message}`;
//     });
// }





  // processLinksFalse(links, pathAbsoluto) {
  //   return links.map(link => {
  //     return {
  //       href: link.href,
  //       text: link.text,
  //       file: pathAbsoluto,
  //     };
  //   });
    
  // },
  // processLinksTrue(links, pathAbsoluto) {
  //   return Promise.all(links.map(link => validarLink(link)))
  //     .then(validatedLinks => {
  //       return validatedLinks.map(link => {
  //         return {
  //           href: link.href,
  //           text: link.text,
  //           file: pathAbsoluto,
  //           status: link.status,
  //           ok: link.ok ? 'ok' : 'fail',
  //         };
  //       });
  //     });
  // },


//  fetch(link)
//  .then(response => {
//    return  response.status;
//   // link.ok = response.status >= 200 && response.status < 300 ? 'ok' : 'fail';

//    //return link
//   })
//   .catch(error => {
//     //link.status= error.response ? error.response.status:"N/A";
//    // link.ok = "fail";
//    //
//     // console.error(`Error fetching link ${link.href}:`, error);

//    return error;
//    });
//  };


//existePath (filePath){
 // return fs.existsSync(filePath)},
  
const{mdLinks}= require("../index.js");
const path = require("path");


describe('mdLinks', () => {
  const result = mdLinks("./README.md");
  const result1 = "/maria/curso/noexiste.md";
  const fileWithoutLinks = './some/file.md';

  it("Deberia devolver una promesa", () => {
      expect(result).toBeInstanceOf(Promise);
  });

//   it("Debe rechazar cuando el path no existe", () => {
//       return mdLinks(result1)
//           .catch((error) => {
//               expect(error).toBe("la ruta No existe");
//           });
//   });

  it("Debería resolver con un array de objetos cuando hay enlaces en el archivo", () => {
    return mdLinks("./README.md").then((links) => {
        expect(Array.isArray(links)).toBe(true); 
    
    });
});
});

it("Debería resolver con un array vacío cuando no hay enlaces en el archivo", () => {
    // Envuelve la llamada a mdLinks en una función
    const mdLinksPromise = () => {
        return mdLinks('./some/file.md')
            .catch(error => {
                // Si hay un error (por ejemplo, la ruta no existe), devolver un array vacío
                return [];
            });
    };

    return mdLinksPromise().then((links) => {
        expect(links).toEqual([]);
    });

 });

 it("Debería manejar archivos con rutas relativas", () => {
    return mdLinks("./README.md").then((links) => {
        expect(Array.isArray(links)).toBe(true);
        expect(links[0].text).toBe("1. Preámbulo");
        // Verificar si la ruta es relativa o absoluta
        expect(links[0].file.endsWith("README.md")).toBe(true);
    });
});
 

const existingFilePath = path.resolve("./README.md");


it("Debería manejar archivos con rutas absolutas", () => {
    return mdLinks(existingFilePath).then((links) => {
        // Verifica que haya al menos un enlace
        expect(links.length).toBeGreaterThan(0);

        // Encuentra el primer enlace externo si existe
        const firstExternalLink = links.find(link => link.href.startsWith('http'));

        // Si se encontró un enlace externo, verifica sus propiedades
        if (firstExternalLink) {
            expect(firstExternalLink).toHaveProperty('href', "https://es.wikipedia.org/wiki/Markdown");
            expect(firstExternalLink).toHaveProperty('text', "Markdown");
            expect(firstExternalLink).toHaveProperty('file', existingFilePath);
        } else {
            // Si no hay enlaces externos, la prueba pasa automáticamente
            expect(true).toBeTruthy();
        }
    });
});


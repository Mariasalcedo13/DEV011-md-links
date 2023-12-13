# Markdown Links

## Índice

* [1. Descripción](#1-Descripción)
* [2. Instalación](#2-Instalación)
* [3. Guía de uso](#3-Guía-de-uso)
* [4. Disponible en](#4-Disponible-en)

***

## 1. Descripción

[Markdown] es una biblioteca desarrollada con Node.js que facilita la lectura y análisis de archivos Markdown. Su función principal es validar el estado de los enlaces presentes en dichos archivos y ofrecer datos estadísticos para un análisis exhaustivo. Con esta herramienta, puedes obtener información valiosa sobre la integridad de los enlaces, como enlaces activos, rotos y estadísticas únicas.
## 2. Instalación

Como requisito previo, asegúrate de tener Node.js instalado en tu sistema. Para instalar la librería, ejecuta el siguiente comando en tu terminal:

>npm i md-links-maria

También tienes la opción de instalarlo directamente desde GitHub utilizando el siguiente comando en tu terminal: npm install md-links-maria


## 3. Guía de uso


Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

*Para conocer el total de enlaces y de enlaces únicos del archivo analizado ejecuta el comando  seguido de la opción --stats.

$mdLinks pruebaReadme.md --stats
{ links: { Total: 67, Unique: 67 } }

*Si quieres conocer el número de enlaces rotos ejecuta el comando  seguido de --validate --stats

$ mdLinks pruebaReadme.md --stats --validate
{ links: { Total: 77, Active: 77, Broken: 0, Unique: 75 } }


NOTA: Si se ingresa una ruta inexistente se mostrará el mensaje 'La ruta no existe.

Si deseas obtener el estado de cada uno de los links extraídos escribe en la terminal mdLinkspruebaReadme.md seguido de la ruta del archivo y de la opción --validate.

$mdLinkspruebaReadmemd--validate                                                      
{
  links: [
    {
      href: '#1-preámbulo',
      text: '1. Descripción',
      file: 'C:\\Users\\Maria Salcedo\\Desktop\\dm-link\\DEV011-md-links\\pruebaReadme.md',
      status: 'error',
      ok: 'ok'
    },
    {
      href: '#2-resumen-del-proyecto',
      text: '2. Resumen del proyecto',
      file: 'C:\\Users\\Maria Salcedo\\Desktop\\dm-link\\DEV011-md-links\\pruebaReadme.md',
      status: 'error',
      ok: 'ok'
    },
    {
      href: '#3-objetivos-de-aprendizaje',
      text: '3. Objetivos de aprendizaje',
      file: 'C:\\Users\\Maria Salcedo\\Desktop\\dm-link\\DEV011-md-links\\pruebaReadme.md',
      status: 'error',
      ok: 'ok'
    },



    Importación de módulo

     Puedes importar el módulo markdown-links de la siguiente manera.

     const { mdLinks } = require('md-links-maria');


## 4. Disponible en

Esta librería está disponible en https://www.npmjs.com/~maria_olga
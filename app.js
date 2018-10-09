//                              Importacion de modulos de node a ocupar en este archivo

// Importacion e inicializacion del servidor
const express = require('express')
//Utilizacion de bodyparser para pasar informacion en formularios y archivos json que vengan desde la url
const bodyParser = require('body-parser')
// Uso de fileupload para subir archivos al Servidor
const fileUpload = require('express-fileupload')
// Uso de crypto para desencriptar mamadas
const crypto = require('crypto');
// Uso para re convertir archivos
const fs = require('fs');
// Cracion del puerto que va a operar
const port = 8080

//                    Declaracion de variables y funciones que ocupara el servidor que nos povee Express

// Declaracion e inicializacion del servidor Express
const app = express()
// Asignacion de carpeta publica a la cual los usuarios del servidor pueden acceder
app.use(express.static('public'))
// Asignacion de body-parser en el servidor para que se puedan "Atrapar" los valores mandados atraves de la url y de los archivos .json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// Asignacion de fileupload para poder subir archivos al servidor por parte del cliente
app.use(fileUpload())
//          Asignacion del puerto en el que se montará el servicio de host

app.listen(port, () =>
{
    console.log('Servidor corriendo en: \n "http://localhost:'+port+'"')
})

app.get('/', (req, res) =>
{
    res.render('/public/index.html')
})

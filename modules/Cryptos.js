const crypto = require('crypto')

var Cryptos =
{
    /*
        algorthim: aes128, aes196, aes256
    */
    crypt: (text, key, algorthim) =>
    {

    }
    console.log('> Orifinal es:')
    console.log(text)
    console.log('\n')

    var key = setAutoPadding(key, 32)
    console.log('> Aqui es donde vale verga')
    var cipher = crypto.createCipheriv(algorthim, key, iv)

    console.log('> Aqui ya no :3')
    cipher.setAutoPadding(true)

    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    console.log('> Encriptado es:')
    console.log(encrypted)
    console.log('\n')
    // Prints: ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504

    var decipher = crypto.createDecipheriv(algorthim, key, iv)

    decipher.setAutoPadding(true)

    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    console.log('> Desencriptado es:')
    console.log(decrypted)
    console.log('\n')

    setAutoPadding: (key, multiply) =>
    {
        if (key.length % multiply == 0) return key
        else
        {
            console.log('no es multiplo la llave mandada')
            for (var i = key.length; key.length % multiply != 0; i++)
                key += randomChar()
            return key
        }
    }

    randomChar: () =>
    {
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789"
        return possible.charAt(Math.floor(Math.random() * possible.length))
    }

}) ()

module.exports = Cryptos

//Sacar del sumerville  ( la tiene el dino) ;
// Cuestionario que sera de tarea de scrum, los archivs mandados y las tareas
// El cuestionario sera sobre del proyecto y de las tareas


//      tema: Pruebas de desaroollo )? en sumerville
/*              (def,specs, etc)
    1.  pruebas de unidad
    2.  eleccion de casos de prueba de unidad
    3.  prubas de componentes
    4.  pruebas del sistema
*/

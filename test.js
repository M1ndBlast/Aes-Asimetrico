const crypto = require('crypto')

var text = 'some clear text data some clear text data, ya funciona el puñetero padding',
    key = '123456789012345678901234',
    iv = crypto.pseudoRandomBytes (16),
    algorthim = 'aes192'
console.log('Orifinal es:')
console.log(text);

var cipher = crypto.createCipheriv(algorthim, key, iv)

cipher.setAutoPadding(true)

let encrypted = cipher.update(text, 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log('Encriptado es:')
console.log(encrypted)
// Prints: ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504

var decipher = crypto.createDecipheriv(algorthim, key, iv)

decipher.setAutoPadding(true)

let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')
console.log('Desencriptado es:')
console.log(decrypted)
// Prints: some clear text data

//                      Aqui esta peor que arriba
// const crypto = require('crypto')
//
//
// var cipherName = 'aes-128-cbc',
//     cipherIvSize = 16
//
// // ###*
// //  * Encrypt data
// //  *
// //  * @param {Buffer} key - crypto key
// //  * @param {Buffer} data - data to encrypt
// //  * @return {Buffer} encrypted data
// // ###
// function encrypt (key, data)
// {
//     let iv = crypto.pseudoRandomBytes(cipherIvSize)
//
//     var cipher = crypto.createCipheriv(cipherName, key, iv)
//     cipher.setAutoPadding(true)
//
//     var buf = cipher.update(data)
//     buf = cipher.final()
//
//     console.log('fun encrypt returned:')
//     console.log(buf)
//
//     return buf
// }
//
// // ###*
// //  * Decrypt data
// //  *
// //  * @param {Buffer} key - crypto key
// //  * @param {Buffer} data - data to decrypt
// //  * @return {Buffer} decrypted data
// // ###
// function decrypt (key, dataa)
// {
//     let iv = dataa.slice(0, cipherIvSize)
//     let data = dataa.slice(cipherIvSize)
//
//     var cipher = crypto.createDecipheriv(cipherName, key, iv)
//     cipher.setAutoPadding(true)
//
//     var buf = cipher.update(data)
//     buf = cipher.final()
//
//     console.log('fun decrypt returned:')
//     console.log(buf)
//
//     return buf
// }
//
// // ###*
// //  * Encrypt string
// //  *
// //  * @param {String} key - crypto key string (hex)
// //  * @param {String} str - string to encrypt
// //  * @return {String} encrypted string (hex)
// // ###
// function encryptString (keya, str)
// {
//     let key = new Buffer(keya, 'hex'),
//         data = new Buffer(str)
//
//     let encData = encrypt(key, data)
//
//     console.log('fun encryptString returned:')
//     console.log(encData)
//     console.log('and now string:')
//     console.log(encData.toString('hex'))
//
//      return encData.toString('hex')
// }
//
// // ###*
// //  * Decrypt string
// //  *
// //  * @param {String} key - crypto key string (hex)
// //  * @param {String} str - string to decrypt (hex)
// //  * @return {String} decrypted string
// // ###
// function decryptString (keyb, str)
// {
//     let key = new Buffer(keyb, 'hex'),
//         data = new Buffer(str, 'hex')
//
//     let decData = decrypt(key, data)
//
//     console.log('fun decryptString returned:')
//     console.log(decData)
//     console.log('and now string:')
//     console.log(decData.toString('hex'))
//
//     return decData.toString()
// }
//
// // ###*
// //  * Generate random token
// //  *
// //  * @return {§tring} token
// // ###
// function generateRandomToken (size = tokenSize)
// {
//     crypto.pseudoRandomBytes(size).toString('hex')
// }
//
// console.log('Ahora empieza el proceso :D')
//
//
// let key = 'e79455fb63d9a3c7c3e68835ac920c8',
// data = '|  full block  || partial |'
//
// console.log('Inicio de encriptacion')
// encData = encryptString(key, data)
// console.log('Fin de encriptacion')
// console.log('Inicio de desencriptacion')
// decData = decryptString(key, encData)
// console.log('Fin de desencriptacion')
//
// console.log('Finalmente salio:')
// console.log(encData, decData)

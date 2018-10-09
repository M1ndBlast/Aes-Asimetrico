var express = require('express')
var router = express.Router()
const crypto = require('crypto');

var cipherName = 'aes-128-cbc'
var cipherIvSize = 16

router.get('/', (req, res, next) =>
{
    res.render('index',
    {
        title: 'Salvanos Jimmy :c'
    })
})

router.get('/crypt', (req, res) =>
{
    res.render('crypt',
    {
        title: 'Pagina distribuida de encriptacion ;)'
    })
})

router.get('/decrypt', (req, res) =>
{
    res.render('decrypt',
    {
        title: 'Pagina distribuida de desencriptacion ;)'
    })
})

router.post('/encriptando', (req, res) =>
{
    var text = req.body.text,
        pass = req.body.pass

    console.log('Los datos recibidos son:')
    console.log(text, pass)

    const cipher = crypto.createCipheriv('aes192', 'a passwo', 'abcdefgh');

    let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);
    // Prints: ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504


    // Prints: ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504
    // console.log('Encriptando')
    //
    // var iv = crypto.pseudoRandomBytes(16)
    //
    // var cipher = crypto.createCipheriv('aes128', pack.pass, iv)
    // cipher.setAutoPadding(true)
    // let encrypted = cipher.update('some clear text data', 'utf8', 'hex')
    // encrypted += cipher.final('hex')
    // console.log(encrypted)
    //
    // console.log('Desncriptando')

    // var iv2 = encrypted.slice(0, 24),
    // data = encrypted.slice(24)
    //
    // var cipher = crypto.createDecipher('aes192', pack.pass)
    // cipher.setAutoPadding(true)
    // let encrypted = cipher.update('some clear text data', 'utf8', 'hex')
    // encrypted += cipher.final('hex')
    // console.log(encrypted)

})

router.post('/desencriptando', (req, res) =>
{
    var pack =
    {
        text: req.body.text,
        pass: req.body.pass
    }

    console.log('Los datos recibidos son:')
    console.log(pack)

    console.log('desencriptacion')

    var iv = crypto.pseudoRandomBytes(cipherIvSize)

    var cipher = crypto.createCipheriv(cipherName, pack.pass, iv)
    cipher.setAutoPadding(true)

    var buf = cipher.update(pack.text)
    buf = cipher.final()

    console.log(buf)
})

module.exports = router

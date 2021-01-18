require('./config/config');
const express = require('express');
const app = express();

//se requiere para convertir los datos en un json y así poder verlo de la mejor manera
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) //se copia las funciones por defecto desde el npm
    // parse application/json
app.use(bodyParser.json())


//se valida en postman todos los datos para ver de que si funcionan las peticciones que se están haciendo
app.get('/usuario', function(req, res) {
    res.send('get usuario');
});

//de esta manera utilizamos el body que requerimos desde npm para utilizarlo como json, el cual vemos en postman
app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }

});

//con esta simple configuración podemos dar un id a nuestro actualización mediante el metodo put
app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.send('delete usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchado el puerto: ', process.env.PORT);
});
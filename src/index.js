const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port',3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());


//rutas
app.use('/api', require('./routes/rutas'));
app.use('/api', require('./routes/rutas'));
app.use('/api', require('./routes/rutas'));
app.use('/api', require('./routes/rutas'));

//otros ejemplos


//app.get('/', (req,res) => {
//    res.json({"name" : "John Doe"});
//});


//app.get('/home', (req,res) => {
//    res.send('estas en el HOME');
//});


//app.get('/zapatos', (req,res) => {
//    res.send('Este es el listado de los zapatos');
//});




//Empezando el servidor
app.listen(app.get('port'));
console.log("Mi primer servidor");

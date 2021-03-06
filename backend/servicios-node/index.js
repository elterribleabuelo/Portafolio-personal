var mongoose = require('mongoose');
var app = require('./app');
var port = 3700; 

// Conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio').then(() => {
    console.log("Conexion a la base de datos satisfactoria");
    // Creacion del servidor
    app.listen(port,() => {
        console.log("Servidor corriendo correctamente en localhost: 3700");
    });
}).catch(err => {
    console.log(err);
})
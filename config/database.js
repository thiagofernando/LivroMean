/**
 * Created by ThiagoFernando on 14/03/2015.
 */
var mongoose = require('mongoose');

module.exports = function(uri) {

    mongoose.connect(uri);
    mongoose.set('debug', true);

    mongoose.connection.on('connected', function() {
        console.log('Mongoose! Conectado em '+ uri);

    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose! Desconectado de '+ uri);

    });

    mongoose.connection.on('error', function(erro) {
        console.log('Mongoose! Erro na conexao: '+ erro);

    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongose! Desconectado pelo término da aplicação');
            process.exit(0);
        });
    });
}
/**
 * Created by ThiagoFernando on 14/03/2015.
 */
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('5503386288cb6cdee055aa18');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
    function(erro, db){
        if(erro) throw err;
        db.collection('contatos').findOne({_id : _idProcurado},
            function (erro, contato) {
            if (erro) throw err;
            console.log(contato);
            }
        );
    }

);
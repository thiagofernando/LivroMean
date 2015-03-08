/**
 * Created by ThiagoFernando on 05/03/2015.
 */
module.exports = function(app) {
    var controller = app.controllers.contato;
    app.get('/contatos', controller.listaContatos);
    app.get('/contatos/:id', controller.obtemContato);
};
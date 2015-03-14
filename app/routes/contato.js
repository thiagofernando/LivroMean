/**
 * Created by ThiagoFernando on 05/03/2015.
 */
module.exports = function(app) {
    var controller = app.controllers.contato;

    app.route('/contatos')
        .get(controller.listaContatos)
        .post(controller.salvaContato);

    app.route('/contatos/:id')
        .get(controller.obtemContato)
        .delete(controller.removeContato);
};
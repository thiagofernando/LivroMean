/**
 * Created by ThiagoFernando on 20/03/2015.
 */
describe("Página Principal", function() {


    beforeEach(function () {
        browser.get('http://localhost:3000/#/contatos');
    });

    it('Deve estar logado', function() {
        element(by.id('usuario-logado')).getText()
            .then(function(texto) {
                expect(texto.trim().length).toBeGreaterThan(0);
            });
    });
});
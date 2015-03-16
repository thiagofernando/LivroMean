/**
 * Created by ThiagoFernando on 07/03/2015.
 */
angular.module('contatooh').controller('ContatoController',
    function($scope, $routeParams, Contato) {
        console.log($routeParams.contatoId);
     //   var Contato = $resource('/contatos/:id');

        if($routeParams.contatoId) {
            Contato.get({id: $routeParams.contatoId},
                function (contato) {
                    $scope.contato = contato;
                },
                function (erro) {
                    $scope.mensagem = {
                        texto: 'Contato não existe. Novo Contato.'
                    };
                    console.log(erro);
                }
            );
        } else {
            $scope.contato = new Contato();
        }
        $scope.salva = function() {
            $scope.contato.$save()
                .then(function(){
                    $scope.mensagem = {texto: 'Salvo com sucesso'};
                    $scope.contato = new Contato();
                })
                .catch(function(erro) {
                    $scope.mensagem = {texto: 'Não foi possível salvar'};
            });
        };

        Contato.query(function(contatos) {
            $scope.contatos = contatos;
        });
    });
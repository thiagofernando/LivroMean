/**
 * Created by ThiagoFernando on 06/03/2015.
 */
angular.module('contatooh').controller('ContatosController', function($scope, $http) {

    $scope.contatos = [];
    $scope.total = 0;
    $scope.filtro = '';

    $scope.incrementa = function() {
        $scope.total++;
    };

    $http.get('/contatos')
        .sucess(function (data) {
            $scope.contatos = data;
        })
        .error(function (statusText) {
            console.log("Não foi possível obter a lista de contatos");
            console.log(statusText);
        });


});


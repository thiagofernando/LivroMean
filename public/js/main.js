/**
 * Created by ThiagoFernando on 06/03/2015.
 */
angular.module('contatooh', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {

        $routeProvider.when('/contatos', {
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'
        });
        $routeProvider.when('/contato/:contatoId', {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
        });
        $routeProvider.when('/contato', {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
        });
        $routeProvider.otherwise({redirectTo: '/contatos'});
    });
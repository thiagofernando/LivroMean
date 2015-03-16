/**
 * Created by ThiagoFernando on 15/03/2015.
 */
angular.module('contatooh').factory('meuInterceptor', function($location, $q) {
    var interceptor = {
            responseError: function(resposta) {
                if (resposta.status ==401 ) {
                    $location.path('/path');
                }
                return $q.reject(resposta);
            }
    }
        return interceptor;
    });
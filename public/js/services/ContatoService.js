/**
 * Created by ThiagoFernando on 12/03/2015.
 */
angular.module('contatooh').factory('Contato', function($resource)
{
    return $resource('/contatos/:id');
});

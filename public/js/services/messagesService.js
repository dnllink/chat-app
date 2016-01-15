angular.module('chat').factory('messagesService', function ($resource) {

    return $resource('/messages');

});
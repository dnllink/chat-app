angular.module('chat').controller('loginController', function ($scope, $cookies, $location) {

    $scope.nome = '';

    function loadUser() {
        var nome = $cookies.get('dnllink-chat-user-name');
        if (nome) {
            $scope.nome = nome;
        }
    };

    $scope.logIn = function () {
        if ($scope.nome) {
            $cookies.put('dnllink-chat-user-name', $scope.nome);
            $location.path('/chat');
        }
    };

    loadUser();

});
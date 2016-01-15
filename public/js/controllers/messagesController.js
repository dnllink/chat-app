angular.module('chat').controller('messagesController', function ($scope, messagesService, $http, $cookies) {

    $scope.message = {};
    $scope.statusMessage = '';

    function loadUser() {
        var nome = $cookies.get('dnllink-chat-user-name');
        if (nome) {
            $scope.message.usuario = nome;
        }
    };

    function loadMessages() {
        messagesService.query(function (data) {
            $scope.messages = data;
        }, function (err) {
            console.error(err);
        });
    };

    $scope.sendMessage = function () {

        //dados mockados da mensagem
        var date = new Date();
        var strDate = date.getDay() + '/' + (date.getMonth() + 1) + ' - ' + date.getHours() + ':' + date.getMinutes();
        $scope.message.dataHora = strDate;

        messagesService.save($scope.message, function () {
            $scope.message = {};
            loadMessages();
        }, function (err) {
            console.log(err);
        });
    };

    loadUser();
    loadMessages();

});
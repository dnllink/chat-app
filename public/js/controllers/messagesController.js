angular.module('chat').controller('messagesController', function ($scope, messagesService, $http, $cookies) {

    var socket = io();

    $scope.message = {};
    $scope.statusMessage = '';

    function loadUser() {
        var nome = $cookies.get('dnllink-chat-user-name');
        if (nome) {
            $scope.usuario = nome;
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
        $scope.message.usuario = $scope.usuario;

        messagesService.save($scope.message, function () {
            $scope.message = {};
            socket.emit('chat message', null);
            loadMessages();
        }, function (err) {
            console.log(err);
        });
    };

    socket.on('chat message', function (msg) {
        loadMessages();
    });

    loadUser();
    loadMessages();

});
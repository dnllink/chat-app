var messages = [{
    usuario: 'LOL',
    dataHora: '17:19',
    mensagem: 'LOL'
}];

module.exports = function (app) {

    var controller = {};

    controller.listMessages = function (req, res) {
        res.json(messages);
    };

    controller.putMessage = function (req, res) {
        messages.put(req.body);
    };

    return controller;

};
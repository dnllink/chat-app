var messages = [{
    usuario: 'User',
    dataHora: '12:00',
    mensagem: 'Mensagem teste!'
}];

module.exports = function (app) {

    var controller = {};

    controller.listMessages = function (req, res) {
        console.log('listing messages...');
        res.json(messages);
    };

    controller.putMessage = function (req, res) {
        console.log('sending message -> ' + req.body.mensagem);
        messages.push({
            usuario: req.body.usuario,
            dataHora: req.body.dataHora,
            mensagem: req.body.mensagem
        });
        res.status(200).end();
    };

    return controller;

};
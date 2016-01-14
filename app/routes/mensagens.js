module.exports = function (app) {

    var controller = app.controllers.mensagens;

    app.route('/mensagens').get(controller.listMessages).post(controller.putMessage);

}
module.exports = function (app) {

    var controller = app.controllers.messages;

    app.route('/messages').get(controller.listMessages).post(controller.putMessage);

}
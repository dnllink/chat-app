var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function () {

    var app = express();

    //app.set('view engine', 'ejs');
    //app.set('views', './app/views');

    app.use(express.static('./public'));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    load('models', {
        cwd: 'app'
    }).then('controllers').then('routes').into(app);

    // habilitando HTML5MODE
    app.all('/*', function (req, res) {
        res.sendFile(path.resolve('public/principal.html'));
    });

    return app;
}
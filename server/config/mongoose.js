var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    models_path = path.join(__dirname, './../models');

mongoose.connect('mongodb://localhost/mean_wall');

fs.readdirSync(models_path).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        require(path.join(models_path, file));
    }
});

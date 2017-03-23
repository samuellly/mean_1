var express = require('express'),
    app = express(),
    path = require('path'),
    bp = require('body-parser'),
    session = require('express-session'),
    port = 8000;

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bp.json());
app.use(session({
    secret: 'afds89jhs9ukakjs0ulkjh2398yhfiu2398ruy39u2hjfh',
    resave: false,
    saveUninitialized: true
}));


require(path.join(__dirname, './server/config/mongoose.js'));
require(path.join(__dirname, './server/config/routes.js'))(app);

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening on port ${port}`);
    }
});

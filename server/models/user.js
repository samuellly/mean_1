var mongoose = require('mongoose'),
    UserSchema = mongoose.Schema({
        username: String,
    }, {timestamps: true});

mongoose.model('User', UserSchema);

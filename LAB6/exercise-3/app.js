

var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://tamdang:Tamdang0@ds129393.mlab.com:29393/local_library');

var port = process.env.PORT || 3000;
app.listen(port);

app.get('/greet', function(req, res) {
    res.send('Hello There');
})

var Schema = mongoose.Schema;

var userSchema = new Schema({name: String, status: String});

var User = mongoose.model('User', userSchema);

var john = User({ name:'John', status: 'active'});

john.save(function(err) {
    if (err) throw err;
    console.log('**** User saved! *****');
});
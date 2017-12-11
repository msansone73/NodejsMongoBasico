
var express = require('express');
var app = express();


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

app.get('/', function (req, res) {

    console.log("iniciando get");
    
    var Cat = mongoose.model('Cat', { name: String });
    
    var kitty = new Cat({ name: 'Mingau' });
    kitty.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('meow');
      }
    });

    res.send("ola");
});

app.get('/ler', function (req, res) {
    
        console.log("iniciando ler");
        
        var Cat = mongoose.model('Cat', { name: String });
        Cat.find({name:'Mingau'},function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens);
          })
    
        res.send("lido");
    });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
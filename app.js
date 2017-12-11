
var express = require('express');
var app = express();


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;
var Cliente = mongoose.model('Cliente', { name: String, email: String, fone: String });

var saida;

app.get('/', function (req, res) {

    console.log("iniciando get");

    var Cli = new Cliente({ name: 'mariaX', email:'maria@gmail', fone:'123456' });
    Cli.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('OK');
      }
    });

    res.send("ola");
});

app.get('/ler', function (req, res) {
      
        console.log("iniciando ler");
        
        Cliente.find({name:'mariaX'},function (err, cli) {
            if (err) return console.error(err);
            console.log("log="+cli);
            res.send(cli);
          })
    
        //res.send("saida="+JSON.stringify(saida));
    })


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
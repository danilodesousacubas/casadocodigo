var http = require('http');

var configuracoes = {
  hostname: 'localhost',
  port:3000,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept':'application/json',
    'Content-type':'application/json'
  }
};

var client = http.request(configuracoes, function(req,res){
   req.on('data', function(body){
    console.log('Corpo' + body);
   });
});

var produto = {
  titulo: 'mais sobre node',
  preco: 100,
  descricao: 'node, java script'
};
var p = JSON.stringify(produto);

client.end(p);

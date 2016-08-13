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

var client = http.request(configuracoes, function(res){
  console.log(res.statusCode);
  res.on('data', function(body){
    console.log("--",res.statusCode);
  });
});

var produto = {
  titulo: 'CC',
  preco: 100,
  descricao: 'node, java script'
};

var p = JSON.stringify(produto);

client.end(p);

var http = require('http');
var assert = require('assert');
describe('ProdutosController', function() {
  it('#listagem: precisa do server up! ', function(done) {
    var configuracoes = {
        hostname: 'localhost',
        port: 3000,
        path:'/produtos',
        headers: {
            'Accept':'application/json'
        }
    };
    http.get(configuracoes, function(res) {
      console.log(res.statusCode)
       assert.equal(res.statusCode, 200);
       assert.equal(res.headers['content-type'],'application/json; charset=utf-8');
      done();
    });
  });
});

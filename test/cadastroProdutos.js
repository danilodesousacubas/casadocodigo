var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController', function() {
  it('#listagem json Supertest', function(done) {
    request.get('/produtos')
    .set('Accept', 'application/json')
    .expect('Content-Type',/json/)
    .expect(200,done);
  });

  it('#cadastro produto inválido', function(done){
    request.post('/produtos')
    .send({titulo: "", descricao: "desc"})
    .expect(400, done);
  });
});

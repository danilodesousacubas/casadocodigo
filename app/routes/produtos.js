module.exports = function(app){
  app.get('/produtos', function(req, res){

    var connection = app.infra.connectionFactory();
    // para enviar o json
    //res.send(results);
      connection.query('select * from livros', function(err, results){
      res.render('produtos/lista', {lista:results});
    });

    connection.end();
  });
}

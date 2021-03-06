module.exports = function(app){
  app.get('/promocoes/form', function(req,res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.produtosDAO(connection);
    produtosDAO.lista(function(err, results){
      res.render('promocoes/form', {lista:results});
    });
    connection.end();
  });
}

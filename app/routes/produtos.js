module.exports = function(app){

  var listaProdutos = function(req, res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new  app.infra.produtosDAO(connection);
    produtosDAO.lista(function(err, results){
      console.log("Content-type"+res.format)
      res.format({
        html: function(){
          res.render('produtos/lista', {lista:results});
        },
        json: function(){
          res.json(results);
        }
      });
    });
    connection.end();
  };

  app.get('/produtos', listaProdutos);
  app.get('/produtos/form', function(req, res){
    res.render('produtos/form', {errosValidacao:{}});
  });

  app.post('/produtos', function(req,res){

    var produto = req.body;

    req.assert('titulo', 'O título é obrigatório').notEmpty();
    req.assert('preco', 'Formato inválido').isFloat();

    var erros = req.validationErrors();

    console.log(erros);

    if(erros){
      res.render('produtos/form', {errosValidacao:erros});
      return;
    }

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.produtosDAO(connection);

    produtosDAO.salva(produto, function(erros, results){
      //listaProdutos(req,res);
       console.log(erros);
      res.redirect('/produtos');
    });
  });
}

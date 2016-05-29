
module.exports = function(app){
  app.get('/produtos', function(req, res){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : '123456',
      database : 'casadocodigo'
    });
    // para enviar o json
    //res.send(results);
      connection.query('select * from livros', function(err, results){
      res.render('produtos/lista', {lista:results});
    });
    connection.end();
  });
}

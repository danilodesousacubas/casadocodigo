var app = require('express')();
app.set('view engine','ejs');

module.exports = function() {
  console.log("chamando o módulo export express");
  return app;
}

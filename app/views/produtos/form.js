<html>
  <head>
    <title>Cadastrar Produtos</title>
  </head>
  <body>
    <form action="/produtos" method="post">
      <div>
        <label for="titulo">Título</label>
        <input type="text" id="titulo" name="titulo" placeholder="Entrar com Título">
      </div>
      <div>
        <label for="preco">Preço</label>
        <input type="text" id="preco" name="preco" placeholder="Entrar com Preço">
      </div>
      <div>
        <label for="descricao">Descrição</label>
        <textarea name="descricao" id="descricao" rows="8" cols="40"></textarea>
      </div>
      <input type="submit" value="gravar">
  </form>
  </body>
</html>
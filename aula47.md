### Exercício 1
a) A chave estrangeira é como um ID para uma tabela, que busca uma informação necessária de outra tabela.

b) 
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"004",
    "Filme incrivel!",
	10,
    "005"
)
```
c) Ocorre um erro, no qual não é possível atualizar a tabela, por não existir um filme com o ID designado.

d) Ocorre um erro que diz que não é possível deletar ou atualizar uma parent row, por conta da foreing key.

### Exercício 2
a) Cria uma tabela onde relaciona o ID dos atores com o ID dos filmes em que participaram.

b) 
```
("004","001"),("001","001"),("001","002"),("002","001"),("002","002"),("004","004")
```
c) e d) Ocorre um erro 1452, falando que não é possivel atualizar, remover ou adicionar as Child Row

### Exercício 3
a) o ON é a condição da junção das duas tabelas, relacionando as informações de uma com a outra, com seus devidos ID's

b) ?

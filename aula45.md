USE `paiva-2125837-tulio-dutra`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- 1) a: varchar é usado para definir strings com um n maximo definido e date é usado para definir uma data, no padrão YYYY/MM/DD.
-- b: SHOW DATABASES mostra as informações do nosso database, e SHOW TABLES retorna todas as nossa tables feitas.
-- c: o comando nos mostra a estrutura da tabela, com seus fields e declarações

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  120000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Fernanda Montenegro",
  500000,
  "1929-10-16", 
  "female"
);
-- b: o erro gerado foi de valor duplicado para a key "PRIMARY"

-- c: o erro ocorre por nao ter todos os valores da tabela
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- d: o erro ocorre por não ter o field NAME, que é obrigatorio
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Caio Castro",
  400000,
  "1949-04-18", 
  "male"
);
-- e: o erro ocorre pois o field birth_date precisa ser dado como string
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- 3) a: 
SELECT * FROM Actor
WHERE gender = "female";

-- b: 
SELECT salary FROM Actor
WHERE name = "Tony Ramos";

-- c: Retorna uma linha da tabela com todos os valores Null, por nao existir nenhum ator com essa definição de gênero.
SELECT * FROM Actor
WHERE gender = "invalid";

-- d:
SELECT id, name, salary FROM Actor
WHERE salary < 50000000;

-- e: o erro ocorre por conta do valor "name" ter sido escrito errado
SELECT id, name from Actor WHERE id = "002";

-- 4) a: a query nos retorna uma lista com todos os atores em que o nome começe com A, ou J, e possuem um salário maior que 300000

-- b:
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

-- c:
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

-- d: 
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;

-- 5) a:
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    avaliação INT NOT NULL
);
-- b, c, d,

INSERT INTO Filmes (id, nome, sinopse, release_date, avaliação) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006/01/06",
    7
);

INSERT INTO Filmes (id, nome, sinopse, release_date, avaliação) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
    "2012/12/27",
    10
);

INSERT INTO Filmes (id, nome, sinopse, release_date, avaliação) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);

-- e:
INSERT INTO Filmes (id, nome, sinopse, release_date, avaliação) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

-- 6) a:
SELECT id, nome, avaliação FROM Filmes
WHERE id = "004";

-- b:
SELECT * FROM Filmes
WHERE nome = "Dona Flor e Seus Dois Maridos";

-- c: 
SELECT id, nome, sinopse FROM Filmes
WHERE avaliação > 7;

-- 7) a: 
SELECT * FROM Filmes
WHERE nome LIKE "%vida%";

-- b: ?

-- c: 
SELECT * FROM Filmes

-- d: ?


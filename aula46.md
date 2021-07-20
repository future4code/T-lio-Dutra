### Exercício 1
a) Remove a coluna salary
b) Muda o nome da coluna gender para sex, e adiciona um limite de 6 caracteres
c) Muda a coluna gender para suportar até 255 caracteres
d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2
a) 
```
UPDATE Actor 
SET
	name = "Moacyr Franco",
    birth_date = "1975-03-20"
WHERE id = "003";
```
b)
```
UPDATE Actor 
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes"; 

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES"; 
```
c)
```
UPDATE Actor 
SET
name = "Debora Secoh",
birth_date = "1989-05-20",
salary = 500000,
gender = "female"
WHERE id = "005"; 
```
d)
```
UPDATE Actor
SET name = "Adriana Esteves"
WHERE id = "009";
```
A mudança foi feita, mas não altera nada da tabela por não existir o ID

### Exercício 3
a)
```
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";
```
b)
```
DELETE FROM Actor
WHERE
	gender = "male" AND
    salary > 1000000;
```

### Exercício 4
a)
```
SELECT MAX(salary)
FROM Actor;
```
b)
```
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```
c)
```
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";
```
d)
```
SELECT SUM(salary)
FROM Actor;
```

### Exercício 5
a) a query retorna a quantidade de atores e atrizes de cada gênero.
b)
```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```
c)
```
SELECT * FROM Actor
ORDER BY salary;
```
d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
e)
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6
a)
```
ALTER TABLE Filmes
ADD playing_limit_date DATE;
```
b)
```
ALTER TABLE Filmes
CHANGE avaliação avaliação FLOAT;
```
c) 
```
UPDATE Filmes
SET
	playing_limit_date = "2021-10-20"
WHERE id = "001";
```
```
UPDATE Filmes
SET
	playing_limit_date = "2019-05-31"
WHERE id = "002";
```
d)
```
DELETE FROM Filmes
WHERE id = "003";
```
```
UPDATE Filmes
SET sinopse = "Um filme incrivel para todo mundo!"
WHERE id = "003";
```

### Exercício 7
a)
```
SELECT COUNT(*) FROM Filmes
WHERE avaliação > 7.5;
```
b)
```
SELECT AVG(avaliação) FROM Filmes;
```
c)
```
SELECT COUNT(*) FROM Filmes
WHERE playing_limit_date > CURDATE();
```
d)
```
SELECT COUNT(*) FROM Filmes
WHERE release_date > CURDATE();
```
e)
```
SELECT MAX(avaliação) FROM Filmes;
```
f)
```
SELECT MIN(avaliação) FROM Filmes;
```

### Exercício 8
a)
```
SELECT * FROM Filmes
ORDER BY nome ASC;
```
b)
```
SELECT * FROM Filmes
ORDER BY nome DESC
LIMIT 5;
```
c)
```
SELECT * FROM Filmes 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```
d)
```
SELECT * FROM Filmes
ORDER BY avaliação DESC
LIMIT 3;
```

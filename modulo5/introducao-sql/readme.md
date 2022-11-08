###### Exercicio 1 

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

-  id VARCHAR(255) PRIMARY KEY
*Comando que vai dizer maximo de caracteres e esse é uma chave unica.*

- name VARCHAR(255) NOT NULL
*Comando que vai dizer maximo de caracteres e que a coluna não pode ser nula.*

- salary FLOAT NOT NULL
*Comando que vai indicar número com decimais e coluna não pode ser nula.*

- birth_date DATE NOT NULL
*comando que vai indicar uma data ano/mes/dia, coluna não pode ser nula.*

- gender VARCHAR(6) NOT NULL
*Comando que vai ter no maximo 6 caracteres, coluna não pode ser nula.*


b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

SHOW DATABASES;
*Comando que vai me dizer qual banco de dados estou usando.*
SHOW TABLES;
*Comando que vai me dizer quais minha tabelas criadas naquele banco de dados.*

c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.
*Comando para ver a descrição da estrutura da minha tabela.*


###### EXERCICIO 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
*insert into Actor (id,nome,salary,birth_date,gender) VALUES("003", "Gloria Pires",1.200 ,"1963-08-23", "mulher");*

b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
*Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'*
*Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'*
*Isso ocorre pois o id encontra-se como "PRIMARY" isso quer dizer "unico".*

c)Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza.

INSERT INTO Actor (id, name, salary)*<--ERRO falta birth_date e gender, estam declarados como obrigatorios*
VALUES(
  "003", "Fernanda Montenegro",300000,"1929-10-19", "female");

d) INSERT INTO Actor (id, salary, birth_date, gender)*<= Falta dedclaracao do nome*
VALUES("004",*falta nome* ,400000,"1949-04-18", "male");

e) INSERT INTO Actor (id, name*name palavra chave tem que ser nome*, salary, birth_date, gender)
VALUES( "005",  "Juliana Paes", 719333.33, 1979-03-26 *<=tem  que estar em string*,  "female");

###### EXERCICIO 3
Com os dados criados, podemos nos aventurar nas queries de seleção de dados.

a) Escreva uma query que retorne todas as informações das atrizes.
*SELECT id,nome,salary,birth_date,gender from Actor where gender = "female"*

b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
*SELECT salary from Actor where nome= "Tony Ramos"*

c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
*SELECT * from Actor where gender= "invalid"*
*retonou tudo null pois não tem valores invalid.*

d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
*SELECT id,nome,salary from Actor where salary >= 500.000*

e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza.
*SELECT id, nome from Actor WHERE id = "002"*
*Nao me retornou erro*

###### EXERCICIO 4 
SELECT * FROM Actor
WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salary > 300000

a) Explique com as suas palavras a query acima
*Selecione da tabela Actor onde nome comeca com A ou nome comeca com J e tenha salario maior que 300000*

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
*SELECT * FROM Actor where (nome not like "A%" AND salary > 350000)*

c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
*select * from Actor where (nome LIKE "%g%" OR nome LIKE "%G%");*

d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
*SELECT * FROM Actor WHERE (nome LIKE "%g%" OR nome LIKE "%G%" OR nome LIKE "%a%" OR nome LIKE "%A%") AND salary BETWEEN 350000 AND 900000;*

###### EXERCICIO 5

Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)
a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar.

create table Movie (
	id VARCHAR(250) PRIMARY KEY,  /*id obrigatorio*/
    title varchar(150) NOT null, /*titulo maximo de 150 caracteres, obrigatorio*/
    sinopse text not null, /*sinopse como texto caracteres ilimitados*/
    release_date datetime not null, /*data, obrigatorio*/
    spots int2 not null /*avaliação com numeros inteiros*/
);

b) *adicionar ao table*

###### EXERCICIO 6

Escreva uma query que:

a) Retorne o id, título e avaliação a partir de um id específico;
*select id,title,spots from Movie where id= "001";*

b) Retorne um filme a partir de um nome específico;
*select * from Movie where title = "se eu fosse você";*

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
*select id,title,sinopse from Movie where spots = 7;*


###### EXERCICIO 7

a) Retorna um filme cujo título contenha a palavra vida.

*select title from Movie where (title like "%vida%")*

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

*select * from Movie WHERE title LIKE "%termo de busca%" OR sinopse LIKE "%termo de busca%";*

c) Procure por todos os filmes que já tenham lançado

*select * from Movie where release_date < curdate();*

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 

*select * from Movie WHERE (title LIKE "%termo de busca%" OR sinopse LIKE "%termo de busca%") and release_date < curdate() and spots = 7;*
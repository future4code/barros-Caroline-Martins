🪑🎲 Aprofundamento SQL 🪑🎲
---
## EXERCICIO 1

Leia os comandos abaixo e indique o que eles fazem. 

a)ALTER *altere*
 TABLE *tabela*
 Actor *ator*
  DROP COLUMN *descartar a coluna*
  salary; *coluna salario*

*Pessoalmente acredito que o SQL podemos usar o sentido literal, então*
*é um comando que vai descartar a coluna salary da tabela actor*

b)ALTER TABLE *altera a tabela*
 Actor
CHANGE 
gender *coluna antiga*
sex *coluna nova*
VARCHAR(6); *regra da coluna nova*

*Vai mudar a coluna gender para sex e dizer olha vai ter o maximo de 6 caracteres*

c)ALTER TABLE *altera a tabela*
Actor *tabela*
CHANGE 
gender *coluna antiga*
gender VARCHAR(255); *coluna nova com sua nova regra*

*Vai mudar a regra da coluna gender para o maximo de caracteres*

d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

*alter table Actor change gender gender varchar(100);*

---
## EXERCICIO 2

Além de criar e ler as tabelas, é muito importante que entendamos também como atualizar e deletar. Inclusive, essas 4 operações têm um nome muito famoso que vocês com certeza irão ouvir no dia a dia do trabalho: CRUD (Criar, ler, atualizar e deletar).

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
*update Actor set nome = "Antonieta Maria Madalena", birth_date = "1945-04-06" where id = "003";*

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

*update Actor set nome = "JULIANA PAES" where ID= "005";*

*update Actor set nome = "Juliana Paes" where ID= "005";*

c) Escreva uma query que atualize todas as informações do ator com o id 005

*update Actor set nome = "Juliana Paes Leme",salary = 50000,birth_date = "1983-06-04",favorite_ice_cream_flavor ="creme" where ID= "005";*

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 
*Me retorna um OK  comando esta certo MAS pelo ID NAO EXISTIR vai retornar 0 linhas modificadas*

---
## EXERCICIO 3

Para finalizar o CRUD, vamos ver o D: DELETE. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela. 

a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro

*delete from Actor where nome = "Fernanda Montenegro";*

b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

*delete from Actor where gender = "male" and salary > 1000000;*

---

## EXERCICIO 4

O MySQL permite que façamos queries cujo resultado final é alguma manipulação em relação aos dados salvos. Essa manipulação é dada através de uma **função MySQL**.

a) Escreva uma query que pegue o maior salário de todos os atores e atrizes

*select max(salary) from Actor;*

b) Escreva uma query que pegue o menor salário das atrizes

*SELECT MIN(salary) FROM Actor WHERE gender = "female"*

c) Escreva uma query que pegue a quantidade de atrizes

select count(*) from Actor where gender = "female";

d) Escreva uma query que pegue a soma de todos os salários

*select sum(salary) from Actor;*

---
## EXERCICIO 5

Para finalizar o que vimos na aula, temos que treinar as operações indicadas por LIMIT, ORDER BY e GROUP BY

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender

*Comando vai agrupar por ordem de gênero ou seja quantidade de atrizes e atores*

b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética

*select id, nome from Actor order by nome desc;*

c) Faça uma query que retorne todas as pessoas atoras ordenados pelo salário

*SELECT * FROM Actor ORDER BY salary;*

d) Faça uma query que retorne as pessoas atoras com os três maiores salarios

*SELECT * FROM Actor ORDER BY nome DESC LIMIT 3;*

e) Faça uma query que retorne a média de salário por gênero

*SELECT AVG(salary), gender FROM Actor GROUP BY gender ;*

---
## EXERCICIO 6

Você já pegou o padrão né?

a) Altere a tabela de Movies e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

*ALTER TABLE Movie ADD playing_limit_date datetime;*

b) Altere a tabela de Movies para que o parâmetro avaliação torne-se rating e possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.

*alter table Movie change spots rating float;*

c) Atualize dois filmes de tal forma que tenhamos um  ainda esteja em cartaz, e outro que já tenha saído 

*update Movie set playing_limit_date = "2023-01-09" where ID = "004";*

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

*Ele me retorna um OK o comando foi feito, MAS por não existir mais o ID ele diz olha deu certo mas ZERO linhas alteradas*



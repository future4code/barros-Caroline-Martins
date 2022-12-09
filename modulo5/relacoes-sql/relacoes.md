## EXERCICIO 1

No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações. 
As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação 1:N. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela

*CREATE TABLE Rating ( </BR>
	id VARCHAR(255) PRIMARY KEY, </BR>
    comment TEXT NOT NULL, </BR>
	rate FLOAT NOT NULL, </BR>
    movie_id VARCHAR(255),</BR>
    FOREIGN KEY (movie_id) REFERENCES Movies(id)</BR>
)*</BR>

a) Explique o que é uma chave estrangeira

*uma chave de outra tabela, estrangeira vem de fora*

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

*INSERT INTO NOME_DA_TABELA (id, comment, rate, movie_id) </BR>
VALUES ( "001", "Muito bom!", 7, "004" );*</BR>

*INSERT INTO NOME_DA_TABELA (id, comment, rate, movie_id) </BR>
VALUES ( "002", "Muito engraçado!", 7, "003" );*</BR>

*INSERT INTO Rating (id, comment, rate, movie_id) </BR>
VALUES ("004","Maravilhoso!",10,"002");*</BR>

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

*deu erro como key primary não existe*

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

*ALTER TABLE  Movie DROP COLUMN  rating;*

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

*NÃO é possivel pois possui uma chave estrangeira*
*Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416152-caroline-martins`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))*

## EXERCICIO 2

Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**

Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.

*CREATE TABLE MovieCast (</BR>
	movie_id VARCHAR(255),</BR>
	actor_id VARCHAR(255),</BR>
    FOREIGN KEY (movie_id) REFERENCES Movies(id),</BR>
    FOREIGN KEY (actor_id) REFERENCES Actor(id)</BR>
);*</BR>

a) Explique, com as suas palavras, essa tabela

*Criou uma tabela com os filmes e atores onde esta passando uma chave estrangeira do filme e dos atores*

b) Crie, ao menos, 6 relações nessa tabela

*6 VEZES COM IDs DIFERENTES*
*INSERT INTO MovieCast (movie_id, actor_id)</BR>
VALUES("004", "001");*</BR>


c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

*error code 1452... Não possui o key referente*

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

*error code 1451... Não possui o key refere*


## EXERCICIO 3

Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`. 

Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim:

*SELECT * FROM Movies </BR>
INNER JOIN Rating ON Movies.id = Rating.movie_id;*

a) Explique, com suas palavras, a query acima. O que é o operador `ON`?

*Seria um tipo de AONDE... selecione AONDE e a correspodente*

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

*SELECT m.id as movie_id, r.rate as rating FROM Movie m </BR>
INNER JOIN Rating r ON m.id = r.movie_id;*
**NÃO ENTENDI ESSA PARTE**
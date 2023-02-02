### EXERCICIO *1*

A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: bcryptjs.

a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?</br>
*Round* vai rodar na quantidade elevado a *n* quanto maior mais vezes vai girar sua aplicação.</br>
*Salt* é uma string aleatoria adicionada antes de criar o hash.</br>
Salt como já é pedido uma string e Round um number 12 pois é uma forma segura para a aplicação.

b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.</br>
**FEITO**</br>

c) Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs</br>

**FEITO**

---

### EXERCICIO *2*

Na aula anterior, implementamos os endpoints de *signup* e *login* sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: **no cadastro**, antes de salvar o usuário no banco, temos que **criptografar** a senha, para que, no banco, não fique a senha em si. Já, **no login**, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de *Hash* para isso.

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

b) Faça a alteração do primeiro endpoint
**FEITO**

c) Faça a alteração do segundo endpoint
**FEITO**

d) No exercício da aula anterior, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.</br>
Não é preciso Pois ele já está logado.. essa criptografia seria a do *JSONWEBTOKEN*.</br>
Nesse caso não é necessário. Pois não preciso de verificação do meu password.</br>
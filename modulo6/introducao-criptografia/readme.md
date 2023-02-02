### EXERCICIO *1*

A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: bcryptjs.

a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?</br>
*Round* 
*Salt* é uma string aleatoria adicionada antes de criar o hash

b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.</br>

c) Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs</br>

---

### EXERCICIO *2*

Na aula anterior, implementamos os endpoints de *signup* e *login* sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: **no cadastro**, antes de salvar o usuário no banco, temos que **criptografar** a senha, para que, no banco, não fique a senha em si. Já, **no login**, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de *Hash* para isso.

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

b) Faça a alteração do primeiro endpoint
**FEITO**

c) Faça a alteração do segundo endpoint
**FEITO**

d) No exercício da aula anterior, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
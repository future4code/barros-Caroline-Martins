### Exercicio *1*

Na autenticação de usuários o elemento mais fundamental talvez seja o id.</br>
É muito importante encontrar um que seja fácil de guardar e que garanta unicidade.</br>
Para isso usaremos a versão v4 do UUID, uma das mais recomendadas. </br>


a) Qual a sua opinião em relação a usar strings para representar os ids? </br>
Você concorda que seja melhor do que usar números?</br>

Usar um *int* com auto-increment se torna único apenas para aquela tabela,</br>
já a utilização do *uuid* é uma forma única e universal, isso então se precisar migrar dados</br>
em um Sistema Gerenciador de Banco de Dados você terá uma facilidade muito maior. E também não vai ser preciso usar o *BD* para ter essa parte preenchida.

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. </br>
Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. </br>
Dado isso, crie uma função para gerar um id. 

**Função criada na pasta services**

---

### EXERCICIO *2*

Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário.  </br>
Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações: </br>

- os dados que serão salvos no token (no nosso caso, o id); </br>
- a chave secreta usada pra criptografar o token; </br>
- algumas configurações, como o tempo de expiração </br>

**Criada na pasta service/authenticator**
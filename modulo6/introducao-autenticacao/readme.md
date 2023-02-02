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

a) O que a linha as string faz? Por que precisamos usar ela ali?

O arquivo não consegui entender que tipo é pois o dotenv retorna string então é mais para confirmar</br>
*Olha isso aqui é SIM uma string* caso contrário retorna um erro pois ele le como undefined </br>

b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.</br>

**Criada na pasta e arquivo service/authenticator**</br>

---

### EXERCICIO *3*
Pronto, com essas três funções preparadas podemos criar o nosso endpoint. As informações dele são:</br>

- *Verbo/Método*: POST</br>
- *Path*: `/user/signup`</br>
- *Input:* O body da requisição deve ser</br>
{
	"email": "email do usuário", </br>
	"password": "senha do usuário" </br>
}

- *Output:* O body da resposta deve ser</br>

{
	"token": "token gerado pelo jwt"</br>
}

a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*</br>

b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*</br>

c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*</br>


## RESPOSTAS EM PASTA CODIGOS CRIADOS PODENDO BATER ENDPOINT NO ARQUIVO **RESQUEST.REST**

---

### EXERCICIO *4*

No login, vamos receber o email e a senha do usuário. Então, vamos precisar de uma função que realize essa busca no banco de dados para gente. </br>

a) *Crie uma função que retorne as informações de um usuário a partir do email*</br>

## RESPOSTAS EM PASTA CODIGOS CRIADOS PODENDO BATER ENDPOINT NO ARQUIVO **RESQUEST.REST**

---

### EXERCICIO *5*

Ufa, agora temos toda a nossa base pronta para identificar o usuário. Antes de prosseguir, precisamos criar uma </br>função que recebe o token e devolve as informações do usuário salvas nele</br>

a) Crie uma função que realize a mesma funcionalidade da função acima</br>

## Criada na pasta e arquivo service/authenticator</br>

---



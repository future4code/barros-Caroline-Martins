### Exercicio *1*

Na autenticação de usuários o elemento mais fundamental talvez seja o id.</br>
É muito importante encontrar um que seja fácil de guardar e que garanta unicidade.</br>
Para isso usaremos a versão v4 do UUID, uma das mais recomendadas. </br>


a) Qual a sua opinião em relação a usar strings para representar os ids? </br>
Você concorda que seja melhor do que usar números?</br>

Usar um *int* com auto-increment se torna único apenas para aquela tabela,</br>
já a utilização do *uuid* é uma forma única e universal, isso então se precisar migrar dados</br>
em um Sistema Gerenciador de Banco de Dados você terá uma facilidade muito maior. E também não vai ser preciso usar o *BD* para ter essa parte preenchida.

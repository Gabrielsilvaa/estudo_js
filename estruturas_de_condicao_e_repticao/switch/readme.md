A estrutura condicional switch permite executar um bloco de código diferente de acordo com cada opção (cada case) especificada.

switch(expressao){
  case n1:
    [bloco de código 1]
    break
  case n2:
    [bloco de código 2]
    break
  case n3:
    [bloco de código 2]
    break
 default:
   [bloco de código 3]
}

expressao - expressão a ser comparada com cada case declarado dentro do switch. Caso o valor obtido na expressão seja a igual ao que for declarado no case, o bloco de código é executado.

case - valor que será comparado à expressão.

break - palavra reservada que finaliza a execução do switch. Caso não especificada no final do bloco de código em execução, as linhas dos blocos de código seguintes também serão executadas.

default - é a palavra reservada que define o bloco de código a ser executado se nenhum dos cases atenderem à expressão declarada no switch.

//exemplo de como o if e else funciona

var nome = 'gabriel'; //nome a ser comparado 
let msg = "";

//o if vai verificar se o nome é igual se for ele vai passar a mensagem atribuida a variavel msg
if (nome === "gabriel") {
    msg = "nome igual"
}
//ja no else se o nome for diferente do parametro passado acima ele vai mostrar uma mensagem diferente
else {
    msg = "nome diferente"
}
console.log(msg)


/**tambem podemos usar o if e else com operadores alternario como no exemplo abaixo */
var nome = "Gabriel"
console.log(nome ? 'Olá ' + nome : 'Digite um nome');
// esse codigo faz a mesma coisa que o abaixo 

let name = "Gabriel";
if (name) {
    console.log("ola" + name);
} else {
    console.log("digitar um nome");
}

//ultilizando if com operador alternario e curto circuito
/** Imprima a variável "msgInicial" caso 'iniciarJogo' seja true.
 *  Do contrário imprima 'msgErro'.
 *  Utilize o operador curto circuito em uma das lacunas.*/

const minimoDeJogadores = 2;
const iniciarJogo = minimoDeJogadores >= 2 && true;

const msgInicial = "Iniciando o jogo";
const msgErro = "Você não consegue jogar sozinho";

console.log(iniciarJogo ? msgInicial : msgErro);

/**
 * Imprima o valor do produto com a seguinte condição:

    1- O valor será 50 para o idProduto menor que 20 ou igual a 90 (deve ser do tipo number).
    2- O valor será 120 para os demais produtos.

    Obs.: Verifique na ordem acima.
 */

const idProduto = 90;
let valor = 0;

if (idProduto < 20 || idProduto === 90) {
    valor = 50;
} else {
    valor = 120;
}

console.log(valor);

/**Crie um código que imprima "Você está na sua agência" caso o número da agência seja 2987. 
 * Agência deve ser um number. */
const agencia = 2987;

if (agencia === 2987) {
    console.log("Seja bem vindo");
} else {
    console.log("Esta não é a sua agência");
}
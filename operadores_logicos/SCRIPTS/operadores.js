/* neste documento irei exemplificar todos os operadores 
que possuimos*/

/* primeiro operador a ser exemplificado sera o da adição
aqui realizamos a soma de dois numeros e exibimos o resultado*/
var soma = 5 + 5;
console.log("Resultado da soma dos numeros é " + soma);

/* Segundo operador a ser exemplificado sera o da subtração
aqui realizamos a subtração de dois numeros e exibimos o resultado */
var subtracao = 5 - 6;
console.log("Resultado da subtração dos numeros é " + subtracao);

/* Terceiro operador a ser exemplificado sera o da multiplicação
aqui realizamos a  multiplicação de dois numeros e exibimos o resultado*/
var multiplicação = 5 * 5;
console.log("Resultado da multiplicação dos numeros é" + multiplicação);

/* Quarto operador a ser exemplificado sera o da divisao 
aqui realizamos a divisao de dois numeros e exibimos o resultado*/
var divisao = 10 / 2;
console.log("O resultado da divisao dos numeros é " + divisao);

/* Agora vamos ver um exemplo do operador de modulo
o modulo e o resto de uma divisão, ele e muito ultilizado para verificar
se o numero e impar ou par */
const par = 2;
const impar = 3;
var modulopar = 20 % par;
var moduloimpar = 21 % impar;
//caso queira verficar se ele e impar coloque o sinal de difernte
if (modulopar == 0) {
    console.log("modulo par");
}else{
    console.log("modulo impar");
}

/* Agora vamos exemplificar operaçoes aritimeticas e atruibuiçoes*/
var opracao = 10;
opracao += 10;
opracao -= 10;
opracao /= 10;
opracao *= 10;
opracao %= 10;
//aqui realizamos operaçoes matematicas e realizamos alteraçoes na variavel

/* INCREMENTO NOS OPERADORES
ABAIXO IREMOS VER COMO REALIZAR INCREMENTOS COM OS OPERADORES */

//No exemplo abaixo iremos ver um contador que realiza a adção ou subitração de um numero
var contador = 1
//adcicionando mais um numero
contador ++;
console.log("numero atual " + contador);
//tirando um numero 
contador --;
console.log("numero atual " + contador);

/*tambem podemos adicionar o contador na hora que vamos printar o numero*/
console.log("numero com soma " + ++contador);

/*OPERADORES RELACIONAIS*/
/*Abaixo iremos ver exemplos de operadores relacionais */
//exemplo de igualdade
console.log(10 == 10);
//exemplo de diferente
console.log(10 != 11);
//exemplo de menor
console.log(10 < 9);
//exemplo de maior
console.log(10 > 100);
//exemplo de menor igual
console.log(10 <= 5);
//exemplo de maior igual
console.log(10 >= 10);
//exemplo de igualdade estrita
console.log(10 === 10);
//exemplo de desigualdade estrita
console.log(10 !== 101);

/*sintaxe de suma importanciapara fazer comparaçoes, se precisarmos 
converter string para numero */
var numtext = "21";
parseInt(numtext);
numtext ++;
console.log(numtext);

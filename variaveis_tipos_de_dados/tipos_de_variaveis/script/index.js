//no let podemos atribuir todos os tipos de valores, textos ou numeros
let tipoNumber = 12
let tipoString1 = 'Texto entre aspas simples'
let tipoString2 = "Texto entre aspas duplas"
let tipoNull = null
let tipoUndefined = undefined
let tipoObject = { nome: 'José da Silva', idade: 18 }
let tipoBoolean = true || false

//É possível atribuir a uma variável o resultado de uma expressão:
let totalBruto = 5000
let desconto = 0.1
let totalLiquido = totalBruto - (totalBruto * desconto)

//variaveis do tipo let declarada dentro do if ou for nao pode ser acessada de fora 

let admin = true

if (admin) {
    let menu = ["home", "contato", "settings"]
}

if (menu.includes("settings")) {

}


//Quando usamos var para declarar a variável usada como índice em
//um for a mesma permanece acessível, mesmo após o encerramento 
for (var /*let*/ i = 0; i < precos.length; i++) {
    total += precos[i]
}

media = total / precos.length

console.log(i) // 3
    //Para corrigir esse código devemos utilizar o let no for para evitar que variáveis
    //criadas para a sua execução sejam acessíveis fora de seu escopo:
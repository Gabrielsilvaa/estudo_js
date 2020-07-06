/**aqui temos um exemplo de como o switch funciona
 * ele vai verificar a onde a variavel tipoUsuario se encaixa 
 * de melhor forma, e realizar o bloco de codigo dela
 */
let tipoUsuario = 'Gerente'

switch (tipoUsuario) {
    //caso o tipoUsuario seja igual adm ele vai exebir essa mensagem
    case 'Admin':
        mensagem = '*|*| Feliz Natal, chefe! |*|*'
            //o break serve para para indicar que esse bloco de codigo chegou ao fim
        break
    case 'Gerente':
        mensagem = 'Boas festas, meu amigo!'
        break
    default:
        mensagem = 'Boas festas!'
}

/**
 *Crie um código para imprimir o valor de um produto baseado na seguinte tabela:
 *Para id igual a 1 o valor será 50.
 *Para id igual a 2 ou 3 o valor será 150.
 * Os demais o valor será 250.
 */
const produtoId = 3;
let valor = 0;

switch (produtoId) {
    case 1:
        valor = 50;
        break;

    case 2:
    case 3:
        valor = 150;
        break;

    default:
        valor = 250;
        break;
}

console.log(valor);
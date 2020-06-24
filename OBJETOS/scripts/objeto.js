/*Aqui iremos testar o um exemplo de objeto privado e publico
a onde temos dois parametros que é o publico e o privado*/
function teste(publico){
   
    //variavel do tipo publica
    this.publico = publico;

    this.livre = function(){
        return ("eu sou" + " " + publico);
    }
}
var aberto = new teste("publica");
console.log(aberto.livre());

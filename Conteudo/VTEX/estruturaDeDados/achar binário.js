var elementos = [];
var topo = -1;
const MAX = 10;

function push(num){
    if(topo <MAX){
        topo = topo+1;
        elementos[topo]=num;

    }
    else{
        console.log("Pilha esta cheia");
    }
}
function estaVazia(){
    return topo == -1;
}


function pop(){
    if (topo != -1 ){
        let num = elementos[topo];
        topo= topo -1;
        return num;
    }
    else{
        console.log("Pilha esta vazia");
    }
}
//-----------------//
var numDecimal = 10;
var resto;
console.log("Hora de Empilhar");
while(numDecimal !=0){
    resto = parseInt(numDecimal % 2);
    numDecimal= parseInt(numDecimal / 2);

}
console.log("Desimpilhando tudooo");
while(!estaVazia()){
    console.log(pop());
}

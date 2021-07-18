var valores =[5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function busca(num){
    for(i=0; i < 6; i++){
        if(num == valores[i]){
            return i;
        }
    }
    return -1;
}

function buscaBin(num){
    let inicio, fim;
    let meio;
    let passos;
    inicio= 0;
    fim= 9;
    while(inicio <= fim){
        meio=parseInt(inicio + fim)/2;
        passos =passos +1;
        if(num ==valores[meio]){
            console.log("achei em " + passos + "passos");
            return meio;
        }
        else{
            if(num > valores[meio]){
                inicio = meio+1;
            }
            else{
                fim= meio -1;
            }
        }
    }
    console.log("não achei"+passos+"passos")
    return -1

}

//----------parte do codigo que usa a pilha
console.log(buscaBin(10));
console.log(buscaBin(60));
console.log(buscaBin(50));
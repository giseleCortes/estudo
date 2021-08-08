function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
    
if (operacao === "+") {
    return numero + outroNumero
}else if (operacao === "-") {
    return numero - outroNumero
} else {
    return 0;
}
}
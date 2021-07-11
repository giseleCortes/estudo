// fizzBuzz
// Divisivel por 3 > 'fizz'
// Divisivel por 5 > 'buzz'
// divisivel por 3 e 5 > 'fizzBuzz'
// Se não for um numero > 'não é um número'
// se não for divisivel por 3 nem por 5 > entrada

let resultado = fizzBuzz();
console.log(resultado)

> function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
    return 'Não é um numero';

    if ((entrada % 3 === 0) && (entrada % 5 === 0 ))
    return 'FizzBuzz';

    if (entrada % 3 === 0) 
    return 'fizz'

    if (entrada % 5 === 0 )
    return 'Buzz';

    return entrada;
}


// Reverse a string

let newStr ='';

function reverseAString(str){
    for(let i =str.length -1; i>= 0; i --){
        newStr += str [i];
        console.log(newStr);
    }
}

let resultado = reverseAString ('Hello Gama Academy')

// dessa forma no console vai mostrar toda a interação) para que isso não ocorra e ele mostre apenas um resultado é so colocar o console.log(newStr); fora do bloco do for

// converter Celsius  to Fahrenheit

function convertToFahrenheit (value) {
    return value * 1.8 + 32
}

let result = convertToFahrenheit(40)
console.log('ovalor em Fahrenheit é ${result}')

// To do List


// 1. Faça uma função que receba um parâmetro string e um segundo como string
// também, a função deve retornar true caso o primeiro termine como o segundo.
// Ex.:
//Entrada: Funcao(estudo, udo)
//Saída:true
//Entrada: Funcao(estudo, abc)
//Saída:false

function RetornarFinal(palavra: string, final: string): boolean {
    if (palavra.endsWith(final)) {
        return true
    } else {
        return false
    }
}

// 2. Faça uma função que receba uma string como parâmetro, e deve converter para
// uma nova string onde cada caractere deve ser substituído por:
// “(“ se aparece apenas uma vez na string original ou 
// por “)” se aparecer mais de uma vez.
// A função não deve diferenciar maiúsculas e minúsculas para fazer a contagem.
// Ex.:
// Entrada: “teste” Saída:“) ) ( ) )”
// Entrada: “tech”  Saída:“( ( ( (”
// Entrada: “Aula”  Saída:“) ( ( )”

function ConverterPalavra(palavra: string): void {

    let palavraMinúscula = palavra.toLowerCase()
    let arrayPalavra = palavraMinúscula.split("")
    console.log(arrayPalavra)
    let novoArray: string[] = []
    for (let index = 0; index < arrayPalavra.length; index++) {

        for (let index2 = 0; index2 < arrayPalavra.length; index2++) {

            if (arrayPalavra[index] == arrayPalavra[index2] && index != index2) {
                novoArray[index] = ")"
                novoArray[index2] = ")"

            } else if (novoArray[index] != ")") {
                novoArray[index] = "("
            }
        }
    }
    console.log(novoArray.join(""))
}

// 3. Faça uma função que recebe dois parâmetros: um número inteiro positivo ”n” e um
// dígito “d” entre 0 e 9. A função deve calcular o quadrado de todos os números entre
// 0 e “n”, e depois contar quantas vezes o dígito “d” aparece nos resultados das
// contas anteriores e por fim retorne esse valor. (para calcular o quadrado basta
// multiplicar um número vezes ele mesmo => k*k)
// Ex.:
// Entrada: 10, 1 Saída: 4 (0,1,4,9,16,25,36,49,64,81,100)
// Entrada: 11,6 Saída:  3 (0,1,4,9,16,25,36,49,64,81,100,121)  

function CalcularQuadrado(numero: number, digito: number): void {
    let Numeros: number[] = []
    let Quadrados: number[] = []
    let varQuadrados: number
    let quantidadeDigito = 0
    let concatenar = ("")
    let concatenar2 = ("")

    for (let index = 0; index <= numero; index++) {
        Numeros.push(index)

    }
    Numeros.forEach(x => {
        varQuadrados = x * x
        Quadrados.push(varQuadrados)
    });

    let stringNumeros = String(Quadrados)
    let digitoString = String(digito)
    let arrayString = stringNumeros.split(",")

    for (let index = 0; index < arrayString.length; index++) {
        if (index == 0) {
            concatenar = arrayString[index]
        } else {
            concatenar = concatenar + arrayString[index]
        }
    }
    let concatenarArray = concatenar.split("")
    for (let contador = 0; contador < concatenarArray.length; contador++) {
        if (digitoString == concatenarArray[contador]) {
            quantidadeDigito++
        } else {
            quantidadeDigito = quantidadeDigito
        }
    }
    for (let index = 0; index < arrayString.length; index++) {
        if (index == 0) {
            concatenar2 = arrayString[index]
        } else {
            concatenar2 = concatenar2 + "," + arrayString[index]
        }
    }
    let concatenarNumber = concatenar2

    console.log(quantidadeDigito + " " + "(" + concatenarNumber + ")")
}
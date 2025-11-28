function gerarAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}







//-----------------------------------Questão 5 na lista
let res4 = document.getElementById('res4')
function ordenar5(){
    let num5 = [16, 13, 17, 10, 6, 19, 20, 5, 9, 15, 3, 18, 1, 12, 8, 2, 4, 14, 7, 11]
    let n = 20
    let val5 = 0
    for(let j = 0; j<n - 1; j++){
        for(let i = 0; i< n -j -1; i++){
            if(num5[i] > num5[i+1]){
                val5 = num5[i]
                num5[i] = num5[i+1]
                num5[i+1] = val5
            }
        }
    }
    res4.innerHTML = ``
    res4.innerHTML += `O resultado que você pediu em ordem Crescente está aqui: ${num5}`
}

function decrescente5(){
    let num5 = [16, 13, 17, 10, 6, 19, 20, 5, 9, 15, 3, 18, 1, 12, 8, 2, 4, 14, 7, 11]
    let n = 20
    let val5 = 0
    for(let j = 0; j<n - 1; j++){
        for(let i = 0; i< n -j -1; i++){
            if(num5[i] < num5[i+1]){
                val5 = num5[i]
                num5[i] = num5[i+1]
                num5[i+1] = val5
            }
        }
    }
    res5.innerHTML = ``
    res5.innerHTML += `O resultado que você pediu em ordem Decrescente está aqui: ${num5}`
}
//---------------------------------------------------------------------------------------






// --------------------------Questão 6 AQui------------------------------------------
    let res6 = document.getElementById('res6');
let arr6 = [];

function gerarArr(min, max, qtde){
    arr6 = [];
    for(let i = 0; i < qtde; i++){
        arr6[i] = gerarAleatorio(min, max);
    }
    res6.innerHTML = `Os Números Sorteados Foram: ${arr6}`;
}

function ordenar6(qtde){
    for(let j = 0; j < qtde - 1; j++){
        for(let i = 0; i < qtde - j - 1; i++){
            if(arr6[i] > arr6[i + 1]){
                let temp = arr6[i];
                arr6[i] = arr6[i + 1];
                arr6[i + 1] = temp;
            }
        }
    }
    res6.innerHTML += `<br>Os Números em Ordem: ${arr6}`;
}

function principal6(){
    let min = 1, max = 20, qtde = 10;
    gerarArr(min, max, qtde);
    ordenar6(qtde);
}
//------------------------------------------------------------------------------

//---------------------------------questão 7-----------------------------------------
let res7 = document.getElementById('res7')
let arr7 = []

function gerarArr7(min,max,qtde){
    for(let i = 0; i< qtde; i++){
        arr7[i] = gerarAleatorio(min,max)
    }
}

function somarArr7(){
    let soma = 0
    for(let i = 0; i< arr7.length;i++){
        soma += arr7[i]
    }
    res7.innerHTML =``
    res7.innerHTML +=`Os números Aleatórios Gerados Foram: ${arr7}<br>`
    res7.innerHTML +=`A Soma dos números Aleatórios Gerados : ${soma}`
}

function principal7(){
    let min = 1, max = 220, qtde = 10
    gerarArr7(min,max,qtde)
    somarArr7(qtde)
}
//-----------------------------------------------------------------------------------

// questão 8 ------------------------------------------------------------------
let res8 = document.getElementById('res8')
let mat8 = []
function matriz8() {
    let n = 3, min = 1, max = 20

    for (let i = 0; i < n; i++) {
        mat8[i] = []
        for (let j = 0; j < n; j++) {
            mat8[i][j] = gerarAleatorio(min, max)
        }
    }
    let texto = "A matriz gerada foi:<br>"
    for (let i = 0; i < mat8.length; i++) {
        texto += `[ ${mat8[i].join(", ")} ]<br>`
    }
    res8.innerHTML =  ``
    res8.innerHTML += texto
}
//-----------------------------------------------------------------------------

//----------------------------------questão 9 --------------------------------------------

let res9 = document.getElementById('res9')
function principal9(){
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let IMC = 0
    IMC = peso / (altura * altura)
    res9.innerHTML = ``
    res9.innerHTML += `O IMC calculado deu ${IMC.toFixed(2)}`
}
//----------------------------------------------------------------------------------------

//-------------------------------questão 10-----------------------------------------------
let celsius = Number(document.getElementById('celsius').value)


let res10 = document.getElementById('res10')
function principal10(){
    let F = 0
    F = (celsius * 9/5) + 32
    res10.innerHTML = ``
    res10.innerHTML += `${celsius}° convertido para Fahrenheit ${F}`
}
//----------------------------------------------------------------------------------------

//-----------------------------------------questão 11-------------------------------------
    function encontrarMenorValor(array){
let menor = array[0];
for (let i=1; i < array.length; i++) {
let valorAtual = array[i];
if (array[i] < menor) {
menor = array[i];
}
}
return menor;
}
//----------------------------------------------------------------------------------------
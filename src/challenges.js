// Desafio 1
function compareTrue(param1, param2) {
   if(param1 && param2 === true){
    return true
   }
    return false
}

// Desafio 2
function calcArea(base, altura) {
  return base * altura / 2
}

// Desafio 3

function splitSentence(frase){
 const palavras = frase.split(" ", 3)
  
  return palavras
}


// Desafio 4
function concatName(array) {
  return array[array.length -1] + ', ' + array[0]
 
}

// Desafio 5
function footballPoints(vitorias, empates) {
  return vitorias * 3 + empates * 1
  
   
}

// Desafio 6
function highestCount(numeros) {
  let maiorRepete = 0
  let maiorNumero = Math.max(...numeros)
   for(let index = 0; index < numeros.length; index += 1){
     if(maiorNumero >= numeros[index] && maiorNumero === numeros[index]){
      maiorRepete +=1
     }
   }
   return maiorRepete
}

// Desafio 7
function catAndMouse(gato1, gato2, rato) {
  let posGato1 = Math.abs(rato - gato1)
  let posGato2 = Math.abs(rato - gato2)
  if(posGato1 < posGato2){
    return 'cat1'
  } else if(posGato2 < posGato1){
    return 'cat2'
  } 
    return 'os gatos trombam e o rato foge'
  
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

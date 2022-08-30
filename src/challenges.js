// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, altura) {
  return base * altura / 2
}

// Desafio 3

function splitSentence(frase) {
  const palavras = frase.split(" ", 3)

  return palavras
}


// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]

}

// Desafio 5
function footballPoints(vitorias, empates) {
  return vitorias * 3 + empates * 1


}

// Desafio 6
function highestCount(numeros) {
  let maiorRepete = 0
  let maiorNumero = Math.max(...numeros)
  for (let index = 0; index < numeros.length; index += 1) {
    if (maiorNumero >= numeros[index] && maiorNumero === numeros[index]) {
      maiorRepete += 1
    }
  }
  return maiorRepete
}

// Desafio 7
function catAndMouse(rato, gato1, gato2) {
  let posGato1 = Math.abs(rato - gato1)
  let posGato2 = Math.abs(rato - gato2)
  if (posGato1 < posGato2) {
    return 'cat1'
  } else if (posGato2 < posGato1) {
    return 'cat2'
  }
  return 'os gatos trombam e o rato foge'

}

// Desafio 8
function fizzBuzz(numerosArray) {
  let arrayString = []
  for (let index = 0; index < numerosArray.length; index += 1) {
    if (numerosArray[index] % 3 === 0 && numerosArray[index] % 5 === 0) {
      arrayString.push('fizzBuzz')

    } else if (numerosArray[index] % 3 === 0) {
      arrayString.push('fizz')

    } else if (numerosArray[index] % 5 === 0) {
      arrayString.push('buzz')

    }
    else {
      arrayString.push('bug!')
    }

  }
  return arrayString
}

// Desafio 9
function encode(trocarVogais) {
  return trocarVogais.replaceAll('a', '1').replaceAll('e', '2').replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5');

}


function decode(trocarNumeros) {
  return trocarNumeros.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');

}

// Desafio 10
function techList(tech, nomePessoa) {
  let arrayTec = [];
   tech = tech.sort()
  for (let index = 0; index < tech.length; index += 1) {
      let obj =  {
      tech: tech[index],
      name: nomePessoa};
      arrayTec.push(obj)
}
if (tech.length === 0) {
 return arrayTec = "Vazio!"
} else{
  return arrayTec
}

}

console.log(techList(['python', 'javascript', 'java', 'c++'], 'Gustavo'))

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

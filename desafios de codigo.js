// desafios dio
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

// Calcule a posição final do herói
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);

////////////////////////////////////////////

let num1 = parseInt(gets());
let num2 = parseInt(gets());

//TODO: Implemente a lógica para exibir o xpGanho:
const xpGanho = num1 * num2 * 100  ;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");

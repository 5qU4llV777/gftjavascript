// desafios dio 1
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

// Calcule a posição final do herói
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);

////////////////////////////////////////////
// desafio 2
let num1 = parseInt(gets());
let num2 = parseInt(gets());

//TODO: Implemente a lógica para exibir o xpGanho:
const xpGanho = num1 * num2 * 100  ;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");


//////////////////////////////////////////////////
// desafio 3

let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido;

if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
} else {
    pokemonEscolhido = "Escolha inválida"; // Mensagem para escolha inválida
}

print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");


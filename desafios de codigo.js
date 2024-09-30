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

// Implementa as condições necessárias para a escolha do Pokémon
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 3) {
    pokemonEscolhido = "Pikachu";
} else {
    pokemonEscolhido = "Mewtwo"; // Pokémon default para escolha inválida
}

// Imprime o Pokémon escolhido
if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}

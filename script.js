const message = 'Averegue misterio' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)

//////////////////////////////////////////////////////////
// saida
console.log('Digita o nome do seu personagem');

//declara uma variavel
let nickname = 'claudio nogueira';

//concatenando uma mensagem fixa + uma variavel
console.log('Bem vindo ' + nickname);
console.log(nickname + ' entou no servidor');

///////////////////////////////////
// variavel constante não muda 
const notificacao = "pokemon go diz: "



//saida 
console.log(notificacao + "tem um novo pokemon na região")
console.log(notificacao + "você foi derrotado por um treinador")


///////////////////////////////////////////////////////
//declarando variaveis
let poteCafe = "cafe caboclo"
let poteAcucar = "Açucar alto alegre"
let poteBiscoito = "biscoito de maizena"
const mensagemDaVovo = "Na cozinha da vovó tem: "
// imprimir a mensagem
console.log(mensagemDaVovo +
poteCafe + " - " +
poteAcucar + " - " +
poteBiscoito
)
//trocando a variavel 
poteCafe = "cafe três corações"
// imprimir a mensagem 
 console.log(mensagemDaVovo +
poteCafe + " - " +
poteAcucar + " - " +
poteBiscoito
)
//////////////////////////////

//pokemon
let nomePokemon = "pikachu"
let nivelPokemon = 20
let pontosDeVidaPokemon = 45
let pokemonSexo = "M"
let selecionavel = true 
///////////////////////////////////

//nome, idade, numero de telefone, cpf, endereço
// string = armazenar texto
// number = armazenar numeros
// boolean = verdadeiro ou falso

let nomePessoa = "josicreide do pythinho"
let idade = 115
let numeroTelefone = "67-999999999"
let cpf = "123.456.789-10"
let endereco = "rua cachoeira 10"
let recebePensao = true
let freezer = "SR white"

////////////////////////
// vetores //arrays
let pokemon = ["pikachu", "charmander", "blastoise", "charizard"]

pokemon.shift() //metodos retira primeiro indice 0
pokemon.pop()// metodos retira ultimo indice


console.log(pokemon)

//////////////////////////
// matrizes

let nomesPokemon = ["pikachu", "charmander", "blastoise", "charizard"]
let timePokemon = [
    ["pikachu", "M", "level 1"],
    ["charmander", "F", "level 4"],
]


console.log(" 0 pokemon " +  timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " é esta no " + timePokemon[1][2])

/////////////////////////////////////

//operadores matematicos

let idade = 30

console.log("valor da minha variavel " + idade)

idade = 30 + 6
console.log("operação de adição " + idade)

idade = 30 - 6
console.log("operação de subtração " + idade)

let codigoDoProduto = 1023
let codigoExato = codigoDoProduto - 1000
console.log("codigo do produto " + codigoExato)


//////////////////////////////////////

//multiplicação

let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log(valorComTaxa)

let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log("resultado da multiplicação produto é " + produto)

multiplicador = 8
produto = multiplicador * multiplicando
console.log("resultado da multiplicação produto é " + produto)

/////////////////
// divisão

let notaDoMercado = 50
let pessoasParaDividir = 2
console.log("operação de divisão :" + notaDoMercado/pessoasParaDividir)

////////////////////////////
// resto 
let calculo = 10 % 3
console.log("operação de modulo " + calculo) 

/////////////////////////
// decremento 

let contador = 1
//incremento ++ 
contador++
contador++
// decremento 
contador--
contador--
console.log(contador)
/////////////////////////////

let preco = 10 

preco += 4 //mais e atribuir 
preco -= 4 // menos e atribuir 


console.log(preco)

////////////////////////////////////

let resultado = 2 * ((5 + 5) - 10) 

console.log(resultado)


/////////////////////////

let numero = "1"
console.log(numero == "1")

let marca = "apple"
console.log(marca  === "apple")

let marca = "apple"
console.log(marca  !== "samsung")

// guardar o valor em uma variavel de resultado 
let marca = "apple"
let resultado = marca !== "samsung"
console.log(resultado)


// = é atribuição
// == é comparação
// === compara o valor e o formato do conteúdo 
// !== compara se e diferente 

/////////////////////////////////////////

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCpfBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado ? " + ehCpfBloqueado)

///////////////////////

let cpfPermitido = "222.555.333-01"
let cpfDoUsuario = "222.555.333-02"

let ehCpfBloqueado = cpfDoUsuario !== cpfPermitido
console.log("O usuario está barrado ? " + ehCpfBloqueado)

///////////////////////////////////////////

let idadeMinima = 18
let idadeUsuario = 18 
let idadePermitidaValida = idadeUsuario >= idadeMinima

console.log(idadePermitidaValida)

/////////////////////////////////////////

let idadeDeCorte = 50 
let idadeUsuario = 50
let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario
console.log(resultadoEhTerceiraIdade)

////////////////////////////////

let texto = "Felipe"
console.log(texto === "Felipe")

///////////////////////////////

// and (&&)
let idade = 18 
let vistoVerificado = false
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)

// and (&&) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 100
let item = "estrela"
let resultado = (moedasColetadas === 100) && (item === "estrela")
console.log(resultado)

///////////////////////////////
// or (||) -nosso boneco so pode sair se tiver sem  chuva ou com o guarda chuva 
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)

//////////////////////////////////
//not (!) - nega uma afirmação
let tempo = "chuva"
let horario = 8
let resultado = !((tempo !== "chuva") && (horario > 6))
console.log(!!resultado)

///////////////////////////////////
// desafios dio
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

// Calcule a posição final do herói
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);

///////////////////////////////////
// estruturas condicionais 

let ehLigado = true 

if(ehLigado){
    console.log("executou comando")
}
///////////////////////////////////////
let possuiOvos = false

let itensComprados = ""

if (possuiOvos){
    itensComprados = "leite"
}
else{
    console.log("passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)

///////////////////////////////////
//else if 

let nivelDeFome = 1

if(nivelDeFome ===1){
    console.log("pouca fome")
}else if(nivelDeFome ===2){
    console.log("muita fome")
}else{
     console.log("Você comeria até um cavalo ")
}

//////////////////////////////////////
// switch // estrutura de decisão //break //default

let fruta = "morango"

switch (fruta){
    case "laranja":
        console.log("suco de laranja")
        break;

    case "banana":
    case "morango":    
        console.log("vitamina " + fruta)
        break;

    case "maça":
        console.log("suco de maça")
        break;

    default:
    console.log("suco genérico")
}



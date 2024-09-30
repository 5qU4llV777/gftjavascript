torrar()

function torrar(){
    console.log("torrando pão")
    injetarPao()
}


function injetarPao(){
    console.log("injetando pão")
    console.log("finalizado")
}

///////////////////////////////////////

main()

function main(){
    getData()
    checkValues()
    sendTODatabase()
}

function getData(){
    console.log("pegando dados do usuario")
}

function checkValues(){
    console.log("verificando valores")
}

function sendTODatabase(){
    console.log("enviando dados para o banco de dados")
}

//////////////////////////////////////
enviarDados()

function enviarDados(){
    let nomeDoBanco = "bancos-de-dados"
    console.log("salvando dados em: " + nomeDoBanco)

    if(3 === 3){
        console.log("condição atendida")
    }
}

//////////////////////////////////////
//funções com parâmetros
torrar("pão de forma", "claudio", 36.90)
torrar("pão integral", "Dona bendi", 50.90)

//nome = "cliente" e default se não houver nome 
// se não tiver parâmetros obrigatorios deixar sempre para o final 
function torrar(pao, nome = "Cliente", valor){
    console.log("torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)
    console.log("O Valor total é " + valor)
}

///////////////////////////////////////////
createStringConnect("db_products", "claudio", "9999")
//criar uma função que recebe 3 parâmetros e retorne uma string
//interpolação
function createStringConnect(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}


/////////////////////////////////////////////
//funções com retorno

let resultado = soma(5, 10)

console.log("O Resultado dessa função é " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio

}

///////////////////////////////////////////////

let resultado = soma(5, 10)

console.log("O Resultado dessa função é " + resultado)

function soma(numA, numB){
    let somatorio = [3, 11, 90]
    return somatorio

}

////////////////////////////////////////////
//

let userName = getFirstName("Claudio Nogueira")

console.log("Seja bem vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}

///////////////////////////////////////////
// splitchar

let userName = getFirstName("Claudio Nogueira", " ")

console.log("Seja bem vindo " + userName)

userName = getFirstName("Dona-bendi", "-")
console.log("Seja bem vindo " + userName)


function getFirstName(name, splitchar){
    let firstName = name.split(splitchar)[0]
    return firstName
}
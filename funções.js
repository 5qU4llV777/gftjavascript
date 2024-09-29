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

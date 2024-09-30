// Json - javaScript Object Notation
// chave e valor com o objetivo de transferir dados 


let invoice = {
    name: "claudio",
    age: 36,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["teclado mecânico", 129.90],
        2: ["monitor 24\"", 899.90],
        3: ["playstation 5", 5000.00],
    },
    taxes: "98.90"
    
}

generateInvoice(invoice)

function generateInvoice(invoiceProducts){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("-------------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
    console.log(`- ${productName}: R$ ${productPrice}`)
    }

}

//////////////////////////////////////
// com JSON
let invoice = {
    name: "claudio",
    age: 36,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["teclado mecânico", 129.90],
        2: ["monitor 24\"", 899.90],
    }
}
 console.log(invoice)

////////////////////////////////////////////////////

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
            console.log(`O bolo está assando... ${this.saborDaMassa}`)
    }
    
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")
boloFesta.escrever()
boloFesta.assar()
boloPremium.escrever()
boloPremium.assar()
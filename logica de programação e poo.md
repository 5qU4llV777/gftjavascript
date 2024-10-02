Lógica de Programação e Programação Orientada a Objetos em JavaScript

1. Estruturas Condicionais
Exemplo: Verificando se um número é par ou ímpar.
```javascript
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return `${numero} é par.`;
    } else {
        return `${numero} é ímpar.`;
    }
}

console.log(verificarParImpar(4)); // "4 é par."
console.log(verificarParImpar(7)); // "7 é ímpar."
```
2. Laços (Loops)
Exemplo: Somando os números de 1 a 10.
```
function somarNumeros() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }
    return soma;
}

console.log(somarNumeros()); // 55
```
3. Funções
Exemplo: Calculando o fatorial de um número.
```
function fatorial(n) {
    if (n === 0) return 1; // Caso base
    return n * fatorial(n - 1); // Chamada recursiva
}

console.log(fatorial(5)); // 120
```
4. Manipulação de Arrays
Exemplo: Encontrando o maior número em um array.
```
function encontrarMaiorNumero(arr) {
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}

console.log(encontrarMaiorNumero([3, 5, 7, 2, 8])); // 8
```
5. Uso de Objetos
Exemplo: Contando o número de ocorrências de palavras em uma string.
```
function contarPalavras(texto) {
    const palavras = texto.split(' ');
    const contador = {};

    palavras.forEach(palavra => {
        palavra = palavra.toLowerCase();
        contador[palavra] = (contador[palavra] || 0) + 1;
    });

    return contador;
}

console.log(contarPalavras("O sol brilha e o sol é bonito.")); 
// { o: 2, sol: 2, brilha: 1, e: 1, é: 1, bonito: 1 }
```
6. Estruturas de Dados (Pilhas e Filas)
Exemplo: Implementando uma pilha.
```
class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(item) {
        this.itens.push(item);
    }

    desempilhar() {
        return this.itens.pop();
    }

    topo() {
        return this.itens[this.itens.length - 1];
    }

    estaVazia() {
        return this.itens.length === 0;
    }
}

const pilha = new Pilha();
pilha.empilhar(1);
pilha.empilhar(2);
console.log(pilha.topo()); // 2
console.log(pilha.desempilhar()); // 2
console.log(pilha.estaVazia()); // false
```
7. Algoritmos de Busca
Exemplo: Busca binária em um array ordenado.
```
function buscaBinaria(arr, alvo) {
    let esquerda = 0;
    let direita = arr.length - 1;

    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2);

        if (arr[meio] === alvo) {
            return meio; // Retorna o índice
        } else if (arr[meio] < alvo) {
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }

    return -1; // Não encontrado
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(buscaBinaria(numeros, 5)); // 4
```
Variáveis e Constantes
```javascript
let totalLivrosEmprestados = 0; // Variável
const LIMITE_LIVROS = 5; // Constante
```
Vetores (Arrays)
```javascript
let livrosDisponiveis = []; // Array vazio que armazenará objetos Livro
```
Estruturas de Controle
As estruturas de controle são similares ao que você já conhece, com if, else, for, while, etc.
```javascript
Programação Orientada a Objetos (POO)
1. Classe Livro

class Livro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponivel = true;
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            return `${this.titulo} foi emprestado.`;
        }
        return `${this.titulo} não está disponível.`;
    }

    devolver() {
        this.disponivel = true;
        return `${this.titulo} foi devolvido.`;
    }
}
2. Classe Usuario

class Usuario {
    constructor(nome, idUsuario) {
        this.nome = nome;
        this.idUsuario = idUsuario;
        this.livrosEmprestados = []; // Array para armazenar livros emprestados
    }

    pegarLivro(livro) {
        const resultado = livro.emprestar();
        if (resultado.includes("foi emprestado")) {
            this.livrosEmprestados.push(livro); // Adiciona o livro ao array
        }
        return resultado;
    }

    devolverLivro(livro) {
        if (this.livrosEmprestados.includes(livro)) {
            livro.devolver();
            this.livrosEmprestados = this.livrosEmprestados.filter(l => l !== livro); // Remove o livro do array
            return `${livro.titulo} foi devolvido por ${this.nome}.`;
        }
        return `${this.nome} não possui ${livro.titulo} emprestado.`;
    }
}
3. Classe Biblioteca

class Biblioteca {
    constructor() {
        this.livros = []; // Array para armazenar livros na biblioteca
    }

    adicionarLivro(livro) {
        this.livros.push(livro); // Adiciona livro ao array
        return `${livro.titulo} foi adicionado à biblioteca.`;
    }

    listarLivros() {
        return this.livros.filter(livro => livro.disponivel).map(livro => livro.titulo);
    }
}
A Interseção entre Lógica de Programação e POO
A lógica de programação é usada para definir como as classes e objetos interagem. No sistema de gerenciamento de biblioteca, você pode implementar a lógica para adicionar, pesquisar ou remover livros usando as classes definidas.

Exemplo de Uso
Aqui está um exemplo simples de como você poderia usar essas classes em um script:


const biblioteca = new Biblioteca();
const livro1 = new Livro("1984", "George Orwell", "123456");
const livro2 = new Livro("Dom Casmurro", "Machado de Assis", "654321");
const usuario = new Usuario("Alice", 1);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

console.log(usuario.pegarLivro(livro1)); // "1984 foi emprestado."
console.log(usuario.devolverLivro(livro1)); // "1984 foi devolvido por Alice."
console.log(biblioteca.listarLivros()); // ["Dom Casmurro"]
```

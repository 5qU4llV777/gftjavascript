class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo; // tipo pode ser 'guerreiro', 'mago', 'monge', 'ninja'
    }

    atacar() {
        let ataque;
        
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Exemplo de uso
const guerreiro = new Heroi('Arthur', 30, 'guerreiro');
const mago = new Heroi('Merlin', 50, 'mago');
const monge = new Heroi('Tao', 25, 'monge');
const ninja = new Heroi('Kaito', 28, 'ninja');

guerreiro.atacar(); // O guerreiro atacou usando espada.
mago.atacar();      // O mago atacou usando magia.
monge.atacar();     // O monge atacou usando artes marciais.
ninja.atacar();     // O ninja atacou usando shuriken.

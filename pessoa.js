"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }
}
exports.default = Pessoa;
let p1 = new Pessoa("Diego", 35);
console.log(`Nome: ${p1.nome}, Idade: ${p1.idade}`);

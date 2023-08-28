"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(type, name, age) {
        this.name = name;
        this.type = type;
        this.age = age;
    }
    communicate() {
        console.log("Olá Sou método da classe mãe");
    }
}
exports.default = Animal;
class Cachorro extends Animal {
    constructor(type, name, age, breed) {
        super(name, type, age); //Método que herda todos os atributos da class que estamos estendendo
        this.breed = breed;
    }
    communicate() {
        console.log('Sou da classe filha, classe cachorro');
    }
}
class Pessoa extends Animal {
    constructor(type, name, age, color) {
        super(name, type, age);
        this.color = color;
    }
    communicate() {
        console.log('Sou da classe filha, classe Pessoa');
    }
}
let c1 = new Cachorro("Cachorro", "Marley", 2, "poodle");
c1.communicate();
let p1 = new Pessoa("Humano", "Kleber", 19, "Branco");
p1.communicate();

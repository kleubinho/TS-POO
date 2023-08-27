"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(type, name, age) {
        this.name = name;
        this.type = type;
        this.age = age;
    }
}
exports.default = Animal;
class Cachorro extends Animal {
    constructor(type, name, age, breed) {
        super();
    }
}

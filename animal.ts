export default class Animal {
    type: string;
    name: string;
    age: number;

    constructor(type: string, name: string, age: number){
        this.name = name;
        this.type = type;
        this.age = age;
    }
}

class Cachorro extends Animal {
    breed: string;

    constructor(type: string, name: string, age: number, breed: string){
        super()
    }

}
export default class Animal {
  type: string;
  name: string;
  age: number;

  constructor(type: string, name: string, age: number) {
    this.name = name;
    this.type = type;
    this.age = age;
  }

  public communicate(): void {
    console.log("Olá Sou método da classe mãe");
  }
}

class Cachorro extends Animal {
  breed: string;

  constructor(type: string, name: string, age: number, breed: string) {
    super(name, type, age); //Método que herda todos os atributos da class que estamos estendendo
    this.breed = breed;
  }

  public communicate(): void {
      console.log('Sou da classe filha, classe cachorro')
  }
}

class Pessoa extends Animal {
  color: string;

  constructor(type: string, name: string, age: number, color: string) {
    super(name, type, age);

    this.color = color;
  }

  public communicate(): void {
    console.log('Sou da classe filha, classe Pessoa')
}
}

let c1 = new Cachorro("Cachorro", "Marley", 2, "poodle");
c1.communicate();

let p1 = new Pessoa("Humano", "Kleber", 19, "Branco");
p1.communicate();

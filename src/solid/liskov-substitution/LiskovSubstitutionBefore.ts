// Liskov Substitution Principle (LSP)
// /O Princípio da Substituição de Liskov afirma que objetos de uma classe derivada devem poder substituir objetos da classe base sem alterar o comportamento esperado do programa. Em outras palavras, se S é uma subclasse de T, então os objetos do tipo T devem poder ser substituídos por objetos do tipo S sem afetar a comportamento do programa

// Classe-mãe
class Bird {
  fly() {
    console.log("Flying");
  }
}

// Classes Filhas
class Eagle extends Bird {}

class Peguin extends Bird {
  // Alterando o comportamento do programa ao modificar o método da classe-mãe
  // Isso viola o princípio de substituição de Liskov
  fly(): void {
    throw new Error("Penguins cannot fly");
  }
}

const b1 = new Eagle();
const b2 = new Peguin();

console.log(b1.fly()); // Flying
console.log(b2.fly()); // Error: Penguins cannot fly

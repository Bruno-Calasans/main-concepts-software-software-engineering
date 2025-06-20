//  Liskov Substitution Principle (LSP) - Exemplo de Implementação Correta
// Podemos corrigir o exemplo anterior separando a funcionalidade de voo em uma interfac ou criando uma classe abstrata que define o comportamento de voo. Assim, as classes que não voam não precisam implementar esse método, respeitando o princípio de substituição de Liskov.
interface Flyable {
  fly(): void;
}

class Bird {}

class Eagle extends Bird implements Flyable {
  fly(): void {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  // Pinguins não voam, então não precisamos implementar Flyable
}

const b1 = new Eagle();
// const b2 = new Penguin();

console.log(b1.fly()); // Flying
// console.log(b2.fly()); // Não é possível chamar o método fly() em um Pinguim

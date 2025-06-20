// Prototype pattern - exemplo 1
// Clonando objetos com o método clone

// Quando usar:
// Você precisar clonar muitos objetos parecidos
// Quando você quer evitar a criação de novos objetos do zero
// Quando você quer manter a estrutura de um objeto, mas com dados diferentes
// Bastante utilizados em jogos para clocar personagens ou inimigos

interface DocumentPrototype {
  clone(): DocumentPrototype;
  display(): void;
}

class TextDocument implements DocumentPrototype {
  constructor(
    public title: string,
    public content: string,
    public author: string
  ) {}

  clone() {
    // Retorna uma cópia nova com os mesmos dados
    return new TextDocument(this.title, this.content, this.author);
  }

  display(): void {
    console.log(`📄 ${this.title} (por ${this.author})`);
    console.log(this.content);
  }
}

// Documento original
const original = new TextDocument(
  "Contrato",
  "Conteúdo do contrato aqui...",
  "Alice"
);
original.display();

// Clonando o documento
const copia = original.clone();
copia.title = "Contrato - Versão B";
copia.author = "Bob";

console.log("\n--- Documento Clonado ---");
copia.display();

export * as PrototypeExample1 from "./PrototypeExample1";

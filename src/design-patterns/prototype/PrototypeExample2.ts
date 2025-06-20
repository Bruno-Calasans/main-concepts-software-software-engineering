// Prototype - exemplo 2
// Clonando objetos complexos com objetos aninhados

interface DocumentPrototype {
  clone(): DocumentPrototype;
  display(): void;
}

// Classe para metadados
class Metadata {
  constructor(public author: string, public createdAt: Date) {}

  clone(): Metadata {
    // Cria uma nova instância com os mesmos dados, nova referência
    return new Metadata(this.author, new Date(this.createdAt.getTime()));
  }
}

// Classe com objeto aninhado (Metadata)
class ComplexDocument implements DocumentPrototype {
  constructor(
    public title: string,
    public content: string,
    public metadata: Metadata
  ) {}

  clone(): DocumentPrototype {
    // Clonagem profunda: clona o metadata também
    return new ComplexDocument(this.title, this.content, this.metadata.clone());
  }

  display(): void {
    console.log(`📄 ${this.title} (por ${this.metadata.author})`);
    console.log(`Criado em: ${this.metadata.createdAt.toISOString()}`);
    console.log(this.content);
  }
}

// Exemplo de uso
const originalMeta = new Metadata("Alice", new Date("2024-01-01"));
const originalDoc = new ComplexDocument(
  "Relatório",
  "Conteúdo do relatório...",
  originalMeta
);

const cloneDoc = originalDoc.clone() as ComplexDocument;
cloneDoc.title = "Relatório - Cópia";
cloneDoc.metadata.author = "Bob"; // Modifica só o clone, não o original

console.log("Original:");
originalDoc.display();

console.log("\nClone:");
cloneDoc.display();

export * as PrototypeExample2 from "./PrototypeExample2";

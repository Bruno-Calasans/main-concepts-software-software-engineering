// Padrão builder - exemplo 1

// O padrão Builder é um padrão de design que permite a construção de objetos complexos passo a passo. Ele é especialmente útil quando um objeto precisa ser criado com muitos parâmetros, alguns dos quais podem ser opcionais. O padrão Builder ajuda a evitar construtores longos e difíceis de ler, tornando o código mais legível e fácil de manter.

// Por que ussar:
// - Melhora a legibilidade do código, já que estamos utilizando métodos fáceis de entender para construir o objeto.
// - Facilita a criação de objetos complexos, principalmente quando há muitos parâmetros opcionais.
// - Permite a criação de objetos imutáveis, já que o objeto final é construído apenas uma vez e não pode ser modificado posteriormente.

// Builder para validar strings
class StringValidatorBuilder {
  isValid = true;
  errors: string[] = [];

  constructor(public value: any) {}

  static create(value: any) {
    return new StringValidatorBuilder(value);
  }

  string() {
    if (typeof this.value !== "string") {
      this.isValid = false;
      this.errors.push("Value must be a string");
    }
    return this;
  }

  lenght(expectedLength: number) {
    if (this.value.length !== expectedLength) {
      this.isValid = false;
      this.errors.push(`Value must have length ${expectedLength}`);
    }
    return this;
  }

  result() {
    return {
      isValid: this.isValid,
      errors: this.errors,
    };
  }
}

// Exemplo de uso do StringValidatorBuilder
console.log(
  StringValidatorBuilder.create("carlos").string().lenght(5).result()
);

console.log(StringValidatorBuilder.create(23121).string().result());

export * as BuilderExample1 from "./BuilderExample1.js";

// Builder Pattern - Exemplo 2
// Criação de um objeto com muitos parâmetros

class UserProfileBuilder {
  private name: string;
  private age?: number;
  private address?: string;
  private phone?: string;
  private job?: string;

  constructor(name: string) {
    this.name = name;
  }

  setAge(age: number): this {
    this.age = age;
    return this;
  }

  setAddress(address: string): this {
    this.address = address;
    return this;
  }

  setPhone(phone: string): this {
    this.phone = phone;
    return this;
  }

  setJob(job: string): this {
    this.job = job;
    return this;
  }

  build(): UserProfile {
    return new UserProfile(this);
  }

  // Getters usados pela classe UserProfile
  getName(): string {
    return this.name;
  }
  getAge(): number | undefined {
    return this.age;
  }
  getAddress(): string | undefined {
    return this.address;
  }
  getPhone(): string | undefined {
    return this.phone;
  }
  getJob(): string | undefined {
    return this.job;
  }
}

class UserProfile {
  readonly name: string;
  readonly age?: number;
  readonly address?: string;
  readonly phone?: string;
  readonly job?: string;

  constructor(builder: UserProfileBuilder) {
    this.name = builder.getName();
    this.age = builder.getAge();
    this.address = builder.getAddress();
    this.phone = builder.getPhone();
    this.job = builder.getJob();
  }

  describe(): void {
    console.log(`Perfil de ${this.name}:`);
    if (this.age) console.log(`- Idade: ${this.age}`);
    if (this.address) console.log(`- Endereço: ${this.address}`);
    if (this.phone) console.log(`- Telefone: ${this.phone}`);
    if (this.job) console.log(`- Profissão: ${this.job}`);
  }
}

const user = new UserProfileBuilder("Bruno")
  .setAge(28)
  .setJob("Desenvolvedor")
  .setAddress("Rua Exemplo, 123")
  .setPhone("1234-5678")
  .build();

user.describe();

export * as BuilderExample2 from "./BuilderExample2";

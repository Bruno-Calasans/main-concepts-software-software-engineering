// Princípio da Segregação de Interface (Interface Segregation Principle - ISP) - implementação incorreta
// O ISP afirma que uma classe não deve ser forçada a implementar métodos que não utiliza.

//  Interface genérica que define métodos que não são utilizados por todas as classes
interface Worker {
  work(): void;
  attendMeeting(): void;
  fileReport(): void;
}

class Dev implements Worker {
  work(): void {
    console.log("Writing code...");
  }

  // Implemetando um método que não será utilizado
  attendMeeting(): void {
    throw new Error("Developers should not attend meetings.");
  }

  fileReport(): void {
    console.log("Filing report...");
  }
}

class Manager implements Worker {
  work(): void {
    console.log("Managing team...");
  }

  attendMeeting(): void {
    console.log("Attending meeting...");
  }

  // Implemetando um método que não será utilizado
  fileReport(): void {
    throw new Error("Managers should not file reports.");
  }
}

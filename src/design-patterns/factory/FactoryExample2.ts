// Factory pattern - exemplo 2
// Com registros de tipos de notificadores dinamico
// Não fere o princípio Open/Closed, pois permite adicionar novos notificadores sem modificar o código existente.

interface Notifier {
  send(message: string): void;
}

class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`📧 E-mail enviado: ${message}`);
  }
}

class SMSNotifier implements Notifier {
  send(message: string): void {
    console.log(`📱 SMS enviado: ${message}`);
  }
}

class PushNotifier implements Notifier {
  send(message: string): void {
    console.log(`🔔 Notificação push enviada: ${message}`);
  }
}

type NotifierConstructor = new () => Notifier;

class NotifierRegistryFactory {
  private static registry: Map<string, NotifierConstructor> = new Map();

  // Registra um tipo de notificador com uma chave
  static register(type: string, notifier: NotifierConstructor): void {
    this.registry.set(type, notifier);
  }

  // Cria uma instância com base na chave
  static create(type: string): Notifier {
    const notifier = this.registry.get(type);
    if (!notifier) {
      throw new Error(`Notificador "${type}" não está registrado.`);
    }
    return new notifier();
  }
}

// Exemplo de uso - registrando notificadores e criando instâncias
NotifierRegistryFactory.register("email", EmailNotifier);
NotifierRegistryFactory.register("sms", SMSNotifier);
NotifierRegistryFactory.register("push", PushNotifier);

// Exemplo de uso - criando notificadores
const smsNotifier = NotifierRegistryFactory.create("sms");
smsNotifier.send("Olá, você tem uma nova mensagem!");

const emailNotifier = NotifierRegistryFactory.create("email");
emailNotifier.send("Olá, você tem um novo e-mail!");

const pushNotifier = NotifierRegistryFactory.create("push");
pushNotifier.send("Olá, você tem uma nova notificação!");

const testNotifier = NotifierRegistryFactory.create("test");

export * as FactoryExample2 from "./FactoryExample2";

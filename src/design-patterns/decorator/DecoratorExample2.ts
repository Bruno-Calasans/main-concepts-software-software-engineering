// Decorator Pattern - Example 2:

// Interface dos notificadores
interface Notifier {
  send(message: string): void;
}

class BasicNotifier implements Notifier {
  send(message: string): void {
    console.log(`Enviando: ${message}`);
  }
}

// Decorator abstrato que implementa a interface Notifier
abstract class NotifierDecorator implements Notifier {
  constructor(public notifier: Notifier) {}

  send(message: string): void {
    this.notifier.send(message);
  }
}

class LoggingNotifier extends NotifierDecorator {
  send(message: string): void {
    this.notifier.send(message);
    console.log(`[LOG] Mensagem enviada: "${message}"`);
  }
}

class EmailNotifier extends NotifierDecorator {
  send(message: string): void {
    this.notifier.send(message);
    console.log(`(Email enviado: "${message}")`);
  }
}

class EncryptedNotifier extends NotifierDecorator {
  send(message: string): void {
    this.notifier.send(message);
    const encrypted = message.replace(/./g, "*");
    console.log(`(Mensagem criptografada enviada: "${encrypted}")`);
  }
}

// Exemplo de uso:
let notifier = new BasicNotifier();

notifier = new LoggingNotifier(notifier);

notifier = new EmailNotifier(notifier);

notifier = new EncryptedNotifier(notifier);

notifier.send("Teste de notificação com decoradores");

export * as DecoratorExample2 from "./DecoratorExample2";

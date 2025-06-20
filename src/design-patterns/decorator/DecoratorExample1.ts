// Decorator Pattern - Examplo 1:
// O padrão Decorator permite adicionar funcionalidades a objetos de forma dinâmica,

// Interface que os decoradores e mensagens devem implementar
interface Message {
  getContent(): string;
}

// Classes concretas que implementa a interface Message
class SimpleMessage implements Message {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }
}

class AsteriskDecorator implements Message {
  constructor(private message: Message) {}

  getContent(): string {
    return `*${this.message.getContent()}*`;
  }
}

class EmojiDecorator implements Message {
  constructor(private message: Message) {}

  getContent(): string {
    return `${this.message.getContent()} 😊`;
  }
}

// Exemplo de uso:
const message = new SimpleMessage("Hello, World!");
message.getContent(); // "Hello, World!"

const asteriskMessage = new AsteriskDecorator(message);
asteriskMessage.getContent(); // "*Hello, World!*"

const emojiMessage = new EmojiDecorator(asteriskMessage);
emojiMessage.getContent(); // "*Hello, World!* 😊"

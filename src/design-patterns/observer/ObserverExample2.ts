interface Observer {
  update(news: string): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(news: string): void;
}

// Classe principal
// Notifica os observadores quando uma nova notícia é publicada
class NewsAgency implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  publishNews(news: string): void {
    console.log(`🗞️ Nova notícia: ${news}`);
    this.notify(news);
  }

  notify(news: string): void {
    for (const observer of this.observers) {
      observer.update(news);
    }
  }
}

// Observers (usuários)
// Serão notificados sempre que uma nova notícia for publicada
class EmailSubscriber implements Observer {
  constructor(private email: string) {}

  update(news: string): void {
    console.log(`📧 Email para ${this.email}: ${news}`);
  }
}

class MobileAppSubscriber implements Observer {
  constructor(private username: string) {}

  update(news: string): void {
    console.log(`📱 Notificação no app de ${this.username}: ${news}`);
  }
}

// Exemplo de uso
const agency = new NewsAgency();

const user1 = new EmailSubscriber("maria@email.com");
const user2 = new MobileAppSubscriber("joao_app");

agency.subscribe(user1);
agency.subscribe(user2);

agency.publishNews("Eleições 2025: resultados oficiais divulgados!");
agency.publishNews("Novo recorde mundial de maratona é quebrado!");

export * as ObserverExample2 from "./ObserverExample2";

// Oboserver Pattern  - examplo 1

// Sistema de Observação de Carrinho de Compras

// // Quando usar:
// Quando você precisa notificar múltiplos objetos sobre mudanças em um objeto específico.
// Quando o objeto observado pode ter múltiplos observadores que precisam ser atualizados.

interface Observer {
  update(item: string): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(item: string): void;
}

// Classe que notifica os observers quando um item é adicionado ao carrinho de compras
class ShoppingCart implements Subject {
  private observers: Observer[] = [];
  private items: string[] = [];

  //   Adiciona um observer à lista de observadores
  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  // Remove um observer da lista de observadores
  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  addItem(item: string): void {
    console.log(`🛒 Item adicionado ao carrinho: ${item}`);
    this.items.push(item);
    this.notify(item);
  }

  notify(item: string): void {
    for (const observer of this.observers) {
      observer.update(item);
    }
  }
}

// Implementações de Observers, que serão notificados
class CartUI implements Observer {
  update(item: string): void {
    console.log(`🖼️ UI atualizada: "${item}" aparece no carrinho.`);
  }
}

class InventorySystem implements Observer {
  update(item: string): void {
    console.log(`🏭 Estoque atualizado: Reservando "${item}".`);
  }
}

// Exemplo de uso
const cart = new ShoppingCart();

const ui = new CartUI();
const inventory = new InventorySystem();

cart.subscribe(ui);
cart.subscribe(inventory);

cart.addItem("Notebook Gamer");
cart.addItem("Mouse sem fio");

export * as ObserverExample1 from "./ObserverExample1";

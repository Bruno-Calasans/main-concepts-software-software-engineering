// Princípio Aberto/Fechado (Open/Closed Principle) - SOLID

type Product = {
  name: string;
  type: string;
  price: number;
};

// Interface para as estratégias de desconto
interface DiscountEstrategy {
  calculateDiscount: (price: number) => number;
}

// Implementações concretas das estratégias de desconto
class EletronicEstrategy implements DiscountEstrategy {
  calculateDiscount(price: number): number {
    return price * 0.2; // 20% discount for electronics
  }
}

// Implementação de uma estratégia de desconto para alimentos
class FoodDiscount implements DiscountEstrategy {
  calculateDiscount(price: number): number {
    return price * 0.05; // 5% discount for food
  }
}

export class DiscountCalculator {
  discountEstrategies: { [key: string]: DiscountEstrategy } = {};

  //  Basta importar as classes de desconto que implementam a interface DiscountEstrategy para extendar a class Discount Calcultor
  constructor() {
    this.discountEstrategies["food"] = new FoodDiscount();
    this.discountEstrategies["eletronics"] = new EletronicEstrategy();
  }

  // O método calculateDiscount agora utiliza as estratégias de desconto registradas
  // Isso permite que novas estratégias sejam adicionadas sem modificar o código existente
  calculateDiscount({ type, price }: Product) {
    const discountStrategy = this.discountEstrategies[type];

    if (discountStrategy) {
      return discountStrategy.calculateDiscount(price);
    }

    return 0;
  }
}

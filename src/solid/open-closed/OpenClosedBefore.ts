// Princípio Aberto/Fechado (Open/Closed Principle)
// Uma classe deve ser aberta para extensão, mas fechada para modificação.
// Isso significa que devemos poder adicionar novas funcionalidades sem alterar o código existente.
type Product = {
  name: string;
  type: string;
  price: number;
};

export class DiscountCalculator {
  // Para extender a classe, é necessário modificar o código existente
  // se tivessemos um novo tipo de produto, precisaríamos alterar o método original
  // Isso viola o princípio aberto/fechado
  calculateDiscount({ type, price }: Product) {
    if (type === "eletronics") {
      return price * 0.2; // 20% discount for electronics
    }

    if (type === "clothing") {
      return price * 0.1; // 10% discount for clothing
    }

    if (type === "food") {
      return price * 0.05; // 5% discount for food
    }

    return 0; // No discount for other types
  }
}

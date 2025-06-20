// Strategy Pattern - Exemplo: Serviço de Entrega de Produtos
// Usado quando você tem várias maneiras de realizar uma tarefa e deseja escolher a implementação em tempo de execução.

// Interface que vai definir como cada estratégia de transporte deve calcular o custo
interface TransportStrategy {
  calculateCost(distanceInKm: number): number;
}

// Implementações concretas das estratégias de transporte
class CarTransporter implements TransportStrategy {
  calculateCost(distanceInKm: number): number {
    return distanceInKm * 0.5;
  }
}

class BikeTransporter implements TransportStrategy {
  calculateCost(distanceInKm: number): number {
    return distanceInKm * 0.2;
  }
}

class DroneTransporter implements TransportStrategy {
  calculateCost(distanceInKm: number): number {
    return distanceInKm * 1.0;
  }
}

// Contexto que utiliza as estratégias de transporte
class DeliveryService {
  constructor(public strategy: TransportStrategy) {
    this.strategy = strategy;
  }

  estimateDeliveryTime(distanceInKm: number): number {
    return this.strategy.calculateCost(distanceInKm);
  }
}

// Exemplo de uso
const byCar = new DeliveryService(new CarTransporter());
const byBike = new DeliveryService(new BikeTransporter());
const byDrone = new DeliveryService(new DroneTransporter());

byCar.estimateDeliveryTime(10); // 5.0
byBike.estimateDeliveryTime(10); // 2.0
byDrone.estimateDeliveryTime(10); // 10.0

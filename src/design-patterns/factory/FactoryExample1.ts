// Factory pattern - exemplo 1

// Quando usar:
// Abstrair a criação de objetos complexos ou quando o tipo de objeto a ser criado não é conhecido até o tempo de execução.s
// Centraliza a lógica de criação de objetos em um único local.
// Fácil de adicionar novos tipos de objetios sem modificar o código existente.

interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive(): void {
    console.log("Driving a car");
  }
}

class Bike implements Vehicle {
  drive(): void {
    console.log("Riding a bike");
  }
}

class Truck implements Vehicle {
  drive(): void {
    console.log("Driving a truck");
  }
}

class VehicleFactory {
  static create(type: string) {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      case "truck":
        return new Truck();
      default:
        throw new Error("Unknown vehicle type");
    }
  }
}

const vehicle1 = VehicleFactory.create("car");
vehicle1.drive(); // Output: Driving a car

const vehicle2 = VehicleFactory.create("bike");
vehicle2.drive(); // Output: Riding a bike

const vehicle3 = VehicleFactory.create("truck");
vehicle3.drive(); // Output: Driving a truck

export * as FactoryExample1 from "./FactoryExample1";

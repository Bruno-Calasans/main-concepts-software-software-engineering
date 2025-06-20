// Adpater Pattern Example 1
// Esse padrão é útil quando você quer integrar uma classe com uma interface que ela não implementa diretamente, permitindo que duas interfaces incompatíveis trabalhem juntas.

// Interface esperada: neste caso, adaptamos um plugue quadrado para uma conexão redonda.
interface ConnectRound {
  connectRound(): void;
}

// Classe que implementa um método não compatível com a interface esperada
class SquarePlug {
  connectSquare() {
    console.log("Square plug connected.");
  }
}

// Adaptador que permite que o plugue quadrado se conecte a uma interface redonda
// Ao criar uma classe que implemente a interface ConnectRound
class SquareToRoundAdapter implements ConnectRound {
  constructor(public squarePlug: SquarePlug) {}

  connectRound(): void {
    console.log("Adapted to round connection.");
    this.squarePlug.connectSquare();
  }
}

// Uso do Adapter
const squarePlug = new SquarePlug();

// Conectando o plugue quadrado através do adaptador
const adapter = new SquareToRoundAdapter(squarePlug);
adapter.connectRound();

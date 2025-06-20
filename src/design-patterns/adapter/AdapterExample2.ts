// Exemplo 2
// Transformando um banco de dados legado para uma interface esperada

// Interface esperada
interface DataBase {
  connect(): void;
  disconnect(): void;
}

// Classe legada com outra interface
class LegacyMongoDB {
  openConnection(): void {
    console.log("Conectado ao MongoDB (legado)");
  }

  closeConnection(): void {
    console.log("Desconectado do MongoDB (legado)");
  }
}

// Adapter para transformar a classe com a interface esperada
class MongoDBAdapter implements DataBase {
  private legacyMongo: LegacyMongoDB;

  constructor(legacyMongo: LegacyMongoDB) {
    this.legacyMongo = legacyMongo;
  }

  connect(): void {
    this.legacyMongo.openConnection();
  }

  disconnect(): void {
    this.legacyMongo.closeConnection();
  }
}

// Usando a classe adaptada
const legacyMongo = new LegacyMongoDB();
const adaptedDatabase = new MongoDBAdapter(legacyMongo);

// Conectando e desconectando usando a interface esperada
adaptedDatabase.connect();
adaptedDatabase.disconnect();

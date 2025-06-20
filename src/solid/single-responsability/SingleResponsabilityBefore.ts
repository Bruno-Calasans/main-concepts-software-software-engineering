type User = {
  email: string;
  name: string;
};

// Classe com várias responsabilidades
// Cria usuário
// Persiste usuário no banco de dados
// Envia email de boas-vindas
export class UserService {
  createUser(user: User): void {
    console.log(`User ${user.name} created with email ${user.email}`);
    this.saveUserToDatabase(user);
  }

  saveUserToDatabase(user: User): void {
    console.log(`User ${user.name} saved with email ${user.email}`);
  }

  sendWelcomeEmail(user: User): void {
    console.log(`Welcome email sent to ${user.email}`);
  }
}

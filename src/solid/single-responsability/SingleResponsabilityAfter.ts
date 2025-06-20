// Princípio da Responsabilidade Única (Single Responsibility Principle - SRP)
// Uma classe deve ter apenas uma razão para mudar, ou seja, deve ter apenas uma responsabilidade.
// No exemplo abaixo, a classe UserService é responsável apenas por criar usuário

type User = {
  email: string;
  name: string;
};

// Serviço de email para envio de mensagens
class EmailService {
  sendEmail(email: string, subject: string, body: string): void {
    console.log(
      `Email sent to ${email} with subject "${subject}" and body "${body}"`
    );
  }

  sendWelcomeEmail(email: string): void {
    console.log(`Welcome email sent to ${email}`);
  }
}

// Repositório para persistência de dados
class UserRepository {
  saveUserToDatabase(user: User): void {
    console.log(`User ${user.name} saved with email ${user.email}`);
  }
}

// Serviço de usuário que utiliza o EmailService e UserRepository
export class UserService {
  emailService = new EmailService();
  userRepository = new UserRepository();

  createUser(user: User): void {
    this.userRepository.saveUserToDatabase(user);
    this.emailService.sendWelcomeEmail(user.email);
    console.log(`User ${user.name} created with email ${user.email}`);
  }
}

// Princípio da Inversão de Dependência (Dependency Inversion Principle - DIP)
// Implementação Correta

// O DIP sugere que módulos de alto nível não devem depender de módulos de baixo nível, mas ambos devem depender de abstrações. Além disso, as abstrações não devem depender de detalhes, mas os detalhes devem depender de abstrações.

// Isso significa que devemos evitar dependências diretas entre classes concretas e, em vez disso, usar interfaces ou classes abstratas para definir contratos que as classes concretas devem seguir.

//Exemplo de implementação correta do DIP:
interface NotificationService {
  sendNotification(to: string, subject: string, body: string): void;
}

// Implementação de um serviço de notificação específico, como EmailService, que implementa a interface NotificationService.
// Isso permite que o OrderProcessor dependa da abstração NotificationService, em vez de uma implementação concreta como EmailService.
class EmailService implements NotificationService {
  sendNotification(to: string, subject: string, body: string): void {
    console.log(
      `Sending email to ${to} with subject "${subject}" and body "${body}"`
    );
  }
}

class OrderProcessor {
  private notificationService = new EmailService();

  processOrder(orderId: string): void {
    console.log(`Processing order ${orderId}`);
    // Aqui, o OrderProcessor não depende diretamente do EmailService, mas sim de uma abstração NotificationService.
    this.notificationService.sendNotification(
      "test@gmail.com",
      "Order Confirmation",
      `Your order ${orderId} has been processed.`
    );
  }
}

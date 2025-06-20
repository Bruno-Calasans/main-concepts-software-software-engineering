// Princípio da Inversão de Dependência (Dependency Inversion Principle - DIP)

// O DIP sugere que módulos de alto nível não devem depender de módulos de baixo nível, mas ambos devem depender de abstrações. Além disso, as abstrações não devem depender de detalhes, mas os detalhes devem depender de abstrações.

// Isso significa que devemos evitar dependências diretas entre classes concretas e, em vez disso, usar interfaces ou classes abstratas para definir contratos que as classes concretas devem seguir.

class EmailService {
  sendEmail(to: string, subject: string, body: string): void {
    console.log(
      `Sending email to ${to} with subject "${subject}" and body "${body}"`
    );
  }
}

class OrderProcessor {
  emailService = new EmailService();

  processOrder(orderId: string): void {
    console.log(`Processing order ${orderId}`);
    // Aqui, o OrderProcessor depende diretamente do EmailService, o que viola o DIP.
    this.emailService.sendEmail(
      "test@gmail.com",
      "Order Confirmation",
      `Your order ${orderId} has been processed.`
    );
  }
}

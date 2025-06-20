// Strategy Pattern - Exemplo: Autenticação de Usuário

// Interface da Estratégia
interface AuthStrategy {
  authenticate(user: string, credential: string): boolean;
}

// Classes conretas que implementam essa estratégia
class PasswordAuth implements AuthStrategy {
  authenticate(user: string, password: string): boolean {
    console.log(`Autenticando ${user} por senha...`);
    return password === "senha123"; // Simulação
  }
}

class BiometricAuth implements AuthStrategy {
  authenticate(user: string, fingerprintHash: string): boolean {
    console.log(`Autenticando ${user} por biometria...`);
    return fingerprintHash === "fingerprint-valid"; // Simulação
  }
}

class SocialAuth implements AuthStrategy {
  authenticate(user: string, token: string): boolean {
    console.log(`Autenticando ${user} via social login...`);
    return token === "social-token-ok"; // Simulação
  }
}

// Contexto que usa a estratégia
class AuthContext {
  private strategy: AuthStrategy;

  constructor(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  login(user: string, credential: string): void {
    const success = this.strategy.authenticate(user, credential);
    if (success) {
      console.log("✅ Acesso permitido");
    } else {
      console.log("❌ Acesso negado");
    }
  }
}

// Exemplo de uso
const byPassAuth = new AuthContext(new PasswordAuth());
const bySocialAuth = new AuthContext(new SocialAuth());
const byBiometricAuth = new AuthContext(new BiometricAuth());

byPassAuth.login("user1", "senha123"); // ✅ Acesso permitido
byPassAuth.login("user1", "senhaErrada"); // ❌ Acesso negado

bySocialAuth.login("user2", "social-token-ok"); // ✅ Acesso permitido
bySocialAuth.login("user2", "social-token-errado"); // ❌ Acesso negado

byBiometricAuth.login("user3", "fingerprint-valid"); // ✅ Acesso permitido
byBiometricAuth.login("user3", "fingerprint-invalido"); // ❌ Acesso negado

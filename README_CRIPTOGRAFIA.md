# Criptografia de Senhas - bcryptjs

## Implementação

A biblioteca `bcryptjs` foi instalada e implementada para criptografar as senhas dos usuários de forma segura.

### Funcionalidades Implementadas

1. **Criptografia de Senha**: Todas as senhas são criptografadas com salt de 10 rounds antes de serem salvas no banco de dados
2. **Verificação de Senha**: Método para comparar senhas em texto plano com senhas criptografadas
3. **Autenticação**: Endpoint de login que verifica credenciais de forma segura

### Endpoints Disponíveis

#### 1. Criar Usuário (POST)
```
POST /gula/user/create-user/
```
**Body:**
```json
{
    "user": "nomeusuario",
    "password": "senha123"
}
```
**Resposta:**
```json
{
    "id_user": "uuid-gerado",
    "user": "nomeusuario",
    "password": "senha-criptografada"
}
```

#### 2. Login (POST)
```
POST /gula/user/login/
```
**Body:**
```json
{
    "user": "nomeusuario",
    "password": "senha123"
}
```
**Resposta de Sucesso:**
```json
{
    "message": "Login realizado com sucesso",
    "user": {
        "id": "uuid-do-usuario",
        "username": "nomeusuario"
    }
}
```
**Resposta de Erro:**
```json
{
    "error": "Credenciais inválidas"
}
```

#### 3. Atualizar Usuário (PUT)
```
PUT /gula/user/alterar-user/:id
```
**Body:**
```json
{
    "user": "novo-nome",
    "password": "nova-senha"
}
```
*Nota: Se uma nova senha for fornecida, ela será automaticamente criptografada*

### Métodos do UserService

- `hashPassword(password: string)`: Criptografa uma senha
- `comparePassword(password: string, hashedPassword: string)`: Compara senha em texto plano com senha criptografada
- `authenticateUser(username: string, password: string)`: Autentica um usuário

### Segurança

- **Salt Rounds**: 10 rounds de salt para maior segurança
- **Hash**: Senhas são sempre armazenadas como hash, nunca em texto plano
- **Comparação Segura**: Uso de `bcrypt.compare()` para evitar timing attacks

### Exemplo de Uso

```typescript
// Criar usuário (senha será criptografada automaticamente)
const novoUsuario = {
    user: "joao123",
    password: "minhasenha123"
};

// Login (verificação automática da senha)
const credenciais = {
    user: "joao123",
    password: "minhasenha123"
};
```

### Dependências Instaladas

- `bcryptjs`: Biblioteca de criptografia
- `@types/bcryptjs`: Tipos TypeScript para bcryptjs

'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from './services/auth';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await authService.login(email, password, rememberMe);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotPasswordMessage('');
    setIsLoading(true);

    try {
      const response = await authService.forgotPassword(forgotPasswordEmail);
      setForgotPasswordMessage(response.message);
      setShowForgotPassword(false);
    } catch (err: any) {
      setForgotPasswordMessage(err.response?.data?.message || 'Erro ao processar a solicitação.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container-menu">
      {!showForgotPassword ? (
        <form onSubmit={handleLogin}>
          <h1>GULA</h1>
          <p>Gestão Unificada de Logística Alimentar</p>
          <div className="input-box">
            <input 
              placeholder="Email" 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input 
              placeholder="Senha" 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="forgot-box">
            <label>
              <input 
                type="checkbox" 
                id="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              /> 
              Lembrar meu login
            </label>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setShowForgotPassword(true);
            }}>Esqueci a senha</a>
          </div>
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          <input 
            type="submit" 
            value={isLoading ? "Entrando..." : "Login"} 
            id="submit" 
            className="login"
            disabled={isLoading}
          />
          <div className="register-box">
            <label><a href="/register">Não possui uma conta? Cadastre-se</a></label>
          </div>
        </form>
      ) : (
        <form onSubmit={handleForgotPassword}>
          <h1>GULA</h1>
          <p>Recuperação de Senha</p>
          <div className="input-box">
            <input 
              placeholder="Email" 
              type="email" 
              required
              value={forgotPasswordEmail}
              onChange={(e) => setForgotPasswordEmail(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>
          {forgotPasswordMessage && (
            <p style={{ color: forgotPasswordMessage.includes('Erro') ? 'red' : 'green', marginBottom: '10px' }}>
              {forgotPasswordMessage}
            </p>
          )}
          <input 
            type="submit" 
            value={isLoading ? "Enviando..." : "Enviar"} 
            id="submit" 
            className="login"
            disabled={isLoading}
          />
          <div className="register-box">
            <label>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setShowForgotPassword(false);
              }}>Voltar para o login</a>
            </label>
          </div>
        </form>
      )}
    </main>
  );
}

'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../services/auth';
import Link from 'next/link';
import './globals.css';

type LoginFormState = {
  user: string;
  password: string;
  rememberMe: boolean;
  error: string;
  isLoading: boolean;
  showForgotPassword: boolean;
  forgotPasswordEmail: string;
  forgotPasswordMessage: string;
};

export default function Login() {
  const router = useRouter();
  const [formState, setFormState] = useState<LoginFormState>({
    user: '',
    password: '',
    rememberMe: false,
    error: '',
    isLoading: false,
    showForgotPassword: false,
    forgotPasswordEmail: '',
    forgotPasswordMessage: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, error: '', isLoading: true }));
    try {
      await authService.login(formState.user, formState.password);
      router.push('/home');
    } catch (err: any) {
      setFormState(prev => ({
        ...prev,
        error: err.response?.data?.message || 'Erro ao fazer login. Tente novamente.'
      }));
    } finally {
      setFormState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, forgotPasswordMessage: '', isLoading: true }));
    try {
      const response = await authService.forgotPassword(formState.forgotPasswordEmail);
      setFormState(prev => ({
        ...prev,
        forgotPasswordMessage: response.message,
        showForgotPassword: false
      }));
    } catch (err: any) {
      setFormState(prev => ({
        ...prev,
        forgotPasswordMessage: err.response?.data?.message || 'Erro ao processar a solicitação.'
      }));
    } finally {
      setFormState(prev => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <main className="container-menu">
      {!formState.showForgotPassword ? (
        <form onSubmit={handleLogin}>
          <h1>GULA</h1>
          <p>Gestão Unificada de Logística Alimentar</p>
          <div className="input-box">
            <input
              placeholder="Usuário"
              type="text"
              required
              value={formState.user}
              onChange={(e) => setFormState(prev => ({ ...prev, user: e.target.value }))}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              placeholder="Senha"
              type="password"
              required
              value={formState.password}
              onChange={(e) => setFormState(prev => ({ ...prev, password: e.target.value }))}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="forgot-box">
            <label>
              <input
                type="checkbox"
                id="checkbox"
                checked={formState.rememberMe}
                onChange={(e) => setFormState(prev => ({ ...prev, rememberMe: e.target.checked }))}
              />
              Lembrar meu login
            </label>
            <Link href="#" onClick={(e) => {
              e.preventDefault();
              setFormState(prev => ({ ...prev, showForgotPassword: true }));
            }}>
              Esqueci a senha
            </Link>
          </div>
          {formState.error && <p style={{ color: 'red', marginBottom: '10px' }}>{formState.error}</p>}
          <input
            type="submit"
            value={formState.isLoading ? "Entrando..." : "Login"}
            id="submit"
            className="login"
            disabled={formState.isLoading}
          />
          <div className="register-box">
            <label><Link href="/register">Não possui uma conta? Cadastre-se</Link></label>
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
              value={formState.forgotPasswordEmail}
              onChange={(e) => setFormState(prev => ({ ...prev, forgotPasswordEmail: e.target.value }))}
            />
            <i className="bx bxs-user"></i>
          </div>
          {formState.forgotPasswordMessage && (
            <p style={{
              color: formState.forgotPasswordMessage.includes('Erro') ? 'red' : 'green',
              marginBottom: '10px'
            }}>
              {formState.forgotPasswordMessage}
            </p>
          )}
          <input
            type="submit"
            value={formState.isLoading ? "Enviando..." : "Enviar"}
            id="submit"
            className="login"
            disabled={formState.isLoading}
          />
          <div className="register-box">
            <label>
              <Link href="#" onClick={(e) => {
                e.preventDefault();
                setFormState(prev => ({ ...prev, showForgotPassword: false }));
              }}>
                Voltar para o login
              </Link>
            </label>
          </div>
        </form>
      )}
    </main>
  );
}

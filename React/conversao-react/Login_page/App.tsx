import React from 'react';
import './css/style.css'
import './App.css';

function App() {
  return (
    <div className='body'>
    <main className="container-menu">
        <form>
            <h1>GULA</h1>
            <p>Gestão Unificada de Logística Alimentar</p>
            <div className="input-box">
                <input placeholder="Email" type="email" required/>
                <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
                <input placeholder="Senha" type="password" required/>
                <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="forgot-box">
                <label><input type="checkbox" id="checkbox"/> Lembrar meu login</label>
                <a href="#">Esqueci a senha</a> 
            </div>
            <input type="submit" value="Login" id="submit" className="login"/>
            <div className="register-box">
                <label><a href="#">Não possui uma conta? Cadastre-se</a></label>
            </div>
        </form>
    </main>
  </div>
  );
}

export default App;

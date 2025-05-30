'use client'
import React, { useState } from "react"
// import 'bootstrap-icons/font/bootstrap-icons.css';
import './notificacao.css';
import Navbar from "../components/navbar";
export default function Notificacao() {

return (
    <>
      <div className="container">
        <Navbar />
    <div className="notificacoes-container">
      <header className="notificacoes-header-topo">
        {/* <h1 className="notificacoes-titulo">Notificações</h1> */}
        <div className="acoes-topo">
          <button className="marcar-tudo">
            <i className="bi bi-eye"></i> Marcar Todas como lida
          </button>
          <button className="busca-avancada">
            <i className="bi bi-search"></i> Busca Avançada
          </button>
          <button className="preferencias">
            <i className="fas fa-cog"></i> Preferências de Recebimento
          </button>
        </div>
      </header>

      <main className="notificacoes-principal">
        <div className="notificacoes-esquerda">
          <div className="paginacao-container">
            <div className="total-itens">Total de 4 itens</div>
            <div className="links-paginacao">
              <a href="#">‹‹ anterior</a>
              <a className="ativo" href="#">1</a>
              <a href="#">próximo ››</a>
            </div>
          </div>

          <ul className="lista-notificacoes">
            <li className="notificacao">
              <span className="data">23 de Abril de 2025 às 09:49</span>
              <div className="notificacao-esquerda">
                <i className="bi bi-eye"></i>
                <div className="texto">Comunicador: você tem uma nova mensagem</div>
              </div>
              <div className="notificacao-direita">
                <button>
                  <i className="fas fa-cog"></i>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </li>
            <li className="notificacao">
              <span className="data">21 de Abril de 2025 às 17:02</span>
              <div className="notificacao-esquerda">
                <i className="bi bi-bell-fill"></i>
                <div className="texto">Comunicador: você tem uma nova mensagem</div>
              </div>
              <div className="notificacao-direita">
                <button>
                  <i className="fas fa-cog"></i>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </li>
            <li className="notificacao">
              <span className="data">21 de Abril de 2025 às 15:29</span>
              <div className="notificacao-esquerda">
                <i className="bi bi-bell-fill"></i>
                <div className="texto">Comunicador: você tem uma nova mensagem</div>
              </div>
              <div className="notificacao-direita">
                <button>
                  <i className="fas fa-cog"></i>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </li>
            <li className="notificacao">
              <span className="data">17 de Abril de 2025 às 14:54</span>
              <div className="notificacao-esquerda">
                <i className="fas fa-bell"></i>
                <div className="texto">Comunicador: você tem uma nova mensagem</div>
              </div>
              <div className="notificacao-direita">
                <button>
                  <i className="fas fa-cog"></i>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="notificacao-detalhe notificacao-critica">
          <h3>
            <span className="emoji">🍽️</span> ALERTA: DESPERDÍCIO ELEVADO FOI
            DETECTADO!
          </h3>

          <p>
            <i className="fas fa-info-circle"></i> O sistema identificou um volume
            anormal de alimentos descartados durante a produção das refeições.
          </p>

          <ul>
            <li>
              <i className="fas fa-drumstick-bite"></i>
              <strong>Alimento mais desperdiçado:</strong> Arroz
            </li>
            <li>
              <i className="fas fa-balance-scale"></i>
              <strong>Quantidade estimada:</strong> 14,3 kg
            </li>
            <li>
              <i className="fas fa-coins"></i>
              <strong>Impacto financeiro:</strong> R$ 175,60
            </li>
          </ul>

          <h4>Ações Recomendadas:</h4>
          <ul>
            <li>
              <i className="fas fa-chart-line"></i> Ajustar porção de arroz servida
            </li>
            <li>
              <i className="fas fa-leaf"></i> Reavaliar o cardápio de quinta-feira
            </li>
          </ul>

          <p>
            <i className="fas fa-calendar-day"></i>
            <strong>Análise realizada em:</strong> 08/05/2025 - 12h30
          </p>
          <p>
            <a href="#" className="link-relatorio">📊 Ver relatório completo</a>
          </p>
        </div>
      </main>
    </div>
</div>
    </>
)
}


'use client'
import React, { useState } from "react"
import Image from "next/image"
import Salto from "../../public/salto.png"
import Link from "next/link"
import './home.css';

export default function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">
          <Link href="/home">GULA</Link>
        </div>
        <ul className="menu">
          <li className={activeMenuItem === 'dashboard' ? 'active' : ''}>
            <Link href="#" onClick={() => setActiveMenuItem('dashboard')}>
              <i className="bx bx-grid-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={activeMenuItem === 'pedidos' ? 'active' : ''}>
            <Link href="#" onClick={() => setActiveMenuItem('pedidos')}>
              <i className="bx bx-shopping-bag"></i>
              <span>Pedidos</span>
            </Link>
          </li>
          <li className={activeMenuItem === 'cardapio' ? 'active' : ''}>
            <Link href="#" onClick={() => setActiveMenuItem('cardapio')}>
              <i className="bx bx-food-menu"></i>
              <span>Cardápio</span>
            </Link>
          </li>
          <li className={activeMenuItem === 'sugestoes' ? 'active' : ''}>
            <Link href="#" onClick={() => setActiveMenuItem('sugestoes')}>
              <i className="bx bx-message-dots"></i>
              <span>Sugestões</span>
            </Link>
          </li>
          <li className={activeMenuItem === 'configuracoes' ? 'active' : ''}>
            <Link href="#" onClick={() => setActiveMenuItem('configuracoes')}>
              <i className="bx bx-cog"></i>
              <span>Configurações</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="logout">
              <i className="bx bx-log-out" style={{ color: '#D32F2F' }}></i>
              <span style={{ color: '#D32F2F' }}>Logout</span>
            </Link>
          </li>
        </ul>
      </aside>

      <main className="content">
        <header>
          <div className="search-container">
            <input type="text" placeholder="Pesquisar..." />
            <button type="button">
              <i className="bx bx-search"></i>
            </button>
          </div>
          <div className="header-right">
          <button
  type="button"
  className="theme-toggle"
  onClick={() => setIsDarkMode(!isDarkMode)}
>
  <i className={isDarkMode ? "bx bx-sun" : "bx bx-moon"}></i>
</button>
            <div className="profile">
              <Image src={Salto} alt="Profile" width={32} height={32} />
            </div>
          </div>
        </header>

        <section className="dashboard">
          <h1>Dashboard</h1>

          <div className="stats-grid">
            <div className="stat-card">
              <i className="bx bx-calendar"></i>
              <div className="stat-info">
                <h3>1.000.000</h3>
                <p>Dias trabalhados</p>
              </div>
            </div>
            <div className="stat-card">
              <i className="bx bx-user"></i>
              <div className="stat-info">
                <h3>1</h3>
                <p>Pessoa comeu no refeitório</p>
              </div>
            </div>
            <div className="stat-card">
              <i className="bx bx-line-chart"></i>
              <div className="stat-info">
                <h3>100%</h3>
                <p>de aproveitamento da comida</p>
              </div>
            </div>
            <div className="stat-card">
              <i className="bx bx-dollar"></i>
              <div className="stat-info">
                <h3>R$ 50.000</h3>
                <p>Economia mensal</p>
              </div>
            </div>
          </div>

          <div className="recent-orders">
            <div className="section-header">
              <i className="bx bx-receipt"></i>
              <h2>Pedidos Recentes</h2>
              <i className="bx bx-filter"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Usuário</th>
                  <th>Data do Pedido</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="user-info">
                      <Image src={Salto} alt="User" width={40} height={40} />
                      <span>João Silva</span>
                    </div>
                  </td>
                  <td>01/04/2024</td>
                  <td><span className="status completed">Concluído</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="user-info">
                      <Image src={Salto} alt="User" width={40} height={40} />
                      <span>Maria Santos</span>
                    </div>
                  </td>
                  <td>01/04/2024</td>
                  <td><span className="status pending">Pendente</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
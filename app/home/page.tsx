'use client'
import React, { useState } from "react"
import Image from "next/image"
import Salto from "../../public/salto.png"
import Link from "next/link"
import 'bootstrap-icons/font/bootstrap-icons.css';
import './home.css';
import Navbar from "../components/navbar"
export default function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
          <Navbar />
                  <div className="container">

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
  </>);
}
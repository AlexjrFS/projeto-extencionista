'use client'
import Link from "next/link"
import React, { useState } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
      const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
    
    return(<>
        <div className="container">
      <aside className="sidebar">
        <div className="logo">
          <Link href="/home">GULA</Link>
        </div>
        <ul className="menu">
          <li className={activeMenuItem === 'dashboard' ? 'active' : ''}>
            <Link href="/home" onClick={() => setActiveMenuItem('dashboard')}>
              <i className="bx bx-grid-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={activeMenuItem === 'estoque' ? 'active' : ''}>
            <Link href="#" onClick={() => setActiveMenuItem('estoque')}>
              <i className="bx bx-shopping-bag"></i>
              <span>Estoque</span>
            </Link>
          </li>
          <li className={activeMenuItem === 'graficos' ? 'active' : ''}>
            <Link href="#" onClick={() => setActiveMenuItem('graficos')}>
              <i className="bi bi-graph-up-arrow"></i>
              <span>Gráficos</span>
            </Link>
          </li>
          <li className={activeMenuItem === 'notificacoes' ? 'active' : ''}>
            <Link href="#" onClick={() => setActiveMenuItem('notificacoes')}>
              <i className="bx bx-message-dots"></i>
              <span>Notificações</span>
            </Link>
          </li>
          <li className={activeMenuItem === 'sugestoes' ? 'active' : ''}>
            <Link href="#" onClick={() => setActiveMenuItem('sugestoes')}>
              <i className="bi bi-question-circle"></i>
              <span>Ajuda</span>
            </Link>
          </li>
          <li className={activeMenuItem === 'configuracoes' ? 'active' : ''}>
            <Link href="#" onClick={() => setActiveMenuItem('configuracoes')}>
              <i className="bx bx-cog"></i>
              <span>Configurações</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="logout">
              <i className="bx bx-log-out" style={{ color: '#D32F2F' }}></i>
              <span style={{ color: '#D32F2F' }}>Logout</span>
            </Link>
          </li>
        </ul>
      </aside>
      </div>
   </> )
}
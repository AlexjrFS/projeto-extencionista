'use client'
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { authService } from '../../services/auth'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './navbar.css'

export default function Navbar() {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    authService.logout();
    router.push('/');
  };

  // Adiciona um listener para fechar o sidebar quando clicar fora dele em telas móveis
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('.sidebar');
      const target = event.target as HTMLElement;
      
      if (window.innerWidth <= 480 && 
          sidebar && 
          !sidebar.contains(target) && 
          !target.closest('.menu-toggle')) {
        setIsSidebarActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
    
  return (
    <>
      <button 
        className="menu-toggle"
        onClick={() => setIsSidebarActive(!isSidebarActive)}
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          zIndex: 1001,
          display: 'none',
          background: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          cursor: 'pointer'
        }}
      >
        <i className="bx bx-menu"></i>
      </button>

      <aside className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
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
            <Link href="/notificacao" onClick={() => setActiveMenuItem('notificacoes')}>
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
            <Link href="/configuracoes" onClick={() => setActiveMenuItem('configuracoes')}>
              <i className="bx bx-cog"></i>
              <span>Configurações</span>
            </Link>
          </li>
          <li className="logout">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleLogout();
            }}>
              <i className="bx bx-log-out"></i>
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}
'use client'
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { authService } from '../../services/auth'
import 'bootstrap-icons/font/bootstrap-icons.css'

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
      {/* <button 
        className="menu-toggle fixed top-2.5 left-2.5 z-[1001] hidden bg-white border-none rounded p-2 shadow-md cursor-pointer md:hidden"
        onClick={() => setIsSidebarActive(!isSidebarActive)}
      >
        <i className="bx bx-menu"></i>
      </button> */}

      <aside className={`sidebar fixed top-0 left-0 h-screen w-64 bg-white p-4 shadow-lg z-[1000] transition-all duration-300 ease-in-out md:w-16 md:p-2.5 md:hover:w-64 ${isSidebarActive ? 'w-64 p-4 translate-x-0' : 'md:translate-x-0'} ${isSidebarActive ? '' : 'md:translate-x-0'} ${isSidebarActive ? '' : 'max-md:w-0 max-md:p-0 max-md:-translate-x-full'}`}>
        <div className="logo flex items-center justify-center py-4 mb-5 border-b border-gray-200">
          <Link href="/home" className="text-2xl font-semibold text-green-600 no-underline md:text-0 md:first-letter:text-2xl">
            GULA
          </Link>
        </div>
        <ul className="menu list-none p-0 m-0 h-[calc(100vh-120px)] overflow-y-auto">
          <li className={`mb-1 ${activeMenuItem === 'dashboard' ? 'active' : ''}`}>
            <Link 
              href="/home" 
              onClick={() => setActiveMenuItem('dashboard')}
              className={`flex items-center px-4 py-3 no-underline text-gray-800 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600 ${activeMenuItem === 'dashboard' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              <i className="bx bx-grid-alt text-xl mr-2.5"></i>
              <span className="text-base md:hidden md:group-hover:inline">Dashboard</span>
            </Link>
          </li>
          <li className={`mb-1 ${activeMenuItem === 'estoque' ? 'active' : ''}`}>
            <Link 
              href="#" 
              onClick={() => setActiveMenuItem('estoque')}
              className={`flex items-center px-4 py-3 no-underline text-gray-800 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600 ${activeMenuItem === 'estoque' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              <i className="bx bx-shopping-bag text-xl mr-2.5"></i>
              <span className="text-base md:hidden md:group-hover:inline">Estoque</span>
            </Link>
          </li>
          <li className={`mb-1 ${activeMenuItem === 'graficos' ? 'active' : ''}`}>
            <Link 
              href="#" 
              onClick={() => setActiveMenuItem('graficos')}
              className={`flex items-center px-4 py-3 no-underline text-gray-800 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600 ${activeMenuItem === 'graficos' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              <i className="bi bi-graph-up-arrow text-xl mr-2.5"></i>
              <span className="text-base md:hidden md:group-hover:inline">Gráficos</span>
            </Link>
          </li>
          <li className={`mb-1 ${activeMenuItem === 'notificacoes' ? 'active' : ''}`}>
            <Link 
              href="/notificacao" 
              onClick={() => setActiveMenuItem('notificacoes')}
              className={`flex items-center px-4 py-3 no-underline text-gray-800 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600 ${activeMenuItem === 'notificacoes' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              <i className="bx bx-message-dots text-xl mr-2.5"></i>
              <span className="text-base md:hidden md:group-hover:inline">Notificações</span>
            </Link>
          </li>
          <li className={`mb-1 ${activeMenuItem === 'sugestoes' ? 'active' : ''}`}>
            <Link 
              href="#" 
              onClick={() => setActiveMenuItem('sugestoes')}
              className={`flex items-center px-4 py-3 no-underline text-gray-800 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600 ${activeMenuItem === 'sugestoes' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              <i className="bi bi-question-circle text-xl mr-2.5"></i>
              <span className="text-base md:hidden md:group-hover:inline">Ajuda</span>
            </Link>
          </li>
          <li className={`mb-1 ${activeMenuItem === 'configuracoes' ? 'active' : ''}`}>
            <Link 
              href="/configuracoes" 
              onClick={() => setActiveMenuItem('configuracoes')}
              className={`flex items-center px-4 py-3 no-underline text-gray-800 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600 ${activeMenuItem === 'configuracoes' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              <i className="bx bx-cog text-xl mr-2.5"></i>
              <span className="text-base md:hidden md:group-hover:inline">Configurações</span>
            </Link>
          </li>
          <li className="logout mt-auto border-t border-gray-200 pt-5">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
              className="flex items-center px-4 py-3 no-underline text-red-600 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-50"
            >
              <i className="bx bx-log-out text-xl mr-2.5"></i>
              <span className="text-base md:hidden md:group-hover:inline">Sair</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}
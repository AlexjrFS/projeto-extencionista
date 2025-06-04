'use client';
import React from 'react';
import Navbar from '../components/navbar';
import { useTheme } from '../context/ThemeContext';
import './configuracoes.css';

export default function Configuracoes() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <Navbar />
      <div className="container">
        <main className="content">
          <h1>Configurações</h1>
          <section className="config-section">
            <h2>Tema</h2>
            <div className="theme-toggle-row">
              <span>Modo Escuro</span>
              <label className="switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                <span className="slider round"></span>
              </label>
            </div>
          </section>
        </main>
      </div>
    </>
  );
} 
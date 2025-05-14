'use client'
import Link from "next/link"
import React from "react"
import Image from "next/image"
import Salto from '../../public/salto.png'
export function Navbar(){

    return(
        <>
        <div className="sidebar">
            <Link href="#" className="logo">
                <i className='bx bxs-coffee-bean'></i>
                <div className="logo-name"><span>Gula</span></div>
            </Link>
            <ul className="side-menu">
                <li className="active"><Link href="#"><i className='bx bxs-dashboard'></i>Menu Iniciar</Link></li>
                <li><Link href="#"><i className='bx bx-package'></i>Estoque</Link></li>
                <li><Link href="#"><i className='bx bx-line-chart'></i>Gráficos</Link></li>
                <li><Link href="#"><i className='bx bx-message-square-dots'></i>Notificações</Link></li>
                <li><Link href="#"><i className='bx bx-help-circle'></i>Ajuda</Link></li>
                <li><Link href="#"><i className='bx bx-cog'></i>Configurações</Link></li>
            </ul>
            <ul className="side-menu">
                <li>
                    <Link href="#" className="logout">
                        <i className='bx bx-log-out'></i>
                        Sair
                    </Link>
                </li>
            </ul>
        </div><div className="content">
                <nav>
                    <i className='bx bx-menu'></i>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="theme-toggle" />
                    <label htmlFor="theme-toggle" className="theme-toggle"></label>
                    <Link href="#" className="profile">
                        <Image src={Salto} alt={""} />
                    </Link>
                </nav>
            </div></>
    )
}
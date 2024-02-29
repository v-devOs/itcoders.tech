import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className="Navbar flex align-center">
            <img className='Itcoders-Icon' src="https://i.ibb.co/Hhgt04B/itcoders-icon-removebg-preview.png" alt="Logo Itcoders" />
            <div>
                <ul className="Navbar-List flex">
                    <a href="#About-Us-Section">
                        <i className="fa-solid fa-circle-info"></i>
                        <li>Sobre nosotros</li>
                    </a>
                    <a href="#Our-Projects-Section">
                        <i className="fa-solid fa-folder"></i>
                        <li>Proyectos</li>
                    </a>
                    <a href="#Contact">
                        <i className="fa-solid fa-phone"></i>
                        <li>Contacto</li>
                    </a>
                </ul>
            </div>
        </nav>
    )
}

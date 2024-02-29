import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className="Navbar flex align-center bg-black ">
            <img className='Itcoders-Icon' src="https://i.ibb.co/Hhgt04B/itcoders-icon-removebg-preview.png" alt="Logo Itcoders" />
            <div>
                <ul className="Navbar-List flex">
                    <a href="#About-Us-Section">
                        <li>Sobre nosotros</li>
                        <i className="fa-solid fa-circle-info"></i>
                    </a>
                    <a href="#Our-Projects-Section">
                        <li>Proyectos</li>
                        <i className="fa-solid fa-folder"></i>
                    </a>
                    <a href="#Contact">
                        <li>Contacto</li>
                        <i className="fa-solid fa-phone"></i>
                    </a>
                </ul>
            </div>
        </nav>
    )
}

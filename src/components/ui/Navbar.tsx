import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className="Navbar flex align-center padding-container">
            <img className='Itcoders-Icon' src="" alt="Logo Itcoders" style={{marginLeft: 20}}/>
            
            <div>
                <ul className="Navbar-List bg-light-gray border-radius-10 flex justify-center align-center">
                    <a className="padding-container bg-primary-blue border-radius-10" href="#">
                        <li>Inicio</li>
                    </a>
                    <a className="padding-container border-radius-10" href="#">
                        <li>Sobre nosotros</li>
                    </a>
                    <a className="padding-container border-radius-10" href="#">
                        <li>Servicios</li>
                    </a>
                    <a className="padding-container border-radius-10" href="#">
                        <li>Proyectos</li>
                    </a>
                </ul>
            </div>

            <button className='bg-primary-blue padding-container border-radius-10 border-none' style={{marginRight: 20}}>
                Empezar 
            </button>
        </nav>
    )
}

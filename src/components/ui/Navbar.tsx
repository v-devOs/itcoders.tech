'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";

export const Navbar = () => {

    const pathname = usePathname();

    return (
        <nav className="flex p-20 justify-content">
            <div className="flex bg-light-gray-color radius">
                <Link href='/' className={`ph-20 p-10 radius ${pathname == '/' ? 'bg-primary white-text' : 'black-text'}`}>Inicio</Link>
                <Link href='/sobre-nosotros' className={`ph-20 p-10 radius ${pathname == '/sobre-nosotros' ? 'bg-primary white-text' : 'black-text'}`} >Sobre nosotros</Link>
                <Link href='/servicios' className={`ph-20 p-10 radius ${pathname == '/servicios' ? 'bg-primary white-text' : 'black-text'}`}>Servicios</Link>
                <Link href='/contacto' className={`ph-20 p-10 radius ${pathname == '/contacto' ? 'bg-primary white-text' : 'black-text'}`}>Contacto</Link>
                <Link href='/blog' className={`ph-20 p-10 radius ${pathname == '/blog' ? 'bg-primary white-text' : 'black-text'}`}>BOG</Link>

            </div>
            <Link href='' className="bg-primary white-text ph-20 p-10 radius gap-15 flex align-center" style={{ position: 'absolute', right: 100 }}>
                Cotizar
                <i className="fa-solid fa-arrow-right"></i>
            </Link>
        </nav>
    )
}

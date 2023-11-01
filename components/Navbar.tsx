import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className='flex justify-content p-10 bg-black align-center'>
            <div className='flex gap-50'>
                <Link href='' className='white-text'>Home</Link>
                <Link href='' className='white-text'>Registro</Link>
            </div>
        </nav>
    )
}

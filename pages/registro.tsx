import { MainLayout } from '@/components/layout'
import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

const Registro = () => {
    return (
        <MainLayout title='Registro' description='Únete al equipo de desarrollo oficial del ITC'>
            <section className='flex justify-content align-center p-70'>
                <form action="submit" style={{ width: '70vh' }} className='flex column gap-15 glass-morphism p-20 mb-50'>
                    <Player
                        className="img-fluid"
                        autoplay
                        loop
                        src="https://lottie.host/ee8ebc9c-4c1c-4c17-8ac3-b0b746f9aac9/EzN1g4EMTX.json"
                        background="transparent"
                        style={{ height: 400, width: 'auto' }}
                    />

                    <div className='flex column'>
                        <label className='white-text'>Nombre</label>
                        <input placeholder='IT coder' className='input' />
                    </div>

                    <div className='flex column'>
                        <label className='white-text'>Correo</label>
                        <input placeholder='correo@itcelaya.edu.mx' className='input' />
                    </div>

                    <div className='flex column'>
                        <label className='white-text'>Carrera</label>
                        <input placeholder='Sistemas Computacionales / Mecatrónica ...' className='input' />
                    </div>

                    <div className='flex column'>
                        <label className='white-text'>Nivel de programación</label>
                        <input placeholder='Básico / Medio / Avanzado' className='input' />
                    </div>

                    <div className='flex column'>
                        <label className='white-text'>Lenguajes de programación que has usado</label>
                        <input placeholder='Ninguno / Java / Python / Javascript ...' className='input' />
                    </div>

                    <div className='flex column'>
                        <label className='white-text'>Lenguajes de programación que te gustaría aprender</label>
                        <input placeholder='Java / Python / Javascript ...' className='input' />
                    </div>

                    <div className='flex column'>
                        <label className='white-text'>¿Qué propuesta de mejora tienes para la Universidad que se podría implementar en software?</label>
                        <textarea placeholder='Creo que en el apartado ... podemos mejorar ... / Creo que si implementaramos ... sería ... porque ...' className='input' rows={5} />
                    </div>

                    <div className='flex column'>
                        <label className='white-text'>Horarios libres disponibles</label>
                        <input placeholder='Lunes 9-10am / Martes 10-11 am ...' className='input' />
                    </div>

                    <button className='white-text p-10 radius f-size-24 white-border' style={{ backgroundColor: '#FE481D' }}>
                        Registrarme ahora
                    </button>
                </form>
            </section>
        </MainLayout>
    )
}

export default Registro
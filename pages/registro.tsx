import { MainLayout } from '@/components/layout'
import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

const Registro = () => {
    return (
        <MainLayout title='Registro' description='Únete al equipo de desarrollo oficial del ITC'>
            <section className='flex justify-content align-center p-70' style={{ flexWrap: 'wrap'}} id='sec-login'>

                <form action="submit" style={{ width: '70vh' }} className='flex column gap-15 p-20 mb-50' id='login-register'>
                    <div className='user-box'>
                        <input />
                        <label className='white-text'>Nombre</label>
                    </div>

                    <div className='user-box'>
                        <input />
                        <label className='white-text'>Correo</label>
                    </div>

                    <div className='user-box'>
                        {/* TODO: Crear un menu desplegable con opciones */}
                        <input />
                        <label className='white-text'>Carrera</label>
                    </div>

                    <div className='user-box'>
                        {/* TODO: Crear un menu desplegable con opciones */}
                        <input />
                        <label className='white-text'>Nivel de programación</label>
                    </div>

                    <div className='user-box'>
                        <input />
                        <label className='white-text'>Lenguajes de programación que has usado</label>
                    </div>

                    <div className='user-box'>
                        <input />
                        <label className='white-text'>Lenguajes de programación que te gustaría aprender</label>
                    </div>


                    <div className='user-box'>
                        <input   />
                        <label className='white-text'>Horarios libres disponibles</label>
                    </div>

                    {/* <div className=''>
                        <textarea placeholder='Creo que en el apartado ... podemos mejorar ... / Creo que si implementaramos ... sería ... porque ...'  rows={5} />
                        <label className='white-text'>¿Qué propuesta de mejora tienes para la Universidad que se podría implementar en software?</label>
                    </div> */}
                    <button className='white-text btn-register' style={{ backgroundColor: '#FE481D' }}>
                        Registrarme ahora
                    </button>
                </form>

                <Player
                    className="img-fluid"
                    autoplay
                    loop
                    src="https://lottie.host/ee8ebc9c-4c1c-4c17-8ac3-b0b746f9aac9/EzN1g4EMTX.json"
                    background="transparent"
                    style={{ height: 400, width: 'auto' }}
                />
            </section>
        </MainLayout>
    )
}

export default Registro
import { CheckboxOptions, SelectMenu } from '@/components/form'
import { MainLayout } from '@/components/layout'
import { carreras, lenguajes, niveles } from '@/data'
import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

const Registro = () => {
    return (
        <MainLayout title='Registro' description='Únete al equipo de desarrollo oficial del ITC'>
            <section className='flex justify-content  p-70' style={{ flexWrap: 'wrap'}} id='sec-login'>

                <form action="submit" style={{ width: '70vh' }} className='flex column gap-15 p-20 mb-50' id='login-register'>
                    <div className='user-box'>
                        <input />
                        <label className='white-text'>Nombre</label>
                    </div>

                    <div className='user-box'>
                        <input />
                        <label className='white-text'>Correo</label>
                    </div>

                    <SelectMenu title='Carrera' options={carreras}/>
                    <SelectMenu title='Nivel de Programación' options={niveles}/>

                    <CheckboxOptions
                        title='Lenguajes de programación que has usado'
                        options={ lenguajes }
                    />

                   <CheckboxOptions 
                        title='Lenguajes de programación que te gustaría aprender'
                        options={ lenguajes }
                    />

                    <div className='user-box'>
                        <input   />
                        <label className='white-text'>Horarios libres disponibles</label>
                    </div>

                    <div className='flex column' style={{ gap: '10px'}}>
                        <label className='white-text'>¿Qué propuesta de mejora tienes para la Universidad que se podría implementar en software?</label>
                        <textarea 
                            className='txt-area white-text' 
                            placeholder='Creo que en el apartado ... podemos mejorar ... / Creo que si implementaramos ... sería ... porque ...'  rows={5} />
                    </div>

                    <button className='white-text btn-register p-10' style={{ backgroundColor: '#FE481D' }}>
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
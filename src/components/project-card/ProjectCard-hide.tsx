import React, { FC } from 'react'
import './ProjectCard.css'

export const ProjectCardHide = () =>{
    return (
        <div className="Project-Card-hide border-radius-15 bg-primary">
            {/* <span className='border-radius-15 bg-white Project-Title-Span'>{title}</span> */}
            <div className='Project-Title-Span-Div absolute' style={{display: "none"}}>
                <span className='f-size-10 border-radius-15 p-5 mr-10 bg-white Project-Title-Span Project-Title-Span-1'>SEO</span>
                <span className='f-size-10 border-radius-15 p-5 mr-10 bg-white Project-Title-Span Project-Title-Span-2'>Digital marketing</span>
                <span className='f-size-10 border-radius-15 p-5 bg-white Project-Title-Span Project-Title-Span-3'>Online shopping</span>
            </div>
            <p className='white-text verticaltext'>Aplicaiones móviles</p>
            {/* NOTA: No sé como poner la computadorsita y el teléfono */}
            {/* <img src={image} alt="Imágen del proyecto" className=''/> */}
            <img src="" alt="Imágen del proyecto" className='' style={{display: "none"}}/>
            {/* <span className='border-radius-15 bg-white Project-Link-Span'>{url}</span> */}
            <span className='absolute border-radius-15 p-5 bg-white Project-Link-Span' style={{display: "none"}}>
                <i className="fa-solid fa-circle-notch mr-10"></i>
                Creatividad, innovación, progreso
            </span>
            <span className='absolute border-radius-15 p-5 bg-white Project-Numeration-Span' >01</span>
        </div>
    );
}
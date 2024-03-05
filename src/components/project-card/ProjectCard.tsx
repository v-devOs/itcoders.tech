import React, { FC } from 'react'
import './ProjectCard.css'

interface Props{
    title: string,
    image: string,
    url: string
}
// export const ProjectCard:FC<Props> = ({title, image, url}) =>{
export const ProjectCard = () =>{
    return (
        <div className="Project-Card border-radius-15 bg-light-gray">
            {/* <span className='border-radius-15 bg-white Project-Title-Span'>{title}</span> */}
            <span className='border-radius-15 p-5 bg-white Project-Title-Span'>Título proyecto</span>
            {/* NOTA: No sé como poner la computadorsita y el teléfono */}
            {/* <img src={image} alt="Imágen del proyecto" className=''/> */}
            <img src="" alt="Imágen del proyecto" className=''/>
            {/* <span className='border-radius-15 bg-white Project-Link-Span'>{url}</span> */}
            <span className='border-radius-15 p-5 bg-white Project-Link-Span'>https://link_al_proyecto</span>
        </div>
    );
}
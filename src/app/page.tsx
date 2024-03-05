import { OurProjects, InitialPlayer } from "@/components/landing-page";
import { ProjectCard } from "@/components/project-card/ProjectCard";
import { title } from "process";

export default function Home() {
  return (
    <main className=''>
      <section className="bg-white p-40">
        <div className="Description-Section">
          <p className="f-size-50">
            EL SOFTWARE <i className="fa-brands fa-uncharted"></i> DE TUS SUEÑOS ES TU <i className="fa-solid fa-map"></i> CAMINO A LA INSPIRACIÓN 
            E INNOVACIÓN <i className="fa-solid fa-location-dot"></i>
          </p>
        </div>
      </section>
      {/* <section className='flex column justify-content align-center' style={{ height: '96vh' }}>
        <h1 className='white-text f-size-100 ls-1'>itcoders.tech</h1>
      </section> */}

      <section className="bg-white p-40 flex justify-content align-center">
          <ProjectCard></ProjectCard>
      </section>  

      {/* <section id="Our-Projects-Section" className='white-text bg-secondary p-40' style={{ paddingBottom: 300 }}>
        <h2 className='f-size-50'>Nuestros proyectos</h2>
        <OurProjects />
      </section>
      <section className='bg-thirt p-40 white-text'>
        <h2 className='f-size-50'>Nuestros servicios</h2>
        <div className='grid-c-4 gap-25 mt-50'>
          <div>
            <div className='center-text f-size-100'>
              <i className="fa-solid fa-globe"></i>
            </div>
            <h3 className='f-size-30 mt-20'>Sitios web</h3>
            <p className='f-size-24'>Desarrollamos sitios web a la medida de tus necesidades.</p>
          </div>
          <div>
            <div className='center-text f-size-100'>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <h3 className='f-size-30 mt-20'>Tiendas en línea</h3>
            <p className='f-size-24'>Creamos tiendas en línea con servicios integrados y seguridad de datos.</p>
          </div>
          <div>
            <div className='center-text f-size-100'>
              <i className="fa-solid fa-computer"></i>
            </div>
            <h3 className='f-size-30 mt-20'>Sistemas</h3>
            <p className='f-size-24'>Diseñamos y construimos sistemas a la medida de tus necesidades.</p>
          </div>
          <div>
            <div className='center-text f-size-100'>
              <i className="fa-solid fa-mobile-button"></i>
            </div>
            <h3 className='f-size-30 mt-20'>Aplicaciones móviles</h3>
            <p className='f-size-24'>Desarrollamos aplicaciones móviles para Android y iOS.</p>
          </div>
        </div>
      </section>
       */}
      {/* <section className='p-100 flex align-center justify-content'>
        <div className='bg-white p-20'>
          <h2 className='f-size-50'>Contacto</h2>
          <form action="">
            <input type="text" placeholder="Nombre"></input>
            <input type="email" placeholder="Correo"></input>
            <input type="text" placeholder="Asunto"></input>
            <textarea name="mensaje" id="mensaje" placeholder="Mensaje"></textarea>
            <input type="submit" value="Enviar" className="btn btn-primary" />
          </form>
        </div>
      </section> */}
      {/* <section id="Contact" className="login-box flex column white-text">
        <h3 className="secondary-title-color">Si buscas una solución novedosa para tu negocio, ponte en contacto con nosotros</h3>
        <form>
          <div className="user-box">
            <input type="text" placeholder="Nombre"></input>
          </div>
          <div className="user-box">
            <input type="email" placeholder="Correo"></input>
          </div>
          <div className="user-box">
            <input type="text" placeholder="Asunto"></input>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enviar infromación
          </a>
        </form>
      </section> */}

      {/* <section className='white-text p-40 bg-secondary flex column justify-content align-center'>
        <h2 className='f-size-50'>Equipo</h2>
        <img className="Team-Img" src="https://i.ibb.co/pxc297G/Whats-App-Image-2024-02-27-at-3-20-27-PM.jpg" alt="Equipo de trabajo" />
      </section> */}
    </main>

  )
}

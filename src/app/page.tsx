import { OurProjects, InitialPlayer } from "@/components/landing-page";
import { ProjectCard } from "@/components/project-card/ProjectCard";
import { ProjectCardHide } from "@/components/project-card/ProjectCard-hide";
import { ProjectCardInfo } from "@/components/project-card/ProjectCard-info";
import Link from "next/link";
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

      <section className="bg-white p-40">
          <div className="Our-Projects-Slide width-100 flex justify-content align-center gap-15">
            <ProjectCard></ProjectCard>
            <ProjectCardHide></ProjectCardHide>
            <ProjectCardHide></ProjectCardHide>
            <ProjectCardInfo></ProjectCardInfo>
            <ProjectCardHide></ProjectCardHide>
          </div>
      </section>  
      
      <section className="bg-white space-between align-center" style={{padding: "10px 40px"}}>
        <div>
          <span className="f-weight-700  f-size-12 mr-10">99% Clientes Satisfechos</span>
          <span className="f-weight-700  f-size-12 mr-10">Atención especializada 24/7</span>
          <span className="f-weight-700  f-size-12">10K+ Usuarios Contentos</span>
        </div>

        <div className="flex">
          <div className="icon-size flex align-center justify-content border-radius-20 bg-primary mr-10">
            <i className="fa-brands fa-instagram fa-xl white-text"></i>
          </div>
          <div className="icon-size flex align-center justify-content border-radius-20 bg-primary mr-10">
            <i className="fa-brands fa-linkedin fa-xl white-text"></i>
          </div>
          <div className="icon-size flex align-center justify-content border-radius-20 bg-primary">
            <i className="fa-brands fa-github fa-xl white-text"></i>
          </div>
        </div>
      </section>

      <section className="bg-white flex align-center space-between p-40" style={{paddingTop: "10px"}}>
        <div className="" style={{width: "25%"}}>
          <p className="f-size-24">Nuestros números hablan</p>
          <Link href='' className="bg-primary white-text ph-20 p-10 radius gap-15 flex align-center" style={{width: "60%"}}>
                Cotizar
                <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="grid-c-4 gap-15" style={{width: "80%"}}>
          
          {/* TODO: Hacer componentes estas etiquetas  */}
          <div className="border-radius-40 p-10 bg-light-gray-color flex  align-center" >
            <div className="border-white icon-size flex align-center justify-content  border-radius-20 bg-light-gray-color mr-10">
              <i className="fa-brands fa-github fa-xl color-primary"></i>
            </div>

            <div >
              <p className="f-size-14">Líneas de código</p>
              <p className="f-size-20">10K</p>
            </div>
          </div>

          <div className="border-radius-40 p-10 bg-light-gray-color flex  align-center" >
            <div className="border-white icon-size flex align-center justify-content  border-radius-20 bg-light-gray-color mr-10">
              <i className="fa-thin fa-people-group fa-xl color-primary"></i>
            </div>

            <div >
              <p className="f-size-14">Proyectos</p>
              <p className="f-size-20">80</p>
            </div>
          </div>

          <div className="border-radius-40 p-10 bg-light-gray-color flex  align-center" >
            <div className="border-white icon-size flex align-center justify-content  border-radius-20 bg-light-gray-color mr-10">
              <i className="fa-thin fa-chart-simple fa-xl color-primary"></i>
            </div>

            <div>
              <p className="f-size-14">Clientes</p>
              <p className="f-size-20">30</p>
            </div>
          </div>

          <div className="border-radius-40 p-10 bg-light-gray-color flex  align-center" >
            <div className="border-white icon-size flex align-center justify-content  border-radius-20 bg-light-gray-color mr-10">
              <i className="fa-thin fa-arrows-to-dot fa-xl color-primary"></i>
            </div>

            <div >
              <p className="f-size-14">Clicks</p>
              <p className="f-size-20">+300K</p>
            </div>
          </div>

        </div>
      </section>
      
    </main>

  )
}

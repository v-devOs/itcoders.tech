import { TeamCard } from "@/components";
import { team } from "@/data";
import Image from "next/image";

const AboutUsPage = () => {
    return (
        <main className="">
            <section className="ph-100 mt-20">
                <h2 className="f-size-20 f-weight-600 color-secondary">Somos itcoders.com</h2>
                <div className="grid-60-40 align-center">
                    <p className="f-size-50 bold color-primary">Nos creamos para construir <br /><span className="color-dark-gray">una mejor forma de crear</span> </p>
                    <p className="f-size-18">En una unión con escuela, empresas y desarrolladores estamos re-inventando la forma de aprender y crear aplicaciones de todo tipo.</p>
                </div>
                <div className="grid-60-40 gap-50 mt-50">
                    <Image src='/assets/img/equipo.jpeg' alt="" width={1000} height={500} className="max-width radius-30" />
                    <Image src='/assets/img/equipo.jpeg' alt="" width={1000} height={500} className="max-width radius-30" />
                </div>
            </section>
            <section className="grid-c-2 mt-50 ph-100">
                <div className="flex color-primary align-center gap-15">
                    <h1 className="f-size-50">Nuestra historia</h1>
                    <i className="fa-solid fa-arrow-turn-down f-size-30"></i>
                </div>
                <div>
                    <p className="bold f-size-18">
                        La idea empieza cuando un grupo de amigos en universidad se dan cuenta que con los conocimientos escolares no basta, hace falta más.
                    </p>
                    <p className="f-size-16 mt-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nam vel, explicabo, laborum doloribus porro eos dicta qui odit beatae sit autem et voluptatibus facilis soluta nobis, assumenda tenetur iusto.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, esse quibusdam aut, vero repellat placeat autem est quod quidem atque nostrum soluta, magni id praesentium deleniti reiciendis labore cumque numquam!
                        Delectus nihil sunt fuga nobis dolorem, iste nemo aut mollitia eaque aliquid molestias, libero reprehenderit voluptatem illo earum perspiciatis, quam natus eos iure architecto totam inventore? Tempore repudiandae necessitatibus pariatur.

                    </p>
                </div>
            </section>
            <section className="bg-light-gray-color p-100 mt-50">
                <div className="center-text">
                    <h3 className="color-primary f-size-50">¡Nuestro equipo tiene más de <span className="color-dark-gray-color"> 50 años de experiencia combinada!</span></h3>
                    <p className="f-size-20 mt-20">Nuestro equipo aporta experiencia, innovación, creatividad al mundo de la programación y desarrollo de productos que aseguran tus planes en buenas manos.</p>
                </div>
                <div className="mt-50 grid-c-4 gap-25">
                    {
                        team.map((member, index) => (
                            <TeamCard key={index} {...member} />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default AboutUsPage;
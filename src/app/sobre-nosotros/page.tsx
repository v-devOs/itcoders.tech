import { TeamCard } from "@/components";
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
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.

                        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
            </section>
            <section className="bg-light-gray-color p-100 mt-50">
                <div className="center-text">
                    <h3 className="color-primary f-size-50">¡Nuestro equipo tiene más de <span className="color-dark-gray-color"> 100 años de experiencia combinada!</span></h3>
                    <p className="f-size-20 mt-20">Nuestro equipo aporta experiencia, innovación, creatividad al mundo de la programación y desarrollo de productos que aseguran tus planes en buenas manos.</p>
                </div>
                <div className="mt-50 grid-c-4 gap-25">
                {/* <TeamCard /> */}
                </div>
            </section>
        </main>
    )
}

export default AboutUsPage;
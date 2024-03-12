import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface Props {
    img: string,
    name: string,
    role: string,
    description: string,
    instagram: string,
    linkedin: string,
    github: string
}

export const TeamCard: FC<Props> = ({ img, name, role, description, instagram, linkedin, github }) => {
    return (
        <div className="bg-white radius-30 p-50 flex column align-center">
            <Image src={img} alt={name} width={200} height={200} className="radius-100" />
            <h5 className="bold center-text f-size-24 mt-20">{name}</h5>
            <h6 className="center-text color-secondary f-size-20 mt-5">{role}</h6>
            <hr className="mt-20 width-100" />
            <p className="mt-20">{description}</p>
            <div className="flex gap-15 justify-content align-center mt-20">
                <Link target="_blank" href={instagram}>
                    <i className="fa-brands fa-instagram bg-secondary white-text p-10 radius-100 f-size-24"></i>
                </Link>
                <Link target="_blank" href={linkedin}>
                    <i className="fa-brands fa-linkedin bg-secondary white-text p-10 radius-100 f-size-24"></i>
                </Link>
                <Link target="_blank" href={github}>
                    <i className="fa-brands fa-github bg-secondary white-text p-10 radius-100 f-size-24"></i>
                </Link>
            </div>
        </div>
    )
}

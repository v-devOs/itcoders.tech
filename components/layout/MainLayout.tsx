import Head from "next/head"
import { FC } from "react"
import { Navbar, Footer } from "..";

interface Props {
    children?: JSX.Element,
    title?: string,
    author?: string,
    description?: string,
    favIcon?: string,
    metaTags?: string[],
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin;
const defaultOGImage = `${origin}/img/logo-negro.png`;

export const MainLayout: FC<Props> = ({ children, title, author, favIcon, description, metaTags }) => {

    return (
        <>
            <Head>
                {/*TITLE */}
                <title>
                    {title || 'itcoders.tech'}
                </title>

                {/*FAVICON */}
                <link href="./img/favicon.png" rel="icon" />
                <link rel="shortcut icon" href={`${favIcon || 'img/logo.png'}`} type="image/x-icon" />
                {/*AUTHOR */}
                <meta name='author' content={`itcoders.tech - ${author || 'Luis Leal'}`} />
                {/*DESCRIPTION AND KEYWORDS */}
                <meta name='description' content={`${description + 'ITCoders' || 'Somos un grupo de desarrolladores de aplicaciones y sistemas aplicados a la vida real.'} `} />
                <meta name='keywords' content={`${metaTags + ',' || ''}ITCoders, codigo, celaya, tecnologico de celaya, itc, grupo programacion`} />
                {/*METATAGS*/}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${title || 'ITCoders'} `} />
                <meta property="og:description" content={`${description || 'Somos un grupo de desarrolladores de aplicaciones y sistemas aplicados a la vida real.'} `} />
                <meta property="og:image" content={`${favIcon || defaultOGImage}`} />
                <meta property="og:url" content="https://itcoders.tech/" />
                <meta property="og:site_name" content="ITCoders" />
            </Head>
            <Navbar />
            <main className="bg-black">
                {children}
            </main>
            <Footer />
        </>
    )
}
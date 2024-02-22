import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Integra - Soluciones legales",
    description: "¡Regístrate ahora!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <head>
                <link rel="stylesheet" href="https://luisrrleal.com/styles/leal-styles.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                {/*TITLE */}
                <title>
                    {'itcoders.tech'}
                </title>

                {/*FAVICON */}
                <link href="./img/favicon.png" rel="icon" />
                <link rel="shortcut icon" href={`${'img/logo.png'}`} type="image/x-icon" />
                {/*AUTHOR */}
                <meta name='author' content={`itcoders.tech - ${'Luis Leal'}`} />
                {/*DESCRIPTION AND KEYWORDS */}
                <meta name='description' content={`${'ITCoders' || 'Somos un grupo de desarrolladores de aplicaciones y sistemas aplicados a la vida real.'} `} />
                <meta name='keywords' content={` ITCoders, codigo, celaya, tecnologico de celaya, itc, grupo programacion`} />
                {/*METATAGS*/}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${'ITCoders'} `} />
                <meta property="og:description" content={`${'Somos un grupo de desarrolladores de aplicaciones y sistemas aplicados a la vida real.'} `} />
                <meta property="og:image" content={``} />
                <meta property="og:url" content="https://itcoders.tech/" />
                <meta property="og:site_name" content="ITCoders" />
            </head>
            <body>
                {children}
                {/* TODO: ADD FOOTER */}
                {/* <footer className="bg-black white-text center-text"><Link href='https://luisrrleal.com/'>By @luisrrleal</Link></footer> */}
            </body>
        </html>
    );
}
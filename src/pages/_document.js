import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="Portfolio Lucas da Silva" />
        <meta name="description" content="Atuo a mais de 7 anos na área de Tecnologia, maior parte destes anos voltado para área de Health Care e Medicina Diagnóstica. Durante minha jornada, trabalhei com as principais tecnologias de front-end (Reactjs e Nextjs), além de possuir sólidos conhecimentos em tecnologias de base (html, css, javascript). Essa experiência prática me permitiu desenvolver habilidades que me ajudam a criar soluções eficientes e eficazes." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.caslu.dev/" />
        <meta property="og:title" content="Portfolio Lucas da Silva" />
        <meta property="og:description" content="Atuo a mais de 7 anos na área de Tecnologia, maior parte destes anos voltado para área de Health Care e Medicina Diagnóstica. Durante minha jornada, trabalhei com as principais tecnologias de front-end (Reactjs e Nextjs), além de possuir sólidos conhecimentos em tecnologias de base (html, css, javascript). Essa experiência prática me permitiu desenvolver habilidades que me ajudam a criar soluções eficientes e eficazes." />
        <meta property="og:image" content="https://www.caslu.dev/perfil.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.caslu.dev/" />
        <meta property="twitter:title" content="Portfolio Lucas da Silva" />
        <meta property="twitter:description" content="Atuo a mais de 7 anos na área de Tecnologia, maior parte destes anos voltado para área de Health Care e Medicina Diagnóstica. Durante minha jornada, trabalhei com as principais tecnologias de front-end (Reactjs e Nextjs), além de possuir sólidos conhecimentos em tecnologias de base (html, css, javascript). Essa experiência prática me permitiu desenvolver habilidades que me ajudam a criar soluções eficientes e eficazes." />
        <meta property="twitter:image" content="https://www.caslu.dev/perfil.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          id="stiches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        ></style>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

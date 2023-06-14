import Link from "next/link";
import { Container } from "../../styles/global";
import { SectionStyle } from "./styles";
import Arrow from '../../assets/arrow.svg'
import LucasProfile from '../../assets/perfilLucas.jpg'
import Image from "next/image";

export function SectionHero() {
    return (
        <SectionStyle id="quemsou">
            <Container>
                <div className="hero-left" data-aos="fade-right">
                    <h5>
                        Hi, I`m <strong>Lucas da Silva 👋🏻</strong>
                    </h5>
                    <h1>
                        Especialista em Desenvolvimento Front-end
                    </h1>
                    <p>Atuo a mais de 7 anos na área de Tecnologia, maior parte destes anos voltado para área de Health Care e Medicina Diagnóstica.  Durante minha jornada, trabalhei com as principais tecnologias de front-end (Reactjs e Nextjs), além de possuir sólidos conhecimentos em tecnologias de base (html, css, javascript). Essa experiência prática me permitiu desenvolver habilidades que me ajudam a criar soluções eficientes e eficazes.</p>
                    <Link href='/'>
                        Comece um projeto
                        <Image src={Arrow} alt="imagem de seta pra direita" />
                    </Link>
                </div>
                <div className="hero-right" data-aos="fade-left">
                    <Image src={LucasProfile} alt="Imagem Lucas" priority={true} />
                </div>
            </Container>
        </SectionStyle>
    )
}
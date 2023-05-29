import Link from "next/link";
import { Container } from "../../styles/global";
import { SectionStyle } from "./styles";
import Arrow from '../../assets/arrow.svg'
import Will1 from '../../assets/will1.png'
import Image from "next/image";

export function SectionHero() {
    return (
        <SectionStyle>
            <Container>
                <div className="hero-left">
                    <h5>
                        Hi, I`m <strong>Will Moreira 👋🏻</strong>
                    </h5>
                    <h1>
                        Especialista em Desenvolvimento Front-end
                    </h1>
                    <p>Trabalhei em diversos projetos front-end, desde pequenos websites até grandes aplicações web. Essa experiência prática me permitiu desenvolver habilidades que me ajudam a criar soluções eficientes e eficazes.</p>
                    <Link href='/'>
                        Comece um projeto
                        <Image src={Arrow} alt="imagem de seta pra direita" />
                    </Link>
                </div>
                <div className="hero-right">
                    <Image src={Will1} alt="Imagem Will" />
                </div>
            </Container>
        </SectionStyle>
    )
}
import Image from "next/image";
import { Container } from "../../styles/global";
import { SectionProfileCardStyle } from "./styles";
import ImagePerfilWill from "../../assets/imagem-perfil-will.png"

export function SectionProfileCard() {
    return (
        <SectionProfileCardStyle>
            <Container>
                <div className="area-left">
                    <Image src={ImagePerfilWill} alt="Imagem de perfil" />
                </div>
                <div className="area-right">
                    <h3>Olá, prazer 👋🏻</h3>
                    <h2>Lucas da Silva</h2>
                    <h3>Desenvolvedor Front end</h3>
                    <p>Sou formado em Ciência da Computação e trabalho como desenvolvedor front-end há 5 anos. Minhas experiências na área de programação me fizeram evoluir como profissional, e como consequência do amor pelo que faço, desenvolver se tornou meu hobby favorito.</p>
                    <div className="details-profile">

                    </div>
                </div>
            </Container>
        </SectionProfileCardStyle>
    )
}
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

import { Container } from "../../styles/global";
import { SectionCasesStyle } from "./styles";
import CaseBlizzard from '../../assets/case-blizzard.png'
import CaseNeon from '../../assets/case-neon.png'
import CaseGodOfWar from '../../assets/cas-god-of-war.png'
import CasePokemon from '../../assets/case-pokemon.png'
import CaseRickMorty from '../../assets/case-rick-morty.png'
import CasWhatIf from '../../assets/case-what-if.png'
import Image from "next/image";
import Link from "next/link";

export function SectionCases() {

    return (
        <SectionCasesStyle id="cases">
            <Container>
                <div className="title-cases" data-aos="fade-right">
                    <h2>Meus Cases</h2>
                    <p>2022 - 2023</p>
                </div>
                <div className="slide-cases" data-aos="zoom-in">
                    <Swiper
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Link href={"https://projeto-blizzard-redesign.netlify.app/"} target="_blank">
                                <div className="image">
                                    <Image src={CaseBlizzard} alt="Imagem case" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={"https://lucasbluntt-projeto-neon.netlify.app/"} target="_blank">
                                <div className="image">
                                    <Image src={CaseNeon} alt="Imagem case" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={"https://whatif-codeboost-iota.vercel.app/"} target="_blank">
                                <div className="image">
                                    <Image src={CasWhatIf} alt="Imagem case" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={"https://god-of-war-ragnarok-redesign.netlify.app/"} target="_blank">
                                <div className="image">
                                    <Image src={CaseGodOfWar} alt="Imagem case" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={"https://ricky-and-morty-react.netlify.app/"} target="_blank">
                                <div className="image">
                                    <Image src={CaseRickMorty} alt="Imagem case" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={"https://projeto-pokemon-api.netlify.app/"} target="_blank">
                                <div className="image">
                                    <Image src={CasePokemon} alt="Imagem case" />
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </SectionCasesStyle>
    )
}
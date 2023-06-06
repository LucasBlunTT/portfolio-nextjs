import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";

import { Container } from "../../styles/global";
import { SectionCasesStyle } from "./styles";
import CaseBlizzard from '../../assets/case-blizzard.png'
import CaseNeon from '../../assets/case-neon.png'
import Image from "next/image";

export function SectionCases() {
    return (
        <SectionCasesStyle>
            <Container>
                <div className="title-cases">
                    <h2>Meus Cases</h2>
                    <p>2022 - 2023</p>
                </div>
                <div className="slide-cases">
                    <Swiper
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="image">
                                <Image src={CaseBlizzard} alt="Imagem case" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image">
                                <Image src={CaseNeon} alt="Imagem case" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </SectionCasesStyle>
    )
}
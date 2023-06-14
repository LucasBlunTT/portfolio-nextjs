import { Container } from "../../styles/global";
import { BadgeStyle } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";


export function Badge() {

    const skills = [
        {
            skill: 'Front End'
        },
        {
            skill: 'NEXT JS'
        },
        {
            skill: 'REACT JS'
        },
        {
            skill: 'Styled Components'
        },
        {
            skill: 'GULP'
        },
        {
            skill: 'SASS'
        }
    ];

    return (
        <BadgeStyle>
            <Container data-aos="fade-up">
                <Swiper
                    navigation={true}
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        skills.map(({ skill }, index) => {
                            return (
                                <SwiperSlide key={index}>{skill}</SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>
        </BadgeStyle>
    )
}
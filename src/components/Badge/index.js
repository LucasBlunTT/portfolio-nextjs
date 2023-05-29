import { Container } from "../../styles/global";
import { BadgeStyle } from "./styles";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";


export function Badge() {

    const skills = [
        {
            skill: 'Front end'
        },
        {
            skill: '{...} Desenvolvimento'
        },
        {
            skill: 'Frameworks'
        },
        {
            skill: 'Especialista'
        },
        {
            skill: '</> Code'
        }
    ];

    return (
        <BadgeStyle>
            <Container>
                <Swiper
                    navigation={true}
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        skills.map(({ skill }) => {
                            return (
                                <SwiperSlide>{skill}</SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>
        </BadgeStyle>
    )
}
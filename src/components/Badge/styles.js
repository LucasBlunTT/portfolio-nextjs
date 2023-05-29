import { styled } from "@stitches/react";
import { Container } from "../../styles/global";

export const BadgeStyle = styled('section', {
    width: '100%',
    height: 112,
    padding: '26px 0',
    background: '$primayDefault',

    [`${Container}`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '.swiper': {
            width: '90%',
        },

        '.swiper-slide': {
            width: '90%',
            maxWidth: 215,
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.06)',
            color: '$gray100',
            fontWeight: 600,
            fontsize: 18,
            lineWeight: "150%",
            padding: '16px 32px',
        },

        '.swiper-button-next, .swiper-button-prev': {
            color: '$gray100',
        },

        '.swiper-button-next': {
            right: 0
        },
    },
});
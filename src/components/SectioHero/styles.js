import { styled } from "@stitches/react";
import { Container } from "../../styles/global";

export const SectionStyle = styled('section', {
    padding: 112,
    background: '$backgrounColorDefault',

    [`${Container}`]: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',

        '.hero-left': {
            marginTop: 85,
            width: '100%',
            maxWidth: 645,

            h5: {
                fonteWeight: 500,
                fontSize: 16,
                lineHeight: '120%',
                letterSpacing: 2,
                color: '$gray500',
                marginBottom: 24,
            },

            h1: {
                fonteWeight: 600,
                fontSize: 64,
                lineHeight: '120%',
                color: '$gray100',
                marginBottom: 16,
            },

            p: {
                maxWidth: 520,
                fonteWeight: 400,
                fontSize: 18,
                lineHeight: '150%',
                color: '$gray500',
                marginBottom: 64,
            },

            a: {
                display: 'flex',
                alignItems: 'flex-start',
                maxWidth: 213,
                fontWeight: 600,
                fontSize: 18,
                lineHeight: '120%',
                color: '$gray100',
                textDecoration: 'underline',

                img: {
                    marginLeft: 16,
                }
            }
        },

        '.hero-right': {
            width: '100%',
            maxWidth: 520,
            objectFit: 'cover',

            img: {
                height: 673,
            },

        },
    }

});
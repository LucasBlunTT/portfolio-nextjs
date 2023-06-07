import { styled } from "@stitches/react"

export const SectionCasesStyle = styled('section', {
    padding: '11.7rem 11.2rem',
    backgroundColor: '#FFFFFF',

    '.title-cases': {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 112,

        h2: {
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 32,
            lineHeight: '120%',
            color: '$gray900',
        },
        p: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 400,
            color: '$gray900',
            lineHeight: '150%',
        },
    },

    '.slide-cases': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '100%',
        height: 609,

        ".swiper": {
            height: 473,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            ".swiper-slide": {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                ".image": {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: 4,

                    img: {
                        width: '70%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in'
                    },
                },

                "&:hover": {
                    ".image": {
                        img: {
                            transform: 'scale(1.05)'
                        },
                    },
                },
            },

            ".swiper-pagination": {
                bottom: -4,
            },
        },
    },
})
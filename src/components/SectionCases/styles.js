import { styled } from '../../styles';

export const SectionCasesStyle = styled('section', {
    padding: '7rem 2rem',
    backgroundColor: '#FFFFFF',

    '.title-cases': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: 38,
        marginBottom: 35,

        h2: {
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 32,
            color: '$gray900',
        },
        p: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 400,
            color: '$gray900',
        },
    },

    '.slide-cases': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '100%',

        ".swiper": {
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            ".swiper-slide": {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                ".image": {
                    width: '100%',
                    maxWidth: 896,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: 30,

                    img: {
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

    '@lg': {
        '.title-cases': {
            marginBottom: 19,

            h2: {
                fontSize: 24,
            },

            p: {
                fontSize: 15,
            },
        },
    },


});
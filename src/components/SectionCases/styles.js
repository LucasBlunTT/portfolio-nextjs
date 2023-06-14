import { styled } from '../../styles';

export const SectionCasesStyle = styled('section', {
    padding: '11.7rem 11.2rem',
    backgroundColor: '#FFFFFF',

    '.title-cases': {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',

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
        height: 474,

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

    '@sm': {
        padding: '1rem 11.2rem',

        '.title-cases': {
            h2: {
                fontSize: 18,
            }
        },

        '.slide-cases': {
            height: 300,
        },
    },

    '@xs': {
        padding: '1rem 1rem',

        '.title-cases': {
            h2: {
                fontSize: 18,
            }
        },

        '.slide-cases': {
            height: 235,

            '.swiper': {
                height: 191,
            }
        },
    },
})
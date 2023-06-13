import { styled } from '../../styles';
import { Container } from "../../styles/global";

export const SectionStyle = styled('section', {
    padding: '112px 0px',
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
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '120%',
                letterSpacing: 2,
                color: '$gray500',
                marginBottom: 24,
            },

            h1: {
                fontWeight: 600,
                fontSize: 64,
                lineHeight: '120%',
                color: '$gray100',
                marginBottom: 16,
            },

            p: {
                maxWidth: 520,
                fontWeight: 400,
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
            }
        },

        '.hero-right': {
            width: '100%',
            maxWidth: 520,

            img: {
                objectFit: 'cover',
                height: 673,
            },
        },
    },

    '@lg': {
        padding: '33px 0',

        [`${Container}`]: {
            '.hero-left': {
                maxWidth: 520,
                marginTop: 23,

                h1: {
                    fontSize: 54,
                },

                p: {
                    marginBottom: 34,
                    fontSize: 15,
                },

                a: {
                    fontSize: 16,
                },
            },

            '.hero-right': {
                maxWidth: 385,

                img: {
                    height: 508,
                },
            },
        },
    },

    '@mmd': {
        padding: '22px 0',

        [`${Container}`]: {
            '.hero-left': {
                maxWidth: 480,
                marginTop: 20,

                h5: {
                    fontSize: 13,
                },

                h1: {
                    fontSize: 42,
                },

                p: {
                    marginBottom: 34,
                    fontSize: 13,
                },

                a: {
                    fontSize: 13,
                },
            },

            '.hero-right': {
                maxWidth: 393,

                img: {
                    height: 399,
                },
            },
        },
    },

    '@tmd': {
        padding: '22px 0',

        [`${Container}`]: {
            '.hero-left': {
                maxWidth: 418,
                marginTop: 20,

                h5: {
                    fontSize: 12,
                },

                h1: {
                    fontSize: 38,
                },

                p: {
                    marginBottom: 21,
                    fontSize: 10,
                },

                a: {
                    fontSize: 12,
                },
            },

            '.hero-right': {
                maxWidth: 350,

                img: {
                    height: 352,
                },
            },
        },
    },

    '@md': {
        '.hero-left': {
            p: {
                fontSize: '11px !important',
            },
        },
    },

    '@sm': {
        padding: '22px 0',

        [`${Container}`]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            '.hero-left': {
                marginTop: '0 !important',
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,

                h5: {
                    textAlign: 'center',
                    fontSize: 12,
                    marginBottom: 8,
                },

                h1: {
                    textAlign: 'center',
                    fontSize: 38,
                },

                p: {
                    textAlign: 'center',
                    marginBottom: 9,
                    fontSize: 9,
                },

                a: {
                    textAlign: 'center',
                    fontSize: 12,
                    marginBottom: 23,
                },
            },

            '.hero-right': {
                maxWidth: 350,

                img: {
                    height: 392,
                },
            },
        },
    },

    '@xs': {
        padding: '22px 0',

        [`${Container}`]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            '.hero-left': {
                marginTop: '0 !important',
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,

                h5: {
                    textAlign: 'center',
                    fontSize: 18,
                    marginBottom: 8,
                },

                h1: {
                    textAlign: 'center',
                    fontSize: 20,
                },

                p: {
                    textAlign: 'center',
                    marginBottom: 9,
                    fontSize: 9,
                },

                a: {
                    textAlign: 'center',
                    fontSize: 11,
                    marginBottom: 23,
                },
            },

            '.hero-right': {
                maxWidth: 350,

                img: {
                    height: 356,
                },
            },
        },
    },

    '@xxs': {
        [`${Container}`]: {
            '.hero-left': {
                p: {
                    fontSize: 8,
                },
            },
        },
    },
});


import { styled } from '../../styles';

export const DifferentialStyle = styled('section', {
    padding: '11.7rem 11.2rem',
    backgroundColor: '#FFFFFF',

    '.title': {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 64,

        h2: {
            fontWeight: 600,
            fontSize: 32,
            lineHeight: '120%',
            color: '$gray900',
        },
        p: {
            maxWidth: 384,
            fontSize: 16,
            fontWeight: 400,
            color: '#78797A',
        },

        strong: {
            fontWeight: 600,
            fontSize: 16,
            lineHeight: '150%',
            color: '$gray900',
        },
    },

    '.differential-description': {
        width: '100%',
        maxWidth: 1216,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
    },

    '@iphone5': {
        padding: '0px 0px',
    },

    '@tmd': {
        padding: '2.7rem 3.2rem',

        '.title': {
            marginBottom: 21,

            h2: {
                fontSize: 26,
            },

            p: {
                maxWidth: 354,
                fontSize: 14,
            },
        },
    },

    '@sm': {
        '.title': {
            h2: {
                fontSize: 18,
            },

            p: {
                maxWidth: 282,
                fontSize: 10,
            },
        },

        '.differential-description': {
            gap: 16,

            '& > div': {
                maxWidth: '100%',
                padding: 12,

                '.icon': {
                    marginBottom: 7,

                    i: {
                        fontSize: 35,
                    },
                },

                h3: {
                    fontSize: 14,
                    marginBottom: 7,
                },
            },
        },
    },

    '@xl': {
        padding: '5.7rem 11.2rem',
    },

    '@xs': {
        '.title': {
            justifyContent: 'center',
        },


        p: {
            display: 'none',
        },

        '.differential-description': {
            '& > div': {
                padding: 4,
            },
        },
    },

    '@xxs': {
        padding: '3rem 1rem',
    },

})
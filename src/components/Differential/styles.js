import { styled } from "@stitches/react"

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

})
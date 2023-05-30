import { styled } from "@stitches/react"
import { Container } from "../../styles/global"

export const SectionProfileCardStyle = styled('section', {
    padding: '11.7rem 11.2rem',
    backgroundColor: '#FFFFFF',
    [`${Container}`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '.area-left': {
            flex: 1,
            marginRight: 104,
        },

        '.area-right': {
            flex: 1,
            width: '100%',
            maxWidth: 626,

            h3: {
                fontWeight: 600,
                fontSize: 18,
                lineHeight: '120%',
                color: '$gray900',
                marginBottom: 24,
            },

            h2: {
                fontWeight: 600,
                fontSize: 40,
                lineHeight: '120%',
                color: '$gray900',
                marginBottom: 4,
            },

            'h2 ~ h3': {
                marginBottom: 40,
            },

            p: {
                maxWidth: 484,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '150%',
                color: '$gray600',
                marginBottom: 24,
            }
        },
    },
})
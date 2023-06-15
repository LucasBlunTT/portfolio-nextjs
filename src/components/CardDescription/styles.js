import { styled } from '@stitches/react';

export const CardStyle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: 32,
  backgroundColor: '$gray100',

  '.icon': {
    marginBottom: 16,

    i: {
      fontSize: 45,
    },
  },

  h3: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '120%',
    color: '$gray900',
    marginBottom: 16,
  },

  p: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
    color: '$gray600',
  },
});

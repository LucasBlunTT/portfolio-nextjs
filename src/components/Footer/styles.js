import { styled } from '../../styles';
import { Container } from '../../styles/global';

export const FooterStyle = styled('footer', {
  width: '100%',
  height: 100,
  display: 'flex',
  alignItems: 'center',
  background: '$backgrounColorDefault',

  [`${Container}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',

    span: {
      fontWeight: 400,
      fontSize: 11,
      textlign: 'center',
      color: '$gray100'
    }
  },

  '@sm': {
    height: 81,

    [`${Container}`]: {
      justifyContent: 'center',
    },
  },

  '@xs': {
    height: 81,

    [`${Container}`]: {
      justifyContent: 'center',

      span: {
        fontSize: 8,
      },
    },
  },
});

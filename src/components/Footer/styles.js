import { styled } from '../../styles';
import { Container } from '../../styles/global';

export const FooterStyle = styled('header', {
  width: '100%',
  height: 100,
  display: 'flex',
  alignItems: 'center',
  background: '$backgrounColorDefault',

  [`${Container}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',

    '.logo': {
      a: {
        display: 'flex',
        alignItems: 'center',

        strong: {
          fontWeight: 500,
          fontSize: 16,
          color: 'white',
        },
      },
    },

    span: {
      fontWeight: 400,
      fontSize: 16,
      textlign: 'center',
      color: '$gray100'
    }
  },
});

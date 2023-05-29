import { styled } from '../../styles';
import { Container } from '../../styles/global';

export const HeaderStyle = styled('header', {
  width: '100%',
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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

    ul: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      li: {
        '&:not(:last-child)': {
          marginRight: 48,
        },
        a: {
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 19,
          textlign: 'center',
          color: '$gray100'
        }
      }
    }
  },
});

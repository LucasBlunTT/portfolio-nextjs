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

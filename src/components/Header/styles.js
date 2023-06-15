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
          marginRight: 30,
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

  '@xxs': {
    '*': {
      fontSize: '8px !important',
    },
  },

  '@sm': {
    height: 73,

    '.navigation': {
      ul: {
        li: {
          marginRight: 15,
        },
      },
    },

    '*': {
      fontSize: '10px !important',
    },
  },

  '@xs': {
    height: 50,

    '*': {
      fontSize: '8px !important',
    },
  },

});

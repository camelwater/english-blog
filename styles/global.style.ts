
import { globalCss } from '@stitches/react';

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    // cursor: 'none !important',
    scrollBehavior: 'smooth',
    transition: '0.15s linear'

  },
  svg: {
    transition: 'none'
  },
  html: {
    overflowX: 'hidden',
    // height: '100%'
  },
  body: {
    background: '$background',
    // overflowX: 'hidden',
    fontFamily: 'GTWalsheimPro',
    // transition: '.15s linear'
    // height: '100%'
  },
  '::selection': {
    background: '$highlight'
  },
  a: {
    color: '$hover',
    position: 'relative',
    textDecoration: 'none',
    zIndex: 99,
    paddingBottom: '0.1rem',
    background: 'linear-gradient(0deg, $dividerColor, $dividerColor) no-repeat left bottom / 0 .1rem',
    transition: 'background-size 250ms',
    '&:where(:hover, :focus-visible)': {
      backgroundSize: '100% .1rem',
      backgroundPositionX: 'left',
      color: '$dividerColor',
    }
  },
  img: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: '11px',
  },
  'body::-webkit-scrollbar-track': {
    background: '$primary',
    width: '15px'
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$scrollMain',
    borderRadius: '5px',
    border: '2px solid $primary'
  },
  'body::-webkit-scrollbar-thumb:hover': {
    background: '$scrollMain2',
  },
  'code, pre': {
    fontFamily: '$mono',
  },
  ul: {
    marginLeft: 20,
  },
  '.invalid': {
    color: '#F16D6D !important',
  },
  '.disabled': {
    display: 'none !important',
  },
  '@font-face': {
    fontFamily: 'GTWalsheimPro',
    src: 'url(/GTWalsheimPro-Regular.ttf)',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
  },
});

export default globalStyle
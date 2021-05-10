import palette from './palette';

export default {
  fontFamily: ['Proxima Nova'].join(','),
  title: {
    color: palette.text && palette.text.primary,
    fontSize: '28px',
    letterSpacing: '0.15px',
    lineHeight: 1.53,
    fontWeight: 400,
  },
  subtitle1: {
    color: palette.text && palette.text.primary,
    fontSize: '24px',
    letterSpacing: '0.15px',
    lineHeight: 1.53,
    fontWeight: 800,
  },
  subtitle2: {
    color: palette.text && palette.text.primary,
    fontSize: '24px',
    letterSpacing: '0.15px',
    lineHeight: 1.53,
    fontWeight: 400,
  },
  body1: {
    color: palette.text && palette.text.primary,
    fontSize: '18px',
    letterSpacing: '0.5px',
    lineHeight: 1.77,
    fontWeight: 400,
  },
  body2: {
    color: palette.text && palette.text.primary,
    fontSize: '18px',
    letterSpacing: '0.25px',
    lineHeight: 1.45,
    fontWeight: 800,
  },
  button: {
    color: palette.text && palette.text.primary,
    fontSize: '13.7px',
    letterSpacing: '1.25px',
    textTransform: 'uppercase',
    fontWeight: 600,
    lineHeight: 1.17,
  },
  caption: {
    color: palette.text && palette.text.secondary,
    fontSize: '16px',
    letterSpacing: '0.4px',
    lineHeight: 1.36,
    fontWeight: 600,
  },
  overline: {
    color: palette.text && palette.text.secondary,
    fontSize: '14px',
    letterSpacing: '2px',
    fontWeight: 600,
    lineHeight: 1.36,
  },
  breadcum: {
    color: palette.text && palette.text.disabled,
    fontSize: '14px',
    letterSpacing: '2px',
    fontWeight: 600,
    lineHeight: 1.36,
  },
};

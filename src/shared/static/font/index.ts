import localFont from 'next/font/local';

export const fonts = localFont({
  src: [
    {
      path: 'wremena/Wremena-Light.ttf',
      weight: '200',
      style: 'normal',
    },

    {
      path: 'wremena/Wremena-Regular.ttf',
      weight: '400',
      style: 'normal',
    },

    {
      path: 'wremena/Wremena-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-wremena',
});

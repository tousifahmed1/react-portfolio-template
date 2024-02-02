import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dklakm8v6/image/upload/v1706900754/portfolio-images/tousif_ahmed_full_stack_developer_tjzst2.png'
        />

        <meta
          property='og:title'
          content='Tousif Ahmed | Full-Stack Developer'
        />

        <meta property='og:description' content='Turn ideas into reality' />

        <meta property='og:image:width' content='1200' />

        <meta property='og:image:height' content='630' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

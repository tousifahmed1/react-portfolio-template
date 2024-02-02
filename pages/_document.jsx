import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* facebook */}
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dklakm8v6/image/upload/v1706900754/portfolio-images/tousif_ahmed_full_stack_developer_tjzst2.png'
        />
        <meta property='og:url' content='https://tousifahmed.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Tousif Ahmed | Full-Stack Developer'
        />
        <meta property='og:description' content='Turn ideas into reality' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dklakm8v6/image/upload/v1706900754/portfolio-images/tousif_ahmed_full_stack_developer_tjzst2.png'
        />
        {/* twitter */}
        <meta
          name='twitter:card'
          content='Full stack developer specialized in MERN stack and React Native'
        />
        <meta property='twitter:domain' content='tousifahmed.vercel.app' />
        <meta
          property='twitter:url'
          content='https://tousifahmed.vercel.app/'
        />
        <meta
          name='twitter:title'
          content='Tousif Ahmed | Full-Stack Developer'
        />
        <meta name='twitter:description' content='Turn ideas into reality' />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/dklakm8v6/image/upload/v1706900754/portfolio-images/tousif_ahmed_full_stack_developer_tjzst2.png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

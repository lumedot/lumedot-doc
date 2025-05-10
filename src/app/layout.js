import { Inter } from 'next/font/google';
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LUMEDOT',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

import './globals.css'
import { Inter } from 'next/font/google'
import { cookies } from "next/headers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "notebook • lumedot",
  description: "Build logs, experiments, and quiet documentation from the edge of publishing with Solana",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value || "system";

  let dataTheme = "";
  let htmlClass = "";
  let metaThemeColor = null;

  switch (themeCookie) {
    case "custom-light":
      dataTheme = "custom-light";
      metaThemeColor = "#ffffff";
      break;
    case "custom-dark":
      dataTheme = "custom-dark";
      metaThemeColor = "#000000";
      break;
  }

  const scriptForSystem = `
    (function() {
      var savedTheme = '${themeCookie}';
      if (savedTheme === 'system') {
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', 'theme-color');
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', prefersDark ? '#000000' : '#ffffff');
      }
    })();
  `;

  return (
    <html
      lang="en"
      className={htmlClass}
      {...(dataTheme ? { "data-theme": dataTheme } : {})}
    >
      <head>
        {metaThemeColor && <meta name="theme-color" content={metaThemeColor} />}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: scriptForSystem }} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
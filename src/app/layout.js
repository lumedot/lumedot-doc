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
  const themeCookie = cookieStore.get("theme")?.value;
  console.log("Theme cookie value:", themeCookie);

  let htmlClass = "";

  htmlClass = themeCookie === "dark" ? "dark" : "";

  const scriptForSystem = `
    (function () {
      var hasThemeCookie = '${themeCookie}' !== "";
      console.log("Theme cookie found:", hasThemeCookie, "Value:", '${themeCookie}');
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (!hasThemeCookie && prefersDark) {
        document.documentElement.classList.add("dark");
        console.log("System theme applied: dark");
      }
    })();
  `;

  return (
    <html lang="en" className={htmlClass}>
      <head>
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
  )
}

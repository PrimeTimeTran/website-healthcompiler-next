import './globals.css'
import { ReactNode } from 'react'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'

import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R8G7LNXFC9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R8G7LNXFC9', {
                send_page_view: false,
            });
          `}
        </Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

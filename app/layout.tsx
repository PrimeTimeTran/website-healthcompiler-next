import { ReactNode } from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='min-h-screen pt-20'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout

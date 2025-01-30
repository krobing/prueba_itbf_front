import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

// Providers
import StyledComponentsRegistry from '@/lib/registry'
import ClientAppTheme from '@/styles/ClientAppTheme'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hotel Management System',
  description: 'System for managing hotels',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StyledComponentsRegistry>
          <ClientAppTheme injectGlobal reset>
            {children}
          </ClientAppTheme>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

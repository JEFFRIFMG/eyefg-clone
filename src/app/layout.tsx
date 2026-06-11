import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'eyeFG - Empowering Traders',
  description: 'Trade with eyeFG - Fair rules, funded accounts up to $500,000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark">
        {children}
      </body>
    </html>
  )
}

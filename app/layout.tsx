import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gas and Plumbing Services Leeds',
  description: 'Professional plumbing services in Leeds - available 24/7',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

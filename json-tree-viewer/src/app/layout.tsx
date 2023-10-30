import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  fallback: ['sans-serif'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'JSON Tree Viewr',
  description: 'Projeto desafio da rinha-frontend, evento disponibilizado pela codante.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center gap-5 md:px-24 md:pt-20 bg-white text-zinc-950">
          <h1 className='text-3xl font-bold mt-16 md:m-0'>JSON Tree Viewer</h1>
          <p className='text-zinc-600 mx-5 text-center'>Simple JSON Viewer that runs completly on-client. No data exchange</p>
          
          {children}
        </main>
      </body>
    </html>
  )
}

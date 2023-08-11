import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yugi Tools',
  description: 'Constructeur de deck et gestionnaire de collection',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{metadata.title}</title>
    </head>
    <body className='h-full min-h-screen w-screen'>
      <div className='w-full m-auto max-w-screen-2xl '>{children}</div>
    
    </body>
    </html>
  )
}
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'


export const metadata: Metadata = {
  title: 'Kispatak Szépségszalon',
  description: 'Created by Pál Álmos',
 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className='3xl:text-2xl' suppressHydrationWarning={true}  >
       
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Nanum_Myeongjo } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Servicios Johan León',
  description: 'Consulta mis servicios aquí',
}

const inter = Nanum_Myeongjo({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          {children}
        <Footer/>
      </body>
    </html>
  )
}

import '/src/app/globals.css'
import { Inter } from 'next/font/google'
import {i18n} from "/src/i18n-config";
import {Analytics} from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}
export const metadata = {
  title: 'KeybotoDev',
  description: 'keybot.dev',
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}


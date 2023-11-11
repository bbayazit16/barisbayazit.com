import "./globals.css"

import { Inter } from "next/font/google"
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Barış Bayazıt",
    description: "Barış Bayazıt's Website",
    icons: {
        shortcut: "/favicon.ico",
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}

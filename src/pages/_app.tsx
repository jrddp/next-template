import { cn } from "@/lib/utils"

import "@/styles/globals.css"
import { AppProps } from "next/app"

import { fontSans } from "@/lib/fonts"
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={cn("font-sans antialiased", fontSans.variable)}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component key={router.route} {...pageProps} />
      </ThemeProvider>
    </main>
  )
}

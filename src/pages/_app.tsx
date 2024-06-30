import { cn } from "@/lib/utils"

import "@/styles/globals.css"
import { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"

import { fontSans } from "@/lib/fonts"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={cn("font-sans antialiased", fontSans.variable)}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="relative flex flex-col min-h-screen">
          <SiteHeader />
          <div className="flex-1">
            <Component key={router.route} {...pageProps} />
          </div>
        </div>
        <TailwindIndicator />
      </ThemeProvider>
    </main>
  )
}

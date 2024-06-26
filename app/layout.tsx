import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Providers from "@/redux/provider";
import "@mantine/core/styles.css";
import "./globals.css";
import TopBar from "@/components/topBar";
import styles from "./layout.module.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloom Home Page",
  description:
    "Bloom, la plateforme qui connecte les jeunes, les entreprises et les écoles pour rendre l'éducation accessible à tous",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
      </Head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <MantineProvider>
            <div className={styles.mainContainer}>
              <div className={styles.degradeContainer}>
              </div>
                <div className={styles.borderContainer2}>
                  <TopBar />
                  {children}
                </div>
            
            </div>
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}

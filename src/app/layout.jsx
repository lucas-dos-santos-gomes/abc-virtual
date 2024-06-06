import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ABC Virtual",
  description: "Website de alfabetização gameficada",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/svg/logo.svg',
        href: '/svg/logo.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/svg/logo.svg',
        href: '/svg/logo.svg',
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
//nextjs font allows us to import any font from the google fonts
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

{
  /* Changing the font here. Create a fnt Variable. */
}
const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Somairre",
  description:
    "In the meta tag you change the meta constants which are exported over the web. You see this in Inspect_page>headTag>meta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}

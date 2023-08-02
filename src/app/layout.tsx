import "./globals.css";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />

          {/* Searchbox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}

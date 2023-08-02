import "./globals.css";
import { Header } from "@/components/Header";
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

          {/* Searchbox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}

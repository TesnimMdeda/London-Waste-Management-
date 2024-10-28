import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/context/cart-context";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Waste Removal Company London, Removal Service London | London Waste Management",
  description:
    "London Waste Management is a well-established Waste Removal Company in London, we provide Removal Services throughout London and our aim is to recycle items we collect and if items can’t be recycled or upcycled they are processed so that the bare minimum is sent to landfill sites",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html>
        <body
          className={cn(
            "flex flex-col min-h-screen bg-background font-sans antialiased ",
            fontSans.variable
          )}
        >
          <Header />
          <div className=" flex-1">{children}</div>
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}

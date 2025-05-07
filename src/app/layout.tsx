import type { Metadata } from "next";
import { ReduxProvider } from "@/store/ReduxProvider";
import { Header, Footer } from "@/components";
import ThemeInitializer from "@/providers/ThemeInitializer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | CITE Technical Institute Inc.",
    default: "CITE Technical Institute Inc.",
  },
  description:
    "CITE Technical Institute Inc. provides accessible technical training, offering valuable opportunities to empower individuals, including the less fortunate, with the skills needed for success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <ThemeInitializer />
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}

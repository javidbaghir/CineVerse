import { Inter } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";
import Header from "@/components/header/index.jsx";
import Footer from "@/components/footer/index.jsx";

const interFontFamily = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="container">
        <Header />
  
        <main>{children}</main>

        <Footer />
        <div id="your-portal-root"></div>
      </body>
    </html>
  );
}

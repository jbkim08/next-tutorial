import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "탭 제목",
  description: "next.js 공부하는 사이트",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-black p-5 text-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <h1 className="text-2xl font-bold">Next.js Study</h1>

            <nav className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/products">Products</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="fixed bottom-0 left-0 w-full bg-gray-100 p-6 text-center">
          © 2026 Next.js Study
        </footer>
      </body>
    </html>
  );
}

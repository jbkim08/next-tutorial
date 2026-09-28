import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Next.js Study</h1>

      <div className="mt-8 flex gap-6">
        <Link href="/" className="font-bold hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="font-bold hover:text-blue-500">
          About
        </Link>
        <Link href="/posts" className="font-bold hover:text-blue-500">
          Posts
        </Link>
        <Link href="/products" className="font-bold hover:text-blue-500">
          Products
        </Link>
      </div>
    </main>
  );
}

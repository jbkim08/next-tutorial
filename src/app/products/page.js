import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Products</h1>

      <p className="mt-4">상품 목록입니다.</p>

      <div className="mt-8 flex gap-4">
        <Link href="/" className="rounded bg-gray-200 px-4 py-2">
          Home
        </Link>

        <Link
          href="/products/new"
          className="rounded bg-black px-4 py-2 text-white"
        >
          상품 등록
        </Link>
      </div>
    </main>
  );
}

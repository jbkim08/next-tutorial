import Link from "next/link";

export default function ProductNewPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">상품 등록</h1>
      <p className="mt-4">새로운 상품을 등록합니다.</p>

      <Link href="/products" className="mt-8 inline-block text-blue-500">
        ← 상품 목록으로
      </Link>
    </main>
  );
}

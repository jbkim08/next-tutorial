import Link from "next/link";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "키보드" },
    { id: 2, name: "마우스" },
    { id: 3, name: "모니터" },
  ];
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Products</h1>

      <p className="my-4">상품 목록입니다.</p>

      {products.map((product) => (
        <Link
          className="block"
          key={product.id}
          href={`/products/${product.id}`}
        >
          {product.name}
        </Link>
      ))}

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

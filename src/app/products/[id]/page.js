import Link from "next/link";

const products = [
  { id: 1, name: "키보드" },
  { id: 2, name: "마우스" },
  { id: 3, name: "모니터" },
];

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const product = products.find((product) => product.id === Number(id));

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">상품 상세</h1>

      <p className="mt-4 text-xl">{product.name}</p>

      <p className="mt-2 text-gray-500">상품 번호: {id}</p>

      <Link href="/products" className="mt-8 inline-block text-blue-500">
        ← 상품 목록
      </Link>
    </main>
  );
}

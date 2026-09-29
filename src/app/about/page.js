import Link from "next/link";
import Counter from "../components/Counter";

export default function AboutPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">About</h1>

      <p className="mt-4">회사 소개 페이지입니다.</p>

      <Counter />

      <Link href="/" className="mt-6 inline-block text-blue-500">
        ← Home으로 돌아가기
      </Link>
    </main>
  );
}

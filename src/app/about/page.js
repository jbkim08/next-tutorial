import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">About</h1>

      <p className="mt-4">회사 소개 페이지입니다.</p>

      <Link href="/" className="mt-6 inline-block text-blue-500">
        ← Home으로 돌아가기
      </Link>
    </main>
  );
}

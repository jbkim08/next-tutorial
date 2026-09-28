import Link from "next/link";

export default function PostsPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Posts</h1>

      <p className="mt-4">게시글 목록입니다.</p>

      <Link href="/" className="mt-6 inline-block text-blue-500">
        ← Home
      </Link>
    </main>
  );
}

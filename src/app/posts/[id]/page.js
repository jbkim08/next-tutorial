import Link from "next/link";

export default async function PostDetailPage({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) {
    throw new Error("게시글을 불러오지 못했습니다.");
  }

  const post = await response.json();

  return (
    <main className="mx-auto max-w-4xl p-10">
      <p className="text-sm text-gray-400">No. {post.id}</p>

      <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>

      <p className="mt-8 leading-7 text-gray-600">{post.body}</p>

      <Link href="/posts" className="mt-10 inline-block text-blue-500">
        ← 게시글 목록
      </Link>
    </main>
  );
}

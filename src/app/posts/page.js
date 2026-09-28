import Link from "next/link";

export default function PostsPage() {
  const posts = [1, 2, 3, 4, 5];
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Posts</h1>

      <p className="mt-4">게시글 목록입니다.</p>

      <Link href="/" className="mt-6 inline-block text-blue-500">
        ← Home
      </Link>

      <div className="mt-8 flex flex-col gap-3">
        {posts.map((id) => (
          <Link
            key={id}
            href={`/posts/${id}`}
            className="text-blue-500 hover:underline"
          >
            게시글 {id}
          </Link>
        ))}
      </div>
    </main>
  );
}

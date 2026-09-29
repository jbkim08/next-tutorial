import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("게시글 데이터를 불러오지 못했습니다.");
  }

  const posts = await response.json();

  return (
    <main className="mx-auto max-w-4xl p-10">
      <h1 className="text-4xl font-bold">게시글</h1>

      <div className="mt-8">
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="border-b py-4">
            <p className="text-sm text-gray-400">No. {post.id}</p>

            <Link
              href={`/posts/${post.id}`}
              className="font-bold hover:text-blue-500"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

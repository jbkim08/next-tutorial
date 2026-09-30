"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  }

  if (loading) {
    return <main className="p-10">게시글을 불러오는 중...</main>;
  }

  return (
    <main className="mx-auto max-w-4xl p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold me-6">게시글 목록</h1>
        <Link
          href="/posts/new"
          className="rounded bg-black px-4 py-2 text-white"
        >
          글쓰기
        </Link>
      </div>

      <div className="mt-8">
        {posts.map((post) => (
          <div key={post.id} className="border-b py-5">
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

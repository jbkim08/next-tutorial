"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    if (!response.ok) {
      alert("게시글 등록에 실패했습니다.");
      return;
    }

    router.push("/posts");
  }

  return (
    <main className="mx-auto max-w-2xl p-10">
      <h1 className="text-3xl font-bold">게시글 작성</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="mb-2 block font-bold">제목</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full rounded border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-40 w-full rounded border p-3"
          />
        </div>

        <button type="submit" className="rounded bg-black px-5 py-2 text-white">
          등록
        </button>
      </form>
    </main>
  );
}

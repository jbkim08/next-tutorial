import Link from "next/link";

export default function PostsLayout({ children }) {
  return (
    <div className="mx-auto max-w-4xl p-10">
      <div className="mb-8 rounded bg-blue-50 p-5">
        <h2 className="text-2xl font-bold">게시판</h2>

        <div className="mt-3 flex gap-4">
          <Link href="/posts">게시글 목록</Link>
          <Link href="/posts/write">글쓰기</Link>
        </div>
      </div>

      {children}
    </div>
  );
}

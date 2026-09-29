import LikeButton from "@/app/components/LikeButton";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Next.js 시작하기",
    content: "Next.js 공부를 시작합니다.",
  },
  {
    id: 2,
    title: "Routing 배우기",
    content: "파일 기반 Routing을 공부합니다.",
  },
  {
    id: 3,
    title: "Dynamic Route",
    content: "동적 라우팅을 공부합니다.",
  },
];

export default async function PostDetailPage({ params }) {
  const { id } = await params;

  const post = posts.find((post) => post.id === Number(id));

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">{post.title}</h1>

      <p className="mt-4">{post.content}</p>

      <LikeButton />

      <Link href="/posts" className="mt-8 inline-block text-blue-500">
        ← 목록으로
      </Link>
    </main>
  );
}

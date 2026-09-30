// http://localhost:3000/api/posts

import { posts } from "@/app/lib/posts";

export async function GET() {
  return Response.json(posts);
}

//테스트용으로 받은 리퀘스트 객체를 그대로 되돌려줌
export async function POST(request) {
  const body = await request.json();

  if (!body.title) {
    return Response.json({ message: "title은 필수입니다." }, { status: 400 });
  }

  const nextId =
    posts.length === 0 ? 1 : Math.max(...posts.map((post) => post.id)) + 1;

  const newPost = {
    id: nextId,
    title: body.title,
    content: body.content || "",
  };

  posts.push(newPost);

  return Response.json(newPost, { status: 201 });
}

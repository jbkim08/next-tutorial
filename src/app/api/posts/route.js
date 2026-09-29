// http://localhost:3000/api/posts

const posts = [
  {
    id: 1,
    title: "Next.js 시작하기",
  },
  {
    id: 2,
    title: "App Router 공부하기",
  },
  {
    id: 3,
    title: "Route Handler 배우기",
  },
];

export async function GET() {
  return Response.json(posts);
}

//테스트용으로 받은 리퀘스트 객체를 그대로 되돌려줌
export async function POST(request) {
  const body = await request.json();

  if (!body.title) {
    return Response.json(
      {
        message: "title은 필수입니다.",
      },
      {
        status: 400,
      },
    );
  }

  const newPost = {
    id: posts.length + 1,
    title: body.title,
  };

  posts.push(newPost); //배열에 새 post 추가

  return Response.json(newPost, { status: 201 });
}

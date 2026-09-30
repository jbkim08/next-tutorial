import { posts } from "@/app/lib/posts";

//상세 페이지
export async function GET(request, { params }) {
  const { id } = await params;
  //posts 중에 id가 같은 post 객체만 골라서 리턴
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return Response.json(
      { message: "게시글을 찾을 수 없습니다." },
      { status: 404 },
    );
  }

  return Response.json(post);
}

//수정하기
export async function PUT(request, { params }) {
  const { id } = await params;

  //id와 같은 게시글을 찾음
  const index = posts.findIndex((post) => post.id === Number(id));
  //인덱스가 없는경우 에러메세지
  if (index === -1) {
    return Response.json(
      { message: "게시글을 찾을 수 없습니다." },
      { status: 404 },
    );
  }

  const body = await request.json();

  if (!body.title) {
    return Response.json({ message: "title은 필수입니다." }, { status: 400 });
  }
  //실제 post 업데이트
  posts[index] = {
    ...posts[index],
    title: body.title,
    content: body.content || "",
  };

  return Response.json(posts[index]);
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  const index = posts.findIndex((post) => post.id === Number(id));

  if (index === -1) {
    return Response.json(
      { message: "게시글을 찾을 수 없습니다." },
      { status: 404 },
    );
  }

  posts.splice(index, 1);

  return Response.json({
    message: "게시글이 삭제되었습니다.",
  });
}

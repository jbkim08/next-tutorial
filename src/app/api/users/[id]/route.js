import { users } from "../../../lib/users";

export async function GET(request, { params }) {
  const { id } = await params;

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return Response.json(
      { message: "사용자를 찾을 수 없습니다." },
      { status: 404 },
    );
  }

  return Response.json(user);
}

export async function PUT(request, { params }) {
  const { id } = await params;

  const index = users.findIndex((user) => user.id === Number(id));

  if (index === -1) {
    return Response.json(
      { message: "사용자를 찾을 수 없습니다." },
      { status: 404 },
    );
  }

  const body = await request.json();

  if (!body.name) {
    return Response.json(
      {
        message: "name은 필수입니다.",
      },
      {
        status: 400,
      },
    );
  }

  users[index] = {
    ...users[index],
    name: body.name,
  };

  return Response.json(users[index]);
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  const index = users.findIndex((user) => user.id === Number(id));

  if (index === -1) {
    return Response.json(
      {
        message: "사용자를 찾을 수 없습니다.",
      },
      {
        status: 404,
      },
    );
  }

  users.splice(index, 1);

  return Response.json({
    message: "사용자가 삭제되었습니다.",
  });
}

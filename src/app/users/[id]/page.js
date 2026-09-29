import Link from "next/link";

export default async function UserDetailPage({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  const user = await response.json();

  return (
    <main className="mx-auto max-w-4xl p-10">
      <h1 className="text-3xl font-bold">{user.name}</h1>

      <div className="mt-8 space-y-2">
        <p>Email: {user.email}</p>

        <p>Phone: {user.phone}</p>

        <p>Website: {user.website}</p>
      </div>

      <Link href="/users" className="mt-8 inline-block text-blue-500">
        ← 사용자 목록
      </Link>
    </main>
  );
}

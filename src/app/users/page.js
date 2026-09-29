import Link from "next/link";

export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <main className="mx-auto max-w-4xl p-10">
      <h1 className="text-4xl font-bold">Users</h1>

      <div className="mt-8">
        {users.map((user) => (
          <div key={user.id} className="border-b py-5">
            <h2 className="font-bold">
              {user.id}.
              <Link className="hover:text-blue-500" href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </h2>

            <p className="mt-1 text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

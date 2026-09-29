export default function Loading() {
  return (
    <main className="mx-auto max-w-4xl p-10">
      <div className="h-10 w-40 animate-pulse rounded bg-gray-200" />

      <div className="mt-8 space-y-5">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="animate-pulse border-b pb-5">
            <div className="h-3 w-16 rounded bg-gray-200" />
            <div className="mt-3 h-5 w-3/4 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </main>
  );
}

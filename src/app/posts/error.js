"use client";

export default function Error({ error, reset }) {
  return (
    <main className="p-10">
      <h2 className="text-2xl font-bold text-red-500">문제가 발생했습니다.</h2>

      <p className="mt-4">게시글을 불러오지 못했습니다.</p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded bg-black px-4 py-2 text-white"
      >
        다시 시도
      </button>
    </main>
  );
}

"use client";

export default function Error({ error, reset }) {
  return (
    <main className="p-10">
      <h2 className="text-2xl font-bold text-red-500">
        사용자 정보를 불러오지 못했습니다.
      </h2>

      <button
        onClick={() => reset()}
        className="mt-6 rounded bg-black px-4 py-2 text-white"
      >
        다시 시도
      </button>
    </main>
  );
}

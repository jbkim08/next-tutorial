import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold">🚀 Next.js Study</h1>

        <p className="mt-3 text-gray-500">Next.js 공부를 시작합니다.</p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">Task 01</h2>

          <p className="mt-2">프로젝트 생성 완료!</p>

          <button className="mt-5 rounded bg-black px-5 py-2 text-white">
            공부 시작
          </button>
        </div>
      </div>
    </main>
  );
}

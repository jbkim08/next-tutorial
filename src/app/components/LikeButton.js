"use client"; //클라이언트(브라우저) 컴포넌트로 설정함

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="rounded bg-red-500 px-4 py-2 text-white"
    >
      ❤️ 좋아요 {likes}
    </button>
  );
}
